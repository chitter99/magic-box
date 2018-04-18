import * as React from 'React';
import { RouteComponentProps, Link } from 'react-router-dom'; 

export class RewardPage extends React.Component<RouteComponentProps<any>> {
    render() {
        return (<div>
            <h1>Here is your reward</h1>
            <div className='row'>
                <div className='col'>
                    <img className='img-fluid' src={ '/image/' + this.props.match.params.key } />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to='/index' className='btn'>Try again</Link>
                </div>
                <div className='row'>

                </div>
            </div>
        </div>);
    }   
}

