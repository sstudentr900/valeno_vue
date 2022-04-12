<template>
    <div id="searchObj" class="searchObj active">
        <div class="box">
            <form action="product_search.html">
                <a class="close"><span></span></a>
                <div class="inpudDiv">
                    <input type="text" placeholder="SEARCH">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg></button>
                </div>
            </form>
            <div class="tags">
                <p class="title">看看其他人都找了甚麼</p>
                <a href="product.html" title="">眼影盤</a>
                <a href="product.html" title="">腮紅</a>
                <a href="product.html" title="">Mistine</a>
                <a href="product.html" title="">眼線筆</a>
                <a href="product.html" title="">MALISSA KISS</a>
                <a href="product.html" title="">Goldberry</a>
                <a href="product.html" title="">口紅</a>
                <a href="product.html" title="">美髮保養</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.searchObj{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 21;
    background: rgba(0, 0, 0, 0.6);
    display: none;
    opacity: 0;
    /*visibility: hidden;*/
    /*-moz-transition: opacity ease 10s;*/
    /*-o-transition: opacity ease 10s;*/
    /*-webkit-transition: opacity ease 10s;*/
    /*transition: opacity ease 10s;*/
}
.searchObj.active{
    opacity: 1;
    display: block;
}
.searchObj .box {
    background: #000;
    padding: 100px 50px;
    /*display: none;*/
}
.searchObj form {
    max-width: 800px;
    margin: auto;
}
.searchObj .close {
    position: absolute;
    right: 50px;
    top: 50px;
    display: block;
    width: 40px;
    height: 40px;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -moz-transition: -moz-transform 0.5s ease;
    -o-transition: -o-transform 0.5s ease;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
}
.searchObj .close:hover {
    -moz-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    -webkit-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
}
.searchObj .close span {
    width: 100%;
    height: 1px;
    background: #fff;
    display: block;
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.searchObj .close span:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.searchObj .inpudDiv {
    position: relative;
}
.searchObj .inpudDiv input {
    width: 100%;
    border: none;
    background: #222;
    padding: 15px 20px;
    color: #fff;
    font-size: 1.5rem;
    box-sizing: border-box;
}
.searchObj .inpudDiv button {
    border: none;
    background: none;
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    right: 20px;
    top: 14px;
    cursor: pointer;
}
.searchObj .inpudDiv button svg{
    fill: #fff;
}
.searchObj .tags {
    margin-top: 30px;
    text-align: center;
}
.searchObj .tags .title {
    font-size: 1.3rem;
    color: #fff;
    text-align: center;
    margin: 20px 0;
    opacity: 0.95;
}
.searchObj .tags .title:before,
.searchObj .tags .title:after {
    content: "/";
    opacity: 0.5;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    font-size: 0.85rem;
}
.searchObj .tags a {
    color: #fff;
    border: 1px solid #222;
    display: inline-block;
    padding: 8px 15px;
    font-size: 0.85rem;
    font-size: 15px;
    margin-right: 5px;
    margin-bottom: 5px;
    /*-moz-transition: ease 0.5s;*/
    /*-o-transition: ease 0.5s;*/
    /*-webkit-transition: ease 0.5s;*/
    /*transition: ease 0.5s;*/
}
.searchObj .tags a:hover {
    background: #fff;
    color: #000;
}
</style>