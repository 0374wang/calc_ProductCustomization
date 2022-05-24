<template>

<img src="../assets/img/width/coverage1.png" alt="" class="nor_img1" v-if="norod_flag == 11">
<img src="../assets/img/width/no_rod_width.png" alt="" v-if="norod_flag == 12">
<p class="width_p1">What’s the length of your rod?</p>
<p class="width_p2">(finials excluded)</p>
<div class="myK_Input k_center">
<input type="number" class="width_inp" >
<span class="width_sp">inch</span>
<div class="zongsebt" @click="width_step">CONTINUE</div>
<h1>{{modelValue}}</h1>
<hr>
<h1>{{norod_flag}}</h1>

</div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { onActivated } from '@vue/runtime-core';
export default {
    props:{
    modelValue: Number,
    },
    emits: ["width_index"],
    setup(_,{emit}) {
        var norod_flag = ref(null);
        onActivated(()=>{
        if(_.modelValue == 12){
            norod_flag.value =  12
        };
        if(_.modelValue == 11){
            norod_flag.value =  11
        }
        })
        const width_step = function(){
            if(document.querySelector('.width_inp').value != ''){
                let wid =  document.querySelector('.width_inp').value;
                document.cookie = `cts_width_c=${wid}`
                emit("width_index",wid)
            }
        }
        return {width_step,norod_flag}

    }

}
</script>
<style lang="less" scoped>
    img{
        width: 100%;
    }

    .width_p1{
        font-family: 'Times New Roman Normal', 'Times New Roman';
    font-weight: 400;
        font-size: 20px;
        text-align: center;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translate(-50%, 0);
}


    
    .width_p2{
            font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
        font-size: 14px;
        text-align: center;
            position: absolute;
    top: 153px;
    left: 50%;
    transform: translate(-50%, 0);
}
.width_inp::-webkit-outer-spin-button,
.width_inp::-webkit-inner-spin-button {
        -webkit-appearance: none;
}

.width_inp[type="number"]{
        -moz-appearance: textfield;
}

.myK_Input{
    position: absolute;
    width: 175px;
    bottom: 15%;
    .width_inp{
                box-shadow: 2px 2px 3px #a5a5a3;
    border: unset;
    background: #fffcfc;
    border-radius: 15px;
    height: 24px;
    width: 175px ;
    margin-bottom: 10px;
    text-align: center;
    }
    .width_sp{
        position: absolute;
        right: 5px;
    top: 5px;
    }
}
.zongsebt{
    cursor: pointer;
}
</style>