import React from 'react';
import './ProductMain.css';

const ProductMain = ({product, className}) => {
    const img = {

        backgroundImage: 'url(../images/img1.png)',
      };
    return (
        <div className={'product_outer ' + className}>
            <div className={'product_inner'}>
                <div className="col-left">
                    <div className={'product_text_container'}>
                        <span>Новая коллекция</span>
                        <span>
                            <span>20%</span>
                            <span>скидка</span>
                        </span>
                    </div>
                    <a className={'product_button'}>Купить</a>
                </div>
                <div className="col-right">
                    <div style={img} className={'product_img'}></div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductMain;