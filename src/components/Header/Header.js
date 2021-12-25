import styles from '../Header/Header.module.scss'
import Container from '@components/Container'
import { FaShoppingCart } from 'react-icons/fa'
function Header() {
  return (<header className={styles.header}>
    <Container className={styles.headerContainer}>
      <p className={styles['header-title']}>Cardio Store</p>
      <p className={styles.headerCart}>
        <button className="snipcart-checkout">
          <FaShoppingCart />
          <span className="snipcart-total-price">
            $0.00
          </span>
        </button>
      </p>
    </Container>
  </header>)
}

export default Header
