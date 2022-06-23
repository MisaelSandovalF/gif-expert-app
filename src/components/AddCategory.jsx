import { useState } from "react"


//funcion que almacena en un hook el valor del input
export const AddCategory = ({ onNewCategory}) => {
    //hook
    const [inputValue, setInputValue] = useState();
    //funcion que gurada el texto del input dentro del hook
    const onInputChange = ({ target }) => {
            //toma el valor del input y lo envia al hook de inputValue
            setInputValue(target.value);
        
       
    }
    //funcion para renderizar los valores 
    const onSubmit = (event) => {
        //evita el refresh de la pagina
        event.preventDefault();
        //valida que el input tenga por lo menos dos valores apra que pueda ser agregado
        if(inputValue.trim().length <= 1) return;
        //retorna el valor al componente padre validando espacios
        onNewCategory( inputValue.trim() );
        //limpia el input
        setInputValue('');
    }

    return (
        //formulario donde se asigna valores del input
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>


    )
}
