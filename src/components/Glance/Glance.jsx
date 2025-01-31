import styles from './Glance.module.css'


export function Glance() {
   
    return (
        <>
            <h2>At a Glance</h2>
            <div className={styles.glanceConteiner}>
                <div style={{ margin: "0 50px 0 0" }}>
                    <div className={styles.discountContainer}>
                        <img src="https://assets.wfcdn.com/im/98831238/resize-h32-w32%5Ecompr-r85/9636/96363589/default_name.png" alt="" />
                        <p>BPA Free</p>
                    </div>
                    <div className={styles.discountContainer}>
                        <img src="https://assets.wfcdn.com/im/94738300/resize-h32-w32%5Ecompr-r85/1288/128858515/default_name.png" alt="" />
                        <p>Total Number of Pieces Included: 3</p>
                    </div>
                </div>
                <div>
                    <div className={styles.discountContainer}>
                        <img src="https://assets.wfcdn.com/im/54198816/resize-h32-w32%5Ecompr-r85/7378/73788448/default_name.png" alt="" />
                        <p>Hand Wash Only</p>
                    </div>
                    <div className={styles.discountContainer}>
                        <img src="https://assets.wfcdn.com/im/12773829/resize-h32-w32%5Ecompr-r85/1124/112415813/default_name.png" alt="" />
                        <p>Nesting Bowls</p>
                    </div>
                </div>
            </div>
        </>
    )
}