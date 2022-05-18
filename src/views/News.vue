<template>
    <div class="news">
        <h3 class="public_title">#NEWS</h3>
        <div class="public_flex">
            <router-link :to="`/${item.href}/${item.id}`" v-for="item in getNewsList" :key="item.id">
            <!-- <a v-for="item in newsData.newsList" :key="item.id" :href="item.href"> -->
                <div class="top">
                    <div class="img">
                        <!-- <img :src="item.src"> -->
                        <img :src="require(`@/assets/${item.src}`)">
                    </div>
                    <span class="data">{{item.month+item.day+', '+item.year}}</span>
                </div>
                <div class="bottom">
                    <h5>{{item.title}}</h5>
                    <textLen :str="item.text" :len="60"></textLen>
                    <!-- <p>{{item.text}}</p> -->
                </div>
            <!-- </a> -->
            </router-link>
        </div>
        <!-- <FnPagers></FnPagers> -->
        <!-- v-if="newsData.total > customParams.pageSize" -->
        <FnPagers 
        :pageNo="customParams.pageNo" 
        :pageSize="customParams.pageSize" 
        :continues='customParams.continues' 
        :total='getNewsTotle'
        @pageNo="getPageNo">
        </FnPagers>
    </div>
</template>

<script>
    import textLen from '@/components/textLen'
    import FnPagers from '@/components/FnPagers'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'news',
        components: {
            FnPagers,
            textLen
        },
        computed: {
            ...mapState('news', {
                newsData: state => state.newsData
            }),
            getNewsList(){
                return this.newsData.newsList||[]
            },
            getNewsTotle(){
                return this.newsData.total||[]
            }
        },
        data() {
            return {
                customParams: {
                    continues: 5, //頁碼顯示
                    pageNo: 1, //當前頁
                    pageSize: 9, //顯示數量
                }
            }
        },
        beforeMount() {
            this.getData()
        },
        methods:{
            getData(){
                Object.assign(this.customParams, this.$route.query, this.$route.params)
                this.$store.dispatch('news/newsAc', this.customParams)
            },
            getPageNo(pageNo){
                this.$router.push({
                    name: 'news',
                    query: {
                        pageNo: pageNo, //類id
                    }
                })
            }
        },
        watch: {
            //監聽路由改變執行product
            $route(newValue, oldValue) {
                this.getData()
            }
        }
    }
</script>
<style scoped>
    .news .public_flex {
        justify-content: space-between;
    }
    
    .news a {
        padding: 0 40px;
        width: 33%;
    }
    
    .news a .img {
        position: relative;
        z-index: 1;
        overflow: hidden;
        transition: transform 0.3s;
        font-size: 0;
    }
    
    .news a:hover .img {
        transform: scale(0.95, 0.95);
    }
    
    .news a .img:before,
    .news a .img:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        transition: ease 0.3s 0.3s;
    }
    
    .news a:hover .img:before,
    .news a:hover .img:after {
        opacity: 1;
    }
    
    .news a .img:after {
        content: "Read More";
        color: #fff;
        text-align: center;
        font-family: "Oswald-Light";
        z-index: 2;
        font-size: 18px;
        height: 30px;
        margin: auto;
        transform: translateX(50%);
    }
    
    .news a:hover .img:after {
        transform: translateX(0%);
    }
    
    .news a .img:before {
        background: rgba(0, 0, 0, 0.75);
        z-index: 1;
        width: 0;
    }
    
    .news a:hover .img:before {
        width: 100%;
    }
    
    .news a .top {
        position: relative;
    }
    
    .news a .top .data {
        font-family: "Oswald-Light";
        color: #000;
        position: absolute;
        z-index: 2;
        bottom: 20px;
        padding: 7px 20px;
        font-size: 0.9rem;
        transition: color 0.3s 0.3s;
    }
    
    .news a .top .data:before {
        content: "";
        display: block;
        width: 40px;
        height: 3px;
        background: #000;
        position: absolute;
        right: 90%;
        top: 50%;
        margin-top: -2px;
    }
    
    .news a:hover .top .data {
        color: #fff;
    }
    
    .news a .bottom {
        padding: 0 8px 20px;
    }
    
    .news a .bottom h5 {
        color: #000;
        font-weight: bold;
        margin-bottom: 5px;
        line-height: 1.2;
        font-size: 18px;
        margin-top: 5px;
    }
    
    .news a .bottom .text{
        display: -webkit-box !important;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: justify;
        font-size: 14px;
        line-height: 1.4;
        color: #666;
    }
</style>