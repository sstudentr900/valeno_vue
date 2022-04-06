<template>
    <div class="fn">
        <div class="wrapper">
            <div class="wrapper_top">
                <FnNav></FnNav>
            </div>
            <FnFooter></FnFooter>
        </div>
    </div>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
</template>
<script>
import FnFooter  from './components/FnFooter'
import FnNav  from './components/FnNav'

export default {
    // name:'',
    components:{
        FnNav,
        FnFooter
    },
}
</script>

<style>
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    font,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
    }
    ol,
    ul {
        list-style: none;
    }
    table {
        border-collapse: separate;
        border-spacing: 0;
    }
    caption,
    th,
    td {
        text-align: left;
        font-weight: normal;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
    }
    blockquote,
    q {
        quotes: "" "";
    }
    a{
        text-decoration: none;
        display: block;
    }
    body {
        line-height: 1;
        color: black;
        background: white;
    }
    .public_flex {
        display: flex;
    }
    .fn{
        font-family: Helvetica, Arila, "LiHei Pro", "Microsoft JhengHei", "新細明體", serif;
        height: 100vh;
        padding: 60px 0;
        background: url(@/assets/bg01.jpg) repeat;
    }
    @media (max-width: 1200px) {
        .fn {
            padding: 30px;
        }
    }
    @media (max-width: 768px) {
        .fn {
            padding: 0;
        }
    }
    .fn .wrapper {
        box-shadow: 2px 10px 20px #4d4d4d;
        padding: 0;
        /*width: 1140px;*/
        width: 85%;
        max-width: 1600px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 1200px) {
        .fn .wrapper {
            width: 100%;
        }
    }
    .fn .wrapper_top {
        background-color: #fff;
        padding: 60px;
    }
    @media (max-width: 1200px) {
        .fn .wrapper_top {
            padding: 30px;
        }
    }
    @media (max-width: 768px) {
        .fn .wrapper_top {
            padding: 20px 15px 0;
            background-color: rgba(255, 255, 255, 0.95);
        }
    }
    

    /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    } */
</style>
