import React from 'react';
import { View, Text } from '@tarojs/components';
import { Thread } from './thread';
import { Loading } from './loading';

import './thread.css';


class ThreadList extends Component {
  static defaultProps = {
    threads: [],
    loading: true
  }
  render() {
    const { loading, threads } = this.props
    if (loading) {
      return <Loading />
    }
    const element = threads.map((thread, index) => {
      return (
        <Thread
          key={thread.id}
          node={thread.node}
          title={thread.title}
          last_modified={thread.last_modified}
          replies={thread.replies}
          tid={thread.id}
          member={thread.member}
        />
      )
    })
    return (
      <View className="thread-list">
        {element}
      </View>
    );
  }
}

export default ThreadList;