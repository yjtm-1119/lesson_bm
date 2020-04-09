<template>
    <div id="product">
        <van-nav-bar
            title="商品"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="swipeImg" v-lazy="image.img_url" />
            </van-swipe-item>
        </van-swipe>

        <div class='info'>
            <span>30天无忧退货</span>
            <span>48小时快速退款</span>
            <span>满88元免邮费</span>
        </div>


        <div class="proInfo">
            <h3 class="title">{{info.name}}</h3>
            <p class="brief">{{info.goods_brief}}</p>
            <p class="price">￥{{info.retail_price}}</p>
        </div>
        <van-cell title="请选择规格数量" is-link />

        <!-- 商品参数 -->
        <div class="proParams">
            <h3>商品参数</h3>
            <div class="proItem" v-for="(item1,index1) in attribute" :key="index1">
                <span class="title">{{item1.name}}</span>
                <span class="value">{{item1.value}}</span>
            </div>
        </div>

        <!-- 商品详情 -->
        <div class="proDetail" v-html="info.goods_desc">

        </div>


        <van-goods-action>
            <van-goods-action-icon to="/buycart" :info="$store.state.cartTotal.goodsCount==0?'':$store.state.cartTotal.goodsCount" icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star-o" text="已收藏"  />
            <van-goods-action-button @click="chooseSku" type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>

        <!-- 选择商品规格 -->
        <van-sku
            v-model="showSku"
            :sku="sku"
            :goods="goods"
            
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            />
    </div>
</template>


<script>
import axios from 'axios'

let sku = {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      v: [
        {
          id: '30349', // skuValueId：规格值 id
          name: '红色', // skuValueName：规格值名称
          
        },
        {
          id: '1215',
          name: '蓝色',
          
        }
      ],
      k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 2259, // skuId，下单时后端需要
      price: 100, // 价格（单位分）
      's-1': '2', // 规格类目 k_s 为 s1 的对应规格值 id
      's-2': '3', // 规格类目 k_s 为 s2 的对应规格值 id
      stock_num: 110 // 当前 sku 组合对应的库存
    },
    {
      id: 2259, // skuId，下单时后端需要
      price: 100, // 价格（单位分）
      's-1': '1', // 规格类目 k_s 为 s1 的对应规格值 id
      's-2': '4', // 规格类目 k_s 为 s2 的对应规格值 id
      stock_num: 130 // 当前 sku 组合对应的库存
    }
  ],
  price: '1.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  
  
}
export default {
    props:['id'],
    data(){
        return {
            data:{},
            info:{},
            attribute:[],
            showSku:false,
            sku:sku,
            goods: {
                // 商品标题
                title: '测试商品',
                // 默认商品 sku 缩略图
                picture: 'https://img.yzcdn.cn/1.jpg'
            }
            
        }
    },
    methods:{
        onClickLeft:function(){
            this.$router.go(-1);
        },
        onBuyClicked:function(){
            // 将当前的内容提交到订单页
        },
        async onAddCartClicked(skuData){
            //console.log(123)
            //获取选中的商品，并且提交到后端的购车API里
            //选择商品规格，并提交到购物车
            this.showSku = false;
            console.log(skuData)
            let chooseContent = skuData.selectedSkuComb['s-1']+'_'+skuData.selectedSkuComb['s-2']
            //console.log(chooseContent)
            let resultPro = this.data.productList.filter((item,index)=>{

                if(item.goods_specification_ids==chooseContent){
                    return true
                }else{
                    return false
                }
            })
            console.log(resultPro)

            let cartRes = await axios.post(this.$root.api.CartAdd,{ goodsId:resultPro[0].goods_id , number: skuData.selectedNum, productId: resultPro[0].id })
            let data = cartRes.data.data
            console.log(cartRes.data)

            this.$store.commit('setCarList',data.cartList),
            this.$store.commit('setCartTotal',data.cartTotal)
        },
        chooseSku(){
            this.showSku = true;
        }

    },
    computed:{
        images:function(){
            if(this.data.gallery==undefined){
                return []
            }else{
                return this.data.gallery;
            }
        }
    },
    async created(){
        this.$store.dispatch('AjaxCart');
       let res = await axios.get(this.$root.api.GoodsDetail,{params:{id:this.id}})
       console.log(res.data)
       this.data = res.data.data;
       this.info = this.data.info;
       this.attribute = this.data.attribute;
       this.goods.picture = this.info.primary_pic_url;
       this.goods.title = this.info.name;
       this.sku.price = this.info.retail_price;
       this.sku.stock_num = this.info.goods_number;
       let tree = []
       this.data.specificationList.forEach((item,index)=>{
           let arr = []
           item.valueList.forEach((product,i)=>{
               arr.push({
                    id: product.id, // skuValueId：规格值 id
                    name: product.value, // skuValueName：规格值名称
                })
           })
           tree.push({
                k: item.name, // skuKeyName：规格类目名称
                v: arr,
                k_s: "s-"+item.specification_id // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            })
       })
       this.sku.tree = tree;
       
    }
}
</script>

<style lang="less">
    #product{
        .swipeImg{
            width: 100%;
        }
        .info{
            display: flex;
            justify-content: space-around;
            font-size: 12px;
            color: #999;
            height: 24px;
            line-height: 24px;
            background: #efefef;
            span{
                position: relative;
            }
            span::before{
                content:"";
                display: block;
                position: absolute;
                left: -10px;
                top: 8px;
                width: 4px;
                height: 4px;
                border-radius: 2px;
                border: 1px solid red;

            }
        }
        .proInfo{
            .title{
                font-weight: 500;
                padding:10px 0 5px;
            }
            .brief{
                font-size: 12px;
                color: #999;
                padding: 3px;
            }
            .price{
                font-size: 16px;
                color: red;
                padding: 5px;
            }
        }
        .van-cell__title{
            text-align: left;
        }
        .proParams{
            padding-bottom: 20px;
            h3{
                padding: 10px 0;
            }
            .proItem{
                width: 90%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                height: 24px;
                color: #999;
                font-size: 12px;
                background: #efefef;
                line-height: 24px;
                text-align: left;
                span.title{
                    width:45px;
                    padding: 0 10px;
                    border-right: 1px solid #ccc;
                }
                span.value{
                    width: 260px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            
            
        }
        .proDetail{
            width: 100%;
            img{
                width: 100%
            }
            p{
                margin: 0;
                padding: 0;
                display: flex;
            }
        }
        
    }
    

</style>