import React, { useState } from "react"
import './index.css'
import cartao_1 from '../../images/cartao-1.png'
import cartao_2 from '../../images/cartao-2.png'
import cartao_3 from '../../images/cartao-3.png'
import cartao_4 from '../../images/cartao-4.png'
import cartao_5 from '../../images/cartao-5.png'
import cartao_6 from '../../images/cartao-6.png'
import MenuBar from '../../components/MenuBar/index'


function Afiliado() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
    return (
        <div className="__container">
          <div className="__menuBar">
            <MenuBar />
          </div>

            <div className="__division-card">
                <div className="__title">
                    <h1>ESCOLHA A SUA COMUNIDADE</h1>
                    <h3>Escolha em qual comunidade você deseja fazer parte.</h3>
                </div>
                <div className="__cards">
                    <div className="__cardsDivision">
                       <div className="__card-MyHart"><img src={cartao_1} alt=""  width="300" height="200"  /></div>
                       <div className="__card-MyHart"><img src={cartao_2} alt=""  width="300" height="200" /></div>
                       <div className="__card-MyHart"><img src={cartao_3} alt=""  width="300" height="200"/></div>
                    </div>
                    <div className="__cardsDivision">
                       <div className="__card-MyHart"><img src={cartao_4} alt=""  width="300" height="200" /></div>
                       <div className="__card-MyHart"><img src={cartao_5} alt=""  width="300" height="200"/></div>
                       <div className="__card-MyHart"><img src={cartao_6} alt=""  width="300" height="200"/></div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Afiliado