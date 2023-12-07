import { removeFromCart } from '../../../store/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import st from './Cart.module.css'
import useOutside from '../../useOutside'

const Cart = () => {
  const selectedProducts = useSelector(state => state.cart.selectedProducts)
  const productName = useSelector(state => state.cart.productName)
  const productPrice = useSelector(state => state.cart.price)

  const { ref, isVisible, setIsVisible } = useOutside(false)

  const dispatch = useDispatch()

  const handleOpenTooltip = () => {
    setIsVisible(!isVisible);
  };

  const handleDeleteProduct = () => {
    dispatch(removeFromCart());
  };

  const handleTooltipClick = (e) => {
    e.stopPropagation();
  }

  const summa = (Number(productPrice) * selectedProducts).toFixed(2);

  return (
    <div className={st.cart} 
      onClick={handleOpenTooltip} 
      ref={ref}
    >
      <svg className={st.cartIcon} width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/>
      </svg>
      <span className={selectedProducts ? st.selectedProducts : `${st.selectedProducts} ${st.notVisible}` }>
        {selectedProducts}
      </span>
      <div className={isVisible ? st.tooltip : `${st.tooltip} ${st.notVisible}`}  
        onClick={handleTooltipClick}
        ref={ref}
      >
        <h5 className={st.heading_tooltip}>Cart</h5>
        <div className={selectedProducts ? st.tooltipFilledCart : `${st.tooltipFilledCart} ${st.notVisible}`}>
            <div className={st.product}>
                <span className={st.tooltipImg}></span>
                <div>
                  <p className={st.tooltipName}>{productName}</p>
                  <span>
                  ${productPrice} x {selectedProducts} 
                  <strong> ${summa}</strong>
                  </span>
                </div>
                <div className={st.productRemove} 
                    onClick={handleDeleteProduct}
                >
                  <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fill="#C3CAD9" fillRule="nonzero" />
                  </svg>
                </div>
            </div>
            <button className={st.btnCheck}>Checkout</button>
        </div>
        <div className={!selectedProducts ? st.tooltipEmptyCart : `${st.tooltipEmptyCart} ${st.notVisible}` }>
            <p>Your cart is empty</p>
        </div>           
      </div>
    </div>
  )
}

export default Cart