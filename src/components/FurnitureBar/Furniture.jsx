import { useState, useEffect } from 'react';
import styles from './Furniture.module.css';
import { menuData, images } from '../StaticDataforHeader/StaticDataforHeader';

export function Furniture({ linkTitle, showPopUpHeader }) {
    const [categories, setCategories] = useState([]);
    const [imagesOutdoor, setImagesOutdoor] = useState([]);
    const [imageClass, setImageClass] = useState(styles.images);

    useEffect(() => {
        const newCategories = menuData[linkTitle]?.categories || [];
        const newImages = images[linkTitle]?.img || [];

        setCategories(newCategories);
        setImagesOutdoor(newImages);

        const hasSmallImages = newImages.some(img => img.imgSize);
        
        setImageClass(hasSmallImages ? styles.onlyImg : styles.images);

    }, [linkTitle]); // Добавили useEffect, чтобы отслеживать изменения linkTitle

    return (
        
        <div onMouseLeave={showPopUpHeader} className={imageClass === styles.images ? styles.menu : styles.menuOnlyImg}>
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
                    ""
                )}
            </div>
            <div className={imageClass}>
                {imagesOutdoor.map((img, idx) => (
            <div className={styles.imageCard}>
              <img 
                style={{ width: img.imgSize ? "230px" : "340px" }} 
                src={img.src} 
                alt={img.alt} 
              />
              <p>{img.text}</p>
            </div>
                ))}
          </div>
        </div>
    );
}
