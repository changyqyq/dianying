import axios from 'axios'

const api = {
  home: {
    banner: () => axios.get('/api/position/detail', {
      params: {
        positionIds: 1382,
        channelId: 70001,
        clientType: 'wechat_small_program'
      }
    }),
    jing: () => axios.get('/api/position/detail', {
      params: {
        positionIds: 1155,
        channelId: 70001,
        clientType: 'wechat_small_program'
      }
    }),
    lists: () => axios.get('/api/position/detail', {
      params: {
        positionIds: 1333,
        channelId: 70001,
        clientType: 'wechat_small_program'
      }
    })
  }
}

export default api
