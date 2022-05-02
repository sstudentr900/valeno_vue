<template>
    <div class="store">
        <h3 class="public_title">{{storeData.storeTitle}}</h3>
        <div class="public_flex">
            <div class="item" v-for="item in storeData.storeList" :key="item.id">
                <div class="img">
                    <img :src="item.src" alt="康是美">
                </div>
                <a :href="item.href" title="" target="_blank">
                    <h3 class="tit">{{item.title}}</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <!-- <div class="item">
                <div class="img">
                    <img src="@/assets/ii02.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii03.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii04.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii05.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii06.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii08.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii07.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii01.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii02.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii03.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii04.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii05.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii06.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii08.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div>
            <div class="item">
                <div class="img">
                    <img src="@/assets/ii07.jpg" alt="康是美">
                </div>
                <a href="" title="" target="_blank">
                    <h3 class="tit">康是美</h3>
                    <p class="go">shop</p>
                </a>
            </div> -->
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'store',
        computed: {
            ...mapState({
                storeData: state => state.store.storeData
            })
        }
    }
</script>
<style scoped>
    .store .public_flex {
        justify-content: space-between;
    }
    
    .store .item {
        width: 22%;
        margin-bottom: 40px;
        position: relative;
    }
    
    .store .item .img {
        position: relative;
        z-index: 10;
        outline: 1px solid #eee;
        transition: transform 0.4s;
        width: 100%;
        background: #fff;
    }
    
    .store .item:hover .img {
        transform: translateY(-50px);
    }
    
    .store a {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        height: 50px;
        padding: 15px 10px;
        color: #fff;
        background: #222;
    }
    
    .store a .tit {
        margin: 0;
        float: left;
        font-size: 0.85rem;
        line-height: 18px;
    }
    
    .store a .go {
        float: right;
        background: #c1894c;
        color: #fff;
        text-align: center;
        margin: 0;
        padding: 0 10px;
        font-size: 0.85rem;
        border-radius: 5px;
        font-family: "Oswald-Light";
    }
</style>