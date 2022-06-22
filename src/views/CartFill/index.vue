<template>
    <div class="cartFill">
        <FnCartSteps :selected="2"></FnCartSteps>
        <FnCarList :isCoupon=false></FnCarList>
        <div class="public_box public_form">
            <div class="buyInfo">
                <div class="public_col-2">
                    <div>
                        <div class="form-tit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></svg>購買人資訊
                        </div>
                        <div class="form-row">
                            <!-- <div class="tit">購買姓名</div>
                            <div class="content">
                                <input name="buyer_name" type="text">
                            </div> -->
                            <div class="tit">購買姓名<span class="must">*</span></div>
                            <div class="content">
                                <div class="public_col-2">
                                    <input type="text" name="name" v-model="name" placeholder="請輸入姓名">
                                    <div class="radios">
                                        <label class="radio"><input type="radio" value="m" name="sex" v-model="sex"><span><i></i></span>&nbsp;先生</label>
                                        <label class="radio"><input type="radio" value="w" name="sex" v-model="sex"><span><i></i></span>&nbsp;小姐</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">性別</div>
                            <div class="content">
                                <label class="radio"><input type="radio" v-model="sex" value="m"><span><i></i></span>&nbsp;先生</label>
                                <label class="radio"><input type="radio" v-model="sex" value="w"><span><i></i></span>&nbsp;小姐</label>
                            </div>
                        </div> -->
                        <div class="form-row">
                            <div class="tit">聯絡電話<span class="must">*</span></div>
                            <div class="content">
                                <input name="buyer_tel" type="text">
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">手機號碼</div>
                            <div class="content">
                                <input name="buyer_mobile" type="text">
                            </div>
                        </div> -->
                        <div class="form-row">
                            <div class="tit">聯絡地址<span class="must">*</span></div>
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
                                <input type="text" name="buyer_address" class="mgTop">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="between">
                            <div class="form-tit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"/></svg>收件人資訊
                            </div>
                            <div class="input">
                                <label class="check">
                                    <input type="checkbox" name="payment_type">
                                        <span><i class="fa fa-check" aria-hidden="true"></i></span>同購買人
                                </label>
                            </div>
                        </div>
                        <div class="form-row">
                            <!-- <div class="tit">購買姓名</div>
                            <div class="content">
                                <input type="text" name="receiver_name">
                            </div> -->
                            <div class="tit">購買姓名<span class="must">*</span></div>
                            <div class="content">
                                <div class="public_col-2">
                                    <input type="text" name="name" v-model="name" placeholder="請輸入姓名">
                                    <div class="radios">
                                        <label class="radio"><input type="radio" value="m" name="sex" v-model="sex"><span><i></i></span>&nbsp;先生</label>
                                        <label class="radio"><input type="radio" value="w" name="sex" v-model="sex"><span><i></i></span>&nbsp;小姐</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">性別</div>
                            <div class="content">
                                <label class="radio"><input type="radio" v-model="sex2" value="m"><span><i></i></span>&nbsp;先生</label>
                                <label class="radio"><input type="radio" v-model="sex2" value="w"><span><i></i></span>&nbsp;小姐</label>
                            </div>
                        </div> -->
                        <div class="form-row">
                            <div class="tit">聯絡電話<span class="must">*</span></div>
                            <div class="content">
                                <input type="text" name="receiver_tel">
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">手機號碼</div>
                            <div class="content">
                                <input type="text" name="receiver_mobile">
                            </div>
                        </div> -->
                        <div class="form-row">
                            <div class="tit">聯絡地址<span class="must">*</span></div>
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
                                <input type="text" name="receiver_address">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="otherInfo">
                <div class="form-tit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" data-v-0b92f59a=""><path fill="none" d="M0 0h48v48h-48z" data-v-0b92f59a=""></path><path d="M40 16h-6v-8h-28c-2.21 0-4 1.79-4 4v22h4c0 3.31 2.69 6 6 6s6-2.69 6-6h12c0 3.31 2.69 6 6 6s6-2.69 6-6h4v-10l-6-8zm-28 21c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm27-18l3.93 5h-8.93v-5h5zm-3 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" data-v-0b92f59a=""></path></svg>其他資訊
                </div>
                <div class="public_col-2">
                    <div>
                        <div class="form-row">
                            <div class="tit">配送時間</div>
                            <div class="content">
                                <label class="radio"><input type="radio" v-model="time" value="1"><span><i></i></span>皆可</label>
                                <label class="radio"><input type="radio" v-model="time" value="2"><span><i></i></span>上午</label>
                                <label class="radio"><input type="radio" v-model="time" value="3"><span><i></i></span>下午</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">發票資訊</div>
                            <div class="content">
                                <label class="radio"><input type="radio" v-model="invcType" value="2"><span><i></i></span>電子發票(二聯式)</label>
                                <label class="radio"><input type="radio" v-model="invcType" value="3"><span><i></i></span>公司用(三聯式)</label>
                                <!-- <div class="invoice-box">
                                    <input type="text" name="invc_title" placeholder="公司抬頭" class="input-box">
                                    <input type="text" name="invc_id" placeholder="統一編號" class="input-box">
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="form-row">
                            <div class="tit">其他備註</div>
                            <div class="content">
                                <textarea name="invc_id"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="public_buttons2">
            <router-link to="/cart" class="btns2 white-btn" title="返回上一步">返回上一步</router-link>
            <router-link to="/cartFinish" class="btns2" title="送出訂單">送出訂單</router-link>
        </div>
    </div>
</template>
<script>
    import FnCartSteps from '@/components/FnCartSteps'
    import FnCarList from '@/components/FnCarList'
    export default {
        name: 'cartFill',
        components: {
            FnCartSteps,
            FnCarList,
        },
        data() {
            return {
                sex: 'm',
                sex2: 'm',
                invcType: "2",
                time: "1",
            }
        }
    }
</script>

<style scoped>
    .public_box .form-row {
        margin-bottom: 15px;
    }
    
    .public_box .form-tit {
        margin-top: 10px;
    }
    
    .public_box .content {
        width: 100%;
    }
    
    .buyInfo .between {
        align-items: baseline;
        display: flex;
        justify-content: space-between;
    }
    
    .buyInfo .between .form-tit {
        width: auto;
    }
    
    .otherInfo {
        margin-top: 50px;
    }
    
    .otherInfo textarea {
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 2px;
        padding: 5px 10px;
        width: 100%;
        height: 130px;
        box-sizing: border-box;
    }
    
    .otherInfo .content {
        display: flex;
    }
</style>