<template>
    <div class="memberChangePassword">
        <h3 class="title">#修改密碼</h3>
        <div class="public_form">
            <div class="form-row">
                <div class="tit">舊密碼<span class="must">*</span></div>
                <div class="content"><input type="text" name="oldPassword" class="input-box"></div>
            </div>
            <div class="form-row">
                <div class="tit">新密碼<span class="must">*</span></div>
                <div class="content"><input type="text" name="newPassword" class="input-box"></div>
            </div>
            <div class="form-row">
                <div class="tit">確認密碼<span class="must">*</span></div>
                <div class="content"><input type="text" name="enterPassword" class="input-box"></div>
            </div>
            <div class="send">
                <div class="half"></div>
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
        name: 'changePassword',
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
    .memberChangePassword .public_form .form-row {
        max-width: 600px;
    }
</style>