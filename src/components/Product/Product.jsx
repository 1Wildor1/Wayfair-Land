import styles from './Product.module.css'
import arrowR from '/arrowR.png'
import plus from '/PlusIcon.png'
import { ImgConteiner } from '../ImgConteiner/imgConteiner';
import { ExtendedBtn } from '../ExtendedBtn/ExtendedBtn';
import { Glance } from '../Glance/Glance';

export function Product({ changeContent }) {


    return (
        <div>
            <p className={styles.path}>Kitchen & Tabletop / Kitchen Utensils & Tools / Baking & Mixing Tools / Mixing Bowls / SKU: OXO1131</p>
            <div className={styles.productConteiner}>
                <ImgConteiner changeContent={changeContent} />
                <div className={styles.infoConteiner}>
                    <h2 className={styles.infoTitle}>Good Grips 3 Piece Mixing Bowl Set</h2>
                    <a className={styles.rating}>4.8
                        <svg width={'22px'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5" ><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z" ></path></svg>
                        <svg width={'22px'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5" ><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z" ></path></svg>
                        <svg width={'22px'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5" ><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z" ></path></svg>
                        <svg width={'22px'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5" ><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z" ></path></svg>
                    </a>

                    <div className={styles.priceInfo}>
                        <p className={styles.piceInfoCart1}>$27.99</p>
                        <div className={styles.flexDivider}>
                            <div style={{ marginTop: '10px' }} className={styles.line}></div>
                            <span>or</span>
                            <div className={styles.line}></div>
                        </div>
                        <p className={styles.piceInfoCart3}>
                            <b> $7 in 4 interest-free payments</b><br />
                            <p className={styles.piceInfoCart4}>
                                with Klarna or Afterpaywith<a href='https://www.wayfair.com/buy-now-pay-later~b547.html'> Learn More  <svg style={{ position: 'relative', top: '5px', width: '25px', fill: 'currentcolor' }} focusable="false" viewBox="2 2 24 24" aria-hidden="true" data-hb-id="pl-icon"><path d="M14 23.5a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5zm0-18a8.5 8.5 0 108.5 8.5A8.51 8.51 0 0014 5.5z"></path><path d="M14 18a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM14 11.21a.63.63 0 11.62-.62.62.62 0 01-.62.62z"></path></svg></a>
                            </p>
                        </p>
                    </div>

                    <div>
                        <button className={styles.similarOptionsBtn}>See Similar Options</button>

                    </div>

                    <h3>More Offers and Savings</h3>
                    <div style={{ display: "flex" }}>
                        <img src="https://assets.wfcdn.com/im/78370975/resize-h64-w64%5Ecompr-r85/3026/302636901/default_name.jpg" alt="" />
                        <p>Earn <span style={{ color: "#7b189f", fontWeight: 600 }}>5%</span>  back¹ in rewards, plus more exclusive perks <br /> <a href='#'>Learn more</a></p>
                    </div>

                    <div>
                        <h3>Get Everything You Need</h3>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className={styles.paymentContainer}>
                                <div className={styles.paymentContainerPart}>
                                    <div>
                                        <img src="https://assets.wfcdn.com/im/29446067/resize-h160-w160%5Ecompr-r85/1726/17267092/default_name.jpg" alt="" />
                                    </div>
                                    <p>Good Grips 3 Piece Mixing Bowl Set</p>
                                </div>
                                <div className={styles.plus}>
                                    <img src={plus} alt="" />
                                </div>
                                <div className={styles.paymentContainerPart}>
                                    <div>
                                        <img src="https://assets.wfcdn.com/im/61122432/resize-h160-w160%5Ecompr-r85/4516/45162539/default_name.jpg" alt="" />
                                    </div>
                                    <p>HENCKELS International...</p>
                                </div>
                            </div>
                            <button className={styles.pricebtn}>Buy Both: $41.72 <img className={styles.arrowImg} src={arrowR} alt="" /></button>
                        </div>

                        <Glance />
                        <ExtendedBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}