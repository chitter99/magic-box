import * as React from 'React';
import { RouteComponentProps } from 'react-router-dom'; 
import { RandomPhrase } from './randomPhrase';
import { Upload } from './upload'; 

export const IndexPage : React.StatelessComponent<RouteComponentProps<any>> = () => {
    return (<div>
        <h1>Share images with strangers</h1>
        <RandomPhrase></RandomPhrase>
        <Upload></Upload>
    </div>);
}

