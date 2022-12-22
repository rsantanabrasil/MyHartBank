import React from "react"
import iconHistory1 from "../../images/iconHistory-1.svg"

import "./index.css"
import graphic from "../../images/graphic-3.svg"
import eye from "../../images/eye.svg"
import MenuBar from "../MenuBar"

export default function Financeiro() {
    return (
        <div className="__container">
         <div className="__menuBar">
            <MenuBar />
         </div>
         <div className="__cardBalanceIncome">
            <div className="__myBalance">
                <div className="_myBalance">
                    <div className="__titleMyBalance">
                    Meu Saldo
                    </div>
                    <div className="__balance">
                        <div className="__communityStart">
                            <h1>Comunidade: START</h1>
                            <h1>Rendimento: 105% do CDI</h1>
                        </div>
                        <div className="__currentBalanceFinancial">
                            <h1>Saldo Atual</h1>
                            <div className="balanceFinancial">
                               <h2>R$ 2.850,75</h2>
                               <img src={eye} alt="" /> 
                            </div>
                            
                        </div>
                        <div className="__communityIncome">
                              <h1>Rendimentos COMUNIDADE</h1>
                              <h2>R$ 1.500,50</h2>
                        </div>
                        <div className="__cashBackFinancial">
                              <h1>Cashback</h1>
                              <h2>R$ 350.60</h2>
                        </div>
                        <div className="__buttonFinancial">
                            <button><h1>SOLICITAÇÕES</h1></button>
                            <button><h1>SOLICITAR SAQUE</h1></button>
                        </div>
                    </div>
                    
                </div>
                

                <div className="__financialMovements">
                    <div className="__titleFinancial">
                        <h1>Historico de Recompensas</h1>
                    </div>
                   <table className="__cardTitleFinancial">
                       
                            <td className="_titleFinancial">Origem</td>
                            <td className="_titleFinancial">Tipo</td>
                            <td className="_titleFinancial">Data</td>
                            <td className="_titleFinancial">Valor</td>
                       
                   </table>
                   <div className="_test">
                         <table>
                   <tr>
                       
                       <td className="_imgTest"><img src={iconHistory1} alt="" /></td>
                      <td className="_imgTest"><img src={iconHistory1} alt="" /></td>
                      <td className="_imgTest"><img src={iconHistory1} alt="" /></td>
                      <td className="_imgTest"><img src={iconHistory1} alt="" /></td>
                      <td className="_imgTest"><img src={iconHistory1} alt="" /></td>

                      
                  </tr>
                   </table>
                    <table className="__tableFinancial">

                 
                     <tr>
                        <td className="__originFinancial">Fiorgio Restaurant</td>
                        <td className="__originFinancial">Fiorgio Restaurant</td>
                        <td className="__originFinancial">Fiorgio Restaurant</td>
                        <td className="__originFinancial">Fiorgio Restaurant</td>
                        <td className="__originFinancial">Fiorgio Restaurant</td>
                     </tr>

                     <tr>
                       
                        <td className="__typeFinancial">Marketplace</td>
                        <td className="__typeFinancial">Marketplace</td>
                        <td className="__typeFinancial">Marketplace</td>
                        <td className="__typeFinancial">Marketplace</td>
                        <td className="__typeFinancial">Marketplace</td>
                     </tr>


                     <tr>
                        <td className="__dateFinancial">15 Dec 2022</td>
                        <td className="__dateFinancial">15 Dec 2022</td>
                        <td className="__dateFinancial">15 Dec 2022</td>
                        <td className="__dateFinancial">15 Dec 2022</td>
                        <td className="__dateFinancial">15 Dec 2022</td>
                     </tr>
                     <tr>
                        <td className="__valueFinancial">R$140.99</td>
                        <td className="__valueFinancial">R$140.99</td>
                        <td className="__valueFinancial">R$140.99</td>
                        <td className="__valueFinancial">R$140.99</td>
                        <td className="__valueFinancial">R$140.99</td>
                     </tr>
                    </table>
                   </div>
                  
                </div>



          </div>
          <div className="__myIncome">
            <div className="__titleMyIncome"><h1>Meus Rendimentos</h1></div>
             <div className="__investedExprectation">
                 <div className="__totalInvested">
                <h1>Total Investido</h1>
                <div className="__valueInvested">
                    <h1>R$ 35.000,00</h1>
                    <h3>2.3%</h3>
                </div>
                <h2>Valor disponivel para Saque: R$ 22.000,00</h2>
              </div>

              <div className="__yieldExpectation">
                <div className="_yieldExpectation">
                  <h1>Expectativa de Rendimento a.m</h1>
                  <h1>Comunidade</h1>
                  <h1>CDI</h1>
                </div>
                <div className="__valueInvested">
                    <h1>R$ 1.350,00</h1>
                    <h2>2.3%</h2>
                </div>
                <div className="__titleValueInvested">
                 <h1>Esse valor é uma previsão que pode sofrer variação.</h1>
                 <h2>Saiba Mais</h2>
                </div>
              </div> 
             </div>
            
              <img src={graphic} alt="" />
          </div>
         </div>
          





    </div>
    )
}