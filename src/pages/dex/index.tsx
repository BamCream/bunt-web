import './style.scss'
import { Select } from '@b1nd/b1nd-dodamdodam-ui'
import { TEAM_LIST } from 'src/constants/team/team.constants'
import { useDex } from 'src/hooks/dict/useDict'
import GoodsCard from 'src/components/ui/dex/goodCards'

const Dex = () => {
  const { isSelected, setIsSelected } = useDex()

  const categories = ['모자', '유니폼', '기타']

  return (
    <div className="dexPage">
      <div className="dexHeader">
        <h1>도감</h1>
        <button className="codeButton">코드 등록</button>
      </div>

      <div className="filterSection">
        <Select
          items={TEAM_LIST}
          value={isSelected}
          onChange={setIsSelected}
          zIndex={2}
          customStyle={{ width: '140px' }}
        />
      </div>

      <div className="goodsGrid">
        {Array.from({ length: 12 }).map((_, index) => (
          <GoodsCard
            key={index}
            imageUrl="https://kbomarket.com/web/product/big/20250320/97ca84111d5abbf59f245c4d24289547.jpg"
            name="Men's Los Angeles Dodgers Hat"
            isLocked={index % 3 === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default Dex
