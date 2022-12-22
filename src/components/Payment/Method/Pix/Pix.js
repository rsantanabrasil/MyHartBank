import './Pix.css'
import pix from '../../../../images/icons/pix.png'
import step1 from '../../../../images/icons/step-1.png'
import step2 from '../../../../images/icons/step-2.png'
import step3 from '../../../../images/icons/step-3.png'

export default function Pix(){
    return (
   <div className="__contentMain">
    <div className="__containerPix">
      <div className="__contentPix">
        <div className="__iconPix">
            <img src={pix} alt="iconPix" />
        </div>
        <div className="__titlePix">Pagamento via PIX</div>
        <div className="__step_pix">
            <img src={step1} alt="option" />
            <h1>Copie o código abaixo e faça o pagamento pelo seu banco</h1>
        </div>
        <div className="__randomKey">
            <h1>Chave Aleatoria</h1>
           <form className="_randomKey" ><h1>{"RNEC*K1{0+tZl%[gk5J5=_CMG#q}F%RANU7(%KRctMf}"}</h1></form>
        </div>
        <div className="__buttonCopy_pix">
            <button className="_buttonCopy_pix">COPIAR</button>
        </div>
        <div className="__step_2_pix">
            <div className="__confirmPayment">
              <img src={step2} alt="step_2" />
              <h1>Confirme as Informações de Pagamento </h1>
            </div>  
              <div className="infoPayment_pix">
                <h1>Nome:</h1>
                <h2>MyhartBank</h2>
              </div>
            <div className="infoPayment_pix">
                <h1>CNPJ:</h1>
                <h2>41000245/47</h2>
            </div>
        </div>
        <div className="__step_pix">
            <img src={step3} alt="step_3" />
            <h1>Aguarde a Confirmação do Pagamento e Ativação da Comunidade</h1>
        </div>
      </div>
   </div>
     <div className="__buttonFinishPix">
       <button className="_buttonFinishPix">
         Finalizar       
       </button>
     </div>
        
</div>
    )
}