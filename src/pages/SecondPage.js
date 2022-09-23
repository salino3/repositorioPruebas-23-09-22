import React from 'react';


 const getNombre = async (IDpost) => {
   await fetch(`http://jsonplaceholder.typicode.com/posts/${IDpost}`)
     .then((respuesta) => respuesta.json())

     .then((post) => {
       console.log(post.userId);
       fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
         .then((respuest) => respuest.json())

         .then((user) => console.log(user));
     });
 };


   getNombre(12);


const SecondPage = () => {


  return (
    <>
    
    </>
  )
}

export default SecondPage