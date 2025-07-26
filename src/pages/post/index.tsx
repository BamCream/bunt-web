import { useNavigate, useParams } from 'react-router-dom'
import { posts } from '../../constants/post/posts'
import './style.scss'

const PostDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const post = posts.find((p) => p.id === Number(id))

  if (!post)
    return <div className="post-detail__empty">게시글이 존재하지 않습니다.</div>

  return (
    <div className="post-detail__wrapper">
      <div className="post-detail__container">
        <button className="post-detail__back" onClick={() => navigate(-1)}>
          ← 뒤로가기
        </button>
        <div className="post-detail__content-wrapper">
          <div className="post-detail__image-box">
            <img
              src={post.image}
              alt={post.title}
              className="post-detail__image"
            />
          </div>
          <div className="post-detail__content">
            <h2 className="post-detail__title">{post.title}</h2>
            <span className="post-detail__hashtag">
              #{post.title.replace(/\s/g, '')}
            </span>
            <p className="post-detail__text">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
