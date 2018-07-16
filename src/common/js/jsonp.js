import originJSONP from 'jsonp'

// 使用了jsonp的库，最后一个参数为回调函数
// 拼接url时如果本身带有?，就说明原本就是有参数的，所以要加上&
export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// data有可能是多数对象，当传入2个及以上参数时需要用&连接，但第一个参数不需要&，因此return的时候要删掉&
function param (data) {
  let params = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    params += `&${k}=${encodeURIComponent(value)}`
  }
  return params ? params.substring(1) : ''
}
