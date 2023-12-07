import Counter from '../../components/UI/Counter/Counter'
import Image from '../../components/UI/Image/Image'
import st from './HomePage.module.css'

const HomePage = () => {
  
  return (
    <main className={st.main_content}>
      <Image />
      <div className={st.container_text}>
        <h4 className={st.subtitle}>Sneaker Company</h4>
        <h1 className={st.heading}>Fall Limited Edition Sneakers</h1>
        <p className={st.description}>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className={st.container_forPrice}>
          <div className={st.mainPriceVsDiscount}>
            <span className={st.mainPrice}>$125.00</span>
            <span className={st.discount}>50%</span>
          </div>
          <s className={st.crossOutPrice}>$250.00</s>
        </div>
        
        <Counter />
      </div>
    </main>
  )
}

export default HomePage