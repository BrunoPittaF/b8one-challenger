import { useState } from 'react';
import './styles/styles.scss';

import correctIcon from '/icons/correct.svg';

interface IProduct {
  id: string;
  productImage: string;
  title: string;
  fullPrice: string;
  promoPrice: string;
  dividerPrice: string;
  isFavorite: boolean;
  isAdded: boolean;
}

function App() {
  const listProducts: IProduct[] = [
    {
      id: '7897',
      productImage: '/tv.png',
      title: 'Monitor LED 27" Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      fullPrice: 'R$ 2.813,99',
      promoPrice: 'R$ 2.599,00',
      dividerPrice: '10x de R$ 259,90',
      isFavorite: false,
      isAdded: false,
    },
    {
      id: '9765',
      productImage: '/computador-gamer.jpg',
      title: 'Pc Gamer Fácil Amd Ryzen 5 Pro 4650g 3.7 Ghz 8gb Ddr4 Amd Rx550 4gb Ssd 240gb - Fonte 500w',
      fullPrice: 'R$ 2.900',
      promoPrice: 'R$ 2.000,00',
      dividerPrice: '10x de R$ 200',
      isFavorite: false,
      isAdded: false,
    },
  ];

  const [products, setProducts] = useState<IProduct[]>(listProducts);

  function addProduct(productId: string) {
    const newListProduct = products.map((product: IProduct) =>
      product.id === productId
        ? {
            ...product,
            isAdded: !product.isAdded,
          }
        : product
    );

    setProducts(newListProduct);
  }

  function addProductOnWishList(productId: string) {
    const newListProduct = products.map((product: IProduct) =>
      product.id === productId
        ? {
            ...product,
            isFavorite: !product.isFavorite,
          }
        : product
    );

    setProducts(newListProduct);
  }

  return (
    <div className="App">
      {products.map((product) => {
        return (
          <div key={product.id} className="cardProduct">
            <div className="imageWrapper">
              <picture>
                <img src={product.productImage} alt="seila" />
                <span
                  onClick={() => addProductOnWishList(product.id)}
                  className={`wishlistIcon ${product.isFavorite ? 'active' : ''}`}
                />
              </picture>
            </div>

            <p className="title">{product.title}</p>
            <div className="priceWrapper">
              <p className="fullPrice">{product.fullPrice}</p>
              <p className="promoPrice">{product.promoPrice}</p>
              <p className="dividerPrice">
                em até <span>{product.dividerPrice}</span> sem juros
              </p>
            </div>
            <button
              onClick={() => addProduct(product.id)}
              type="button"
              className={`addProduct ${product.isAdded ? 'isAdded' : ''} `}
            >
              <img src={correctIcon} alt="icon afirmative" />
              {product.isAdded ? 'Adicionado' : 'Adicionar'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
