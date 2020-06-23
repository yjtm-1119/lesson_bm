import React from 'react'
import Utils from '../../utils/utils'
import {Table} from 'antd'
import  "./index.less"
export default class ETable extends React.Component {

    // 点击行
    onRowClick = (record, index) => {
        let rowSelection = this.props.rowSelection
        if (rowSelection === 'checkbox') {
            let selectedRowKeys = this.props.selectedRowKeys
            let selectedItem = this.props.selectedItem
            let selectedIds = this.props.selectedIds
            if (selectedIds) {
                const i = selectedIds.indexOf(record.id)
                if (i === -1) {
                    selectedIds.push(record.id)
                    selectedRowKeys.push(index)
                    selectedItem.push(record)
                } else {
                    selectedIds.splice(i, 1)
                    selectedItem.splice(i, 1)
                    selectedRowKeys.splice(i, 1)
                }
            } else {
                selectedIds = [record.id]
                selectedRowKeys = [index]
                selectedItem = [record]
            }
            this.props.updateSelectedItem(selectedRowKeys, selectedItem, selectedIds)
        } else {
            let selectedRowKeys = [index]
            let selectedItem = record
            this.props.updateSelectedItem(selectedRowKeys, selectedItem)
        }
    }

    // 初始化方法
    tableInit =() => {
        let row_selection = this.props.rowSelection // 单双选
        let selectedRowKeys = this.props.selectedRowKeys
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange
        }
        if (row_selection === false || row_selection === null) {
            row_selection = false
        } else if (row_selection === 'checkbox') {
            rowSelection.type = 'checkbox'
        } else {
            row_selection = 'radio'
        }

        return <Table
            { ...this.props }
            // columns={columns} // 列
            // dataSource={this.state.list} // 数据
            bordered // 边框
            // pagination={this.state.pagination} // 分页
            rowSelection={row_selection ? rowSelection : null}
            onRow={(record, index) => {
                return {
                  onClick: () => {
                    if (!row_selection) {
                        return
                    }
                    this.onRowClick(record, index)
                  }
                }
              }}
            />
    }

    render() {
        return(
            <div>
                { this.tableInit() }
            </div>
        )
    }
}