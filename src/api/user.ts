import { mockRequest } from '@/utils/request'
import type { LoginParams, LoginResponse } from '@/types/user'

// 登录
export const login = (data: LoginParams): Promise<LoginResponse> => {
  return mockRequest({
    url: '/api/user/login',
    method: 'post',
    data
  })
} 