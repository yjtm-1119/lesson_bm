import Taro, { eventCenter } from '@tarojs/taro'
import React from 'react'
import { View, Text, Navigator, Image } from '@tarojs/components'

import api from '../utils/api'
import { timeagoInst, Thread_DETAIL_NAVIGATE } from '../utils'

class Thread extends React.Component {

  handleNavigate = () => {
    const { tid, not_navi } = this.props
    if (not_navi) {
      return
    }
    eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props)
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/thread_detail/thread_detail'
    })
  }

  render() {
    const { title, member, last_modified, replies, node, not_navi } = this.props
    const time = timeagoInst.format(last_modified * 1000, 'zh')
    const usernameCls = `author ${not_navi ? 'bold' : ''}`

    return (
      <View className='thread' onClick={this.handleNavigate}>
        <View className='info'>
          <View>
            <Image src={member.avatar_large} className='avatar' />
          </View>
          <View className='middle'>
            <View className={usernameCls}>
              {member.username}
            </View>
            <View className='replies'>
              <Text className='mr10'>
                {time}
              </Text>
              <Text>
                评论 {replies}
              </Text>
            </View>
          </View>
          <View className='node'>
            <Text className='tag'>
              {node.title}
            </Text>
          </View>
        </View>
        <Text className='title'>
          {title}
        </Text>
      </View>
    )
  }
}

export { Thread }