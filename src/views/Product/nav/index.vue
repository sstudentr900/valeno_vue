<template>
    <div class="nav">
        <h4 class="puplic_title">#PRODUCT</h4>
        <ul>
            <li class="active">
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
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'navs',
}
</script>

<style scoped>
.nav > .puplic_title{
    text-align: left;
    margin-top: 0;
    margin-bottom: 20px;
}
.nav > ul {
    padding:  0 15px;
}

.nav > ul > li.active > div,
.nav > ul > li.active > a {
    opacity: 1;
    font-weight: bold;
}
.nav > ul > li.active > div:after,
.nav > ul > li.active > a:after {
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
.nav > ul > li.active > div.icon:after {
    content: "";
    transform: rotate(0deg);
}
.nav > ul > li > div,
.nav > ul > li > a {
    color: #000;
    opacity: 0.7;
    padding: 8px 0;
    display: block;
    position: relative;
    transition: opacity 0.3s;
    font-size:16px;
    cursor: pointer;
}
.nav > ul > li:hover  div,
.nav > ul > li:hover  a{
    opacity: 1;
}
.nav > ul > li > div .icon {
    position: absolute;
    right: 0;
    top: 50%;
    width: 10px;
    height: 1px;
    background: #000;
}
.nav > ul > li > div .icon:after {
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    display: block;
    transform: rotate(90deg);
    transition: .3s;
}
.nav > ul > li ul {
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: none;
}
.nav > ul > li.active ul{
    display: block;
} 
.nav > ul > li ul li {
    border-bottom: 1px solid #eee;
}
.nav > ul > li ul li:hover{
    background: #f9f9f9;
}
.nav > ul > li ul li a {
    padding: 10px 0;
    color: #666;
    display: block;
    font-size: 0.9rem;
}
.nav > ul > li ul li.active a {
    color: #c1894c;
}

</style>
