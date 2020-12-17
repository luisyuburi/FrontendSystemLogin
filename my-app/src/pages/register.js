import React, { Component } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const baseUrl = 'http://localhost:3306/users';


class register extends Component {
    state = {
        form: {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
        },
        userCreate: false


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
        await axios.post(baseUrl,
            {
                nombre: this.state.form.nombres,
                apellido: this.state.form.apellidos,
                email: this.state.form.email,
                password: this.state.form.password
            })
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    this.setState({ userCreate: true })
                    window.location.replace("/login");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="form-register">

                {this.state.userCreate == true && (
                    <p>Usuario creado exitosamente</p>
                )
                }

                <h4>Formulario de registro</h4>

                <br />
                <input

                    type="text"
                    className="form-control"
                    name="nombres"
                    id="nombres"
                    placeholder="Ingrese su nombre"
                    onChange={this.handleChange}
                />
                <br />
                <input

                    type="text"
                    className="form-control"
                    name="apellidos"
                    id="apellidos"
                    placeholder="Ingrese su apellido"
                    onChange={this.handleChange}
                />
                <br />
                <input

                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
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
                    <p>Estoy de acuerdo con los <a href="google.com" /> Términos y Condiciones </p>

                    <input className="button" onClick={() => this.iniciarSesion()} type="submit" value="Registrar cuenta"></input>

                    <p><a href="google.com" /> ¿Ya tienes cuenta?</p>

                </div>








            </div>)
    }
}






export default register;