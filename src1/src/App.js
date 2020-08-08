import React,{Component} from 'react';
// import {BrowserRouter as  Router, Route} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

// import signin from './component/signin';
// import signup from './component/signup';
// import UserProfile from './component/UserProfile';



class App extends Component {
    render(){
      return(
        <div className = 'App'>
          <div className  = 'App-header'>
            <div className = 'App-link'>
          <img className = 'App-logo' src = {logo} height = '600px' alt = '' />
          <h4>Hello World</h4>
          </div>
          </div>
        </div>
      )
    }
}

export default App;




// import React, { Component } from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// import './App.scss';

// const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// // Containers
// const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// // Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const ResetPassword = React.lazy(() => import('./views/Pages/ResetPassword/ResetPassword.js'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

// class App extends Component {

//   render() {
//     return (
//       <HashRouter>
//           <React.Suspense fallback={loading()}>
//             <Switch>
//               <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
//               <Route exact path="/resetPassword/:otp" name="Reset Password Page" render={props => <ResetPassword {...props}/>} />
//               <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
//               <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
//               <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
//             </Switch>
//           </React.Suspense>
//       </HashRouter>
//     );
//   }
// }

// export default App;
