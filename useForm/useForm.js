import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    
    //? Se encarga de manegar el estado inicial de un formulario con su handleInputChange

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    // retorna el estado nuevo y la funcion que agrega los valores en el form.
    return [ values , handleInputChange, reset]
}
