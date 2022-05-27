<template>
    <div class="memberCoupon">
        <h3 class="title">#折價券查詢</h3>
        <div class="public_table">
            <div class="thead">
                <div class="tr">
                    <div class='td'>折價券名稱</div>
                    <div class='td'>序號</div>
                    <div class='td'>折價金額</div>
                    <div class='td'>使用期限</div>
                    <div class='td'>使用狀態</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr">
                    <div class='td'>滿額 2,000即可抵用</div>
                    <div class='td'>
                        <div class="public_text_pink">ABC2010154</div>
                    </div>
                    <div class='td'>$500</div>
                    <div class='td'>2017/06/30</div>
                    <div class='td'>已使用</div>
                </div>
                <div class="tr">
                    <div class='td'>滿額 800即可抵用</div>
                    <div class='td '>
                        <div class="public_text_pink">ABC2010154</div>
                    </div>
                    <div class='td'>$200</div>
                    <div class='td'>2017/08/30</div>
                    <div class='td'>未使用</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'member',
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
    .tr .td:nth-child(1){
        flex: 2 2;
    }
</style>