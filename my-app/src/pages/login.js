import React, { Component, useEffect, useState } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const baseUrl = 'http://localhost:3306/auth/login';






class login extends Component {
    state = {
        form: {
            email: '',
            password: '',
        },
        userLogged: false



    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });

    }

    iniciarSesion = async () => {

        const resp = await axios.post(baseUrl,
            {
                email: this.state.form.email,
                password: this.state.form.password
            }



        )
        if (resp.status == 200) {
            this.setState({ userLogged: true })
            window.localStorage.setItem('token', resp.data.token)
            window.localStorage.setItem('userid', resp.data.userid)

            window.location.replace("/home");
        }
    }




    render() {
        return (
            <div className="form-login">

                {this.state.userLogged == true && (
                    <p>Inicio sesion exitosamente</p>
                )
                }

                <h4>Inicio de sesion</h4>

                <br />
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="username"
                    placeholder="Ingrese su email"
                    onChange={this.handleChange}
                />



                <br />
                <input

                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    onChange={this.handleChange}
                />

                <div>


                    <input className="button" onClick={() => this.iniciarSesion()} type="submit" value="Iniciar sesion"></input>

                    <p><a href="/" /> ¿No tienes cuenta?</p>

                </div>








            </div>)
    }
}







export default login;