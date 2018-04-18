import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

enum UploadStatus {
    WAITING,
    UPLOADING,
    DONE,
    ERROR
}

type UploadState = {
    uploadStatus : UploadStatus
    uploadError? : string
    imageKey? : string
}

type UploadResponse = {
    status : string
    key? : string
    reason? : string 
}

export class Upload extends React.Component<{}, UploadState> {
    constructor(props) {
        super(props);

        this.state = {
            uploadStatus: UploadStatus.WAITING
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.onRetryClick = this.onRetryClick.bind(this);
    }

    onFileChange(e : React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            uploadStatus: UploadStatus.UPLOADING
        });
        let form = new FormData();
        form.append('image', e.target.files[0]);

        axios.post<UploadResponse>('/upload', form).then((response) => {
            if(response.data.status == 'failed') {
                this.setState({
                    uploadStatus: UploadStatus.ERROR,
                    uploadError: response.data.reason
                });
                return;
            }
            this.setState({
                uploadStatus: UploadStatus.DONE,
                imageKey: response.data.key
            });
        }).catch((ex) => {
            console.error(ex);
            this.setState({
                uploadStatus: UploadStatus.ERROR,
                uploadError: 'Exception occured, view console for details.'
            });
        });
    }

    onRetryClick() {
        this.setState({
            uploadStatus: UploadStatus.WAITING,
            uploadError: null
        });
    }

    render() {
        let content;
        switch(this.state.uploadStatus) {
            case UploadStatus.WAITING:
                content = (<div>
                    <h1>Upload an Image</h1>
                    <p>After you upload your own image. You will see a image from a stranger.</p>
                    <input type='file' name='file' onChange={ this.onFileChange } />
                    </div>);
                break;
            case UploadStatus.UPLOADING:
                content = (<div>
                    <h1>Uploading your image...</h1>
                    <p>Be patient, this will not take long.</p>
                    </div>);
                break;
            case UploadStatus.DONE:
                content = (<div>
                    <h1>Image uploaded</h1>
                    <Link to={ '/reward/' + this.state.imageKey } className='btn'>Show me what you got!</Link>
                    </div>);
                break;
            case UploadStatus.ERROR:
                content = (<div>
                    <h1>Something went wrong!</h1>
                    <p>{ this.state.uploadError }</p>
                    <a onClick={ this.onRetryClick } className='btn btn-link'>Retry</a>
                    </div>);
                break;
        }
        return <div className='jumbotron'>{ content }</div>
    }
}
