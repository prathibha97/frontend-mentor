import cart from '../../assets/icon-cart.svg';
import productDesktop from '../../assets/image-product-desktop.jpg';
import productMobile from '../../assets/image-product-mobile.jpg';
import styles from './ProductPreview.module.css';
import {useEffect, useState} from 'react'

const ProductPreview = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img
          className={styles.productImage}
          src={screenWidth <= 600 ? productMobile : productDesktop}
          alt=""
        />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <p>P E R F U ME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p className={styles.description}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={styles.priceContainer}>
            <span className={styles.price}>$149.99</span>
            <span className={styles.price2}>$169.99</span>
          </div>
          <div role="button" className={styles.cart}>
            <img className="cartIcon" src={cart} alt="" />
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
