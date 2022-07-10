<template>
    <div class="contact" v-if="!pageIs">
        <div class="left">
            <h4 class="public_title">#CONTACT</h4>
        </div>
        <div class="right">
            <form @submit.prevent='onSubmit'>
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
                        <div class="content">
                            <input type="text" name="subject" class="inputObj" v-model='form.subject.value' @change='formIsValid("subject")'>
                            <div class="error" v-if="form.subject.msg">{{form.subject.msg}}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit">姓&emsp;&emsp; 名<span class="must">*</span></div>
                        <div class="content">
                            <input type="text" name="name" class="inputObj" v-model='form.name.value' @change='formIsValid("name")'>
                            <div class="error" if="form.subject.msg">{{form.name.msg}}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit">連絡電話<span class="must">*</span></div>
                        <div class="content">
                            <input type="text" name="tel" class="inputObj" v-model='form.tel.value' @change='formIsValid("tel")'>
                            <div class="error" if="form.tel.msg">{{form.tel.msg}}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit">聯絡信箱<span class="must">*</span></div>
                        <div class="content">
                            <input type="text" name="email" class="inputObj" v-model='form.email.value' @change='formIsValid("email")'>
                            <div class="error" if="form.email.msg">{{form.email.msg}}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit">聯絡地址<span class="must"></span></div>
                        <div class="content">
                            <div class="add_box">
                                <div class="selectBox">
                                    <select name="city" class="inputObj" v-model='form.cityId.value'>
                                        <option v-for="(item,index) in cityFn" :key='index' :value='index'>{{item.name}}</option>
                                    </select>
                                    <div class="error" v-if='form.cityId.msg'>{{form.cityId.msg}}</div>
                                </div>
                                <div class="selectBox">
                                    <select name="dist" class="inputObj" v-model='form.distId.value'> 
                                        <option v-for="(item,index) in distFn" :key='index' :value='index'>{{item.name}}</option>
                                    </select>
                                    <div class="error" v-if='form.distId.msg'>{{form.distId.msg}}</div>
                                </div>
                                <div class="box">
                                    <input type="text" name="address" class="inputObj" v-model='form.address.value' @change='formIsValid("address")'>
                                    <div class="error" v-if="form.address.msg">{{form.address.msg}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit">諮詢內容<span class="must">*</span></div>
                        <div class="content">
                            <textarea name="content" class="inputObj txtarea" v-model='form.content.value' @change='formIsValid("content")'></textarea>
                            <div class="error" if='form.content.msg'>{{form.content.msg}}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit">驗證碼<span class="must">*</span></div>
                        <div class="content ">
                            <div class="code_box">
                                <input type="text" name="captcha" class="inputObj" v-model='form.captcha.value' @change='formIsValid("captcha")'>
                                <a href="" title="更換驗證碼"><img src="https://imgur.com/IKAg6jr.jpg" alt=""></a>
                            </div>
                            <div class="error" v-if="form.captcha.msg">{{form.captcha.msg}}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="public_buttons">
                            <button type="reset" class="btns white-btn" title="清除重填"><span>清除重填</span></button>
                            <button type="submit" class="btns" title="確認送出"><span>確認送出</span></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="register public_flexContent" v-if="pageIs">
        <div class="topTitle">
            <h3 class="title">#信件寄出成功</h3>
            <p class="sub-tit">畫面將在{{time}}秒鐘後自動跳轉....
                <router-link to="/" title="首頁">首頁</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data() {
            return {
                time: 0,
                pageIs: false,
                form: {
                    name: {
                        value: '',
                        msg: '',
                        valid: {
                            required: {
                                msg: '請輸入姓名',
                            },
                            max: {
                                number: 5,
                                msg: '請勿超過5個字',
                            },
                            min: {
                                number: 2,
                                msg: '請勿少於2個字',
                            }
                        }
                    },
                    subject: {
                        value: '',
                        msg: '',
                        valid: {
                            required: {
                                msg: '請輸入主旨'
                            },
                            max: {
                                number: 10,
                                msg: '請勿超過10個字',
                            },
                            min: {
                                number: 2,
                                msg: '請勿少於2個字',
                            }
                        }
                    },
                    content: {
                        value: '',
                        msg: '',
                        valid: {
                            required: {
                                msg: '請輸入內容'
                            },
                            max: {
                                number: 100,
                                msg: '請勿超過100個字',
                            },
                            min: {
                                number: 2,
                                msg: '請勿少於2個字',
                            }
                        }
                    },
                    captcha: {
                        value: '',
                        msg: '',
                        valid: {
                            required: {
                                msg: '請輸入驗證碼'
                            }
                        }
                    },
                    email: {
                        value: '',
                        msg: '',
                        valid: {
                            required: {
                                msg: '請輸入信箱'
                            },
                            email: {
                                msg: '格式錯誤',
                            },
                            max: {
                                number: 30,
                                msg: '請勿超過30個字',
                            }
                        }
                    },
                    address: {
                        value: '',
                        msg: '',
                        valid: '',
                    },
                    cityId: {
                        value: 0,
                        msg: '',
                        valid: ''
                    },
                    distId: {
                        value: 0,
                        msg: '',
                        valid: ''
                    },
                    tel: {
                        value: '',
                        msg: '',
                        valid: {
                            required: {
                                msg: '請輸入電話'
                            },
                            phone: {
                                msg: '格式錯誤'
                            },
                        }
                    }
                }
            }
        },
        computed: {
            distFn() {},
            cityFn() {}
        },
        methods: {
            countdown(second = 5) {
                return new Promise((resolve, reject) => {
                    var start = null;
                    var limit = second * 1000;
                    var count = 0;
                    var number = 0;
                    var self = this;
                    var animation = function(t) {
                        if (start === null) start = t;
                        count = t - start;
                        number = Math.floor(count / 1000)
                        if (count < limit) {
                            requestAnimationFrame(animation);
                        } else {
                            number = second;
                            resolve()
                        }
                        self.time = second - number;
                    }
                    requestAnimationFrame(animation);
                })
            },
            validate_email(key) {
                // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                const regex = /\S+@\S+\.\S+/;
                return regex.test(this.form[key].value);
            },
            validate_required(key) {
                return this.form[key].value;
            },
            validate_phone(key) {
                // const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                const regex = /\d{8,15}/;
                return regex.test(this.form[key].value);
            },
            validate_max(key) {
                return this.form[key].value.length < this.form[key].valid.max.number;
            },
            validate_min(key) {
                return this.form[key].value.length > this.form[key].valid.min.number;
            },
            formIsValid(key) {
                let valid = this.form[key].valid;
                if (!valid) return; //'' 排除驗證
                Object.entries(valid).some(([validKey, validValue]) => {
                    this.form[key].msg = '';
                    //驗證有錯誤
                    if (!this['validate_' + validKey](key)) {
                        this.form[key].msg = this.form[key].valid[validKey].msg;
                        return true;
                    };
                })
            },
            formIsAllValid() {
                Object.entries(this.form).forEach(([key, keyValue]) => this.formIsValid(key));
                return Object.entries(this.form).find(([key, keyValue]) => keyValue.msg != '')
            },
            onSubmit(values) {
                if (this.formIsAllValid()) return; //formIsError
                //送出
                // console.log('send');
                this.$store.dispatch('contact/send', this.form)
                    .then(() => {
                        this.pageIs = true;
                        return this.countdown();
                    })
                    .then(() => {
                        //跳轉
                        this.$router.push('/');
                    })
            },
        },
    }
</script>

<style scoped>
    .register {
        min-height: 480px;
        display: flex;
        justify-content: center;
    }
    
    .register .topTitle {
        text-align: center;
    }
    
    .register .topTitle .title {
        padding: 15px 0;
        font-size: 42px;
        margin: 40px 0 0;
        text-align: center;
        font-weight: bold;
    }
    
    .register .topTitle .sub-tit {
        font-size: 16px;
    }
    
    .register .topTitle .sub-tit a {
        font-size: 16px;
        text-decoration: underline;
        color: #c1894c;
        display: inline-block;
    }
    
    .contact {
        display: flex;
        margin-top: 60px;
    }
    
    .contact .left {
        width: 250px;
    }
    
    .contact .right {
        flex: 1 1;
    }
    
    .contact .public_title {
        margin-top: 15px;
    }
    
    .contact .word {
        color: #c1894c;
        margin-bottom: 30px;
    }
    
    .contact .public_form .form-row {
        align-items: flex-start;
    }
    
    .contact .public_form {
        border-left: 1px solid #f1f1f1;
        padding: 20px 50px 0;
        position: relative;
    }
    
    .contact .public_form:before {
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
    
    .contact .inputDiv:last-child {
        justify-content: flex-end;
    }
    
    .contact .content {
        width: 100%;
        position: relative;
    }
    
    .content .error {
        color: red;
        font-size: 12px;
        position: absolute;
        bottom: -15px;
        left: 0;
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
    
    .contact .add_box {
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    .contact .selectBox {
        width: 20%;
        padding: 0 5px;
        box-sizing: border-box;
        position: relative;
    }
    
    .contact .selectBox:first-child {
        padding-left: 0;
    }
    
    .contact .box {
        width: 60%;
        padding: 0 5px;
        box-sizing: border-box;
        position: relative;
    }
    
    .contact .txtarea {
        height: 130px;
    }
    
    .contact .code_box {
        display: flex;
        align-items: center;
        width: 300px;
    }
    
    .contact .code_box .inputObj {
        padding: 8px 10px;
        width: 130px;
        margin-right: 10px;
    }
    
    .contact .public_buttons {
        border: none;
    }
    /* .contact .white-btn {
        background: #fff;
        color: #222;
    } */
</style>