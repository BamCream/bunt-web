import { useMutation } from '@tanstack/react-query'
import { login } from 'src/api/login/login.api'
import { Token } from 'src/libs/token/session'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from 'src/constants/token/token.constants'
import { path } from 'src/constants/path/path'
import { Toast } from 'src/libs/toast'
import { useNavigate } from 'react-router-dom'
import { Login } from 'src/types/login/login.type'

export const useLoginQuery = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (loginData: Login) => login(loginData),
    onSuccess: (data) => {
      Token.setToken(ACCESS_TOKEN, data.data.accessToken)
      Token.setToken(REFRESH_TOKEN, data.data.refreshToken)
      Toast('success', '로그인 성공')
      // 상수형으로 적절한 경로로 수정
      navigate('/')
    },
    onError: () => {
      Toast('error', '정보를 다시 확인해주세요!')
    },
  })
}
