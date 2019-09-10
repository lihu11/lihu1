<template>
    <form class="bigContainer">
        <div class="loginTitle">账号登录</div>
        <div class="pubLine">
            <img src="resources/images/count.png" alt="" class="userImg">
            <input type="text" class="inputPub countInput" id="countInput" placeholder="请输入账号">
        </div>
        <div class="pubLine">
            <img src="resources/images/psw.png" alt="" class="pswImg">
            <input type="password" class="inputPub pswInput" id="pswInput" placeholder="请输入密码">
        </div>
        <input type="button" value="登录" class="submitBtn" onclick="SubmitBtn()">
    </form>
</template>
<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
    name:'login-houtai'
}
</script>
<style>


.bigContainer{
    width: 620px;
    height: 373px;
    border-radius: 12px;
    background: rgba(255,255,255,0.5);
    margin: 0 auto 0;
    padding: 47px 30px 0 30px;
}
.titleImg{
    display: block;
    margin: 0 auto 80px;
}
#app{
	padding-top:300px;
}
    

.submitBtn{
    width: 300px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    border-radius: 4px;
    font-size: 20px;
    background-color: #2b3a41!important;
    color: #ffffff;
    margin: 50px auto 0;
    display: block;
    cursor: pointer;
}
.submitBtn:active{
    opacity: 0.8;
}
.loginTitle{
    font-size: 26px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
}
.pubLine{
    width: 300px;
    height: 54px;
    border-bottom: 1px solid #2b3a41;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    align-items: flex-end;
    padding-left: 14px;
    padding-bottom: 5px;
}
.inputPub{
    background-color: transparent;
    margin-left: 25px;
    vertical-align: middle;
    width: calc(100% - 55px);
}
.pubLine img{
    vertical-align: middle;
}


</style>