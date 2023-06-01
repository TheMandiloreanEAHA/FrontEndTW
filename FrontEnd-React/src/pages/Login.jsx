import { Component } from 'react';
import '../styles/Login.css';
import axios from 'axios';
// import Cookies from 'universal-cookie';

// const baseUrl = "http://localhost:3001/usuarios";
const baseUrl = "https://intellidoorbackend-production.up.railway.app/login";
// const cookies = new Cookies();

class Login extends Component{ 
    state={
        form:{
            email: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        // await axios.get(baseUrl, {params: {username: this.state.form.username, password:(this.state.form.password)}})
        console.log(this.state.form.email)
        console.log(this.state.form.password)

        let email = this.state.form.email;
        let pwsd = this.state.form.password;

        
         await axios.post(baseUrl, {email: email, password: pwsd})
        //  console.log(this.state)
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                console.log(response);
                var respuesta = response[1];
                if(respuesta.admin == 1){
                    window.location.href="./homeAdmin";
                }else{
                    window.location.href="./home";
                }

                // cookies.set('id', respuesta.id, {path:'/'});
                // cookies.set('nombre', respuesta.nombre, {path:'/'});
                // cookies.set('apellidos', respuesta.apellidos, {path:'/'});
                // cookies.set('username', respuesta.username, {path:'/'});
                // alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellidos}`);
                // if(cookies.get("username")=="Admin"){
                //     window.location.href="./homeAdmin";
                // }else{
                //     window.location.href="./home";
                // }

            }//else{
            //     alert("El usuario o contraseña no son correctos");
            // }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    // componentDidMount(){
    //     if (cookies.get("username")) {
    //         window.location.href="./home";
    //     }
    // }

    render(){
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input type="text" className="form-control" name="email" onChange={this.handleChange}/>
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input type="password" className="form-control" name="password" onChange={this.handleChange}/>
                        <br />
                        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar sesión</button>
                    </div>
                </div>
                
            </div>
        );
    }
 }
 export default Login;