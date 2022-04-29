import React from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';

function App()
{
    return(
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <img src="/images/prod11.png" alt ="Product Preview"/>
            </div>

            <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>Nike Mercurial</h1>
                <p className={classes.ProductDescription}>The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldos greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity.</p>

                <h3 className={classes.Heading}>Select Colour</h3>
                <div>
                    <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="/images/prod12.png" alt="XYZ colour" />
                </div>

                <button className={classes.PrimaryButton}>Buy Now </button>
            </div>
        </div>
    )
}

export default App;