<template>
    <div class="news">
        <h3 class="public_title">#NEWS</h3>
        <div class="public_flex">
            <a v-for="item in newsData.newsList" :key="item.id" :href="item.href">
                <div class="top">
                    <div class="img">
                        <!-- <img :src="item.src"> -->
                        <img :src="require(`@/assets/${item.src}`)">
                    </div>
                    <span class="data">{{item.data}}</span>
                </div>
                <div class="bottom">
                    <h5>{{item.title}}</h5>
                    <p>{{item.text}}</p>
                </div>
            </a>
            <!-- <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n02.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n03.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n04.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n05.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n01.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n02.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n04.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a>
            <a href="new_view.html">
                <div class="top">
                    <div class="img">
                        <img src="@/assets/n03.jpg">
                    </div>
                    <span class="data">JUN 06, 2017</span>
                </div>
                <div class="bottom">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此....</p>
                </div>
            </a> -->
        </div>
        <FnPagers></FnPagers>
    </div>
</template>

<script>
    import FnPagers from '@/components/FnPagers'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'news',
        components: {
            FnPagers,
        },
        computed: {
            ...mapState('news', {
                newsData: state => state.newsData
            })
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
    
    .news a .bottom p {
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