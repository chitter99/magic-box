import { Config } from './config';
import * as path from 'path';
import * as fs from 'fs';

export type Config = {
    port: number,
    placeholderImage: {
        path: string,
        mime: string
    }
};

export function loadConfig() : Promise<Config> {
    return new Promise<Config>((resolve, reject) => {
        fs.readFile(path.resolve('config.json'), (err, data) => {
            if(err) {
                reject(err);
            }
            try {
                let config : Config = JSON.parse(data.toString('UTF-8'));
                resolve(config);
            }
            catch(ex) {
                reject(ex);
            }
        });
    });
}
