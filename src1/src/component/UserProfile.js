import React , {Component} from 'react';
import AuthService from '../Authentication/AuthService';
import axios from 'axios';
import swal from 'sweetalert';
// import $ from 'jquery';


class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            useremail : '',
        }

        this.Auth = new AuthService();
    }

    componentWillMount(){
        if(!this.Auth.loggedIn())
        this.props.history.replace('/');
    }
    

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');

        axios.get('http://localhost:3100/api/profile').then((res)=>{
          this.setState({
            username: res.data.username, 
            useremail: res.data.useremail
          })

          
      })
    }

    logout(){
        axios.get('http://localhost:3100/api/signout').then((res)=>{
            localStorage.clear();
            if(res.data.status){
                swal("Successful",
                `${res.data.message}`,
                "success",
                ).then((d)=>{
                    if (d) return this.props.history.replace('/');
                })
            }
        });
    }

    render(){
        return (
            <div>
                <div className="headline">
                 <h3 style ={{marginLeft : 50 , marginTop: 30}}>Your Profile</h3>
                </div>
                <div className="row" style={{ marginTop : 30 , marginLeft : 50}}>
                  <div className="col-xl-4">
                    <input type = "name" className="with-border" value ={this.state.username} readOnly/>
                  </div>
                </div>
                <div className="row" style={{ marginTop : 30 , marginLeft : 50}}>
                  <div className="col-xl-4">
                   <input type="email" className="with-border" value={this.state.useremail}   readOnly />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="submit-field" style={{marginLeft : 50, marginTop : 20}}>
                    <button className="btn btn-success" onClick= {()=>this.logout()}>Logout</button>
                 </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;