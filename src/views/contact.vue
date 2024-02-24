<template>
    <div class="contact">
        <div class="left">
            <h4 class="public_title">#CONTACT</h4>
        </div>
        <div class="right">
            <!-- <form action="contactOk.html"> -->
            <div class="public_form">
                <p class="word">對我們的產品或網站有任何問題嗎? 請填寫下列表單，我們將盡快與您聯繫 &nbsp;(* 為必填欄位) </p>
                <!-- <div class="inputDiv">
                    <div class="tit"><span class="must">*</span>問題類型</div>
                    <div class="content">
                        <select class="inputObj">
                            <option>請選擇問題類型</option>
                        </select>
                    </div>
                </div> -->
                <div class="form-row">
                    <div class="tit">主&emsp;&emsp; 旨<span class="must">*</span></div>
                    <div class="content"><input type="text" name="subject" class="inputObj"></div>
                </div>
                <div class="form-row">
                    <div class="tit">姓&emsp;&emsp; 名<span class="must">*</span></div>
                    <div class="content"><input type="text" name="fullname" class="inputObj"></div>
                </div>
                <div class="form-row">
                    <div class="tit">連絡電話<span class="must">*</span></div>
                    <div class="content"><input type="text" name="tel" class="inputObj"></div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡信箱<span class="must">*</span></div>
                    <div class="content"><input type="text" name="email" class="inputObj"></div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡地址<span class="must"></span></div>
                    <div class="content">
                        <div class="add_box">
                            <div class="selectBox">
                                <select name="city_id" class="inputObj">
                                <option>請選擇縣市</option>
                            </select>
                            </div>
                            <div class="selectBox">
                                <select name="dist_id" class="inputObj">
                                    <option>請選擇區域</option>
                                </select>
                            </div>
                            <div class="box">
                                <input type="text" name="address" class="inputObj">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">諮詢內容<span class="must">*</span></div>
                    <div class="content">
                        <textarea name="content" class="inputObj txtarea"></textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">驗證碼<span class="must">*</span></div>
                    <div class="content code_box">
                        <input type="text" name="captcha" class="inputObj">
                        <a href="" title="更換驗證碼"><img :src="require(`@/assets/code.jpg`)" alt=""></a>
                    </div>
                </div>
                <div class="form-row">
                    <div class="public_buttons">
                        <button type="reset" class="btns white-btn" title="清除重填"><span>清除重填</span></button>
                        <button type="submit" class="btns" title="確認送出"><span>確認送出</span></button>
                    </div>
                </div>
            </div>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact',
}
</script>

<style scoped>
    .contact{
        display: flex;
        margin-top: 60px;
    }
    .contact .left{
        width: 250px;
    }
    .contact .right{
        flex: 1 1;
    }
    .contact .public_title{
        margin-top: 15px;
    }
    .contact .word {
        color: #c1894c;
        margin-bottom: 30px;
    }
    .contact .public_form{
        border-left: 1px solid #f1f1f1;
        padding: 20px 50px 0;
        position: relative;
    }
    .contact .public_form:before{
        content: "";
        width: 1px;
        height: 100px;
        background: #000;
        position: absolute;
        left: -1px;
        top: 0;
        display: block;
    }
    /* .contact .public_form .inputDiv{
        display: flex;
        align-items: flex-start;
        padding: 12px 0;
    } */
    .contact .public_form .tit {
        width: 120px;
        font-size: 1rem;
        padding: 7px 0;
        color: #000;
        font-weight: bold;
    }
    .contact .inputDiv:last-child{
        justify-content: flex-end;
    }
    .contact .content{
        width: 100%;
    }
    .contact input,
    .contact button,
    .contact textarea,
    .contact select,
    .contact optgroup,
    .contact option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        outline: 0;
    }
    .contact .inputObj {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #ccc;
        background: #fff;
        padding: 5px 10px;
        width: 100%;
        box-sizing: border-box;
    }
    .contact .add_box{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .contact .selectBox{
        width: 20%;
        padding: 0 5px;
        box-sizing: border-box;
    }
    .contact .selectBox:first-child{
        padding-left: 0;
    }
    .contact .box{
        width: 60%;
        padding: 0 5px;
        box-sizing: border-box;
    }
    .contact .txtarea {
        height: 130px;
    }
    .contact .code_box{
        display: flex;
        align-items: center;
        width: 300px;
    }
    .contact .code_box .inputObj{
        padding: 8px 10px;
        width: 130px;
        margin-right: 10px;
    }
    .contact .public_buttons{
        border: none;
    }
    /* .contact .white-btn {
        background: #fff;
        color: #222;
    } */
</style>
