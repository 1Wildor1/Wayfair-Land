import { useState } from 'react';
import styles from './ImgConteiner.module.css'


export function ImgConteiner({changeContent}) {
    const bigImg = [
      "https://assets.wfcdn.com/im/52699795/resize-h800-w800%5Ecompr-r85/1726/17267092/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      "https://assets.wfcdn.com/im/21735025/resize-h800-w800%5Ecompr-r85/1011/10112476/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      "https://assets.wfcdn.com/im/08022998/resize-h800-w800%5Ecompr-r85/2150/215032787/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      "https://assets.wfcdn.com/im/00388622/resize-h800-w800%5Ecompr-r85/1349/13494291/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      "https://assets.wfcdn.com/im/49639382/resize-h800-w800%5Ecompr-r85/1349/13494277/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      "https://assets.wfcdn.com/im/96731925/resize-h800-w800%5Ecompr-r85/1349/13494254/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      "https://assets.wfcdn.com/im/60179082/resize-h800-w800%5Ecompr-r85/1349/13494244/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
    ];
  
  
    const [currentImg, setCurrentImg] = useState(bigImg[0]); // Текущее изображение
  
    return (
      <div className={styles.imgConteiner}>
        <div className={styles.secondImg}>
          {bigImg.map((img, index) => (
            <button key={index} onMouseEnter={() => setCurrentImg(img)}>
              <img src={img} alt={`Thumbnail ${index + 1}`} style={{ width: 48, height: 48 }} />
            </button>
          ))}
          <button onClick={() => changeContent()} className={styles.listSecondimg}>
            <div className={styles.overlayText}>12+ more</div>
          </button>
        </div>
        <div className={styles.mainImg}>
          <button>
            <img src={currentImg} alt="Main" style={{ maxWidth: "100%", height: "auto" }} />
          </button>
        </div>
      </div>
    );
  }