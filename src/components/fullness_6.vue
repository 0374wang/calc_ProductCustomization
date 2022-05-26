<template>
<img src="../assets/img/fullness/fullness_1.png" alt="">
<p class=" k_fuln_p1 k_center">Which finished look of curtain do you prefer?<br>
 Choose fullness based on that.</p>

 <div class="fuln_all_l">
     <div class="fuln_img_all">
         <div class="fuln_div" @click="full_c1"><img src="../assets/img/fullness/fullness_img_1.png" alt=""><span class="fuln_span">1x  Fullness</span></div>
         <p class="myfulnshu"></p>
         <div class="fuln_div" @click="full_c2"><img src="../assets/img/fullness/fullness_img_2.png" alt=""><span class="fuln_span">1.5x  Fullness</span></div>
         <p class="myfulnshu"></p>
         <div class="fuln_div" @click="full_c3"><img src="../assets/img/fullness/fullness_img_3.png" alt=""><span class="fuln_span">2x  Fullness</span></div>
     </div>
     <p class="fuln_r1 zanshide">Original Choice </p>
     <div class="fuln_r2 zanshide"></div>
     <p class="fuln_r3 zanshide">Get a flat sheet look when kept drawn in.
Use original fabric to cover the width.
</p>
 </div>
</template>
<script>
import { inject, onActivated, ref } from '@vue/runtime-core'
export default {
    setup(props) {
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
            full_index.value +100;
            console.log(full_index.value)
        };
        const full_c2 = ()=>{
            full_index.value +200;
            console.log(full_index.value)
        };
        const full_c3 = ()=>{
            full_index.value +300;
            console.log(full_index.value)
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