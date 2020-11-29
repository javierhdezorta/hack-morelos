import React from 'react';
import login from '../fonts/explorador.png'
import Image from 'react-image-resizer';
import {withRouter} from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password:''
        };   

        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.goHome = this.goHome.bind(this)      
    }

    handleUser(event) {
        this.setState({user: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    goHome() {
        this.props.history.push('/welcome')
      }
     
    render() {
        return (
            <div>
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <Image
                        img src={login} alt="cur" class="center"
                        height={100}
                        width={150}
                        style={{ alignSelf: 'center' }}
                    />
                </div>
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} >
                    <form>
                        <label>
                            Usuario: 
                            <input type="text" value={this.state.user} onChange={this.handleUser} />
                        </label>
                        <br/>
                        <label>
                            Contraseña: 
                            <input type="text" value={this.state.password} onChange={this.handlePassword} />
                        </label>
                        <br/>
                        <button onClick={this.goHome}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);