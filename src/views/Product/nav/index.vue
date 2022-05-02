<template>
    <div class="nav">
        <h4 class="public_title">#PRODUCT</h4>
        <ul>
            <li v-for="(item,index) in items" :key="item.id" :class="{active:item.id==nav1Id}">
                <div @click="nav1(item.child,item.id)">{{item.name}}<span v-if="item.child" class="icon"></span></div>
                <ul v-if="item.child">
                    <li v-for="(item2) in item.child" :key="item2.id" :class="{active:item2.id==nav2Id}">
                        <a @click="nav2(item2.id)">{{item2.name}}</a>
                    </li>
                </ul>
            </li>
            <!-- <li class="active">
                <div>臉部彩妝<span class="icon"></span></div>
                <ul>
                    <li class="active"><a href="" title="">妝前修飾乳</a></li>
                    <li><a href="" title="">粉底/粉餅</a></li>
                    <li><a href="" title="">BB/CC霜</a></li>
                    <li><a href="" title="">氣墊式粉底</a></li>
                    <li><a href="" title="">遮瑕霜</a></li>
                    <li><a href="" title="">蜜粉</a></li>
                    <li><a href="" title="">腮紅 / 修容</a></li>
                </ul>
            </li>
            <li>
                <div>眼部彩妝<span class="icon"></span></div>
                <ul>
                    <li><a href="" title="">妝前修飾乳</a></li>
                    <li><a href="" title="">粉底/粉餅</a></li>
                    <li><a href="" title="">BB/CC霜</a></li>
                    <li><a href="" title="">氣墊式粉底</a></li>
                    <li><a href="" title="">遮瑕霜</a></li>
                    <li><a href="" title="">蜜粉</a></li>
                    <li><a href="" title="">腮紅 / 修容</a></li>
                </ul>
            </li>
            <li>
                <div>唇部彩妝<span class="icon"></span></div>
                <ul>
                    <li><a href="" title="">妝前修飾乳</a></li>
                    <li><a href="" title="">粉底/粉餅</a></li>
                    <li><a href="" title="">BB/CC霜</a></li>
                    <li><a href="" title="">氣墊式粉底</a></li>
                    <li><a href="" title="">遮瑕霜</a></li>
                    <li><a href="" title="">蜜粉</a></li>
                    <li><a href="" title="">腮紅 / 修容</a></li>
                </ul>
            </li>
            <li>
                <div>美髮保養<span class="icon"></span></div>
                <ul>
                    <li><a href="" title="">妝前修飾乳</a></li>
                    <li><a href="" title="">粉底/粉餅</a></li>
                    <li><a href="" title="">BB/CC霜</a></li>
                    <li><a href="" title="">氣墊式粉底</a></li>
                    <li><a href="" title="">遮瑕霜</a></li>
                    <li><a href="" title="">蜜粉</a></li>
                    <li><a href="" title="">腮紅 / 修容</a></li>
                </ul>
            </li>
            <li>
                <div>身體乳液</div>
            </li>
            <li>
                <div>其他</div>
            </li> -->
        </ul>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'navs',
        props: {
            'items': {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                nav1Id: this.$route.params ? this.$route.params.id : 0,
                nav2Id: this.$route.params ? this.$route.params.id : 0,
            }
        },
        methods: {
            nav1(child, id) {
                if (this.nav1Id == id) {
                    this.nav1Id = 0
                } else {
                    this.nav1Id = id
                }
                if (!child) {
                    this.nav2(id)
                }
                // console.log('107',id)
            },
            nav2(id) {
                this.nav2Id = id
                    // console.log('110',id1,id2)
                this.$router.push({
                    name: 'product',
                    params: {
                        id: id
                    }
                })
            },
        }

    }
</script>

<style scoped>
    .nav>.public_title {
        text-align: left;
        margin-top: 0;
        margin-bottom: 20px;
    }
    
    .nav>ul {
        padding: 0 15px;
    }
    
    .nav>ul>li.active>div,
    .nav>ul>li.active>a {
        opacity: 1;
        font-weight: bold;
    }
    
    .nav>ul>li.active>div:after,
    .nav>ul>li.active>a:after {
        content: "";
        height: 5px;
        width: 5px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        position: absolute;
        right: 100%;
        top: 50%;
        margin-right: 8px;
        margin-top: -3px;
        transform: rotate(45deg);
    }
    
    .nav>ul>li.active>div .icon:after {
        content: "";
        transform: rotate(0deg);
    }
    
    .nav>ul>li>div,
    .nav>ul>li>a {
        color: #000;
        opacity: 0.7;
        padding: 8px 0;
        display: block;
        position: relative;
        transition: opacity 0.3s;
        font-size: 16px;
        cursor: pointer;
    }
    
    .nav>ul>li:hover div,
    .nav>ul>li:hover a {
        opacity: 1;
    }
    
    .nav>ul>li>div .icon {
        position: absolute;
        right: 0;
        top: 50%;
        width: 10px;
        height: 1px;
        background: #000;
    }
    
    .nav>ul>li>div .icon:after {
        content: "";
        width: 100%;
        height: 100%;
        background: #000;
        display: block;
        transform: rotate(90deg);
        transition: .3s;
    }
    
    .nav>ul>li ul {
        font-size: 0.9rem;
        /* margin-bottom: 10px; */
        /* display: none; */
        max-height: 0;
        transition: max-height .2s ease;
        overflow: hidden;
    }
    
    .nav>ul>li.active ul {
        /* display: block; */
        max-height: 300px;
        transition: max-height .6s .1s ease;
    }
    
    .nav>ul>li ul li {
        border-bottom: 1px solid #eee;
    }
    
    .nav>ul>li ul li:last-child {
        margin-bottom: 10px;
    }
    
    .nav>ul>li ul li:hover {
        background: #f9f9f9;
    }
    
    .nav>ul>li ul li a {
        padding: 10px 0;
        color: #666;
        display: block;
        font-size: 0.9rem;
        cursor: pointer;
    }
    
    .nav>ul>li ul li.active a {
        color: #c1894c;
    }
</style>