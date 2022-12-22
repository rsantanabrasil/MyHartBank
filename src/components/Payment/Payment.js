import './Payment.css'
import check from "../../images/icons/checkbox.svg"
import edit from "../../images/icons/edit.svg"
import React, {useEffect, useState} from "react"
import ModalPix from '../Payment/Method/Pix/Pix'
import ModalTed from '../Payment/Method/Ted/Ted'
import api from '../../BaseUrl/baseUrl'

import axios from "axios"

export default function Payment({confirmPay}) {

  const [optionValue, setOptionValue] = useState(); 
  
  const changeOption = (newState) => {
    setOptionValue(newState)
  }

const tkuser = localStorage.getItem("tokenUser");
console.log(tkuser, "tk-user")
const [dataPerson, setDataPerson] = useState();
const [idPerson, setIdPerson] = useState();

useEffect(() => {
  fetchPerson();
}, [])

  const options = {
    "headers": {
      "Accept": "application/json",
      "Content-Length": "85",
      //"Authorization": `Bearer 137|yIA4IjQujmmkz8Uha3QnQoGkbn13CbgngpZgZcen`
      "Authorization": `Bearer ${tkuser}`
    }
  };
   
  async function fetchPerson() {
    await api
        .get('/api/person', 
          options)
        .then(response => {
          console.log(response.data.result, "response --- data ")
            setDataPerson(response.data.result);
            setIdPerson(response.data.result.id)
          }
        )
        .catch(err => console.error(err));
  }


/// alterar dados 
const [editData, setEditData] = useState();

 var options2 = {
    method: 'POST',
    url: `https://api.dkawasaka.com/api/person/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tkuser}`
    },
    data: {}
  };
 //shipping_first_name: `${dataPerson.shipping_first_name}`
 async function EditShipping() {
 await axios.request(options2).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  }

  return (
    <>
   
    {
      optionValue == 'option1' && confirmPay == true ?  <ModalPix />
      : optionValue == 'option2' && confirmPay == true ? 
      <ModalTed />
      :
     
      <div className="cart-payment">
        <div className="title-payment">
          <h1><b>--- Pagamento</b></h1>
          <h2><b>Informações de Pagamento</b></h2>
        </div>
        
        <div className="model-payment">
          <h1>Forma de Pagamento</h1>
         
          <select 
           className="__selectOption-payment"
           onChange={(event) => changeOption(event.target.value)}
           value={optionValue}           
           >
              <option value="">Selecione uma Opção</option>
              <option value="option1">PIX</option>
              <option value="option2">TED</option>
             
          </select>
        </div>
        <div className="description-payment">
           OBS:
          <h1>Pagamentos via boleto levam até 3 dias utéis para ser compensados</h1>
        </div>
        <div className="input-payment-data">
          <h1>Nome Completo</h1>
          <form className="__form-payment">
          {dataPerson?.shipping_first_name} {dataPerson?.shipping_last_name}
          <div><img src={check}/> <img src={edit} onClick={() => EditShipping()}/>
          </div></form>
        </div>
        <div className="input-payment-data">
          <h1>CPF</h1>
          <form className="__form-payment">
          {dataPerson?.doc_fiscal}
          <div><img src={check}/> <img src={edit} onClick={() => EditShipping()}/>
          </div></form>
        </div>
        <div className="input-payment-data">
          <h1>Endereço de Entrega</h1>
          <form className="__form-payment">
          {dataPerson?.shipping_address_1} {dataPerson?.shipping_number} {dataPerson?.shipping_city}
            <div><img src={check}/> <img src={edit} onClick={() => EditShipping()}/></div>
             </form>
         
        </div>

        </div>
      
    }
     </>   
    )
}


