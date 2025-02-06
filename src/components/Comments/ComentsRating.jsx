import './ComentsRating.css'

export function ComentsRating({reviews}) {
    let totalRev = reviews.five + reviews.four + reviews.three + reviews.two + reviews.one;
    let middleRate =Math.round((reviews.five * 5 + reviews.four * 4 + reviews.three * 3 + reviews.two * 2 + reviews.one) / (totalRev) * 10) / 10;
    let percentPerRev = 100 / totalRev;
  return (
    <div className='comments'>
      <div className="customer_review_title">
        Customer Reviews
      </div>
      <div className="customer_review_rating">
        <div className="customer_review_rating_stars">
            <div className="customer_review_rating_stars_num">
                {middleRate}
            </div>
            <div>
                <div className="customer_review_rating_stars_stars">
                    <ul className="comments_stars" bis_skin_checked="1">
                        <li className='comments_star'></li>
                        <li className='comments_star'></li>
                        <li className='comments_star'></li>
                        <li className='comments_star'></li>
                        <li className='comments_star'></li>
                    </ul>
                </div>
                <div className="customer_review_rating_stars_rev">
                    {totalRev} Reviews
                </div>
            </div>
        </div>
        <div className="customer_review_rating_graph">
            <div className='customer_review_rating_graph_5 customer_review_rating_graph_rate'>
                <div className='customer_review_rating_graph_num'>
                    
                    <div className='comments_star' style={{ height: '18px'}}></div>
                    5
                </div>
                <div className='customer_review_rating_graph_bar'>
                    <div className='customer_review_rating_graph_bar_full' style={{width: (percentPerRev * reviews.five).toString() + '%'}}></div>
                </div>
                <div className='customer_review_rating_graph_rev_num'>
                    {reviews.five}
                </div>
            </div>
            <div className='customer_review_rating_graph_4 customer_review_rating_graph_rate'>
                <div className='customer_review_rating_graph_num'>
                    
                    <div className='comments_star' style={{ height: '18px'}}></div>
                    4
                </div>
                <div className='customer_review_rating_graph_bar'>
                    <div className='customer_review_rating_graph_bar_full' style={{width: (percentPerRev * reviews.four).toString() + '%'}}></div>
                </div>
                <div className='customer_review_rating_graph_rev_num'>
                {reviews.four}
                </div>
            </div>
            <div className='customer_review_rating_graph_3 customer_review_rating_graph_rate'>
                <div className='customer_review_rating_graph_num'>
                    
                    <div className='comments_star' style={{ height: '18px'}}></div>
                    3
                </div>
                <div className='customer_review_rating_graph_bar'>
                    <div className='customer_review_rating_graph_bar_full' style={{width: (percentPerRev * reviews.three).toString() + '%'}}></div>
                </div>
                <div className='customer_review_rating_graph_rev_num'>
                {reviews.three}
                </div>
            </div>
            <div className='customer_review_rating_graph_2 customer_review_rating_graph_rate'>
                <div className='customer_review_rating_graph_num'>
                    
                    <div className='comments_star' style={{ height: '18px'}}></div>
                    2
                </div>
                <div className='customer_review_rating_graph_bar'>
                    <div className='customer_review_rating_graph_bar_full' style={{width: (percentPerRev * reviews.two).toString() + '%'}}></div>
                </div>
                <div className='customer_review_rating_graph_rev_num'>
                {reviews.two}
                </div>
            </div>
            <div className='customer_review_rating_graph_1 customer_review_rating_graph_rate'>
                <div className='customer_review_rating_graph_num'>
                    
                    <div className='comments_star' style={{ height: '18px'}}></div>
                    1
                </div>
                <div className='customer_review_rating_graph_bar'>
                    <div className='customer_review_rating_graph_bar_full' style={{width: (percentPerRev * reviews.one).toString() + '%'}}></div>
                </div>
                <div className='customer_review_rating_graph_rev_num'>
                {reviews.one}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
