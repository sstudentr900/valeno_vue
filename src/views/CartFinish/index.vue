<template>
    <div class="cartFinish">
        <FnCartSteps :selected="3"></FnCartSteps>
        <div class="public_box finish">
            <h4 class="title">訂單成立</h4>
            <div class="text">
                <p>親愛的<span class="public_text_pink">王小明</span> 先生/小姐 您好，感謝您的訂購!</p>
                <p>您的訂單編號為：<span title="訂單查詢" class="public_text_pink">25877456</span></p>
                <p>如需查詢訂單明細，可登入會員中心的 <span title="訂單查詢" class="public_text_pink">【訂單查詢】</span></p>
            </div>
            <div class="public_buttons2">
                <router-link to="/" class="btns2 white-btn" title="返回首頁">返回首頁</router-link>
                <router-link to="/" class="btns2" title="線上刷卡">線上刷卡</router-link>
            </div>
        </div>
        <div class="public_box">
            <div class="transfer">
                <div class="title">轉帳資訊</div>
                <p>銀行代碼：&nbsp;<span class="red">8200367896512</span></p>
                <p>匯款帳號：&nbsp;<span class="red">1111-1111-1111-1111</span></p>
                <P class="note">
                    ** 提醒您！！ 如接獲不明來電告知轉帳未成功或是分期付款等事宜，請保持冷靜，先與客服人員確認，並撥打165反詐騙專線。 請勿聽信指示到ATM提款機前操作任何轉帳動作！
                </P>
            </div>
        </div>
    </div>
</template>
<script>
    import FnCartSteps from '@/components/FnCartSteps'
    export default {
        name: 'cartFinish',
        components: {
            FnCartSteps,
        },
    }
</script>

<style scoped>
    .cartFinish p {
        font-size: 16px;
        color: #666
    }
    
    .cartFinish p+p {
        margin-top: 5px;
    }
    
    .finish .title {
        font-size: 28px;
        margin: 24px 0;
        color: #000;
        font-weight: bold;
        text-align: center;
    }
    
    .finish p {
        text-align: center;
    }
    
    .transfer {
        margin: auto;
        max-width: 900px;
    }
    
    .transfer .title {
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    
    .transfer .note {
        margin-top: 20px;
        padding: 20px 0;
        line-height: 26px;
        border-top: 1px solid #ddd;
    }
</style>