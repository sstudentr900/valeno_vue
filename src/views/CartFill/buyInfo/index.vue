<template>
    <div class="buyInfo">
        <div class="public_flex">
            <div class="public_form">
                <div class="form-tit">
                    <div class="text">購買人資訊</div>
                </div>
                <div class="form-row">
                    <div class="tit">姓名</div>
                    <div class="content">
                        <input name="buyer_name" type="text">
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">性別</div>
                    <div class="content">
                        <label class="radio"><input type="radio" name="sex"><span><i></i></span>&nbsp;先生</label>
                        <label class="radio"><input type="radio" name="sex"><span><i></i></span>&nbsp;小姐</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡電話</div>
                    <div class="content">
                        <input name="buyer_tel" type="text">
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">手機號碼</div>
                    <div class="content">
                        <input name="buyer_mobile" type="text">
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡地址</div>
                    <div class="content">
                        <div class="public_col-3">
                            <div>
                                <input name="buyer_zipcode" type="text" placeholder="郵遞區號">
                            </div>
                            <div>
                                <select name="buyer_city">
                                <option>請選擇縣市</option>
                            </select>
                            </div>
                            <div>
                                <select name="buyer_district">
                                <option>請選擇區域</option>
                            </select>
                            </div>
                        </div>
                        <input type="text" name="buyer_address" class="input-box full mgTop">
                    </div>
                </div>
            </div>
            <div class="public_form">
                <div class="form-tit">
                    <div class="text">
                        收件人資訊
                    </div>
                    <div class="input">
                        <label class="check">
                        <input type="checkbox" name="payment_type">
                            <span><i class="fa fa-check" aria-hidden="true"></i></span>同購買人
                        </label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">姓名</div>
                    <div class="content">
                        <input type="text" name="receiver_name">
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">性別</div>
                    <div class="content">
                        <label class="radio"><input type="radio" name="sex"><span><i></i></span>&nbsp;先生</label>
                        <label class="radio"><input type="radio" name="sex"><span><i></i></span>&nbsp;小姐</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡電話</div>
                    <div class="content">
                        <input type="text" name="receiver_tel">
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">手機號碼</div>
                    <div class="content">
                        <input type="text" name="receiver_mobile">
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡地址</div>
                    <div class="content">
                        <div class="public_col-3">
                            <div>
                                <input type="text" name="receiver_zipcode" placeholder="郵遞區號">
                            </div>
                            <div>
                                <select name="receiver_city">
                                <option>請選擇縣市</option>
                            </select>
                            </div>
                            <div>
                                <select name="receiver_district">
                                <option>請選擇區域</option>
                            </select>
                            </div>
                        </div>
                        <input type="text" name="receiver_address" class="input-box full mgTop">
                    </div>
                </div>
            </div>
        </div>
        <div class="public_flex">
            <div class="public_form">
                <div class="form-tit">
                    <div class='text'>其他資訊</div>
                </div>
                <div class="form-row delivery-wrap">
                    <div class="tit">配送時間</div>
                    <div class="content">
                        <label class="radio"><input type="radio" name="shipping_id"><span><i></i></span>皆可</label>
                        <label class="radio"><input type="radio" name="shipping_id"><span><i></i></span>上午</label>
                        <label class="radio"><input type="radio" name="shipping_id"><span><i></i></span>下午</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">發票資訊</div>
                    <div class="content contentForm">
                        <label class="radio"><input type="radio" name="invc_type"><span><i></i></span>電子發票(二聯式)</label>
                        <label class="radio"><input type="radio" name="invc_type" class="selected"><span><i></i></span>公司用(三聯式)</label>
                        <div class="invoice-box">
                            <input type="text" name="invc_title" placeholder="公司抬頭" class="input-box">
                            <input type="text" name="invc_id" placeholder="統一編號" class="input-box">
                        </div>
                    </div>
                </div>
            </div>
            <div class="public_form">
                <div class="form-row">
                    <div class="tit">備註</div>
                    <div class="content">
                        <textarea name="invc_id" class="input-box txtarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="public_buttons2">
        <router-link to="/product" class="btns2 white-btn" title="返回上一步">返回上一步</router-link>
        <router-link to="/cart" class="btns2" title="送出訂單">送出訂單</router-link>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'buyInfo',
    }
</script>

<style scoped>
    .buyInfo {
        border: 1px solid #ccc;
        padding: 30px 40px;
        margin-top: 40px;
    }
    
    .buyInfo .public_flex {
        justify-content: space-between;
    }
    
    .buyInfo .public_form {
        width: 48%;
    }
    
    .buyInfo .public_form .form-tit {
        display: flex;
        justify-content: space-between;
    }
    
    .buyInfo .public_form .content {
        width: 100%;
    }
    
    .buyInfo .public_form .form-row {
        margin-bottom: 15px;
    }
</style>