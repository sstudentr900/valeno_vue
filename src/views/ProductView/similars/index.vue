<template>
    <div class="similars">
        <div class="title"><span>YOU MAY ALSO LIKE</span>同類商品</div>
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="`/${item.href}/${item.id}`">
                    <div class="pic">
                        <!-- <img :src="require(`@/assets/${item.src}`)" alt=""> -->
                        <img :src="item.src" alt="">
                    </div>
                    <div class="column">
                        <!-- <p class="en">{{item.en}}</p> -->
                        <p class="tit">{{item.ti}}</p>
                        <p class="sale">{{item.sale}}</p>
                    </div>
                    <div class="column">
                        <span class="p-before">{{item.price}}</span>
                        <span class="line">|</span>
                        <span class="p-after">{{item.special_price}}</span>
                    </div>
                </router-link> 
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'similars',
        props: {
            "items": {
                type: Array,
                required: true,
                default: []
            }
        }
    }
</script>

<style scoped>
    .similars {
        margin-top: 40px;
    }
    
    .similars .title {
        background: #f1f1f1;
        color: #000;
        padding: 15px;
        font-size: 1.1rem;
    }
    
    .similars .title span {
        font-weight: bold;
        font-size: 1.2rem;
        padding-right: 10px;
    }
    
    .similars ul li a {
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        padding: 10px 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        transition: background 0.5s ease;
    }
    
    .similars ul li a:hover {
        background: #f9f9f9;
    }
    
    .similars .pic {
        flex: 0 0 90px;
        font-size: 1rem;
    }
    
    .similars .en,
    .similars .tit {
        color: #333;
        font-size: 14px;
    }
    
    .similars .en {
        font-weight: bold;
        margin: 0;
    }
    
    .similars .sale {
        color: #c1894c;
        font-size: 0.95rem;
        margin-top: 5px;
    }
    
    .similars .p-before,
    .similars .p-after {
        display: inline-block;
        font-family: "Oswald-Light";
        vertical-align: top;
        padding: 0 10px;
        color: #000;
    }
    
    .similars .p-before {
        text-decoration: line-through;
        color: #555;
    }
    
    .similars .line {
        opacity: 0.5;
    }
    
    .similars .column {
        padding: 10px;
        flex: 1 1;
    }
</style>