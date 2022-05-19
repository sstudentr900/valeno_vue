<template>
    <div class="side">
        <div class="menu">
            <a title="最近瀏覽商品" @click="ProductInfo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"/></svg></a>
            <a title="購物清單" @click="ProductList"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"/></svg></a>
            <a title="回頂層" href="#wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg></a>
        </div>
        <ProductList :enterShow="productListIf" :enterName="productListName" @output="ProductUpdata"></ProductList>
    </div>
</template>

<script>
    import ProductList from './ProductList'
    export default {
        name: 'FnSide',
        components: {
            ProductList
        },
        data() {
            return {
                productListIf: false,
                productListName: '',
                // productListData: []
            }
        },
        computed:{
        },
        methods: {
            ProductUpdata(value){
                this.productListIf = value;
                this.productListName = '';
            },
            ProductInfo() {
                this.productListIf = !this.productListIf;
                this.productListName = 'skuInfo';
                // this.productListData = JSON.parse(sessionStorage.getItem('skuInfo'))
            },
            ProductList() {
                this.productListIf = !this.productListIf;
                this.productListName = 'skuList';
                // this.productListData = JSON.parse(sessionStorage.getItem('skuList'))
                // console.log(JSON.parse(sessionStorage.getItem('skuList')))
            }
        },
        watch: {
            productListIf(newValue, oldValue) {
                let body = document.querySelector('body')
                if (newValue) {
                    body.style.overflow = 'hidden';
                } else {
                    body.style = '';
                }
                // console.log('productListIf',newValue,oldValue)
            }
        }


    }
</script>

<style scoped>
    .menu {
        position: fixed;
        z-index: 20;
        right: 0;
        top: 35%;
        width: 50px;
        text-align: center;
    }
    
    .menu a {
        background: #555;
        color: #fff;
        padding: 10px 0;
        display: block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        font-size: 24px;
        cursor: pointer;
    }
    
    .menu a svg {
        fill: #fff;
    }
    
    .menu a:hover {
        background: #000;
    }
</style>