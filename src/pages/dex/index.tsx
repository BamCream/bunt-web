import './style.scss'
import { Select } from '@b1nd/b1nd-dodamdodam-ui'
import { TEAM_LIST } from 'src/constants/team/team.constants'
import { useDex } from 'src/hooks/dict/useDict'
import GoodsCard from '../../components/ui/dex/goodCards'

const Dex = () => {
  const { isSelected, setIsSelected } = useDex()
  return (
    <div className="pageTemplate">
      <div className="titleWrap">
        <h1 className="title">도감</h1>
        <button className="registCodeBtn">코드 등록</button>
      </div>
      <div className="goodsWrap">
        <div className="categoryWrap">
          <Select
            items={TEAM_LIST}
            value={isSelected}
            onChange={setIsSelected}
            zIndex={2}
            customStyle={{ width: '10%' }}
          />
        </div>
        <div className="goodsListWrap">
          {Array.from({ length: 30 }).map((_, index) => (
            <GoodsCard
              key={index}
              imageUrl="https://kbomarket.com/web/product/big/20250320/97ca84111d5abbf59f245c4d24289547.jpg"
              name=""
              isLocked={false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dex
