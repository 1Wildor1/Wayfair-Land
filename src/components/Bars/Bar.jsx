import { OtherGoodsData } from "../OtherGoodsData/OtherGoodsData"
import styles from './Bar.module.css';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export function Bar({part}){
    const [allItems, setAllItems] = useState([]);

    const items = OtherGoodsData[`bar${part}`].data || [];
    const titleH2 = items[0].h2
  useEffect(() => {
    // Собираем все товары из bar1, bar2, bar3, bar4
    const mergedItems = [
      ...OtherGoodsData[`bar${part}`].data,
      
    ];
    setAllItems(mergedItems);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <h2>{titleH2}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={7} // Показывать 7 товаров за раз
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },  // Для телефонов
          480: { slidesPerView: 2 },  // Чуть больше, если шире 480px
          768: { slidesPerView: 3 },  // Планшеты
          1024: { slidesPerView: 5 }, // Десктопы средней ширины
          1280: { slidesPerView: 7 }  // Полноценные экраны
        }}
      >
        {allItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.otherGoodsData}>
                                    <img src={item.src} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.price}</span>
                                    <div className={styles.grade}>
                                        <div>
                                            <svg width="22px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5"><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z"></path></svg>
                                            <svg width="22px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5"><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z"></path></svg>
                                            <svg width="22px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5"><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z"></path></svg>
                                            <svg width="22px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5"><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z"></path></svg>
                                            <svg width="22px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" data-rtl-id="reviewsHistogramStar_5"><path d="M12.624 3.433a.667.667 0 00-1.248 0L9.445 8.598a.333.333 0 01-.298.216l-5.508.24a.667.667 0 00-.386 1.188l4.315 3.432c.104.084.149.222.113.35l-1.473 5.314a.667.667 0 001.01.733l4.598-3.043a.333.333 0 01.368 0l4.598 3.044a.667.667 0 001.01-.734l-1.473-5.314a.333.333 0 01.113-.35l4.315-3.432a.667.667 0 00-.386-1.188l-5.508-.24a.333.333 0 01-.298-.216l-1.93-5.165z"></path></svg>
                                        </div>
                                        <p>({item.grade})</p>
                                    </div>
                                    <div className={styles.otherGoodsBtnConteiner}>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}