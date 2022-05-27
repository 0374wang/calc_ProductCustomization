<template>
<img src="../assets/img/fullness/fullness_1.png" alt="">

<img class="piaofu" src="../assets/img/fullness/full_zindex/rod10离地单片.png" alt="" v-if="full_index_2 == 111">
<img class="piaofu" src="../assets/img/fullness/full_zindex/rod10离地双片.png" alt="" v-if="full_index_2 == 121">
<img class="piaofu" src="../assets/img/fullness/full_zindex/rod15离地单片.png" alt="" v-if="full_index_2 == 211">
<img class="piaofu" src="../assets/img/fullness/full_zindex/rod15离地双片.png" alt="" v-if="full_index_2 == 221">
<img class="piaofu" src="../assets/img/fullness/full_zindex/rod20离地单片.png" alt="" v-if="full_index_2 == 311">
<img class="piaofu" src="../assets/img/fullness/full_zindex/rod20离地双片.png" alt="" v-if="full_index_2 == 321">

<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet15离地单片.png" alt="" v-if="full_index_2 == 112">
<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet15离地双片.png" alt="" v-if="full_index_2 == 122">
<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet20离地双片.png" alt="" v-if="full_index_2 == 222">
<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet20离地单片.png" alt="" v-if="full_index_2 == 212">
<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet25离地单片.png" alt="" v-if="full_index_2 == 312">
<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet25离地双片.png" alt="" v-if="full_index_2 == 322">

<!-- <img src="../assets/img/fullness/full_zindex/pinch离地单片.png" alt="">
<img src="../assets/img/fullness/full_zindex/pinch离地双片.png" alt=""> -->

<p class=" k_fuln_p1 k_center">Which finished look of curtain do you prefer?<br>
 Choose fullness based on that.</p>

 <div class="fuln_all_l">
     <div class="fuln_img_all">
         <div class="fuln_div" @click="full_c1()"><img src="../assets/img/fullness/fullness_img_1.png" alt=""><span class="fuln_span">1x  Fullness</span></div>
         <p class="myfulnshu"></p>
         <div class="fuln_div" @click="full_c2"><img src="../assets/img/fullness/fullness_img_2.png" alt=""><span class="fuln_span">1.5x  Fullness</span></div>
         <p class="myfulnshu"></p>
         <div class="fuln_div" @click="full_c3"><img src="../assets/img/fullness/fullness_img_3.png" alt=""><span class="fuln_span">2x  Fullness</span></div>
     </div>
<div class="ful_dis">
     <p class="fuln_r1 ">Original Choice </p>
     <div class="fuln_r2 "></div>
     <p class="fuln_r3 ">Get a flat sheet look when kept drawn in.
                                    Use original fabric to cover the width.
    </p>
</div>

 </div>
</template>
<script> 
import { inject, onActivated, ref } from '@vue/runtime-core'
export default {
    emits:["full_index"],
    setup(_,{emit}) {
        //判断头部样式的索引值
        var full_index = ref(null)
        //判断单双 索引值
        var full_index_1 = ref(null)
        //判断 头部样式 + 单双 + 丰满度
        var full_index_2 = ref(null)
        let root_1 = inject("root_1")
        
        // 判断fullness
        // 如果是pinch ，则不会跳转到此页面，不需做 full_index 的加值判断
        const full_c1 = ()=>{
            full_index_2.value = full_index_1.value +100;
            console.log(full_index_1.value);
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Budget Choice'
            document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50" width to avoid drapes looking flat.Using 1.5 times fabric across the width. '
            emit("full_index","1x Fullness")
        };
        const full_c2 = ()=>{
            full_index_2.value = full_index_1.value +200;
            console.log(full_index_2.value);
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Budget Choice'
            document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50" width to avoid drapes looking flat.Using 1.5 times fabric across the width. '
            emit("full_index","1.5x Fullness")
        };
        const full_c3 = ()=>{
            full_index_2.value = full_index_1.value +300;
            console.log(full_index_2.value);
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Budget Choice'
            document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50" width to avoid drapes looking flat.Using 1.5 times fabric across the width. '
            emit("full_index","2x Fullness")

        }

        onActivated(()=>{
        if(root_1.value.innerText == 'Pinch Pleat – Double'){
            full_index.value = 3
        }
        if(root_1.value.innerText == 'Grommet'){
            full_index.value = 2
        }
        if(root_1.value.innerText == 'Rod Pocket'){
            full_index.value = 1
        }
        if(document.querySelector('.panel_flag').innerText == 'Single Panel'){
            full_index_1.value = full_index.value +10
        }
        if(document.querySelector('.panel_flag').innerText == 'Split Panels'){
            full_index_1.value = full_index.value +20
        }
        })
        return {full_index,full_c1,full_c2,full_c3,full_index_1,full_index_2}

    }
}
</script>
<style lang="less" scoped>
    img{
        width: 100%;
    }
    .ful_dis{
        display: none;
    }
    .myfulnshu{
            width: 1px;
    height: 100%;
    background: #8f7760;
    margin: 0 10px;
    }
    .zanshide{
        visibility: hidden;
    }
    .k_fuln_p1{
    position: absolute;
    top: 140px;
    font-family: 'Times New Roman Normal', 'Times New Roman';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0.1px;
    text-align: center;
    }
    .fuln_all_l{ 
            position: absolute;
    top: 300px;
    right: 25%;
    width: 300px;
        .fuln_img_all{
            width: 470px;
            height: 144px;
            display: flex;
            .fuln_div{

                cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 15px;
    display: flex;
    flex-direction: column;
    &:hover{
    border: 1px solid #8f7760;
        
    }
    span{
        margin: 0 auto;
        margin-top: 5px;
            }
            }
        }
        .fuln_r1{
                font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    letter-spacing: normal;
    color: #333333;
        }
        .fuln_r2{
            height: 1px;
            border-bottom: 1px solid #a3907d;
            margin: 15px 0;
            width: 200px;
        }
        .fuln_r3{
                font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
        }
    }
</style>