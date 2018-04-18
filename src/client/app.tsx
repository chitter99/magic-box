import * as React from 'React';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'; 
import { IndexPage } from './components/index/indexPage';
import { RewardPage } from './components/reward/rewardPage';

export const App : React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <main className='container'>
                <Route path='/index' component={ IndexPage } />
                <Route path='/reward/:key' component={ RewardPage } />
                <Redirect from='/' to='/index' />
            </main>
        </BrowserRouter>
    );
}
