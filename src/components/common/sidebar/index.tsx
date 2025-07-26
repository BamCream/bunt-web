import { useLocation, useNavigate } from 'react-router-dom'
import HomeIcon from '../../../assets/images/sidebar/home.svg'
import DexIcon from '../../../assets/images/sidebar/dex.svg'
import ProfileIcon from '../../../assets/images/sidebar/profile.svg'
import RecordIcon from '../../../assets/images/sidebar/record.svg'
import UploadIcon from '../../../assets/images/sidebar/upload.svg'
import BuntLogo from '../../../assets/images/sidebar/bunt-logo.svg'
import './style.scss'

const sidebarItems = [
  { icon: HomeIcon, text: '홈', key: '/' },
  { icon: DexIcon, text: '도감', key: '/dex' },
  { icon: RecordIcon, text: '기록', key: '/record' },
  { icon: UploadIcon, text: '업로드', key: '/upload' },
  { icon: ProfileIcon, text: '프로필', key: '/profile' },
]

const Sidebar: React.FC = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="content">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={BuntLogo} alt="Bunt Logo" />
        </div>
        <div className="list">
          {sidebarItems.map(({ icon: IconSrc, text, key }) => (
            <div
              className="elem"
              key={key}
              data-isselected={
                key === '/' ? currentPath === '/' : currentPath.startsWith(key)
              }
              onClick={() => navigate(key)}
            >
              <div className="icon">
                <img src={IconSrc} alt={text} />
              </div>
              <div className="elem-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
