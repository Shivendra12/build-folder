import React, {Component} from 'react';
import validator from 'validator';
import axios from 'axios';
import swal from 'sweetalert';

class signup extends Component {
    constructor(props){
        super(props);

        this.state= {
            name : {value : '', isValidate:true, message : ''},
            email : {value : '', isValidate:true, message :''},
            password : {value : '', isValidate:true, message:''}
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.register = this.register.bind(this);
    }

    handleChangeName(event) {
        const {name , value} = event.target;
        let state = this.state;
        state[name].message = ''
        state[name].value = value;
        this.setState(state);
    };

    handleChangeEmail(event){
        const {name,value} = event.target;
        let state = this.state;
        state[name].message = ''
        state[name].value = value;
        this.setState(state);
    };


    handleChangePassword(event){
        const{name, value} = event.target;
        let state = this.state;
        state[name].message = ''
        state[name].value = value;
        this.setState(state);
    };

    validate(){
        let state = this.state;
        if(validator.isEmpty(state.name.value)){
            state.name.isValidate = false;
            state.name.message = "Name Cannot Be Blank";
            this.setState(state);
            return false;
        }

        if(validator.isEmpty(state.email.value)){
            state.email.isValidate = false;
            state.email.message = "E-mail Cannot Be Blank";
            this.setState(state);
            return false;
        }

        if(!validator.isEmail(state.email.value)){
            state.email.isValidate = false;
            state.email.message = "Invalid E-mail";
            this.setState(state);
            return false;
        }


        if(validator.isEmpty(state.password.value)){
            state.password.isValidate = false;
            state.password.message = "Password Cannot Be Blank";
            this.setState(state);
            return false;
        }
        return true;
    }

    register(event){
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            let obj = {}
            obj.name = this.state['name'].value;
            obj.email = this.state['email'].value;
            obj.password = this.state['password'].value;

            axios.post('http://localhost:3100/api/signup',obj).then((response)=>{
                if(response.data.status === true){
                    swal("Successful",
                    `${response.data.message}`,
                    "success",
                    ).then((d)=>{
                        if(d) return this.props.history.replace('/')
                    })
                }
                else{
                    swal ("Error",
                    `${response.data.message}`,
                    "error",
                    ).then((d)=>{
                        if(d) return this.props.history.replace('/signup')
                    })
                }
            })
        }
    }

    signin(){
        return this.props.history.push('/');
    }

    render(){
        const state = this.state;
        return(
            <div >
              <h2 style = {{marginLeft:80}} >Registration Info</h2>
                <div className="container">
                    <form onSubmit = {this.register}>
                    <div className="form-group">
                        <input type="name" className="form-control" name="name" value = {state.name.value} onChange = {this.handleChangeName} placeholder="Enter name" />
                        <div style={{ fontSize: 13, color: "red" }}>
                         {state.name.message}
                        </div>
                       </div>
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" value={state.email.value} onChange = {this.handleChangeEmail} placeholder="Enter email" />
                        <div style={{ fontSize: 13, color: "red" }}>
                         {state.email.message}
                        </div>
                       </div>
                      <div className="form-group">
                        <input type="password" className="form-control" name="password" value={state.password.value} onChange = {this.handleChangePassword} placeholder="Enter password" />
                        <div style={{ fontSize: 13, color: "red" }}>
                         {state.password.message}
                        </div>
                      </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                     </form>
                    <p style = {{marginTop :10}} >Already You Have An Account ?</p>
                <button type="submit" className="btn btn-success" onClick = {this.signin.bind(this)}>Login</button>
                  </div>
            </div>
        )
    }
};

export default signup;