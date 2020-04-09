<template>
    <div id="category">
        <van-search placeholder="商品搜索 共239万款好物" input-align='center' v-model="searchData" />
        
        <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
        height='calc(100vh - 104px)'
        @click-nav='changeRight'
        >
            <template slot="content">
                <div class='imgbanner'>
                 <img width="100%" :src="bannerImg" alt="">
                </div>
               
                <van-grid :column-num="3">

                    <van-grid-item v-for="(item,index) in subCategoryList" :key="index" :icon="item.wap_banner_url" :text="item.name" :to="'/categoryList/'+item.id" >

                        
                    </van-grid-item>
                    
                </van-grid>

            </template>

        </van-tree-select>
        
        <tab-btn></tab-btn>
    </div>
</template>

<script>
import tabBtn from '@/components/tabBtn.vue'
import axios from 'axios'
import api from '@/assets/config/api.js'
export default {
    data(){
        return {
            searchData:"",
            //items: [{ text: '分组 1' }, { text: '分组 2' }],
            activeIndex: 0,
            subCategoryList:[],
            data:{},
            bannerImg:''
        }
    },
    async created() {
        let res = await axios.get(api.CatalogList)
        let data = res.data;
        this.data = data.data;
        this.subCategoryList = this.data.currentCategory.subCategoryList
        this.bannerImg = this.data.currentCategory.img_url;
        console.log(data)
    },
    computed: {
        items:function(){
            //[{ text: '分组 1' }, { text: '分组 2' }],
            //console.log(this.data.categoryList)
            if(this.data.categoryList==undefined){
                return []
            }else{
                console.log(123)
                let arr = []
                this.data.categoryList.forEach((item,index)=>{
                    item.text = item.name
                    arr.push(item)
                })
                return arr;
            }
        }
    },
    methods: {
        changeRight:function(index){
            //console.log(index)
            this.activeIndex = index;
            
        }
    },
    watch: {
        activeIndex:async function(){
            if(this.items.length!==0){
                let id = this.items[this.activeIndex].id
                console.log(id)
                let res = await axios.get(api.CatalogCurrent,{params:{id}})
                //console.log(res)
                this.subCategoryList = res.data.data.currentCategory.subCategoryList
                this.bannerImg = this.items[this.activeIndex].img_url;
                console.log(this.subCategoryList)
            }else{
                this.subCategoryList =  []
            }
            
        }
    },
    components:{
        tabBtn
    }
}
</script>

<style lang="less">
    #category{
        .imgbanner{
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
        }
    }
</style>