import {useEffect, useState} from "react";
import axios from "axios";
import ProductsSkeleton from "./ProductsSkeleton.jsx";

const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('https://6766858a410f84999657db9f.mockapi.io/products')
            .then(res => {
                setProducts(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);

            })
        window.scrollTo(0,0)
    }, []);



    return (
        <>

            {
                isLoading
                    ? [...new Array(6)]
                    .map((_, idx) => <ProductsSkeleton key={idx} />)
                    : products.map((products) => (
                        <div className="pizza-block-wrapper">
                            <div key={products.id} className='pizza-block'>
                                <img src={products.imageUrl} alt="" className='pizza-block__image'/>
                                <h4>{products.title}</h4>
                                <div className="pizza-block__selector">
                                    <ul>
                                        <li className="active">тонкое</li>
                                        <li>традиционное</li>
                                    </ul>
                                    <ul>
                                        <li className="active">26 см.</li>
                                        <li>30 см.</li>
                                        <li>40 см.</li>
                                    </ul>
                                </div>
                                <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">от {products.price} ₽</div>
                                    <div className="button button--outline button--add">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <span>Добавить</span>
                                        <i>1</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }

        </>
    );
};

export default Products;