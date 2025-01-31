import { useState } from "react";
import { Product } from "../Product/Product";
import styles from './Main.module.css'

export function Main({changeContent}){

    
    return(
        <div className={styles.main}>
            <Product changeContent={changeContent}></Product>
        </div>
    )
}