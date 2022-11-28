import styles from "./GetDiscount.module.css"


const GetDiscount = () => {
   return <div className={styles.get_discount}>
      <div className={styles.title_discount}>
         <p> Desconto de <span>15% na primeira compra</span>, além de todas as novidade. Bora?</p>
      </div>

      <div className={styles.form_discount}>
         <form>
            <label>
               <span>Email</span> <br />

               <input type="email" name="email" id="email" placeholder="Informe seu email" />
            </label>

            <div className={styles.tel_date}>
               <div className={styles.tel}>
                  <label>
                     <span>Telefone</span><br />

                     <input type="number" name="" id="" placeholder="( ) ____-____" />
                  </label>
               </div>

               <div className={styles.date}>
                  <label>
                     <span>Data de nascimento</span><br />
                     <input type="date" name="" id="" placeholder="dd/mm/aaaa" />
                  </label>
               </div>
            </div>

            <label>
               <span>Gênero</span> <br />

               <select name="gender" id="gender">
                  <option value="default" selected>Como você se identifica?</option>
                  <option value="not-answer">Prefiro não responder</option>
                  <option value="female">Feminino</option>
                  <option value="male">Masculino</option>
                  <option value="other">Outro</option>
               </select>
            </label>
         </form>
      </div>

      <div className={styles.confirm_discount}>

         <button type="submit">Quero meu desconto!</button> <br />
         <p className={styles.btn_description}>desconto válido na primeira compra online acima de R$219</p>

         <div className={styles.terms}>
            <label>
               <input type="checkbox" name="policies" id="policies" />
               <span>Li e aceito a política de privacidade e proteção de dados da Youcom.</span>
            </label>
            <label>
               <input type="checkbox" name="promotion" id="promotion" />
               <span>Quero receber promoções, novidades e informações da Youcom via email e sms</span>
            </label>
            <label>
               <input type="checkbox" name="notifications" id="otifications" />
               <span>Quero receber notificações no whatsapp</span>
            </label>
         </div>

      </div>
   </div>

}

export default GetDiscount