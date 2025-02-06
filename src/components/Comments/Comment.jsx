import "./Comment.css";

export function Comment({ comment }) {
  return (
    <div className="comment">
    <div className="comment_photo">
      <img className="photo" src={comment.photo}/>
    </div>
      <div className="comment_block">
        
      <div className="comment_header">
        <div className="comment_header_info">
        <div className="comment_header_stars">
          <ul className="comment_stars" bis_skin_checked="1">
            <li className="comment_star"></li>
            <li className="comment_star"></li>
            <li className="comment_star"></li>
            <li className="comment_star"></li>
            <li className="comment_star"></li>
          </ul>
        </div>
          <div className="comment_header_name">{comment.name}</div>
          <div className="comment_header_verified">Verified Buyer</div>
        </div>
        
        <div className="comment_header_date">{comment.date}</div>
      </div>
      <div className="comment_text">{comment.text}</div>
      </div>
    </div>
  );
}
