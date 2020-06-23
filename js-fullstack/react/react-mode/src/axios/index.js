import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
import Utils from '../utils/utils'
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response)
        } else {
          reject(response.message)
        }
      })
    })
  }

  // 封装方法
  static ajax(options) {
    let loading
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      // console.log(loading)
      loading.style.display = 'block'
    }
    // let baseApi = 'https://www.easy-mock.com/mock/5d19ccfc4d99e5709883efb3/sjjapi'
    let baseApi = ''
    if (options.isMoke) { // 是模拟接口
      baseApi = 'https://www.easy-mock.com/mock/5d19ccfc4d99e5709883efb3/sjjapi'
    } else { // 是后端接口
      baseApi = 'https://www.easy-mock.com/mock/5d19ccfc4d99e5709883efb3/sjjapi'
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        if (response.status === 200) {
          let res = response.data
          if (res.code === 200) {
            resolve(res)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data)
        }
      })
    })
  }

  // 请求列表
  static requestList(_this, url, params, isMoke) {
    var data = {
      params: params,
      isMoke
    }
    this.ajax({
      url,
      data
    }).then((data) => {
      if (data && data.result) {
        let list = data.result.map((item, index) => {
          item.key = index
          return item
        })
        _this.setState({
          list,
          pagination: Utils.pagination(data, (current) => {
            _this.params.page = current
            _this.requestList()
          })
        })
      }
    })
  }
}