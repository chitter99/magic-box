import { execFile, execSync } from 'child_process';
import * as Express from 'express';
import * as Path from 'path';
import * as Multer from 'multer';
import * as uuid from 'uuid/v1';
import { Image } from './image'; 
import { Config, loadConfig } from './config';

export class Server {
    private app : Express.Application;
    private upload : Multer.Instance;
    private images : Array<Image> = [];
    private config : Config;

    constructor() {
        this.app = Express();
        this.app.use(Express.static(Path.resolve('public')));
        this.app.set('view engine', 'pug');
        this.app.set('views', Path.resolve('views'));
        this.setupMulter();
        this.setupRoutes();
    }

    public async bootstrap() {
        await this.load();
        await this.listen();
    }

    public async load() {
        this.config = await loadConfig();
    }

    private setupMulter() {
        this.upload = Multer({
            storage: Multer.memoryStorage()
        });
    }

    private setupRoutes() {
        this.app.get('/js/bundle.js', (req, res) => {
            res.sendFile(Path.resolve('dist/client.bundle.js'));
        });
        this.app.get('/image/:key', (req, res) => {
            if(req.params.key == 'default') {
                res.type(this.config.placeholderImage.mime);
                res.sendFile(Path.resolve(this.config.placeholderImage.path));
                return;
            }
            let image = this.shiftImage(req.params.key);
            res.type(image.mime);
            res.send(image.buffer);
        });
        this.app.post('/upload', this.upload.single('image'), (req, res) => {
            try {
                let file = req.file;
                let reward = this.getNextImage();
                if(reward == null) {
                    reward = {
                        buffer: '',
                        mime: this.config.placeholderImage.mime,
                        key: 'default'
                    };
                }
                this.images.push({
                    key: uuid(),
                    mime: file.mimetype,
                    buffer: file.buffer
                });
                res.json({
                    status: 'success',
                    key: reward.key
                });
            }
            catch(ex) {
                res.json({
                    status: 'failed',
                    reason: ex
                });
            }
        });
        this.app.get('*', (req, res) => {
            res.render('index', {});
        });
    }

    public getNextImage() : Image {
        return this.images[0];
    }

    public shiftImage(key : string) : Image {
        let i = 0;
        for(let image of this.images) {
            if(image.key == key) {
                this.images.splice(i, 1);
                return image;
            }
            i++;
        }
    }

    listen() : Promise<any> {
        return new Promise<any>((resolve) => {
            this.app.listen(this.config.port, () => {
                resolve();
            });
        });
    }
}

