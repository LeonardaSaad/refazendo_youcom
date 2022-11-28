import styles from './Navbar.module.css';
import user from "../../img/user-48.png";
import heart from "../../img/heart-64.png";
import sacola from "../../img/sacola-64.png";

import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <NavLink to='/' className={styles.brand}>
            <h1>YOUCOM</h1>
         </NavLink>

         <div className={styles.list_topics}>
            <ul>
               <li><NavLink to="/">novidades</NavLink></li>
               <li><NavLink to="/">básicos</NavLink></li>
               <li><NavLink to="/">feminino</NavLink></li>
               <li><NavLink to="/">masculino</NavLink></li>
               <li><NavLink to="/">jeans</NavLink></li>
               <li><NavLink to="/">acessórios</NavLink></li>
               <li><NavLink to="/">mais vendidos</NavLink></li>
               <li><NavLink to="/" className={styles.topic_promo}>promo</NavLink></li>
            </ul>
         </div>

         <div className={styles.icons}>
            <button className={styles.btn_transparent}>
               <img src={user} alt="" />
               <span>entre ou cadastre-se</span>
            </button>

            <div className={styles.allIcon}>
               <NavLink to="/">
                  <img src={heart} alt="" />
               </NavLink>
            </div>

            <div className={styles.allIcon}>
               <NavLink to="/">
                  <img src={sacola} alt="" />
               </NavLink>
            </div>

         </div>
      </div>
   )
}

export default Navbar