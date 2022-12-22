import './index.css'
import icon_2 from '../../images/Icon-2.svg'
import icon_3 from '../../images/Icon-3.svg'
import icon_4 from '../../images/Icon-4.svg'
import icon_5 from '../../images/Icon-5.svg'
import icon_6 from '../../images/Icon-6.svg'
import icon_8 from '../../images/Icon-8.svg'
import icon_9 from '../../images/Icon-9.svg'
import logo from '../../images/Logo.png'
import number from '../../images/Number.svg'
import path from '../../images/Path.svg'
import { SidebarData } from '../MenuBar/SidebarData'
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi"
import api from "../../BaseUrl/baseUrl"

export default function MenuBar({modalIsOpen ,setModalIsOpen, setMenuOpen}) {
const navigate = useNavigate();
//<AiOutlineClose onClick={() => setModalIsOpen(true)}


  
//// Login Product 
useEffect(() => {
  LoginUser();
}, []);

const [dataUser, setDataUser] = useState(); 
const [tokenResponse, setTokenResponse] = useState();

function LoginUser(){ 
  api
  .post("/api/login", 
  { 
      "email":"akashare-creationgraphics@outlook.com",
      "password": "310204",
      "keys":[
         [4,2],[3,7],[0,5],[8,1],[6,9]
    ]
  }
  ).then((response) => localStorage.setItem("tokenUser", response.data.token))
  //setTokenResponse(response.data.token)) 
    .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
  fetchUser();
}

const tkuser = localStorage.getItem("tokenUser")
console.log(tkuser)

const options = {
  "headers": {
    "Accept": "application/json",
    "Content-Length": "0",
    "Authorization": `Bearer ${tkuser}`
  }
}; 


async function fetchUser() {
  await api
      .get('/api/user', 
        options)
      .then(response => {
          setDataUser(response.data);
        }
      )
      .catch(err => console.error(err));
}

    return (
        <>
        <div className="__divisionOptions">
           <div className="__options">
                   <div className="__logo">
                       <img src={logo} alt="" onClick={()=> navigate("/")} />
                   </div>
                   <div className="__nameUser">Olá {dataUser?.name}
                      <br/>Seu ID: {dataUser?.id}</div>
               </div>
              <div>
               {SidebarData.map((item, index) => {
                 return (
                   <div key={index} className="__option">
                     <Link to={item.path}>
                       <div className="__linkOption">
                         <div className="__iconOption">
                         {item.icon}
                          </div>
                      
                         <div className="__optionTitle">
                         {item.title}
                         </div>
                       </div>
                      
                     </Link>
                   </div>
                 )
               })}
                 
                  <div className="__option">
                    <div><img src={icon_2} alt="" /></div>
                    <div className="__optionTitle">Pedidos</div>
                    <div className="__notify"><img src={number} alt="" /></div>
                  </div>
                  <div className="__option">
                    <div><img src={icon_8} alt="" /></div>
                    <div className="__optionTitle">Produtos</div>
                  </div>
                  <div className="__option">
                    <div><img src={icon_3} alt="" /></div>
                    <div className="__optionTitle">Comunidade</div>
                    <div className="__arrowOption"><img src={path} alt="" /></div>
                    <div></div>
                  </div>
                  <div className="__option">
                    <div><img src={icon_4} alt="" /></div>
                    <div className="__optionTitle">Mensagens</div>
                  </div>
                  <div className="__option">
                    <div><img src={icon_5} alt="" /></div>
                    <div className="__optionTitle">Pagamentos</div>
                  </div>
                  <div className="__option">
                   <div><img src={icon_6} alt="" /></div>
                    <div className="__optionTitle">Configuraçãos</div>
                  </div>
                  <div className="__option">
                  <div><img src={icon_9} alt="" /></div>
                    <div className="__optionTitle">Sair</div>
                  </div>
               
              </div>
           </div> : 
             <div>
              <HiMenu size={30} onClick={() => setMenuOpen(false)} />
             </div>
        </>

    )
}