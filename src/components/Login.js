import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import { login } from '../store/reducers/postReducer';
// import { createBrowserHistory } from 'history';
// export const browserHistory = createBrowserHistory();



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };

  }

  onSubmit=(e)=> {
    e.preventDefault();


     let { email, password } = this.state;

       this.props.login(email, password);

      this.setState({
         email: '',
         password: ''
       });

//this.props.history.push('/list')
  }

  componentDidUpdate() {
    if(this.props.isLoginSuccess){
      this.props.history.push('/list')
    }
    }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;

    return (
    <div className='container'>
      <form className="col s12" name="loginForm" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="input-field col s12">

            <input type="email" name="email" placeholder="email" onChange={e => this.setState({email: e.target.value})} value={email}/>

          </div>

          <div className="input-field col s12">

            <input type="password" placeholder="email" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>

          </div>
        </div>

        <input class="waves-effect waves-light btn" type="submit" value="Login" />

        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
      </form>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
