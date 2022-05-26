<template>
<img src="../assets/img/length/length_1.png" alt="" class="haveRod" v-if="len_flag == 11">
<img src="../assets/img/length/length_noRod_1.png" alt="" class="norod_1" v-if="len_flag == 12">
<img src="../assets/img/length/length_noRod_2.png" alt="" class="norod_2" v-if="len_flag == 13">
<p class="length_p1 k_center" >What's the height from rod top to floor?</p>
<p class="length_p2 k_center" >*The length of the rod (finials excluded)</p>

<div class=" k_center" style="bottom:15%;width:175px;">
<input type="number" class="my__ipt" style="margin-bottom:10px">
<span class="width_sp" style="right:5px;">inch</span>
<div class="zongsebt" v-if="len_flag == 11" @click="length_step">CONTINUE</div>
<div class="zongsebt" v-if="len_flag == 12" @click="length_step_norod_1">CONTINUE</div>
<div class="zongsebt" v-if="len_flag == 13" @click="length_step_norod_2">CONTINUE</div>
</div>
</template>
<script>
import { onActivated, ref } from '@vue/runtime-core'
export default {
    props:{
        modelValue:Number
    },
    emits:["length_index"],
    setup(_,{emit}) {
        var len_flag = ref(null);
        onActivated(()=>{
            if(_.modelValue == 11){
                len_flag.value =11;
            };
            if(_.modelValue == 12){
                len_flag.value = 12;
            }
        });
        const length_step = function(){
            if(document.querySelector('.my__ipt').value != ''){
              let len  = document.querySelector('.my__ipt').value
               document.cookie = `cts_length_c=${len}`
                emit("length_index",len)
            }
        }
        const length_step_norod_1 = function(){
              let len  = document.querySelector('.my__ipt').value;
              len_flag.value = 13
        }
        const length_step_norod_2 = function(){
              let len  = document.querySelector('.my__ipt').value
              document.cookie = `cts_length_c=${len}`
                emit("length_index",len)
        }
        return{length_step,len_flag,length_step_norod_1,length_step_norod_2};
    }
}
</script>
<style lang="less" scoped>
    img{
        width: 100%;
    }
    .length_p1{
        font-family: 'Times New Roman Normal', 'Times New Roman';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    text-align: center;
    top: 140px;
    }
    .length_p2{
            font-family: 'Avenir Book', 'Avenir';
    font-weight: 350;
    font-style: normal;
    font-size: 14px;
    text-align: center;
    bottom: 28%;
    }
    .zongsebt{
        cursor: pointer;
    }
    .norod_2{

    }

</style>