<template>
    <div class="memberInfo">
        <h3 class="title">#修改會員資料</h3>
        <div class="public_form">
            <div class="form-row">
                <div class="tit"><span class="must"></span>會員帳號</div>
                <div class="content public_text_grey">grnet@grnet.com.tw</div>
            </div>
            <div class="form-row">
                <div class="tit"><span class="must"></span>姓&emsp;&emsp;名</div>
                <div class="content public_text_grey">吳大為 先生</div>
            </div>
            <!-- <div class="form-row">
                <div class="tit">生&emsp;&emsp;日</div>
                <div class="content public_text_grey">
                    2017年1月1日
                </div>
            </div> -->
            <div class="form-row">
                <div class="tit">連絡電話<span class="must">*</span></div>
                <div class="content"><input type="text" name="mobile" value="0912345678" class="input-box"></div>
            </div>
            <div class="form-row">
                <div class="tit">聯絡地址<span class="must">*</span></div>
                <div class="content">
                    <div class="public_col-3">
                        <div>
                            <input name="zipcode" type="text" class="input-box" placeholder="郵遞區號">
                        </div>
                        <div>
                            <select name="city_id" class="input-box">
                                <option>請選擇縣市</option>
                            </select>
                        </div>
                        <div>
                            <select name="dist_id" class="input-box">
                                <option>請選擇區域</option>
                            </select>
                        </div>
                    </div>
                    <input type="text" name="address" class="input-box">
                </div>
            </div>
            <div class="send">
                <div class="half">
                    <label class="check"><input type="checkbox"><span><i class="fa fa-check" aria-hidden="true"></i></span>&nbsp;我要收到IMAKEGO好康活動電子報</label>
                </div>
                <div class="half">
                    <div class="public_buttons">
                        <button class="btns" title="儲存修改">儲存修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'info',
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
    .memberInfo .check {
        margin-top: 20px;
        margin-bottom: 0;
    }
</style>