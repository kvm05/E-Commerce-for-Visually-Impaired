import React, {useState} from 'react';
// import "./detailedproducts.css"

function DetailedProducts(){
        const temp = [
        {
            "name": "Nike Mercurial",
            "price": 8000,
            "image": [
                "https://www.nike.com/in/t/mercurial-dream-speed-superfly-8-elite-fg-football-boot-D4kVhs/DN3779-375"
            ],
            "rating": 4.7,
            "description": "Test"
        }
        ]
    const [products, setProducts] = useState(temp);

        return(
            <div className="app">
                {
                    products.map(item =>(
                         (<div className="details">
                            <div className="big-img">
                                <img src={item.image[0]} alt=""/>
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.name}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <div className="colors">
                                    {
                                        item.colors.map(color =>(
                                            <button style={{background: color}}></button>
                                        ))
                                    }
                                </div>
                                <p>{item.description}</p>

                                <button className="cart">Add to Cart</button>
                            </div>
                        </div>)
                    ))
                }
            </div>
        );
    }

export default DetailedProducts;
