<template>
    <div class="text">{{ textLen(str,len) }}</div>
</template>

<script>
export default {
    props:['str','len'],
    methods: {
        textLen(str,len=40){
            // let text2 = "ASVCF"
            // let text3 = "控制"
            // let text4 = "ASVCF控制"
            // console.log( "ASVCF",'length',text2.length,'replace',text2.replace(/[^\x00-\xff]/g, '01').length)
            // console.log("控制",'length',text3.length,'replace',text3.replace(/[^\x00-\xff]/g, '01').length)
            // console.log("ASVCF控制",'length',text4.length,'replace',text4.replace(/[^\x00-\xff]/g, '01').length)
            if(str.replace(/[^\x00-\xff]/g, '01').length <= len){
                return str
            }
            for (let i = Math.floor(len / 2); i < str.length; i++) {
                if (str.substr(0, i).replace(/[^\x00-\xff]/g, '01').length >= len) {
                    // Math.floor(i / 2) * 这里是控制特殊情况的显示
                    // 如 '一二aaa一二三四'，显示的结果就是 '一二aaa一...'
                    return str.substr(0, Math.floor(i / 2) * 2) + '...'
                }
            }
        }
    }
}
</script>

<style scoped>
</style>