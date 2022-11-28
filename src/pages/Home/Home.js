import styles from './Home.module.css';

// Images for cards
import banner from "/DEV/Projetos/React/Youcom/youcom/src/img/banner.jpg"
import truck from "/DEV/Projetos/React/Youcom/youcom/src/img/truck-50.png";
import credit from "/DEV/Projetos/React/Youcom/youcom/src/img/creditcard-50.png";
import box from "/DEV/Projetos/React/Youcom/youcom/src/img/box-64.png";
import ticket from "/DEV/Projetos/React/Youcom/youcom/src/img/ticket-50.png";

// Discount
import GetDiscount from '../../components/GetDiscount/GetDiscount';

const Home = () => {
   return (
      <div className={styles.home}>
         <img src={banner} alt="" className={styles.banner} />

         <h2 className={styles.title}>benefícios site + app</h2>

         {/* cards */}
         <div className={styles.benefits}>
            <div className={styles.benefits_content}>
               <div className={styles.benefits_content_img}>
                  <img src={truck} alt="truck" />
               </div>

               <div className={styles.benefits_texts}>
                  <p className={styles.benefits_text_title}>Frete grátis acima de R$179*</p>
                  <p className={styles.benefits_text_content}>com opção de entrega expressa para SP</p>
               </div>
            </div>

            <div className={styles.benefits_content}>
            
               <div className={styles.benefits_content_img}>
                  <img src={credit} alt="card" />
               </div>

               <div className={styles.benefits_texts}>
                  <p className={styles.benefits_text_title}>Parcelamento sem juros</p>
                  <p className={styles.benefits_text_content}>
                     até 5x sem juros
                     <br />
                     *parcela mínima de R$40
                  </p>
               </div>

            </div>

            <div className={styles.benefits_content}>
            
               <div className={styles.benefits_content_img}>
                  <img src={box} alt="devolution" />
               </div>

               <div className={styles.benefits_texts}>
                  <p className={styles.benefits_text_title}>30 dias para devolução grátis</p>
                  <p className={styles.benefits_text_content}>em algumas regiões buscamos na sua casa!</p>
               </div>

            </div>
            <div className={styles.benefits_content}>
      
               <div className={styles.benefits_content_img}>
                  <img src={ticket} alt="ticket" />
               </div>
               <div className={styles.benefits_texts}>
                  <p className={styles.benefits_text_title}>15% OFF na primeira compra</p>
                  <p className={styles.benefits_text_content}>
                     use o cupom
                     <br />
                     PRIMEIRACOMPRA15
                     <br />
                     *compra online acima de R$219
                  </p>
               </div>

            </div>
         </div>

         {/* Cadastro para descontos */}
         <GetDiscount />

      </div>
   )
}

export default Home