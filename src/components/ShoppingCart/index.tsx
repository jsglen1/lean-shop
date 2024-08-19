'use client'
import { FiShoppingCart } from 'react-icons/fi';
import styles from './ShoppingCart.module.scss'
import { useAppStore } from '@/store';

const ShoppingCart = () => {  
  const {itemsCart} = useAppStore((state) => state)

  return (
    <div className={styles.div_container}>
      <FiShoppingCart size={28} />
      {itemsCart > 0 && (
        <span className={styles.div_spam}>
          {itemsCart}
        </span>
      )}
    </div>
  );
};

export default ShoppingCart;
