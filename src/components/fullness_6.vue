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
         <div class="fuln_div fuln_div1" @click="full_c1()">
             
            <img src="../assets/img/fullness/10离地单片.png" alt="" v-if="small_img == 'rod_single'">
            <img src="../assets/img/fullness/10离地双片.png" alt="" v-if="small_img == 'rod_split'">
            <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="small_img == 'gro_single'">
            <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="small_img == 'gro_split'">
             <span class="fuln_span fuln_span1">1x  Fullness</span></div>
             <p class="myfulnshu"></p>
         <div class="fuln_div fuln_div2" @click="full_c2">
             <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="small_img == 'rod_single'">
             <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="small_img == 'rod_split'">
             <img src="../assets/img/fullness/20离地单片.png" alt="" v-if="small_img == 'gro_single'">
            <img src="../assets/img/fullness/20离地双片.png" alt="" v-if="small_img == 'gro_split'">
             <span class="fuln_span fuln_span2">1.5x  Fullness</span></div>
             <p class="myfulnshu"></p>
         <div class="fuln_div fuln_div3" @click="full_c3">
            <img src="../assets/img/fullness/20离地单片.png" alt="" v-if="small_img == 'rod_single'">
            <img src="../assets/img/fullness/20离地双片.png" alt="" v-if="small_img == 'rod_split'">
            <img src="../assets/img/fullness/25离地单片.png" alt="" v-if="small_img == 'gro_single'">
            <img src="../assets/img/fullness/25离地双片.png" alt="" v-if="small_img == 'gro_split'">
            <span class="fuln_span fuln_span3">2x  Fullness</span></div>
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
import { inject, onActivated, onDeactivated, onMounted, ref } from '@vue/runtime-core'
export default {
    emits:["full_index","botton_base"],
    setup(_,{emit}) {
        //判断头部样式的索引值
        var full_index = ref(null)
        //判断单双 索引值
        var full_index_1 = ref(null)
        //判断 头部样式 + 单双 + 丰满度
        var full_index_2 = ref(null)
        let root_1 = inject("root_1")

        let small_img = ref(null);
        function getCookie(cookie) {
        var allcookies = document.cookie;
      var cookie_pos = allcookies.indexOf(cookie); 
      if (cookie_pos != -1) {
          cookie_pos += cookie.length + 1; 
        var cookie_end = allcookies.indexOf(";", cookie_pos);
        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        }
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
      }
      return value;
    }
        onMounted(()=>{
        // const fuln_div1 = document.querySelector('.fuln_div1')
        // const fuln_div2 = document.querySelector('.fuln_div2')
        // const fuln_div3 = document.querySelector('.fuln_div3')
        // fuln_div1.addEventListener("mouseenter",function(){
        //     const f1_style = document.querySelector('.root_1_header').innerText
        //     //
        //     full_index_2.value = full_index_1.value +100;
        //     console.log(full_index_2.value,'-----');
        //     //
        //     if(f1_style == "Rod Pocket"){
        //         document.querySelector('.ful_dis').style.display = 'block';
        //     document.querySelector('.fuln_r1').innerText = 'Original Choice'
        //     document.querySelector('.fuln_r3').innerText = 'Get a flat sheet look when kept drawn in.Use original fabric to cover the width.'
        //     }
        //     if(f1_style == "Grommet"){
        //         document.querySelector('.ful_dis').style.display = 'block';
        //     document.querySelector('.fuln_r1').innerText = 'Budget Choice'
        //     document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50"width to avoid drapes looking flat.Using 1.5 times fabric across the width.'
        //     }            
        // });
        // fuln_div2.addEventListener("mouseenter",function(){
        //     const f1_style = document.querySelector('.root_1_header').innerText;
        //     //
        //     full_index_2.value = full_index_1.value +200;
        //     console.log(full_index_2.value,'-----');

        //     //
        //     if(f1_style == "Rod Pocket"){
        //     document.querySelector('.ful_dis').style.display = 'block';
        //     document.querySelector('.fuln_r1').innerText = 'Budget Choice'
        //     document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50"width to avoid drapes looking flat.Using 1.5 times fabric across the width.'
        //     }
        //     if(f1_style == "Grommet"){
        //     document.querySelector('.ful_dis').style.display = 'block';
        //     document.querySelector('.fuln_r1').innerText = 'Recommended Choice'
        //     document.querySelector('.fuln_r3').innerText = 'Nicely gathered with soft pleats on top.2x Fullness strongly recommended.Using 2 times fabric across the width.'
        //     }         
        // });
        // fuln_div3.addEventListener("mouseenter",function(){
        //     const f1_style = document.querySelector('.root_1_header').innerText;
        //     //
        //     full_index_2.value = full_index_1.value +300;
        //     console.log(full_index_2.value,'-----');

        //     //
        //     if(f1_style == "Rod Pocket"){
        //     document.querySelector('.ful_dis').style.display = 'block';
        //     document.querySelector('.fuln_r1').innerText = 'Recommended Choice'
        //     document.querySelector('.fuln_r3').innerText = 'Nicely gathered with soft pleats on top.2x Fullness strongly recommended.Using 2 times fabric across the width.'
        //     }
        //     if(f1_style == "Grommet"){
        //     document.querySelector('.ful_dis').style.display = 'block';
        //     document.querySelector('.fuln_r1').innerText = 'Luxury Choice'
        //     document.querySelector('.fuln_r3').innerText = 'Enriched with elegant pleats making large windows even more splendid. Not recommended for small windows due to too many pleats.Use 2.5 times fabric to cover the width.'
        //     }           
        // });

        });



        // 判断fullness
        // 如果是pinch ，则不会跳转到此页面，不需做 full_index 的加值判断
        const full_c1 = ()=>{
            full_index_2.value = full_index_1.value +100;
            console.log(full_index_1.value);
            document.cookie = `fullness_selected=1`;
            const f1_style = document.querySelector('.root_1_header').innerText;
            if(f1_style == "Rod Pocket"){
                emit("full_index","1x Fullness",full_index_2.value)
            }
            if(f1_style == "Grommet"){
                emit("full_index","1.5x Fullness",full_index_2.value)
            }
        };
        const full_c2 = ()=>{
            full_index_2.value = full_index_1.value +200;
            console.log(full_index_2.value);
            document.cookie = `fullness_selected=2`;
            const f1_style = document.querySelector('.root_1_header').innerText;
            if(f1_style == "Rod Pocket"){
                emit("full_index","1.5x Fullness")
            }
            if(f1_style == "Grommet"){
                emit("full_index","2x Fullness")
            }
        };
        const full_c3 = ()=>{
            full_index_2.value = full_index_1.value +300;
            console.log(full_index_2.value);
            document.cookie = `fullness_selected=3`;
            const f1_style = document.querySelector('.root_1_header').innerText;
            if(f1_style == "Rod Pocket"){
                emit("full_index","2x Fullness")
            }
            if(f1_style == "Grommet"){
                emit("full_index","2.5x Fullness")
            }
        }

        onActivated(()=>{
            /****
             * 
             */

            
        let f1_style = document.querySelector('.root_1_header').innerText
        if(f1_style == "Grommet"){
           document.querySelector('.fuln_span1').innerText = '1.5x  Fullness'
           document.querySelector('.fuln_span2').innerText = "2x Fullness"
           document.querySelector('.fuln_span3').innerText = "2.5x Fullness"
        }
        if(f1_style == "Rod Pocket"){
           document.querySelector('.fuln_span1').innerText = '1x  Fullness'
           document.querySelector('.fuln_span2').innerText = "1.5x Fullness"
           document.querySelector('.fuln_span3').innerText = "2x Fullness"
        }

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

        //
                // 判断small_img 的值， 计算根据 忽略头部，只计单双和丰满度，
        // 变量值少，固定判断值为死值
            // const f1_style = document.querySelector('.root_1_header').innerText;
            const panel_flag = document.querySelector('.panel_flag').innerText;
            if(f1_style == "Rod Pocket"){
                if(panel_flag == "Single Panel"){
                    small_img.value = 'rod_single'
                }
                if(panel_flag == "Split Panels"){
                    small_img.value = "rod_split"
                }
            }
            if(f1_style == "Grommet"){
                if(panel_flag == "Single Panel"){
                    small_img.value = 'gro_single'
                }
                if(panel_flag == "Split Panels"){
                    small_img.value = "gro_split"
                }
            }

            /***
             * 
             */
        const fuln_div1 = document.querySelector('.fuln_div1')
        const fuln_div2 = document.querySelector('.fuln_div2')
        const fuln_div3 = document.querySelector('.fuln_div3')
        fuln_div1.addEventListener("mouseenter",function(){
            const f1_style = document.querySelector('.root_1_header').innerText
            //
            full_index_2.value = full_index_1.value +100;
            console.log(full_index_2.value,'-----');
            //
            if(f1_style == "Rod Pocket"){
                document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Original Choice'
            document.querySelector('.fuln_r3').innerText = 'Get a flat sheet look when kept drawn in.Use original fabric to cover the width.'
            }
            if(f1_style == "Grommet"){
                document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Budget Choice'
            document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50"width to avoid drapes looking flat.Using 1.5 times fabric across the width.'
            }            
        });
        fuln_div2.addEventListener("mouseenter",function(){
            const f1_style = document.querySelector('.root_1_header').innerText;
            //
            full_index_2.value = full_index_1.value +200;
            console.log(full_index_2.value,'-----');

            //
            if(f1_style == "Rod Pocket"){
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Budget Choice'
            document.querySelector('.fuln_r3').innerText = 'Not recommended for windows beyond 50"width to avoid drapes looking flat.Using 1.5 times fabric across the width.'
            }
            if(f1_style == "Grommet"){
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Recommended Choice'
            document.querySelector('.fuln_r3').innerText = 'Nicely gathered with soft pleats on top.2x Fullness strongly recommended.Using 2 times fabric across the width.'
            }         
        });
        fuln_div3.addEventListener("mouseenter",function(){
            const f1_style = document.querySelector('.root_1_header').innerText;
            //
            full_index_2.value = full_index_1.value +300;
            console.log(full_index_2.value,'-----');

            //
            if(f1_style == "Rod Pocket"){
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Recommended Choice'
            document.querySelector('.fuln_r3').innerText = 'Nicely gathered with soft pleats on top.2x Fullness strongly recommended.Using 2 times fabric across the width.'
            }
            if(f1_style == "Grommet"){
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Luxury Choice'
            document.querySelector('.fuln_r3').innerText = 'Enriched with elegant pleats making large windows even more splendid. Not recommended for small windows due to too many pleats.Use 2.5 times fabric to cover the width.'
            }           
        });


            console.log('jihuole')
            let mouseenter = new Event('mouseenter');
            if(getCookie('fullness_selected') == 1){
                let fuln_div1 = document.querySelector('.fuln_div1')
                fuln_div1.dispatchEvent(mouseenter);
                console.log('chufale1111111111')
            }
            if(getCookie('fullness_selected') == 2){
                let fuln_div2 = document.querySelector('.fuln_div2')
                fuln_div2.dispatchEvent(mouseenter);
            }
            if(getCookie('fullness_selected') == 3){
                let fuln_div3 = document.querySelector('.fuln_div3')
                fuln_div3.dispatchEvent(mouseenter);

                console.log('chufale111111111133333333')
            }



        })
        onDeactivated(()=>{
            console.log('shiqujihuo',full_index_2,full_index_2.value)
            const temp = full_index_2.value;
            document.cookie = `step6=${temp}`;
            emit("botton_base","temp")
        })
        return {full_index,full_c1,full_c2,full_c3,full_index_1,full_index_2,small_img,getCookie}
    }
}
</script>
<style lang="less" scoped>
    img{
        width: 100%;
    }
    .ful_dis{
        display: none;
        margin-top: 40px; ;
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
    top: 240px;
    right: 25%;
    width: 300px;
        .fuln_img_all{
            width: 470px;
            height: 154px;
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

@media screen and (max-width: 1600px) {
  .fuln_all_l {
    transform: scale(0.8);
    top: 150px;
  }
}
</style>