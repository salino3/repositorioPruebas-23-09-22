import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css'
import { useForm } from "react-hook-form";


const StartPage = () => {

    const navigate = useNavigate();

  const { register,  handleSubmit , formState:{ errors }} = useForm();
//
const onSubmit = (data) => {
  navigate('/login')
  console.log(data);}

  return (
    <>
     <h3 className='h3Login'>Login Page</h3>
      <div className="formStartPage">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>minimo 4 caracteres, maximo 20</label> <br />
          <input
            {...register("nombre", {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
            type="text"
            placeholder="Escriba su nombre"
            name="nombre"
            required
          />
          <br />
          {errors.nombre && (
            <p style={{ color: "red" }}>Rellene correctamente este campo</p>
          )}
          <label>Escriba su email</label> <br />
          <input
            {...register("email", {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
            type="email"
            placeholder="Escriba su email"
            name="email"
            autoComplete="username"
            required
          />
          <br />
          <label>minimo 6 caracteres, maximo 20</label> <br />
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            type="password"
            placeholder="Escriba su password"
            name="password"
            autoComplete="current-password"
            required
          />{" "}
          <br />{" "}
          {errors.password && (
            <p style={{ color: "red" }}>Rellene correctamente este campo</p>
          )}
          <button
            type="submit"
            className="btn btn-dark btn-rounded btn-lg mt-5 btnStartPage"
          >
            Enter
          </button>
        </form>
      </div>
    </>
  );
}

export default StartPage