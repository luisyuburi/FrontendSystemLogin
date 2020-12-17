import React from 'react';
import axios from 'axios';


const Home = (props) => {
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        getUser();
    },[]);
    const getUser = async () => {
        const userid = localStorage.getItem('userid')
        const token = localStorage.getItem('token')

        const resp = await axios.get('http://localhost:3306/users/' + userid, {
            headers: {
                auth: token
            }
        })

        console.log(resp)

        if (resp.status == 200) {
            setUser(resp.data)

        }
    }
    const logout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userid')
        window.location.replace("/");
    } 
    return (
        <div>
            {!user && (
                <div>Cargando</div>
            )}
            {user && (
                <div>
                    {user.nombre}
                    <br / >
                    {user.apellido}
                    <br / >
                    {user.email}
                </div>
            )}
            <button onClick={logout}>Cerrar sesion</button>
        </div>
    )
}

export default Home;