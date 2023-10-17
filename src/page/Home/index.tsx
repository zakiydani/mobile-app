import { useNavigate } from 'react-router-dom'
import {
  ACCESS_TOKEN,
  getCookie,
  isTokenValid,
  removeCookie,
} from '../../helpers/cookie'
import '../../styles/index.scss'
import { useEffect } from 'react'
import News from '../../components/news'

const HomePage = () => {
  const navigate = useNavigate()
  console.log(getCookie(ACCESS_TOKEN))

  useEffect(() => {
    if (!isTokenValid(ACCESS_TOKEN)) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onLogout = () => {
    removeCookie()
    navigate('/login')
  }

  return (
    <div className="home-page">
      <div className="header-page">
        <h1>City News</h1>
        <button onClick={() => onLogout()} type="submit">
          Logout
        </button>
      </div>
      <News />
    </div>
  )
}

export default HomePage
