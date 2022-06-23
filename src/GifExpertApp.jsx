
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
  
  //hook de categorias
  const [categories, setCategories] = useState(['Dragon Ball'])
  //funcion para agregar una nueva categoria de gifs
  const onAddCategory = (newCategory) => {
    //valida que el usuario no ingrese un valor repetido
    if (categories.includes(newCategory)) return;
    //agregamos los valroes entrantes al arreglo original mantieniendo valores antiguos
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Inputs */}
      <AddCategory
        //propiedad que regresa valores del hijo "AddCategory"
        onNewCategory={onAddCategory}
      />
      {/* Listado de Gifs (Gif-Item) */}
      {/*Recorremos el arreglo para renderizar el contenido del compinente GifGrid */}


      {/*recorremos el arreglo para poner enviar al componente GifGrid las propiedades*/}
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }



    </>
  )
}
