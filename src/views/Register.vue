<template>
    <div class="register" v-if="!registerIf">
        <div class="topTitle">
            <h3 class="title">#CREATE AN ACCOUNT</h3>
            <p class="sub-tit">歡迎光臨，如果您是新會員，請填寫下面的表單進行註冊。如果您已經是本站的會員，請直接
                <router-link to="/login" title="登入">登入</router-link>
                <!-- <a href="member_login.html" title="登入">登入</a> -->
            </p>
        </div>
        <div class="cart_box">
            <Form @submit="onSubmit">
                <div class="public_form">
                    <div class="half">
                        <!-- <div class="form-tit">會員帳號</div> -->
                        <div class="form-row">
                            <div class="tit">設定帳號<span class="must">*</span></div>
                            <div class="content">
                                <Field name="account" type="text" placeholder="請輸入帳號" :rules="validateEmail"/>
                                <ErrorMessage class="error" name="account" />
                                <!-- <input name="account" type="text" v-model="account" placeholder="請輸入帳號"> -->
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">設定密碼<span class="must">*</span></div>
                            <div class="content">
                                <Field name="password" type="password" placeholder="請輸入密碼" :rules="validatePassword"/>
                                <ErrorMessage class="error" name="password" />
                                <!-- <input name="password" type="password" v-model="password" placeholder="請輸入密碼"> -->
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">確認密碼<span class="must">*</span></div>
                            <div class="content">
                                <Field name="password1" type="password" placeholder="請輸入確認密碼" :rules="validatePassword1"/>
                                <ErrorMessage class="error" name="password1" />
                                <!-- <input name="password1" type="password" v-model="password1" placeholder="請輸入確認密碼"> -->
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="tit">姓名<span class="must">*</span></div>
                            <div class="content">
                                <input type="text" name="name" v-model="name" placeholder="請輸入姓名">
                            </div>
                        </div> -->
                    </div>
                    <div class="half">
                        <!-- <div class="form-tit">會員基本資料</div> -->
                        <div class="form-row">
                            <div class="tit">註冊姓名<span class="must">*</span></div>
                            <div class="content">
                                <div class="public_col-2">
                                    <Field type="text" name="name" placeholder="請輸入姓名" :rules="validateName"/>
                                    <!-- <input type="text" name="name" v-model="name" placeholder="請輸入姓名"> -->
                                    <div class="radios">
                                        <label class="radio"><Field type="radio" value="m" name="sex" v-model="sex"/><span><i></i></span>&nbsp;先生</label>
                                        <label class="radio"><Field type="radio" value="w" name="sex" v-model="sex"/><span><i></i></span>&nbsp;小姐</label>
                                    </div>
                                </div>
                                <ErrorMessage class="error" name="name" />
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
                                <Field type="text" name="phone" placeholder="請輸入手機" :rules="validatePhone"/>
                                <ErrorMessage class="error" name="phone"/>
                                <!-- <input type="text" name="phone" v-model="phone" placeholder="請輸入手機"> -->
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="tit">連絡地址<span class="must">*</span></div>
                            <div class="content">
                                <div class="public_col-3">
                                    <div>
                                        <select name="city" v-model="cityIdx">
                                            <option v-for="(dis,index) in districts" :key="index" :value="index">{{dis.name}}</option>
                                        </select>
                                        <ErrorMessage class="error" name="city"/>
                                    </div>
                                    <div>
                                        <select name="dist" v-model="areaIdx">
                                            <option v-for="(dis,index) in areas" :key="index" :value="index">{{dis.name}}</option>
                                        </select>
                                        <ErrorMessage class="error" name="dist"/>
                                    </div>
                                    <div>
                                        <Field name="postalCode" type="text" placeholder="郵遞區號" :rules="validatePostalCode" v-model="zip"/>
                                        <ErrorMessage class="error" name="postalCode"/>
                                    </div>
                                </div>
                                <Field type="text" name="address" placeholder="請輸入地址" :rules="validateAddress"/>
                                <ErrorMessage class="error" name="address"/>
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
                        <label class="check">
                            <input type="checkbox" v-model="receiveActivity">
                            <span></span>
                            &nbsp;我要收到IMAKEGO好康活動電子報
                        </label>
                        <label class="check">
                            <input type="checkbox" v-model="checked">
                            <span></span>
                            &nbsp;我已詳細閱讀
                            <a href="#terms" class="terms">會員條款</a>
                        </label>
                    </div>
                    <div class="half">
                        <div class="public_buttons">
                            <!-- <button class="btns" title="確認送出" @click='submit'>確認送出</button> -->
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
                <!-- <a href="member_login.html" title="登入">登入</a> -->
            </p>
        </div>
    </div>
</template>

<script>
    import {
        Field,
        Form,
        ErrorMessage,
    } from 'vee-validate';
    import {
        mapState,
        mapMutations,
        mapActions,
    } from 'vuex'
    export default {
        name: 'register',
        components: {
            Field,
            Form,
            ErrorMessage,
        },
        mounted() {
            this.$store.dispatch('register/districtsAc')
                // ...mapActions(['register/districtsAc'])
        },
        data() {
            return {
                time: 0,
                registerIf: false,
                getCodeIf: false,
                // account: '',
                password: '',
                // password1: '',
                // name: '',
                sex: 'm',
                year: '',
                moon: '',
                day: '',
                phone: '',
                address: '',
                receiveActivity: false,
                verificationCode: '',
                checked: false,
                cityIdx: 0,
                areaIdx: 0
            }
        },
        computed: {
            ...mapState('register', ['districts']),
            areas() {
                return this.districts ? this.districts[this.cityIdx].districts : [];
            },
            zip() {
                return this.areas[this.areaIdx].zip;
            },
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
            submit() {
                const {
                    account,
                    password,
                    password1,
                    name,
                    sex,
                    year,
                    moon,
                    day,
                    phone,
                    receiveActivity,
                    verificationCode,
                    checked
                } = this;
                //驗證

                //送出
                this.$store.dispatch('user/register', {
                        account: account,
                        password: password,
                        name: name,
                        sex: sex,
                        year: year,
                        moon: moon,
                        day: day,
                        phone: phone,
                        receiveActivity: receiveActivity,
                        verificationCode: verificationCode,
                        checked: checked
                    })
                    .then(() => {
                        this.registerIf = true;
                        return this.countdown(5);
                    })
                    .then(() => {
                        //跳轉
                        this.$router.push('/login');
                    })
            },
            validateEmail(value) {
                // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                const regex = /\S+@\S+\.\S+/;
                if (!value) {
                    return '請輸入會員帳號';
                } else if (!regex.test(value)) {
                    return '格式錯誤';
                } else {
                    return true;
                }
            },
            validatePassword(value) {
                const isText = /^[a-zA-Z0-9]+$/;
                const inclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
                if (!value) {
                    return '請輸入會員密碼';
                } else if (!isText.test(value)) {
                    return '請勿包含特殊字元';
                } else if (value.length < 6) {
                    return '請勿少於6個字';
                } else if (value.length > 15) {
                    return '請勿超過15個字';
                } else if (!inclde.test(value)) {
                    return '至少包括一個大小寫字母或數字';
                } else {
                    this.password = value;
                    return true;
                }
            },
            validatePassword1(value) {
                if (!value) {
                    return '請輸入會員密碼';
                } else if (value != this.password) {
                    return '密碼不一樣'
                } else {
                    return true;
                }
            },
            validateName(value) {
                if (!value) {
                    return '請輸入會員姓名';
                } else if (value.length < 2) {
                    return '請勿少於2個字';
                } else if (value.length > 15) {
                    return '請勿超過15個字';
                } else {
                    return true;
                }
            },
            validatePhone(value) {
                const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
                if (!value) {
                    return '請輸入連絡電話';
                } else if (!regex.test(value)) {
                    return '格式錯誤';
                } else {
                    return true;
                }
            },
            validateAddress(value) {
                if (!value) {
                    return '請輸入聯絡地址';
                } else {
                    return true;
                }
            },
            validatePostalCode(value) {
                if (!value) {
                    return '請輸入郵遞區號';
                } else {
                    return true;
                }
            },
            onSubmit(values) {
                console.log(values, null, 2);
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
</style>