import { AES, enc } from 'crypto-js'
import Cookie from 'js-cookie'

interface DataLogin {
  phoneNumber: number
  password: string
  token: string
}

interface CookiesData {
  key: string
  data: DataLogin
  expiresIn: number
}

export const ACCESS_TOKEN = 'accessToken'

export const setCookie = ({ key, data, expiresIn }: CookiesData) => {
  const expirationDate = new Date(
    new Date().getTime() + Number(expiresIn) * 1000
  )
  const encryptAccessToken = AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SECRET_KEY as string
  ).toString()
  Cookie.set(key, encryptAccessToken, {
    sameSite: 'strict',
    path: '/',
    expires: expirationDate,
  })
}

export const removeCookie = () => {
  Cookie.remove(ACCESS_TOKEN)
}

export const getCookie = (key: string = Cookie.get(ACCESS_TOKEN) as string) => {
  const cookie = Cookie.get(key)
  if (!cookie) {
    return null
  }
  try {
    const decryptToken = JSON.parse(
      AES.decrypt(
        String(cookie),
        process.env.REACT_APP_SECRET_KEY as string
      ).toString(enc.Utf8)
    )
    return decryptToken
  } catch (error) {
    console.error(error)
    return null
  }
}
export const isTokenValid = (key = Cookie.get(ACCESS_TOKEN)) => {
  const cookieData = getCookie(key)
  return Boolean(cookieData && cookieData?.token)
}
