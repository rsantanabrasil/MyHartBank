import React, { useState } from 'react';
import "./Cart.css";
import { IoMdReturnLeft } from "react-icons/io";
import Payment from '../Payment/Payment';
import Product from '../ShoppingCard/Product/Product'
import ModalPix from '../Payment/Method/Pix/Pix'

function ShoppingCard({
    setCartsVisibility,
    cartsVisibility,
    productsInCart, 
    onProductRemove,
    onQuantityChange,
}) {
  
   const [confirmPay, setConfirmPay ] = useState(false);  


   return (
        <div
         className="modal"
         style={{
            display: cartsVisibility
             ? "block"
             : "none", 
         }}>
        

        <div className="shoppingCart">
         <div className="header">
           <IoMdReturnLeft  size={30}  onClick={() => setCartsVisibility(false)}/>
          </div>
        
        <div className="content-products-payment">

        <div className="__content-payment-card">
          <Product productsInCart={productsInCart}
                   onProductRemove={onProductRemove}
                   onQuantityChange={onQuantityChange}/>

          <Payment confirmPay={confirmPay} />
        </div>
       </div>
        {productsInCart.length > 0 && (
               <div className="button-next-page-payment"> 
                     <button className="cancel-payment">Cancelar</button>
                     <button className="next-page-payment" onClick={() => setConfirmPay(true)}>Ir para o Pagamento</button>
                </div>
             )}
        </div>
       
        

    </div>
    )
}

export default ShoppingCard;