import './style.scss'
import { Select } from '@b1nd/b1nd-dodamdodam-ui'
import { TEAM_LIST } from 'src/constants/team/team.constants'
import { useState } from 'react'

const Profile = () => {
  const [team, setTeam] = useState(TEAM_LIST[0])
  const [isSelected, setIsSelected] = useState<boolean>(true)

  const dexItems = [
    { id: 1, name: "Men's Los Angeles", unlocked: false },
    { id: 2, name: "Men's Los Angeles", unlocked: true },
    { id: 3, name: "Men's Los Angeles", unlocked: false },
    { id: 4, name: "Men's Los Angeles", unlocked: true },
    { id: 5, name: "Men's Los Angeles", unlocked: false },
    { id: 6, name: "Men's Los Angeles", unlocked: true },
  ]

  return (
    <div className="profilePage">
      <section className="profileSection">
        <div className="avatar" />
        <div className="info">
          <div className="name">대소고 카사노바</div>
          <div className="team"># 삼성라이온즈</div>
        </div>
        <div className="tabs">
          <button
            className={isSelected ? 'selected' : ''}
            onClick={() => setIsSelected(true)}
          >
            게시물
          </button>
          <button
            className={!isSelected ? 'selected' : ''}
            onClick={() => setIsSelected(false)}
          >
            스탯
          </button>
        </div>
      </section>

      {isSelected ? (
        <section className="postGridSection">
          <div className="postGrid">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="postPlaceholder" />
            ))}
          </div>
        </section>
      ) : (
        <>
          <section className="recordSection">
            <h2>올해 현장 직관</h2>
            <div className="recordBox">
              <div className="header">
                <span>경기</span>
                <span>승</span>
                <span>무</span>
                <span>패</span>
                <span>승률</span>
              </div>
              <div className="data">
                <span>20</span>
                <span>20</span>
                <span>0</span>
                <span>0</span>
                <span className="winRate">100%</span>
              </div>
            </div>
          </section>

          <section className="dexSection">
            <h2>나의 도감</h2>
            <div className="dexFilter">
              <div className="categoryBtns">
                <button>모자</button>
                <button>유니폼</button>
                <button>기타</button>
              </div>
              <Select
                items={TEAM_LIST}
                value={team}
                onChange={setTeam}
                customStyle={{ width: '140px' }}
              />
            </div>

            <div className="dexGrid">
              {dexItems
                .filter((item) => item.unlocked)
                .map((item) => (
                  <div key={item.id} className="dexCard">
                    <img src="https://kbomarket.com/web/product/big/20250320/97ca84111d5abbf59f245c4d24289547.jpg" />
                    <div className="title">{item.name}</div>
                    <div className="desc">엄청난 모자입니다.</div>
                    <div className="status">🔓 잠금해제 했습니다.</div>
                  </div>
                ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Profile
