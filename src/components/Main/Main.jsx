import { useState } from "react";
import { Product } from "../Product/Product";
import styles from './Main.module.css'
import { OtherGoods } from "../OtherGoods/OtherGoods";
import { Comments} from "../Comments/Comments"

export function Main({changeContent}){

    
    return(
        <div className={styles.main}>
            <Product changeContent={changeContent}></Product>
            <OtherGoods/>
            <Comments/>
        </div>
    )
}