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
                    <div class='td'>ABC2010022</div>
                    <div class='td'>$500</div>
                    <div class='td'>2017/06/30</div>
                    <div class='td'>已使用</div>
                </div>
                <div class="tr">
                    <div class='td'>滿額 800即可抵用</div>
                    <div class='td'>ABC2010154</div>
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
    .public_table .thead {
        background: #222;
        color: #fff;
    }
    
    .public_table .tr {
        display: flex;
    }
    
    .public_table .td {
        flex: 1 1;
        padding: 15px 10px;
        text-align: center;
    }
</style>