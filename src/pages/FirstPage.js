import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';


const FirstPage = () => {


    const [first, setFirst] = useState();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [email, setEmail] = useState();

const llamadaAPI = async () => {
 const myapi = await fetch ("https://jsonplaceholder.typicode.com/users")
  const response = await myapi.json()
  setFirst(response) }

  useEffect(() => {
 llamadaAPI();

  }, [])
  

//
const handleClick = (event) => {
   event.preventDefault();
   const Nombre = event.target.nombre.value;
   const Apellido = event.target.apellido.value;
   const Email = event.target.email.value;
   const Password = event.target.password.value;
 console.log('los datos son: ',`${Nombre}  ${Apellido}  ${Email}  ${Password}`)
//
   setNombre(event.target.nombre.value);
   setApellido(event.target.apellido.value);
   setEmail(event.target.email.value);
 document.getElementById("myForm").reset();
}



  return (
    <>
      <div className="divBig ">
        <div className="  divForm enlinea">
          <form id="myForm" onSubmit={handleClick}>
            <input
              type="text"
              name="nombre"
              placeholder="Escriba su nombre.."
              required
            />
            <input
              type="text"
              name="apellido"
              placeholder="Escriba su apellido.."
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Escriba su email.."
              required
            />
            <input
              type="password"
              autoComplete='"current-password"'
              name="password"
              placeholder="Escriba su password.."
              required
            />
            <br /> <br />
            <button className="btn btn-warning m-2 mb-3" type="submit">
              {" "}
              Rellenar sidebar
            </button>
          </form>
        </div>
        <div className="nav divFirst enlinea ">
          <h5 style={{ color: "red" }}>Desplegando llamada API</h5>
          {!first
            ? "Cargando.."
            : first.map((item, index) => (
                <div key={index}>
                  <p>{item.name}</p> <br /> <br />
                </div>
              ))}
        </div>
        <div className="nav enlinea">
          <Sidebar nombre={nombre} apellido={apellido} email={email} />
        </div>
      </div>
    </>
  );
 
}
export default FirstPage












