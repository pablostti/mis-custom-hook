import React, { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {


    
    const isMounted = useRef(true)  // mantiene la referencia cuando el hook esta vivo o cuando el componente que lo usa sigue montado
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {

            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

            setState({ data: null, loading: true, error: null})

            fetch(url)
                .then( resp => resp.json())
                .then( data => {

                        if(isMounted.current){ // solo si esta el componente esta montado hace el setState
                            setState({
                                loading: false,
                                error: null,
                                data
                            })
                        } else {
                            console.log("setState no se llamo")
                        }
                   
                   
                })
       
    }, [url])

    return state;
}
