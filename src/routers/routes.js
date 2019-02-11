import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import widget from '../components/widget'



const AppRouter = () => (
  <BrowserRouter >
    <div >
      <ScrollToTop>
        <Switch >
        
        {/* chemin de la page d'accueil */}
        <Route path="/" component={widget} exact={true} />   
          
        </Switch>
      </ScrollToTop>

    </div>
  </BrowserRouter>
);

export default AppRouter;