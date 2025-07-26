import { useNavigate } from 'react-router-dom'
import { posts } from '../../constants/post/posts'
import './style.scss'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="homePage">
      <h1 className="home">홈</h1>
      <div className="postGrid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="postCard"
            onClick={() => navigate(`/post/${post.id}`)}
          >
            <div className="username">@{post.username}</div>
            <img src={post.image} alt="post" className="postImage" />
            <div className="postTitle">{post.title}</div>
            <div className="postContent">
              {post.content.length > 150
                ? `${post.content.slice(0, 150)}...`
                : post.content}
            </div>
            <div className="postDate">{post.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
