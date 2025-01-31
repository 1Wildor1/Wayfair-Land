import styles from './CartPopUp.module.css'


export function CartPopUp({popUpCart}){
    return(
        <>
        {
          popUpCart ?  <div className={styles.cartPopUp}>
          <div className={styles.cartPopUpConteiner}>
              <h2>In Your Cart</h2>
              <a>X</a>
          </div>
          <div className={styles.cartBody}>
              <h2>Oh-no! Looks like your cart is empty.</h2>
              <p>Here are some options to get you started:</p>
              <div className={styles.cartLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><polygon fill="#a77ad7" points="37.83 39.8 26.25 39.8 27.1 29.93 36.97 29.93 37.83 39.8"></polygon><polygon fill="#612578" opacity="0.3" points="36.98 29.93 37.83 39.8 26.25 39.8 27.1 29.93 36.98 29.93"></polygon><path fill="#612578" opacity="0.3" d="M37,29.92l.28,3.21L30.6,34.85a1,1,0,0,0-.73.8l-.47,2.6h-3l.72-8.33Z"></path><path fill="#a77ad7" d="M41,20.18c0,5.34-4,12.13-9,12.13s-9-6.79-9-12.13,4-9.68,9-9.68S41,14.83,41,20.18Z"></path><path fill="#a77ad7" d="M46.18,53.31H17.8a2,2,0,0,1-2-2.26l1.51-11.54.05-.42a2,2,0,0,1,1.05-1.51l8.4-4.45-.08.91-.3,3.42,4.61,2.88a1.86,1.86,0,0,0,1.88,0l4.67-3.16-.27-3.09-.08-1,8.29,4.45a2,2,0,0,1,1,1.5l0,.26,1.55,11.71A2,2,0,0,1,46.18,53.31Z"></path><path fill="#612578" d="M37.94,38l-5.1,3a1.6,1.6,0,0,1-1.61,0L26.16,38A1.6,1.6,0,0,1,26,35.34l.65-.48-.11,1.07a1.06,1.06,0,0,0,.53,1l4,2.31a1.91,1.91,0,0,0,1.88,0l4-2.35a1.06,1.06,0,0,0,.53-1l-.11-1.21.78.66A1.6,1.6,0,0,1,37.94,38Z"></path></svg>
                  <p><a href="">Sign In</a> to view your saved items</p>
              </div>
              <div>
                  <p>Start saving with <a href="">Daily Sales</a></p>
              </div>
          </div>
      </div>
      :
      "" 
        }
            
        </>
    )
}