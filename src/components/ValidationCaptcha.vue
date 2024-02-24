<template>
    <div class="code_box">
        <input :type="type" :class="class" v-model='form.value' @change='onChange'>
        <a href="" title="更換驗證碼"><img src="https://imgur.com/IKAg6jr.jpg" alt=""></a>
    </div>
    <div class="error" v-if="form.msg">{{form.msg}}</div>
</template>

<script>
    import {
        formIsValid
    } from '@/customFn/validate'
    export default {
        props: ['type', 'class', 'form'],
        computed: {},
        methods: {
            onChange() {
                // this.$emit("form", this.form)
                formIsValid(this.form)
            },
        }
    }
</script>

<style scoped>

</style>