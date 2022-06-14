import requset from '@/request'
export const userlogin = data =>
  requset({
    url: '/v1_0/authorizations',
    method: 'POST',
    data
  })
export const getAllList = () =>
  requset({
    url: '/v1_0/channels',
    method: 'GET'
  })
// data有两个参数channel_id   timestamp
export const getAllListAPI = (id, time) =>
  requset({
    url: '/v1_0/articles',
    method: 'GET',
    params: {
      channel_id: id,
      timestamp: time
    }
  })
export const dislikeArticleAPI = target =>
  requset({
    url: '/v1_0/article/dislikes',
    method: 'POST',
    data: { target }
  })

export const reportArticleAPI = (target, type) =>
  requset({
    url: '/v1_0/article/reports',
    method: 'POST',
    data: {
      target,
      type
    }
  })