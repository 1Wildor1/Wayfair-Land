import arrowR from '/arrowR.png'
import styles from './ExtendedBtn.module.css'
import { useState } from 'react';


export function ExtendedBtn() {
 const details = [
        { label: "Product Type", value: "Mixing Bowl Set" },
        { label: "Total Number of Pieces Included", value: "3" },
        { label: "Material", value: "Plastic" },
        { label: "BPA Free", value: "Yes" },
        { label: "Lid(s) Included", value: "No" },
        { label: "Product Care", value: "Hand wash only" },
        { label: "Microwave Safe", value: "No" },
        { label: "Oven Safe", value: "No" },
        { label: "Refrigerator Safe", value: "Yes" },
        { label: "Freezer Safe", value: "Yes" },
        { label: "Handle(s) Included", value: "Yes" },
        { label: "Non-Skid", value: "Yes" },
        { label: "Nesting", value: "Yes" },
        { label: "Pour Spout", value: "Yes" },
        { label: "Imported", value: "Yes" },
        { label: "Color", value: "Blue" },
    ];
    

    const [isExpanded, setIsExpanded] = useState({
            part1: false,
            part2: false,
            part3: false,
            part4: false,
        });
        const toggleDescription = (part) => {
            setIsExpanded(prevState => ({
                ...prevState,
                [part]: !prevState[part] // Инвертируем только нужную часть
            }));
        };
    return (
        <div>
            <div className={styles.toggleButton} onClick={() => toggleDescription("part1")}>
                <span>Description</span>
                <img className={isExpanded ? styles.rotated : styles.arrowBtn} src={arrowR} alt="v" />
            </div>
            <div className={`${styles.content} ${isExpanded.part1 ? styles.expanded : ""} ${isExpanded.part4 ? styles.part4 : ""}`}>
                <p><b>About This Product</b></p>
                <p> The Good Grips 3 Piece Mixing Bowl Set helps you tackle any culinary project, from
                    whisking eggs to mixing cupcake batter to making the marinade. The 1.5-quart, 3-quart, and 5-quart bowls
                    feature soft, non-slip handles. Non-skid bottoms stabilize the bowls on any kitchen surface, even at an
                    angle. Wide lips and spouts make pouring ingredients easier. Plus the mixing bowls nest neatly for
                    convenient storage. Available in blue, green, and yellow with black handles; white with blue, green,
                    and brown handles; and white with black handles. BPA-free dishwashers are safe.</p>

                <div className={`${isExpanded.part4 ? styles.expanded : styles.hiddenBlock}`}>
                    <p><b>Features</b></p>
                    <p style={{ paddingLeft: '30px' }}>&#8226; 3-Piece Set includes 1.5-quart, 3-quart, and 5-quart Mixing Bowls<br />
                        &#8226; 1-1/2-quart size perfect for whisking eggs or salad dressings, 3-quart size designed for use with electric mixers, and 5-quart size ideal for tossing salads or serving popcorn.<br />
                        &#8226; Non-skid bottoms stabilize Bowls while mixing, even on a tilt<br />
                        &#8226; Bowls nest for compact storage<br />
                        &#8226; Dishwasher safe, BPA free<br />
                        &#8226; 1-1/2-quart size perfect for whisking eggs or salad dressings, 3-quart size designed for use with electric mixers, and 5-quart size ideal for tossing salads or serving popcorn.
                    </p>
                </div>
                <a className={styles.showMore} onClick={() => toggleDescription("part4")}>{isExpanded.part4 ? "Show Less" : "Show More"}</a>

            </div>
            <div className={styles.toggleButton} onClick={() => toggleDescription("part2")}>
                <span>Specifications</span>
                <img className={styles.arrowBtn} src={arrowR} alt="v" />
            </div>

            <div className={`${styles.content} ${isExpanded.part2 ? styles.expanded2 : ""}`}>
                <p><b>Product Dimensions</b></p>
                <img width={'600px'} height={'600px'} src="https://assets.wfcdn.com/im/12964886/resize-h600-w600%5Ecompr-r85/2150/215032787/default_name.jpg" alt="" />
                <p>&#8226; The biggest bowl holds 5 quarts, the middle bowl holds 3 quarts, and the smallest bowl holds 1.5quarts</p>

                <p><b>Details</b></p>
                <dl style={{ maxWidth: "600px", borderCollapse: "collapse" }}>
                    {details.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                borderBottom: "1px solid #ddd"
                            }}
                        >
                            <dt style={{ width: "50%", padding: "10px 0 10px 10px", height: '24px', backgroundColor: "#f5f5f5" }}>{item.label}</dt>
                            <dd style={{ padding: "10px 0 10px 10px", height: '24px', margin: 0, width: "50%", textAlign: "left" }}>{item.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className={styles.toggleButton} onClick={() => toggleDescription("part3")}>
                <span>Return Policy</span>
                <img className={styles.arrowBtn} src={arrowR} alt="v" />
            </div>

            <div className={`${styles.content} ${isExpanded.part3 ? styles.expanded3 : ""}`}>
                <div>
                    <p style={{ padding: "0px" }} ><b>30-Day Return Policy</b></p>
                    <p style={{ padding: "0px" }}>Not loving it? We offer returns for most items within 30 days of delivery for a refund or store credit.</p>
                    <a href="https://www.wayfair.com/help/article/returns/">Learn More</a>
                </div>
            </div>

        </div>
    )
}