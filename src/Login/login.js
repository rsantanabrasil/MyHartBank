import api from '../BaseUrl/baseUrl'
import React, { useState, useEffect } from 'react'

export default function Login(){
    
    const [user, setUser] = useState();

    useEffect(() => {
      
      api
        .post("/api/login", 
        { 
            "email":"akashare-creationgraphics@outlook.com",
            "password":132546
        
        }
        ).then((response) => setUser(response.data))
          .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    console.log(user, "user ")
    return (
     <>
     
     </>

    )
}
