<template>
    <div class="pagers">
        <!-- <h1>{{num}}---pageNo:{{pageNo}}--pageSize:{{pageSize}}--continues:{{continues}}--{{total}}</h1> -->
        <button class="prev" :disabled="pageNo==1" @click="$emit('pageNo',pageNo*1-1)">
        <!-- <button class="prev" :disabled="pageNo==1" @click="pageNoFn(pageNo*1-1)"> -->
            <!-- <svg viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg> -->
            上一頁
        </button>
        <button v-if="num.start > 1" @click="$emit('pageNo',1)">1</button>
        <!-- <button v-if="num.start > 1" @click="pageNoFn(1)">1</button> -->
        <button v-if="num.start > 2">...</button>
        <!-- <a class="active">1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a> -->
        <button v-for="(page,index) in num.midden" :key='index' :class="{active:pageNo==page}" @click="$emit('pageNo',page)">{{page}}</button>
        <!-- <button v-for="(page,index) in num.midden" :key='index' :class="{active:pageNo==page}" @click="pageNoFn(page)">{{page}}</button> -->
        <button v-if="num.end < totalPage -1">...</button>
        <button v-if="num.end < totalPage" @click="$emit('pageNo',totalPage)">{{totalPage}}</button>
        <!-- <button v-if="num.end < totalPage" @click="pageNoFn(totalPage)">{{totalPage}}</button> -->
        <button class="next" :disabled="pageNo==totalPage" @click="$emit('pageNo',pageNo*1+1)">
        <!-- <button class="next" :disabled="pageNo==totalPage" @click="pageNoFn(pageNo*1+1)"> -->
            下一頁
            <!-- <svg viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg> -->
        </button>
        <div class="totle">共{{total}}筆</div>
    </div>
</template>

<script>
export default {
    name: 'FnPagers',
    props:['pageNo','pageSize','total','continues'],
    computed:{
        //總共多少頁
        totalPage(){
            return Math.ceil(this.total/this.pageSize);
        },
        //顯示連續頁碼1~4
        num(){
            const {pageNo,totalPage,continues} = this;
            let start=0,
            midden=[],
            end=0;
            // console.log(continues,totalPage)
            if(continues>totalPage){
                start=1;
                end = totalPage;
                // console.log('totalPage',start,end)
            }else{
                start= pageNo - parseInt(continues/2);
                end = pageNo*1 + parseInt(continues/2);
                if(start<1){
                    start = 1;
                    end = continues;
                }
                if(end > totalPage){
                    end = totalPage;
                    start = totalPage - continues + 1;
                }
            }
            for(let i = start; i<end+1;i++){
                midden.push(i)
            }
            // console.log(start,end,midden)
            return {start,end,midden};
        }
    },
    // methods:{
    //     pageNoFn(number){
    //         this.$router.push({
    //             name: 'product',
    //             query: {
    //                 categoryId: number, //類id
    //                 categoryName: number, //類id
    //                 pageNo: number, //類id
    //             }
    //         })
    //     }
    // }
}
</script>

<style scoped>
.pagers {
    padding: 20px 0;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.pagers button{
    font-size: 0.95rem;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    color: #555;
    border: 1px solid #ddd;
    padding: 5px;
    cursor: pointer;
    background: #fff;
}
.pagers button:disabled:hover,
.pagers button:disabled {
    background: #eee;
    color: #bbb;
    cursor: text;
}
.pagers button.active,
.pagers button:hover{
    color: #fff;
    background: #222;
}
.pagers button svg{
    width: 12px;
    fill: #888;
    margin-top: 1px;
}
.pagers button:hover svg{
    fill: #fff;
}
.pagers .next,
.pagers .prev,
.pagers .totle{
    width: 70px;
    display: flex;
    align-items: center;
}
.pagers .totle{
    margin-left: 30px;
    color: #555;
    background: transparent;
}
.pagers .totle:hover{
    color: #555;
    background: transparent;
}
</style>