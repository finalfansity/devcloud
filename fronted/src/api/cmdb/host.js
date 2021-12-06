import request from '@/api/client'

export function LIST_HOST(params) {
  return request({
    url: '/cmdb/api/v1/hosts',
    method: 'get',
    params: params
  })
}