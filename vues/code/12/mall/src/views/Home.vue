<template>
  <div id="home" class="home">
    <van-search placeholder="商品搜索 共239万款好物" input-align='center' v-model="searchData" />
    <van-swipe :autoplay="3000" :width="375" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="swiperimg" v-lazy="image.image_url" />
      </van-swipe-item>
    </van-swipe>

    <!-- 5个图标 -->
    <van-grid :column-num='5'>
      <van-grid-item v-for="(item,index) in channel"  :key="index" :icon="item.icon_url" :text="item.name" />
    </van-grid>
    
    <!-- 品牌制造商直供 -->
    <div class="brandlist">
      <van-panel title="品牌制造商直供">
        <van-grid  :column-num="2">
          <van-grid-item v-for="(item1,index1) in brandList" :key="index1">
            <van-image fit="cover" lazy-load :src="item1.new_pic_url" />
            <h4 class="title">{{item1.name}}</h4>
            <p class="price">{{item1.floor_price}}元起</p>
          </van-grid-item>
          
        </van-grid>
      </van-panel>
    </div>

    <!-- 新品首发 -->
    <div class="newlist">
      <van-panel title="品牌制造商直供">
        <van-grid  :column-num="2">
          <van-grid-item v-for="(item2,index2) in newGoodsList" :key="index2">
            <van-image fit="cover" lazy-load :src="item2.list_pic_url" />
            <h4 class="title" >{{item2.name}}</h4>
            <p class="price">{{item2.retail_price}}元起</p>
          </van-grid-item>
          
        </van-grid>
      </van-panel>
    </div>


    <!-- 人气面板 -->
    <div class="hotlist">
      <van-panel title="人气推荐">
        <van-card v-for="(item3,index3) in hotGoodsList" :key="index3"
          :price="item3.retail_price"
          :desc="item3.goods_brief"
          :title="item3.name"
          :thumb="item3.list_pic_url"
        />
      </van-panel>
    </div>
    <div style="height:50px;"></div>
    <tab-btn></tab-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import api from '../assets/config/api'
import Vue from 'vue';
import { Lazyload } from 'vant';
import tabBtn from '@/components/tabBtn.vue'
Vue.use(Lazyload);
export default {
  name: 'home',
  data:function(){
    return {
      searchData:"",
      
      data:{},
      tabActive:0
      
    }
  },
  computed: {
    images:function(){
      if(typeof this.data.banner=='object'){
        return this.data.banner
      }else{
        return []
      }
    },
    channel:function(){
      if(typeof this.data.channel=='object'){
        return this.data.channel
      }else{
        return []
      }
    },
    brandList:function(){
      if(typeof this.data.brandList=='object'){
        return this.data.brandList
      }else{
        return []
      }
    },
    newGoodsList:function(){
      if(typeof this.data.newGoodsList=='object'){
        return this.data.newGoodsList
      }else{
        return []
      }
    },
    hotGoodsList:function(){
      if(typeof this.data.hotGoodsList=='object'){
        return this.data.hotGoodsList
      }else{
        return []
      }
    },
  },
  components: {
    tabBtn
  },
  async mounted() {
    //console.log(api)
    let res = await axios.get(api.IndexUrl)
    //console.log(res.data)
    this.data = res.data.data;
  },
}
</script>


<style lang="less">
  #home{
    .van-grid-item{
      overflow: hidden;
    }
    .swiperimg{
      width: 375px;
      height: 200px;
    }
    .brandlist{
      .van-grid-item__content{
        padding: 0;
      }
      .van-image{
        border: 1px solid #fff;
      }
      .title{
        position: absolute;
        top: 20px;
        left: 10px;
       
      }
      .price{
        position: absolute;
        top: 40px;
        left: 10px;
        font-size: 14px;
        color:#999 ;
      }
    }
    .newlist{
      
      .title{
        
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price{
        
        font-size: 14px;
        color:#999 ;
      }
    }
    
    .hotlist{
      .van-card__content{
        justify-content: center;
        text-align:left;
      }
      .van-card__title{
        font-weight: 900;
        color: #333;
        font-size: 14px;
        padding: 5px 0;
      }
      .van-card__price{
        color: red;
      }
    }
  }
</style>