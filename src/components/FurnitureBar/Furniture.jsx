import { useState, useEffect } from 'react';
import styles from './Furniture.module.css';
import { menuData, images } from '../StaticDataforHeader/StaticDataforHeader';

export function Furniture({ linkTitle, showPopUpHeader }) {
    const [categories, setCategories] = useState([]);
    const [imagesOutdoor, setImagesOutdoor] = useState([]);

    useEffect(() => {
        setCategories(menuData[linkTitle].categories);
        setImagesOutdoor(images[linkTitle].img);

    }, [linkTitle]); // Добавили useEffect, чтобы отслеживать изменения linkTitle

    return (
        <div onMouseLeave={showPopUpHeader} className={styles.menu}>
            <div className={styles.categories}>
                {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category, index) => (
                        <div key={index} className={styles.category}>
                            <h3 className={category.isBold ? styles.bold : ""}>{category.title}</h3>
                            {Array.isArray(category.subcategories) && category.subcategories.length > 0 && (
                                <ul>
                                    {category.subcategories.map((sub, idx) => (
                                        <li key={idx}><a href="#">{sub}</a></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No categories available</p>
                )}
            </div>
            <div className={styles.images}>
                {imagesOutdoor.map((img, idx) => (
                    <div key={idx} className={styles.imageCard}>
                        <img src={img.src} alt={img.alt} />
                        <p>{img.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
