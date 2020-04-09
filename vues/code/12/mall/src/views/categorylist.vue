<template>
    <div id="categoryList">
        <van-tabs v-model="tabActive">
            <van-tab v-for="(item,index) in clist" 
            :key="index"
            :title="item.name">
            <h3>{{item.name}}</h3>
            <p>{{item.front_name}}</p>
            <div v-if="item.plist">
            <van-grid :border="true" :column-num="2">
                
                    <van-grid-item   v-for="(item1,index1) in item.plist.data" :to="'/product/'+item1.id" :key="index1">
                        <van-image
                            width="100"
                            height="100"
                            :src="item1.list_pic_url"
                            />
                        <h4 class="van-ellipsis">{{item1.name}}</h4>
                        <p class="price">¥{{item1.retail_price}}</p>
                        
                    </van-grid-item>
                
                
            </van-grid>
            </div>
            
            </van-tab>
            
        </van-tabs>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data(){
        return {
            tabActive:0,
            clist:[]
        }
    },
    async created() {
        //console.log(this.id)
        //console.log(this.$root.api)
        let res = await axios.get(this.$root.api.GoodsCategory,{params:{id:this.id}})
        console.log(res.data)
        this.clist = res.data.data.brotherCategory
        let id = this.clist[0].id;

        
        //this.getlist(id,1)
        this.clist.forEach(async (item,index)=>{
            item.plist= await this.getlist(item.id,1)
            console.log(item.plist)
            this.$forceUpdate()
        })

    },
    methods: {
        async getlist(cid,page){
            let res = await axios.get(`${this.$root.api.GoodsList}?categoryId=${cid}&page=${page}&size=20`)
            console.log(res)
            return res.data.data
        },
        
    },
    
}
</script>


<style lang="less">
    #categoryList{
        .van-ellipsis{
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            padding: 0 10px;
        }
        .van-grid-item{
            overflow: hidden;
            box-sizing: border-box;
        }
        .price{
            color:red;
        }
    }
</style>