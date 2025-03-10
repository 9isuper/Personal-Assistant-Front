// 登录参数类型
export interface LoginParams {
  username: string
  password: string
}

// 登录响应类型
export interface LoginResponse {
  token: string
  userInfo: {
    id: number
    username: string
    avatar?: string
  }
}

// 用户信息类型
export interface UserInfo {
  id: number
  username: string
  avatar?: string
} 