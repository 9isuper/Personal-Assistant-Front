interface RequestConfig {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  data?: any
  params?: any
}

// Mock 数据
const MOCK_USER = {
  id: 1,
  username: 'admin',
  avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
}

const MOCK_TOKEN = 'mock_token_12345'

// Mock 请求处理
export const mockRequest = (config: RequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (config.url) {
        case '/api/user/login':
          const { username, password } = config.data
          if (username === 'admin' && password === '123456') {
            resolve({
              token: MOCK_TOKEN,
              userInfo: MOCK_USER
            })
          } else {
            reject(new Error('用户名或密码错误'))
          }
          break
        default:
          reject(new Error('接口不存在'))
      }
    }, 300) // 模拟网络延迟
  })
} 