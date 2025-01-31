import './MoreImg.css'
export function MoreImg({changeContent}){
    const ArrImg = [
        "https://assets.wfcdn.com/im/52699795/resize-h800-w800%5Ecompr-r85/1726/17267092/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/21735025/resize-h800-w800%5Ecompr-r85/1011/10112476/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/08022998/resize-h800-w800%5Ecompr-r85/2150/215032787/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/00388622/resize-h800-w800%5Ecompr-r85/1349/13494291/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/49639382/resize-h800-w800%5Ecompr-r85/1349/13494277/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/96731925/resize-h800-w800%5Ecompr-r85/1349/13494254/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/60179082/resize-h800-w800%5Ecompr-r85/1349/13494244/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/22279235/resize-h800-w800%5Ecompr-r85/1349/13494229/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/10540554/resize-h800-w800%5Ecompr-r85/1011/10112480/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/55787764/resize-h800-w800%5Ecompr-r85/1011/10112479/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/33085938/resize-h800-w800%5Ecompr-r85/1011/10112477/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/54299542/resize-h800-w800%5Ecompr-r85/6189/61894694/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/17862763/resize-h800-w800%5Ecompr-r85/6122/61221165/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/93840840/resize-h800-w800%5Ecompr-r85/6188/61888246/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/14678828/resize-h800-w800%5Ecompr-r85/2150/215032785/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/26029741/resize-h800-w800%5Ecompr-r85/2150/215032784/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/37380654/resize-h800-w800%5Ecompr-r85/2150/215032783/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
        "https://assets.wfcdn.com/im/48731567/resize-h800-w800%5Ecompr-r85/2150/215032782/Good+Grips+3+Piece+Mixing+Bowl+Set.jpg",
      ];
    return(
        
      <div className='moreImgConteiner'>
      <div>
        <div className='moreImgHeader'>
          <div onClick={ () =>{changeContent()}} className='exit-button'>X</div>
          <h2 className='title'>Good Grips 3 Piece Mixing Bowl Set</h2>
        </div>
      <div>
      {ArrImg.map((img, index) => (
          <div key={index} onMouseEnter={() => setCurrentImg(img)}>
            <img src={img} alt={`Thumbnail ${index + 1}`} style={{ width: 800, height: 800 }} />
          </div>
        ))}
      </div>
      </div>
    </div>
   
    )
}