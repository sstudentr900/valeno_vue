<template>
    <textarea :class="class" v-model='form.value' @change='onChange'></textarea>
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