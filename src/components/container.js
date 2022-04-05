import Product from "./products";
import FilterPane from "./filterpane";
import { Link, useNavigate } from "react-router-dom";
import "./container.css"

function Container(props){
    const image=[]
    for(let i=11;i<=20;i++){
        image.push(`/images/prod${i}.png`);
    }
    console.log(image);
    return ( 
        <div className="container">
            <FilterPane />
            <div className="prod">
                <div className="category">
                    <h1>{props.name}</h1>
                    <div  className="icons">
                        <Link to = '/cart'>
                            <img src={props.isHighContrast?"/images/viewcart-wheat.png":"/images/view cart.png"} alt="view cart"></img>
                        </Link>
                        <a href="wishlist"><img src={props.isHighContrast?"/images/wishlist-wheat.png" :"/images/wishlist.png"} alt="wishlist"></img></a>
                    </div>
                </div>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
            </div>
        </div>
      );
}

export default Container;