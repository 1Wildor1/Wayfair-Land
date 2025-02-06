import { ComentsRating } from './ComentsRating.jsx'
import { Comment } from './Comment.jsx'
import './Comments.css'
import { reviews } from '../../utils/Configs.ts'
import { comments } from '../../utils/Configs.ts'

export function Comments() {

  return (
       <div className='comments_block'>
        <ComentsRating reviews={reviews}></ComentsRating>
        {comments.map(c => <Comment comment={c}></Comment>)}
       </div>
  )
}