import './style.scss'

interface GoodsCardProps {
  imageUrl: string
  name: string
  isLocked: boolean
}

const GoodsCard = ({ imageUrl, name, isLocked }: GoodsCardProps) => {
  return (
    <div className={`goodsContainer ${isLocked ? 'locked' : ''}`}>
      <img src={imageUrl} alt={name} />
      <div className="goodsInfo">
        <h3>{name}</h3>
        <p>{isLocked ? '🔒 열지 못했습니다.' : '🔓 잠금해제 했습니다.'}</p>
      </div>
    </div>
  )
}

export default GoodsCard
