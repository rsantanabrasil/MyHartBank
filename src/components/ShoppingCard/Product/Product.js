import { RiDeleteBin6Line } from "react-icons/ri";



export default function ({productsInCart, onProductRemove, onQuantityChange}) {
    return (
        <div className="cart-products-payment">
        <h1>Resumo do Pedido</h1>
        {productsInCart.lenght === 0 && (
            <span className="empty-text">
            Carrinho Vazio
            </span>
        )}
        {productsInCart.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.image} alt="" />
              <div className="product-info">
                <span className="product-price">
                  <h1>{product.name}</h1>
                  <h2>R${product.price}</h2>
                </span>
                <span className="product-subtotal">
                  <h1>Subtotal</h1>
                  <h2>R${product.price}</h2>
                </span>
                <span className="product-taxa">
                  <h1>Taxa</h1>
                  <h2>R${product.taxa}</h2>
                </span>
                <span className="product-delivery">
                  <h1>Entrega</h1>
                  <h2>Grátis</h2>
                </span>
                <span className="product-quantity">
                  <h1>Quantidade</h1>
                <select
               className="count-product-quantity"
               value={product.count}
               onChange={(event) => {
                onQuantityChange(
                    product.id,
                    event.target
                    .value
                );
               }}>
                {[
                    ...Array(
                        10
                    ).keys(),
                ].map(number => {
                    const num = number + 1;
                    return (
                        <option 
                          value={
                            num
                          }
                          key={num}>
                            {num}
                          </option>
                    )
                })
                }
               </select>
                </span>
                <span className="total-products-car">
                  <h1>Total</h1>
                  <h2>{product.price * product.count}</h2>
                </span>
                <span className="remove-item-car">
                  <h1>Remover Produto</h1>
                   <button 
              className="btn remove-btn"
              onClick={() => 
                onProductRemove(product) 
             }>
                
                <RiDeleteBin6Line size={20} />
             </button>
                </span>
              </div>
             

            
            </div>
        ))} 
            
      </div>
    )
}