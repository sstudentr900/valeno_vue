<template>
    <div id="slideshow02" class="slide puplic_scrollTop">
        <ul>
            <li v-for="item in slides" :key="item.id">
                <a :href="item.href">
                    <div class="img">
                        <img :src="item.src">
                    </div>
                    <div class="info">
                        <div class="date">
                            <div class="num">{{item.text_date}}</div>
                            <div class="right">
                                <div class="month">{{item.text_month}}</div>
                                <div class="year">{{item.text_year}}</div>
                            </div>
                        </div>
                        <div class="text">{{item.text}}</div>
                    </div>
                </a>
            </li>
            <!--<li class="active">
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n02.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="right">
                                <div class="month">APR</div>
                                <div class="year">2017</div>
                            </div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n03.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="right">
                                <div class="month">APR</div>
                                <div class="year">2017</div>
                            </div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n04.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n05.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n01.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n02.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n03.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n04.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="new_view.html" title="" tabindex="0">
                    <div class="img"><img src="@/assets/n05.jpg" alt=""></div>
                    <div class="info">
                        <div class="date">
                            <div class="num">17</div>
                            <div class="month">APR</div>
                            <div class="year">2017</div>
                        </div>
                        <div class="text">開架底妝百百款 教妳怎麼聰明挑才能買對不失手！</div>
                    </div>
                </a>
            </li>-->
        </ul>
        <div class="control previous"></div>
        <div class="control next"></div>
    </div>
</template>
<script>
export default {
    name:'news',
    props:["slides"],
}
</script>

<style>
.slide{
    position: relative;
    overflow: hidden;
    /* min-height: 270px;
    transition: height .5s ease; */
}
.slide ul{
    /* position: absolute; */
    position: relative;
    left: 0;
}
.slide li{
    float: left;
    width: 33%;
    padding: 0 50px;
}
.slide li a {
    display: block;
    -moz-transition: ease 0.5s;
    -o-transition: ease 0.5s;
    -webkit-transition: ease 0.5s;
    transition: ease 0.5s;
}
.slide li .img {
    position: relative;
    overflow: hidden;
}
.slide li .img:before {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 8px;
    top: 8px;
    right: 8px;
    bottom: 8px;
    border: 4px solid #fff;
    opacity: 0.5;
    z-index: 2;
}
.slide li .img img {
    transition: ease 0.3s;
}
.slide li:hover .img img {
    transform: scale(1.1, 1.1);
}
.slide li .info {
    padding: 20px 0;
    font-size: 0;
    display: flex;
    align-items: center;
}
.slide li .info .date {
    font-family: "PTSerif-Regular";
    color: #000;
    display: flex;
    align-items: center;
    width: 70px;
    margin-right: 10px;
}
.slide li .info .date .num {
    font-size: 36px;
}
.slide li .info .date .month {
    margin: 0;
    font-size: 14px;
}
.slide li .info .date .year {
    margin: 0;
    font-size: 12px;
}
.slide li.active a{
    margin: 0 -20px;
}
.slide li.active .info .date{
    margin-bottom: 0;
}
.slide li .info .date+.text{
    color: #5f5f5f;
    margin: 0;
    font-size: 16px;
}
.slide .control{
    position: absolute;
    top: 50%;
    z-index: 10;
    margin-top: -20px;
    border: 0;
    border-left: 2px solid  #999;
    border-bottom: 2px solid  #999;
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 25px;
    height: 25px;
    opacity: 0.6;
    cursor: pointer;
}
.slide .control:hover{
    opacity: 1;
}
.slide .control.previous{
    left: 50%;
    margin-left: -18.3%;
}
.slide .control.next{
    right: 50%;
    margin-right: -17%;
    transform: rotate(-135deg);
}
@media (max-width: 992px) {
    .slide li a {  text-align: center; }
    .slide li .info .date{display: none;}
}
</style>
