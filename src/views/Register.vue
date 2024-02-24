<template>
    <div class="register" v-if="!registerIf">
        <div class="topTitle">
            <h3 class="title">#CREATE AN ACCOUNT</h3>
            <p class="sub-tit">歡迎光臨，如果您是新會員，請填寫下面的表單進行註冊。如果您已經是本站的會員，請直接
                <router-link to="/login" title="登入">登入</router-link>
            </p>
        </div>
        <div class="cart_box">
            <Form @submit.prevent="onSubmit">
                <div class="public_form">
                    <div class="half">
                        <div class="form-row">
                            <div class="tit">設定帳號<span class="must">*</span></div>
                            <div class="content">
                                <input name="account" type="text" v-model="from.account.value" placeholder="請輸入帳號" @change='formIsValid("account")'>
                                <div class="error" v-if="from.account.msg">{{from.account.msg}}</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">設定密碼<span class="must">*</span></div>
                            <div class="content">
                                <input name="password" type="password" v-model="from.password.value" placeholder="請輸入密碼" @change='formIsValid("password")'>
                                <div class="error" v-if="from.password.msg">{{from.password.msg}}</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">確認密碼<span class="must">*</span></div>
                            <div class="content">
                                <input name="password1" type="password" v-model="from.password1.value" placeholder="請輸入確認密碼" @change='formIsValid("password1")'>
                                <div class="error" v-if="from.password1.msg">{{from.password1.msg}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="half">
                        <div class="form-row">
                            <div class="tit">註冊姓名<span class="must">*</span></div>
                            <div class="content">
                                <div class="public_col-2">
                                    <input name="name" type="text" v-model="from.name.value" placeholder="請輸入姓名" @change='formIsValid("name")'>
                                    <div class="radios">
                                        <label class="radio"><input type="radio" value="m" name="sex" v-model="from.sex.value"/><span><i></i></span>&nbsp;先生</label>
                                        <label class="radio"><input type="radio" value="w" name="sex" v-model="from.sex.value"/><span><i></i></span>&nbsp;小姐</label>
                                    </div>
                                </div>
                                <div class="error" v-if="from.name.msg">{{from.name.msg}}</div>
                                <div class="error" v-if="from.sex.msg">{{from.sex.msg}}</div>
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">生日<span class="must">*</span></div>
                            <div class="content three-warp">
                                <div class="three">
                                    <select name="year" v-model="year">
                                    <option>年</option>
                                </select>
                                </div>
                                <div class="three">
                                    <select name="moon" v-model="moon">
                                    <option>月</option>
                                </select>
                                </div>
                                <div class="three">
                                    <select name="day" v-model="day">
                                    <option>日</option>
                                </select>
                                </div>
                            </div>
                        </div> -->
                        <div class="form-row">
                            <div class="tit">連絡電話<span class="must">*</span></div>
                            <div class="content">
                                <input type="text" name="phone" v-model="from.phone.value" placeholder="請輸入手機" @change='formIsValid("phone")'>
                                <div class="error" v-if="from.phone.msg">{{from.phone.msg}}</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">連絡地址<span class="must">*</span></div>
                            <div class="content">
                                <div class="public_col-3">
                                    <div>
                                        <select name="city" v-model="from.city.value">
                                            <option v-for="(dis,index) in districts" :key="index" :value="index">{{dis.name}}</option>
                                        </select>
                                        <div class="error" v-if="from.city.msg">{{from.city.msg}}</div>
                                    </div>
                                    <div>
                                        <select name="dist" v-model="from.area.value">
                                            <option v-for="(dis,index) in areas" :key="index" :value="index">{{dis.name}}</option>
                                        </select>
                                        <div class="error" v-if="from.area.msg">{{from.area.msg}}</div>
                                    </div>
                                    <div>
                                        <input type="text" name="zip" placeholder="郵遞區號" v-model="from.zip.value" @change='formIsValid("zip")'>
                                        <div class="error" v-if="from.zip.msg">{{from.zip.msg}}</div>
                                    </div>
                                </div>
                                <input type="text" name="address" placeholder="請輸入地址" v-model="from.address.value" @change='formIsValid("address")'>
                                <div class="error" v-if="from.address.msg">{{from.address.msg}}</div>
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">驗證碼<span class="must">*</span></div>
                            <div class="content code_box">
                                <input type="text" name="verificationCode" v-model="verificationCode"  placeholder="請輸入驗證碼">
                                <button v-if="!getCodeIf" @click="getCode">獲取驗證碼</button>
                                <button v-if="getCodeIf" disabled="disabled">從新發送({{time}})秒</button>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="public_form">
                    <div class="half">
                        <div class="content checkDiv">
                            <label class="check">
                                <input type="checkbox" v-model="from.receiveActivity.value">
                                <span></span>
                                &nbsp;我要收到IMAKEGO好康活動電子報
                            </label>
                            <div class="error" v-if="from.receiveActivity.msg">{{from.receiveActivity.msg}}</div>
                        </div>
                        <div class="content checkDiv">
                            <label class="check">
                                <input type="checkbox" v-model="from.checked.value">
                                <span></span>
                                &nbsp;我已詳細閱讀
                                <a href="#" class="terms">會員條款</a>
                            </label>
                            <div class="error" v-if="from.checked.msg">{{from.checked.msg}}</div>
                        </div>
                    </div>
                    <div class="half">
                        <div class="public_buttons">
                            <button class="btns" title="確認送出">確認送出</button>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </div>
    <div class="register public_flexContent" v-if="registerIf">
        <div class="topTitle">
            <h3 class="title">#您已註冊成功</h3>
            <p class="sub-tit">畫面將在{{time}}秒鐘後自動跳轉....
                <router-link to="/login" title="登入">登入</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
    } from 'vuex'
    export default {
        name: 'register',
        components: {},
        mounted() {
            this.$store.dispatch('register/districtsAc')
        },
        data() {
            return {
                time: 0,
                registerIf: false,
                from: {
                    receiveActivity: {
                        value: false,
                        msg: '',
                        valid: false
                    },
                    checked: {
                        value: false,
                        msg: '',
                        valid: true
                    },
                    account: {
                        value: '',
                        msg: '',
                        valid: true
                    },
                    city: {
                        value: 0,
                        msg: '',
                        valid: false
                    },
                    area: {
                        value: 0,
                        msg: '',
                        valid: false
                    },
                    password: {
                        value: '',
                        msg: '',
                        valid: true
                    },
                    password1: {
                        value: '',
                        msg: '',
                        valid: true
                    },
                    name: {
                        value: '',
                        msg: '',
                        valid: true
                    },
                    sex: {
                        value: 'm',
                        msg: '',
                        valid: false
                    },
                    phone: {
                        value: '',
                        msg: '',
                        valid: true
                    },
                    zip: {
                        value: '',
                        msg: '',
                        valid: true
                    },
                    address: {
                        value: '',
                        msg: '',
                        valid: true
                    }
                }
            }
        },
        computed: {
            ...mapState('register', ["districts"]),
            areas() {
                if (Object.keys(this.districts).length === 0) {
                    return [];
                } else {
                    this.from.zip.value = this.districts[this.from.city.value].districts[this.from.area.value].zip;
                    return this.districts[this.from.city.value].districts;
                }
            },
        },
        methods: {
            countdown(second = 5) {
                return new Promise((resolve, reject) => {
                    let start = null;
                    let limit = second * 1000;
                    let count = 0;
                    let number = 0;
                    let self = this;
                    let animation = function(t) {
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
            getCode() {
                const {
                    phone
                } = this;
                if (!phone) {
                    console.log('電話沒有填')
                }
                phone && this.$store.dispatch('user/getCode', phone)
                    .then(() => {
                        //驗證碼倒數計時
                        this.getCodeIf = true;
                        this.countdown(30).then(() => {
                            this.getCodeIf = false;
                        })

                        //自動給驗證碼
                        this.verificationCode = this.$store.state.user.codeNumber
                    })
            },
            validate_account(value) {
                // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                const regex = /\S+@\S+\.\S+/;
                let msg = '';
                if (!value) {
                    msg = '請輸入會員帳號';
                } else if (!regex.test(value)) {
                    msg = '格式錯誤';
                }
                return msg;
            },
            validate_password(value) {
                const isText = /^[a-zA-Z0-9]+$/;
                const inclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
                let msg = '';
                if (!value) {
                    msg = '請輸入會員密碼';
                } else if (!isText.test(value)) {
                    msg = '請勿包含特殊字元';
                } else if (value.length < 6) {
                    msg = '請勿少於6個字';
                } else if (value.length > 15) {
                    msg = '請勿超過15個字';
                } else if (!inclde.test(value)) {
                    msg = '至少包括一個大小寫字母或數字';
                }
                return msg;
            },
            validate_password1(value) {
                let msg = '';
                if (!value) {
                    msg = '請輸入會員密碼';
                } else if (value != this.from.password.value) {
                    msg = '密碼不一樣'
                }
                return msg;
            },
            validate_name(value) {
                let msg = '';
                if (!value) {
                    msg = '請輸入會員姓名';
                } else if (value.length < 2) {
                    msg = '請勿少於2個字';
                } else if (value.length > 15) {
                    msg = '請勿超過15個字';
                }
                return msg;
            },
            validate_phone(value) {
                const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
                let msg = '';
                if (!value) {
                    msg = '請輸入連絡電話';
                } else if (!regex.test(value)) {
                    msg = '格式錯誤';
                }
                return msg;
            },
            validate_address(value) {
                let msg = '';
                if (!value) {
                    msg = '請輸入聯絡地址';
                }
                return msg;
            },
            validate_zip(value) {
                let msg = '';
                if (!value) {
                    msg = '請輸入郵遞區號';
                }
                return msg;
            },
            validate_checked(value) {
                let msg = '';
                if (!value) {
                    msg = '請勾選條款';
                }
                return msg;
            },
            formIsValid(value) {
                this.from[value].msg = this['validate_' + value](this.from[value].value)
            },
            formIsAllValid() {
                let data = Object.entries(this.from);
                data.forEach(([key, keyValue]) => {
                    if (keyValue.valid) {
                        keyValue.msg = this['validate_' + key](keyValue.value)
                    }
                });
                return data.find(([key, keyValue]) => {
                    if (keyValue.valid && keyValue.msg != '') {
                        return 1; //有錯
                    } else {
                        return 0; //沒錯
                    }
                });
            },
            onSubmit(values) {
                if (this.formIsAllValid()) return; //formIsError
                //送出
                this.$store.dispatch('user/register', this.from)
                    .then(() => {
                        this.registerIf = true;
                        return this.countdown(5);
                    })
                    .then(() => {
                        //跳轉
                        this.$router.push('/login');
                    })
            },
        }
    }
</script>
<style scoped>
    .public_flexContent {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .register {
        min-height: 480px;
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
    
    .register .cart_box {
        border: none;
        padding: 30px 40px;
    }
    
    .register .public_form {
        border-top: 1px solid #eee;
        margin-top: 20px;
        padding-top: 20px;
    }
    
    .register .public_form:nth-child(1) {
        padding-top: 50px
    }
    
    .public_form {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        justify-content: space-between;
    }
    
    .public_form .tit,
    .public_form .content {
        font-size: 16px;
    }
    
    .public_form .content {
        flex: 1 1;
        /* width: 100%; */
        /* padding: 7px 0; */
        /* display: flex; */
        /* align-items: center; */
        position: relative;
    }
    
    .public_form .content .error {
        color: red;
        font-size: 12px;
        position: absolute;
        bottom: -15px;
        left: 0;
    }
    /* .public_form .input-box {
            border: 1px solid #ccc;
            background: #fff;
            border-radius: 2px;
            padding: 5px 10px;
            width: 100%;
            height: 35px;
        } */
    
    .public_form .code_box input {
        width: 60%;
        margin-right: 10px;
    }
    
    .public_form .code_box button {
        width: 40%;
        padding: 5px 10px;
        height: 35px;
        cursor: pointer;
    }
    
    .public_form .form-tit {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1.25rem;
        position: relative;
        flex-basis: 100%;
        color: #333;
    }
    
    .public_form .half {
        flex-basis: 46%;
        /* padding-right: 30px; */
    }
    
    .public_form .three-warp {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
    }
    
    .public_form .three-warp>div {
        flex-basis: 33.3333%;
        padding: 0 5px;
    }
    
    .public_form .three-warp>div:first-child {
        padding-left: 0;
    }
    
    .public_form .three-warp>div:last-child {
        padding-right: 0;
    }
    
    .public_form .public_buttons {
        text-align: right;
        border: none;
        padding-top: 0;
    }
    
    .public_form .checkDiv+.checkDiv {
        padding-top: 5px;
    }
</style>