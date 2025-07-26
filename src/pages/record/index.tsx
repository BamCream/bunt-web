import './style.scss'

import dateIcon from 'src/assets/images/record/date.svg'
import stadiumIcon from 'src/assets/images/record/stadium.svg'

const Record = () => {
  const recordData = {
    games: 7,
    wins: 4,
    draws: 1,
    losses: 2,
    winRate: 57,
  }

  const matches = [
    {
      id: 1,
      homeTeam: '삼성',
      awayTeam: 'KT',
      date: '2025.07.25',
      stadium: '수원야구장',
      result: '패배',
      resultType: 'loss',
    },
    {
      id: 2,
      homeTeam: 'SSG',
      awayTeam: '삼성',
      date: '2025.07.24',
      stadium: '대구 삼성 라이온즈 파크',
      result: '패배',
      resultType: 'loss',
    },
    {
      id: 3,
      homeTeam: 'SSG',
      awayTeam: '삼성',
      date: '2025.07.23',
      stadium: '대구 삼성 라이온즈 파크',
      result: '승리',
      resultType: 'win',
    },
    {
      id: 4,
      homeTeam: 'SSG',
      awayTeam: '삼성',
      date: '2025.07.22',
      stadium: '대구 삼성 라이온즈 파크',
      result: '승리',
      resultType: 'win',
    },
    {
      id: 5,
      homeTeam: '키움',
      awayTeam: '삼성',
      date: '2025.07.20',
      stadium: '대구 삼성 라이온즈 파크',
      result: '무승부',
      resultType: 'draw',
    },
    {
      id: 6,
      homeTeam: 'SSG',
      awayTeam: '한화',
      date: '2025.07.19',
      stadium: '대전한화생명불파크',
      result: '승리',
      resultType: 'win',
    },
    {
      id: 7,
      homeTeam: 'SSG',
      awayTeam: '한화',
      date: '2025.07.18',
      stadium: '대전한화생명불파크',
      result: '승리',
      resultType: 'win',
    },
  ]

  return (
    <div className="recordPage">
      <div className="header">
        <h1>기록</h1>
        <button className="addBtn">기록 추가</button>
      </div>

      <div className="summary">
        <div>경기</div>
        <div>승</div>
        <div>무</div>
        <div>패</div>
        <div>승률</div>
        <div>{recordData.games}</div>
        <div>{recordData.wins}</div>
        <div>{recordData.draws}</div>
        <div>{recordData.losses}</div>
        <div className="rate">{recordData.winRate}%</div>
      </div>

      <div className="matchList">
        {matches.map((match) => (
          <div key={match.id} className="matchCard">
            <div className="left">
              <div className="teams">
                {match.homeTeam} vs {match.awayTeam}
              </div>
              <div className="details">
                <div className="row">
                  <img src={dateIcon} alt="date" />
                  {match.date}
                </div>
                <div className="row">
                  <img src={stadiumIcon} alt="stadium" />
                  {match.stadium}
                </div>
              </div>
            </div>
            <div className={`result ${match.resultType}`}>{match.result}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Record
