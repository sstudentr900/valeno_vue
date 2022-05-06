<template>
    <div class="newView">
        <div class="img">
            <img src="https://imgur.com/E2EY2P9.jpg" class="img-responsive">
        </div>
        <div class="flex">
            <div class="share">
                <div class="share-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg>
                    <p>share</p>
                </div>
                <div class="share_link">
                    <a href="#" title="分享至facebook">
                        <svg viewBox="0 0 24 24">
                            <path d="M 19 3 L 5 3 C 3.894531 3 3 3.894531 3 5 L 3 19 C 3 20.105469 3.894531 21 5 21 L 12.621094 21 L 12.621094 14.039062 L 10.277344 14.039062 L 10.277344 11.3125 L 12.621094 11.3125 L 12.621094 9.308594 C 12.621094 6.984375 14.042969 5.71875 16.117188 5.71875 C 16.816406 5.714844 17.511719 5.753906 18.207031 5.824219 L 18.207031 8.253906 L 16.78125 8.253906 C 15.648438 8.253906 15.429688 8.785156 15.429688 9.574219 L 15.429688 11.308594 L 18.128906 11.308594 L 17.777344 14.035156 L 15.414062 14.035156 L 15.414062 21 L 19 21 C 20.105469 21 21 20.105469 21 19 L 21 5 C 21 3.894531 20.105469 3 19 3 Z M 19 3 "/>
                        </svg>
                    </a>
                    <a href="#" title="分享至Line">
                        <svg viewBox="0 0 48 48">
                            <path d="M25.12,44.521c-2.114,1.162-2.024-0.549-1.933-1.076c0.054-0.314,0.3-1.787,0.3-1.787c0.07-0.534,0.144-1.36-0.067-1.887 c-0.235-0.58-1.166-0.882-1.85-1.029C11.48,37.415,4.011,30.4,4.011,22.025c0-9.342,9.42-16.943,20.995-16.943S46,12.683,46,22.025 C46,32.517,34.872,39.159,25.12,44.521z M18.369,25.845c0-0.56-0.459-1.015-1.023-1.015h-2.856v-6.678 c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015v7.694c0,0.561,0.459,1.016,1.023,1.016h3.879 C17.91,26.863,18.369,26.406,18.369,25.845z M21.357,18.152c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015 v7.694c0,0.561,0.459,1.016,1.023,1.016c0.565,0,1.023-0.456,1.023-1.016V18.152z M30.697,18.152c0-0.56-0.459-1.015-1.023-1.015 c-0.565,0-1.025,0.455-1.025,1.015v4.761l-3.978-5.369c-0.192-0.254-0.499-0.406-0.818-0.406c-0.11,0-0.219,0.016-0.325,0.052 c-0.419,0.139-0.7,0.526-0.7,0.963v7.694c0,0.561,0.46,1.016,1.025,1.016c0.566,0,1.025-0.456,1.025-1.016v-4.759l3.976,5.369 c0.192,0.254,0.498,0.406,0.818,0.406c0.109,0,0.219-0.018,0.325-0.053c0.42-0.137,0.7-0.524,0.7-0.963V18.152z M36.975,20.984 h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015c0-0.56-0.46-1.015-1.025-1.015h-3.879c-0.565,0-1.023,0.455-1.023,1.015 c0,0.001,0,0.001,0,0.003v3.842v0.001c0,0,0,0,0,0.001v3.845c0,0.561,0.46,1.016,1.023,1.016h3.879 c0.565,0,1.025-0.456,1.025-1.016c0-0.56-0.46-1.015-1.025-1.015h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015 c0-0.561-0.46-1.016-1.025-1.016V20.984z"/>
                        </svg>
                    </a>
                    <a href="#" title="分享至Instagram">
                        <svg viewBox="0 0 24 24">    
                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <h5>開架好用美妝品總整理！女明星彩妝師化妝箱都用這些</h5>
                    <div class="date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                        jun 06 , 2017
                    </div>
                </div>
                <div class="editor">
                    <p>對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此，在C/P值超高的開架通路挖寶，根本生活小確幸！秉持著東西再怎麼便宜也不能買錯的精神，iStyle為你訪問到三位女明星、人氣網模指定的天后彩妝師，保證零業配、不藏私分享，超好用的國內外開架彩妝，趕緊筆記收藏！彩妝師筱雯愛用清單彩妝師筱雯是郭雪芙、李毓芬、瑞莎等人的指定彩妝師，擅長清透妝容的她最在意彩妝品用在臉上時是否夠自然，才能完整表現女明星本身的五官特質。以下，為筱雯每次出國必定補貨的好用推廌。</p>
                    <p>&nbsp;</p>
                    <p>Mamonde飾底乳（綠色）（Soft Bloom Make Up Base）<br> Mamonde在韓國由人氣美女朴信惠代言，與LANEIGE、innisfree一樣同屬艾茉莉太平洋集團，除了有大集團當靠山的專櫃級成分，這款綠色飾底乳功能為提亮膚色，適合膚色暗沉者使用，還可創造平滑肌膚效果。
                    </p>
                    <img src="https://imgur.com/UudMJb6.jpg" alt="">
                    <p>&nbsp;</p>
                    <p>VDL三色眉粉<br> 單品中包括一塊眉膏與兩塊眉粉，膏狀可以填滿每處眉毛空隙，再用粉狀定妝，能夠創造超自然眉毛，男生也非常適合！畫完眉毛後，也可使用乾淨的眼影刷從眉頭往鼻樑處刷拭，能將部分眉粉往前延伸創造超自然的立體鼻樑與眼窩。
                    </p>
                    <img src="https://imgur.com/ecNXMgT.jpg" alt="">
                </div>
                <div class="buttons">
                    <a href="new.html" title="返回列表" class="btns">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M20 18v-8l-14 14 14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z"/><path fill="none" d="M0 0h48v48h-48z"/></svg>
                        back to list
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import productImg from './productImg'
    // import productText from './productText'
    // import similars from './similars'
    // import tabs from './tabs'
    // import recommend from './recommend'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'newView',
        // mounted() {
        //     this.$store.dispatch('productView/productViewAc', this.$route.params)
        // },
        // components: {
        //     productImg,
        //     productText,
        //     similars,
        //     tabs,
        //     recommend,
        // },
        // computed: {
        //     ...mapState('productView', ['productViewData'])
        // },
    }
</script>

<style scoped>
    .flex {
        margin-top: 30px;
    }
    
    .share .share-btn {
        color: #fff;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 60px;
        height: 60px;
        padding: 10px;
        margin: auto;
        position: relative;
        background: #000;
        border-radius: 50%;
    }
    .share .share-btn svg{
        fill: #fff;
    }
    .share .share-btn p {
        font-family: "Oswald-Light";
        text-transform: uppercase;
        font-size: 12px;
        color: #fff;
    }
    
    .share .share_link {
        margin-top: 10px;
    }
    
    .share .share_link a {
        text-align: center;
    }
    
    .share .share_link a:hover svg {
        fill: #222;
    }
    
    .share .share_link svg {
        width: 30px;
        position: relative;
        margin: 5px 0;
        fill: #bbb;
    }
    
    .content {
        padding-left: 30px;
    }
    
    .content .title {
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
    }
    
    .content .title h5 {
        color: #333;
        font-weight: bold;
        margin: 0;
        line-height: 1.2;
        font-size: 18px;
    }
    
    .content .title .date {
        color: #666;
        margin-top: 5px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }
    .content .title .date svg{
        width: 15px;
        height: auto;
        fill: #666;
        margin-right: 5px;
    }
    
    .editor {
        padding: 30px 0;
    }
    
    .editor p {
        margin: 0 0 10px;
        color: #333;
        font-size: 14px;
        line-height: 1.4;
    }
    
    .buttons {
        text-align: center;
    }
    
    .buttons .btns {
        text-transform: uppercase;
        font-size: 1.2rem;
        min-width: 200px;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        margin: 3px;
        padding: 10px;
        background: #222;
        border: 1px solid #222;
        color: #fff;
        position: relative;
        z-index: 2;
        -moz-transition: color 0.5s linear;
        -o-transition: color 0.5s linear;
        -webkit-transition: color 0.5s linear;
        transition: color 0.5s linear;
        min-height: 45px;
    }
    
    .buttons .btns:before,
    .buttons .btns:after {
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        position: absolute;
        background: #c1894c;
        z-index: -1;
        transition: linear 0.3s;
    }
    
    .buttons .btns:before {
        left: 0;
    }
    
    .buttons .btns:after {
        right: 0;
    }
    
    .buttons .btns:hover {
        color: #fff;
        border-color: #c1894c;
    }
    
    .buttons .btns:hover:before,
    .buttons .btns:hover:after {
        width: 50%;
    }
    .buttons svg{
        width: 20px;
        height: auto;
        fill: #fff;
    }
</style>