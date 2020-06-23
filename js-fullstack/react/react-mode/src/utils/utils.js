import React from 'react'
import { Select } from 'antd'
const Option = Select.Option
export default {
  // 时间倒计时封装
  formateDate(time) {
    if (!(time)) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds()
  },
  // 分页封装
  pagination(data, callback) {
    return {
      onChange: (current) => {
        callback(current)
      },
      current: data.page,
      pageSize: data.pageSize,
      total: data.totalCount,
      showTotal:()=> {
        return `共${data.totalCount}条数据`
      },
      showQuickJumper: true
    }
  },

  // 搜索封装
  getOptionList(data) {
    if (!data) {
      return []
    }
    // let options = [<Option value="0" key="all_key">全部</Option>]
    let options = []
    data.map((item) => {
      options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options
  },

  /**
   * ETable 行点击通用函数
   * @param {*选中行的索引} selectedRowKeys
   * @param {*选中行对象} selectedItem
   * @param {*单选还是双选} selectedIds
   */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  }

}