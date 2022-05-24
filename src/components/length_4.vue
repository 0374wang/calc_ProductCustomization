<template>
<img src="../assets/img/length/length_1.png" alt="">
<p class="length_p1 k_center">What's the height from rod top to floor?</p>
<p class="length_p2 k_center">*The length of the rod (finials excluded)</p>

<div class=" k_center" style="bottom:14%">
<input type="number" class="my__ipt" style="margin-bottom:10px">
<span class="width_sp">inch</span>
<div class="zongsebt" @click="length_step">CONTINUE</div>
</div>
</template>
<script>
export default {
    emits:["length_index"],
    setup(_,{emit}) {
        const length_step = function(){
            if(document.querySelector('.my__ipt').value != ''){
              let len  = document.querySelector('.my__ipt').value
               document.cookie = `cts_length_c=${len}`
                emit("length_index",len)
            }
        }
        return{length_step};
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

</style>