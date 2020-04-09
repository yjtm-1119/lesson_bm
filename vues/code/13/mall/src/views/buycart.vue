<template>
    <div id="buycart">
        <div class='info'>
            <span>30天无忧退货</span>
            <span>48小时快速退款</span>
            <span>满88元免邮费</span>
        </div>
        <div class="list">
            <div class="cartItem" v-for="(item,index) in cartList" :key="index">
                <van-checkbox @change="checkEvent($event,item)" v-model="item.checked"></van-checkbox>
                <van-image
                    fit='cover'
                    width="70"
                    height="70"
                    :src="item.list_pic_url"
                />
                <div class="proBrief">
                    <div class="title">
                        
                        <span>{{item.goods_name}}</span> 
                        <span class="num">X{{item.number}}</span>
                        </div>
                    <p class="brief">{{item.goods_specifition_name_value}}</p>
                    <p class="price">￥ {{item.retail_price}}</p>
                </div>
            </div>
        </div>
        <van-submit-bar
            :price="cartTotal.checkedGoodsAmount*100"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checkedAll">全选</van-checkbox>
            
        </van-submit-bar>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios'
let mapStateObj = mapState(['cartTotal','cartList'])
export default {
    data(){
        return {
            checked:true
        }
    },
    computed:{
        checkedAll:{
            set(val){
                console.log(val,'设置全选')
            },
            get(){
                if(this.cartTotal.goodsCount==this.cartTotal.checkedGoodsCount){
                    return true;
                }else{
                    return false;
                }
            }
        },
        ...mapStateObj,
    },
    created(){
        this.$store.dispatch('AjaxCart')
    },
    mounted(){
        console.log(this.cartList)
    },
    methods:{
        onSubmit:function(){

        },
        checkEvent:async function(event,item){
            console.log(item)
            let res = await axios.post(this.$root.api.CartChecked,{isChecked: Number(event),productIds: item.product_id})
            let data = res.data.data
            console.log(data)
            this.$store.commit('setCarList',data.cartList),
            this.$store.commit('setCartTotal',data.cartTotal)
            this.$forceUpdate()
        }
    }

}
</script>

<style lang="less">
    #buycart{
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
        .cartItem{
            padding: 0 5px;
            display: flex;
            align-items: center;
            padding: 10px 5px;
            .van-checkbox{
                margin: 0 5px;
            }
            .van-image{
                background: #efefef;
            }
            .proBrief{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                height: 70px;
                padding: 0 10px;
                .title{
                    width: 100%;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                }
                .brief{
                    color: #999;
                    font-size: 12px;
                }
            }

        }
    }

</style>