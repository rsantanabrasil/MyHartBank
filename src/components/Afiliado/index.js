import React, { useState } from "react"
import './index.css'
import cartao_1 from '../../images/card/IMAGE-1.png'
import cartao_2 from '../../images/card/IMAGE-2.png'
import cartao_3 from '../../images/card/IMAGE-3.png'
import cartao_4 from '../../images/card/IMAGE-4.png'
import cartao_5 from '../../images/card/IMAGE-5.png'
import cartao_6 from '../../images/card/IMAGE-6.png'
//title img
import title_1 from '../../images/card/TITLE-1.png'
import title_2 from '../../images/card/TITLE-2.png'
import title_3 from '../../images/card/TITLE-3.png'
import title_4 from '../../images/card/TITLE-4.png'
import title_5 from '../../images/card/TITLE-5.png'
import title_6 from '../../images/card/TITLE-6.png'

import MenuBar from '../../components/MenuBar/index'

//import ShoppingCard from "../ShoppingCard"
import ProductView from "../ProductView/index"
import api from '../../BaseUrl/baseUrl'
import { useEffect } from "react"

function Afiliado() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [model, setModel] = useState(false); 
  const [tempData, setTempData] = useState([]);
  const[modalProduct, setModalProduct] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const products = [
    {
      id: 1,
      name: 'teste 1',
      price: 1202,
      image: cartao_1,
      imageTitle: title_1,
      image_2:"",
      description: 'Categoria Banker Na Comunidade Digital Ativação Da Conta Apenas R$ 110,00 105% Do CDI Cashbacks Crescenters Ao Cumprir Tarefas Benefícios Exclusivos Start Recompensas Crescentes' 
    },
    {
      id: 2,
      name: 'teste 2',
      price: 2422,
      image: cartao_2,
      imageTitle: title_2,
      description: 'Categoria Banker Na Comunidade Digital Ativação Da Conta Apenas R$ 110,00 105% Do CDI Cashbacks Crescenters Ao Cumprir Tarefas Benefícios Exclusivos Start Recompensas Crescentes' 
    },
    {
      id: 3,
      name: 'teste 3',
      price: 3202,
      image: cartao_3,
      imageTitle: title_3,
      description: 'Categoria Banker Na Comunidade Digital Ativação Da Conta Apenas R$ 110,00 105% Do CDI Cashbacks Crescenters Ao Cumprir Tarefas Benefícios Exclusivos Start Recompensas Crescentes' 
    },
    {
      id: 4,
      name: 'teste 4',
      price: 12202,
      image: cartao_4,
      imageTitle: title_4,
      description: 'Categoria Banker Na Comunidade Digital Ativação Da Conta Apenas R$ 110,00 105% Do CDI Cashbacks Crescenters Ao Cumprir Tarefas Benefícios Exclusivos Start Recompensas Crescentes' 
    
    },
    {
      id: 5,
      name: 'teste 5',
      price: 122202,
      image: cartao_5,
      imageTitle: title_5,
      description: 'Categoria Banker Na Comunidade Digital Ativação Da Conta Apenas R$ 110,00 105% Do CDI Cashbacks Crescenters Ao Cumprir Tarefas Benefícios Exclusivos Start Recompensas Crescentes' 
    
    },
    {
      id: 6,
      name: 'teste 6',
      price: 4432,
      image: cartao_6,
      imageTitle: title_6,
      description: 'Categoria Banker Na Comunidade Digital Ativação Da Conta Apenas R$ 110,00 105% Do CDI Cashbacks Crescenters Ao Cumprir Tarefas Benefícios Exclusivos Start Recompensas Crescentes' 
    
    }
  ]


  // selecionar produto
  const [selectedProduct, setSelectedProduct] = useState([]);

  const SelectedProduct = (product) => {
    setModalProduct(true)
    setSelectedProduct(product)
  }

  

//window.innerWidth <= '800' && modalIsOpen == false 
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
              
                <div className="__cardsDivision">
                  {
                    products.map((product, index) => (
                      <div key={index} className="__card-MyHart">
                        <div className="__cardImgMyHart">
                          <img src={product.image} onClick={() => SelectedProduct(product)}/>
                        </div> 
                        <div className="__cardImgTitleMyHart">
                          <img src={product.imageTitle} />
                        </div>
  
                      </div>
                      
                    ))
                  }
             
                </div>
                
                {  
                   modalProduct == true ? 
                   <ProductView 
                   modalProduct={modalProduct}
                   setModalProduct={setModalProduct}
                   selectedProduct={selectedProduct}
                    /> : <></>
                } 
            </div>            
        </div>
    )
}
/*productsInCart={productsInCart} setProductsInCart={setProductsInCart}*/
export default Afiliado