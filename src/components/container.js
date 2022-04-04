import Product from "./products";
import FilterPane from "./filterpane";
import "./container.css"
import viewcart from "./view cart.png"
import viewcartWheat from "./viewcart-wheat.png"
import wishlist from "./wishlist.png"
import wishlistWheat from "./wishlist-wheat.png" 

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
                        <a href="view cart"><img src={props.isHighContrast?require("./viewcart-wheat.png"):require("./view cart.png")} alt="view cart"></img></a>
                        <a href="wishlist"><img src={props.isHighContrast?wishlistWheat:wishlist} alt="wishlist"></img></a>
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