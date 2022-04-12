<template>
    <div class="pagers">
        <a href="" title="上一頁" class="prev">
            <svg viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        </a>
        <a href="" title="" class="active">1</a>
        <a href="" title="">2</a>
        <a href="" title="">3</a>
        <a href="" title="">4</a>
        <a href="" title="">5</a>
        <a href="#" title="下一頁" class="next">
            <svg viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pagers {
    padding: 20px 0;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.pagers a {
    font-size: 0.95rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    color: #555;
}
.pagers a.active, .pagers a:hover{
    color: #fff;
    background: #222;
}
.pagers a svg{
    width: 12px;
}
.pagers a:hover svg{
    fill: #fff;
}
</style>