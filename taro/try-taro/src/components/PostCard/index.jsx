import Taro from '@tarojs/taro'; // taro react
import { View } from '@tarojs/components'; // antd 
import './index.scss';

export default function PostCard(props) {
  return (
    <View className="postcard">
      <View className="post-title">{props.title}</View>
      <View className="post-content">{props.content}</View>
    </View>
  )
}