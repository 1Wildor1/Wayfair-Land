import styles from './Footer.module.css'


export function Footer() {
    return (
        <>
            <div className={styles.footer}>

                <div>
                    <img style={{width:"100%"}} src="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg" alt="" />
                </div>

                <div className={styles.footerPart1}>
                    <div className={styles.footerPart1Conteiner1}>
                        <h3>Be the first to know about our best deals!</h3>
                        <a href="https://www.wayfair.com/terms?section=privacy-policy">Privacy Policy</a>
                    </div>
                    <div className={styles.footerPart1Conteiner2}>
                        <input placeholder='Email Address' type="text" name="" id="" />
                        <button>Submit</button>
                    </div>
                </div>

                <div className={styles.footerPart2}>
                    <div className={styles.footerPart2Conteiner}>
                        <h2>About Us</h2>
                        <div className={styles.footerPart1Conteiner3}>
                            <div style={{margin: "5px 0 5px 0"}}>
                                <a href="https://www.aboutwayfair.com/">About Wayfair</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/wayfair-rewards">Wayfair Rewards</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/v/business_account/application/pico?account_method=55">Wayfair Professional</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/design-services/?src=footer_nav">Design Services</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/giftcards">Gift Cards</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/wayfaircard">Wayfair Credit Card</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/wayfair-financing~b785.html">Wayfair Financing</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/shop/o/pt/index">Product Collections</a>
                            </div>
                            <div>
                                <a href="https://www.aboutwayfair.com/careers">Careers</a>
                            </div>
                            <div>
                                <a href="https://sell.wayfair.com/">Sell on Wayfair</a>
                            </div>
                            <div>
                                <a href="https://influencers.wayfair.com/connect/#welcome">Creators</a>
                            </div>
                            <div>
                                <a href="https://investor.wayfair.com/">Investor Relations</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/advertising">Advertise With Us</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/m/wilmette">Locations</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerPart2Conteiner}>
                        <h2>Customer Service</h2>
                        <div className={styles.footerPart1Conteiner3}>
                            <div>
                                <a href="https://www.wayfair.com/session/secure/account/order_search.php">My Orders</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/v/account/welcome/show">My Account</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/session/secure/account/order_search.php">Track My Order</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/help/article/wayfair_accessibility_statement/1E6F064C-1B7D-4058-A4D6-067D9D8FC621">Wayfair Accessibility Statement</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/help/article/returns/">Return Policy</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/help/index">Help Center</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/ideas-and-advice">Ideas & Advice</a>
                            </div>
                            <div>
                                <a href="https://www.wayfair.com/product_recall">Product Recalls</a>
                            </div>

                        </div>
                    </div>
                    <div className={styles.footerPart3}>
                        <div className={styles.footerPart2Conteiner}>

                        <h2>Contact Us</h2>
                        <div>
                            <button style={{backgroundColor: "#7b189f", color:"white"}}>
                                <svg style={{fill: "white"}} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M18 14h-4v-4a.5.5 0 00-1 0v4.5a.5.5 0 00.5.5H18a.5.5 0 000-1z"></path><path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zm0 18a8.5 8.5 0 118.5-8.5 8.51 8.51 0 01-8.5 8.5z"></path></svg>
                                <p>Quick Help</p>
                            </button>
                            <button style={{backgroundColor: "white",border: "1px solid #7b189f"}}>
                                <svg style={{fill: "#7b189f"}} focusable="false" viewBox="2 2 24 24" role="img" aria-label="Call Us" data-hb-id="pl-icon" class="_1fr089m0 _1fr089m1"><title>Call Us</title><path d="M18.88 23h-.07C12.18 22 6 15.84 5 9.21a.47.47 0 01.13-.42l3.59-3.66A.52.52 0 019.11 5a.47.47 0 01.36.2l3.2 4.24a.5.5 0 01-.05.66l-1.73 1.68a7.21 7.21 0 005.36 5.37l1.64-1.76a.49.49 0 01.67-.06l4.24 3.17a.5.5 0 01.05.76l-3.62 3.62a.5.5 0 01-.35.12zM6 9.31A16.43 16.43 0 0018.71 22l3-3-3.43-2.58L16.8 18a.51.51 0 01-.44.16 8.22 8.22 0 01-6.5-6.51.49.49 0 01.14-.43l1.61-1.56L9 6.24z"></path></svg>
                                <p>Call Us</p>
                            </button>
                        </div>
                        <div className={styles.footerPart2Conteiner4}>
                            <h3>Customer Service</h3>
                            <p>Closed. Opens at 8:00 AM ET.</p>
                            <a href="">Weekly Hours</a>

                            <h3>Shopping Assistance</h3>
                            <p>Closed. Opens at 8:00 AM ET.</p>
                            <a href="">Weekly Hours</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerPart3Conteiner1}>
                        <a href="https://www.facebook.com/wayfair/">
                            <svg width={"25px"} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" role="img" aria-label="Facebook Icon" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0"><title>Facebook Icon</title><path d="M22.9 4H5.1C4.5 4 4 4.5 4 5.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7h-2.6v-3h2.6V11c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V24h5.1c.6 0 1.1-.5 1.1-1.1V5.1c0-.6-.5-1.1-1.1-1.1"></path></svg>
                        </a>
                        <a href="https://www.pinterest.com/wayfair/">
                            <svg width={"25px"} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" role="img" aria-label="Pinterest Icon" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0"><title>Pinterest Icon</title><path d="M14 4C8.5 4 4 8.5 4 14c0 4.2 2.6 7.9 6.4 9.3-.1-.8-.2-2 0-2.9.2-.8 1.2-5 1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.8 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.7 2.3.1.1.1.2.1.3-.1.3-.2 1-.3 1.1 0 .2-.1.2-.3.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1 0 0-.5 1.9-.6 2.4-.2.9-.8 2-1.2 2.6.8.5 1.8.7 2.8.7 5.5 0 10-4.5 10-10S19.5 4 14 4"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/wayfair/">
                            <svg width={"25px"} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" role="img" aria-label="Instagram Icon" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0"><title>Instagram Icon</title><path d="M23.9 9.9c0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.2-1.4-.4-2.4-.5h-4c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5-.7.2-1.3.5-1.8 1.1-.6.5-.9 1.1-1.2 1.8-.2.6-.4 1.3-.4 2.4-.1 1-.1 1.4-.1 4.1 0 2.7 0 3.1.1 4.1 0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.4.4 2.4.5 1.1 0 1.4.1 4.1.1s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.4.5-2.4 0-1.1.1-1.4.1-4.1-.2-2.7-.2-3.1-.3-4.1zM22.1 18c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7-.4.1-.9.3-1.9.3-1.1 0-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.3-.6-.1-.9-.3-1.2-.7-.3-.3-.6-.7-.7-1.1-.2-.4-.4-.9-.4-1.9 0-1.1-.1-1.4-.1-4 0-2.7 0-3 .1-4 0-1 .2-1.5.3-1.9.2-.5.4-.8.8-1.1.3-.3.7-.6 1.1-.7.4-.2.9-.4 1.9-.4 1.1 0 1.4-.1 4-.1s3 0 4 .1c1 0 1.5.2 1.9.3.5.2.8.4 1.1.8.3.3.6.7.7 1.1.1.4.3.9.3 1.9 0 1.1.1 1.4.1 4 .1 2.7.1 3 0 4z"></path><path d="M14 8.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z"></path><circle cx="19.3" cy="8.7" r="1.2"></circle></svg>
                        </a>
                        <a href="https://www.tiktok.com/@wayfair?lang=en">
                            <svg width={"25px"} focusable="false" viewBox="0 0 24 24" __typename="HomebaseIcon" role="img" aria-label="TikTok" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><title>TikTok</title><path d="M13.105 16.021V2.25h3.102v.756C16.207 4.461 18.5 6.97 20 6.97h.75v2.91c-.316 0-.453 0-.75.004-1.473-.024-3-.864-3.92-1.584-.018-.015 0 1.977 0 7.721 0 3.569-3.07 5.729-5.914 5.729-3.77 0-5.916-3.3-5.916-5.75-.14-4.163 3.25-6.75 6.67-6.48v3.04c-.332.01-.646.002-.92 0-2.193.11-2.9 2.11-2.9 3.44s.955 2.844 3.066 2.844c1.998 0 2.94-1.703 2.94-2.823z"></path></svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCygNJ1TutAAtYlmu0gUMLBA">
                            <svg width={"25px"} focusable="false" viewBox="0 0 24 24" __typename="HomebaseIcon" role="img" aria-label="YouTube" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><title>YouTube</title><path d="M17.9 5.2c-2.8-.2-9-.2-11.8 0-3 .2-3.4 2-3.4 6.8s.4 6.6 3.4 6.8c2.8.2 9 .2 11.8 0 3-.2 3.4-2 3.4-6.8s-.4-6.5-3.4-6.8zm-8.2 9.9V8.9l6.2 3.1-6.2 3.1z"></path></svg>
                        </a>
                    </div>
                    <div className={styles.footerPart3Conteiner2}>
                        <a href="https://www.wayfair.com/terms?section=terms-of-use">Terms of Use</a>
                        <a href="https://www.wayfair.com/terms?section=privacy-policy">Privacy Policy</a>
                        <a href="https://www.wayfair.com/privacyrights/dns">Your Privacy Rights & Choices</a>
                    </div>
                    <p>© 2025 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
                </div>
            </div>

        </>
    )
}