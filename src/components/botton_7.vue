<template>
<img src="../assets/img/fullness/fullness_1.png" alt="">

<!-- <img class="piaofu" src="../assets/img/fullness/full_zindex/rod10离地单片.png" alt="" v-if="kwang_done_c == 611">
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
<img class="piaofu" src="../assets/img/fullness/full_zindex/grommet25离地双片.png" alt="" v-if="full_index_2 == 322"> -->

<img class="piaofu"  v-if="kwang_done_c == 611" src="../assets/img/botton/show/rod10离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 621" src="../assets/img/botton/show/rod10离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 711" src="../assets/img/botton/show/rod15离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 721" src="../assets/img/botton/show/rod15离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 811" src="../assets/img/botton/show/rod20离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 821" src="../assets/img/botton/show/rod20离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1111" src="../assets/img/botton/show/rod10贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1121" src="../assets/img/botton/show/rod10贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1211" src="../assets/img/botton/show/rod15贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1221" src="../assets/img/botton/show/rod15贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1311" src="../assets/img/botton/show/rod20贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1321" src="../assets/img/botton/show/rod20贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1611" src="../assets/img/botton/show/rod10拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1621" src="../assets/img/botton/show/rod10拖地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1711" src="../assets/img/botton/show/rod15拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1721" src="../assets/img/botton/show/rod15拖地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1811" src="../assets/img/botton/show/rod20拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1821" src="../assets/img/botton/show/rod20拖地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 612" src="../assets/img/botton/show/grommet15离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 622" src="../assets/img/botton/show/grommet15离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 712" src="../assets/img/botton/show/grommet20离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 722" src="../assets/img/botton/show/grommet20离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 812" src="../assets/img/botton/show/grommet25离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 822" src="../assets/img/botton/show/grommet25离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1112" src="../assets/img/botton/show/grommet15贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1122" src="../assets/img/botton/show/grommet15贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1212" src="../assets/img/botton/show/grommet20贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1222" src="../assets/img/botton/show/grommet20贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1312" src="../assets/img/botton/show/grommet25贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1322" src="../assets/img/botton/show/grommet25贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1612" src="../assets/img/botton/show/grommet15拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1622" src="../assets/img/botton/show/grommet15拖地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1712" src="../assets/img/botton/show/grommet20拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1722" src="../assets/img/botton/show/grommet20拖地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1812" src="../assets/img/botton/show/grommet25拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1822" src="../assets/img/botton/show/grommet25拖地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 813" src="../assets/img/botton/show/pinch离地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 823" src="../assets/img/botton/show/pinch离地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1313" src="../assets/img/botton/show/pinch贴地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1323" src="../assets/img/botton/show/pinch贴地双片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1813" src="../assets/img/botton/show/pinch拖地单片.png" alt="">
<img class="piaofu"  v-if="kwang_done_c == 1823" src="../assets/img/botton/show/pinch拖地双片.png" alt="">








<p class=" k_fuln_p1 k_center">Which finished look of curtain do you prefer?<br>
 Choose fullness based on that.</p>

 <div class="fuln_all_l">
     <div class="fuln_img_all">
         <div class="fuln_div bot_div1" @click="full_c1()">

            <img src="../assets/img/fullness/25离地单片.png" alt="" v-if="alldone_== 312" >
            <img src="../assets/img/fullness/25离地双片.png" alt="" v-if="alldone_== 322" >
            <!--  -->
            <img src="../assets/img/fullness/20离地单片.png" alt="" v-if="alldone_== 313" >
            <img src="../assets/img/fullness/20离地单片.png" alt="" v-if="alldone_== 311" >
            <img src="../assets/img/fullness/20离地双片.png" alt="" v-if="alldone_== 321" >
            <img src="../assets/img/fullness/20离地双片.png" alt="" v-if="alldone_== 323" >
            <!-- <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="alldone_== 211 || 112" > -->
            <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="alldone_== 112" >
            <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="alldone_== 211" >
            <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="alldone_== 212" >
            <!-- <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="alldone_== 221 || 122" > -->
            <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="alldone_== 122" >
            <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="alldone_== 221" >
            <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="alldone_== 222" >
            <img src="../assets/img/fullness/10离地单片.png" alt="" v-if="alldone_== 111" >
            <img src="../assets/img/fullness/10离地双片.png" alt="" v-if="alldone_== 121" >
            
            
             <span class="fuln_span fuln_span1">1/2" Above Floor</span></div>
             <p class="myfulnshu"></p>
         <div class="fuln_div bot_div2" @click="full_c2">
            <img src="../assets/img/botton/kiss/10贴地单片.png" alt="" v-if="alldone_== 111" >
            <img src="../assets/img/botton/kiss/10贴地双片.png" alt="" v-if="alldone_== 121" >
            <img src="../assets/img/botton/kiss/15贴地单片.png" alt="" v-if="alldone_== 211" >
            <img src="../assets/img/botton/kiss/15贴地双片.png" alt="" v-if="alldone_== 221" >
            <!-- <img src="../assets/img/botton/kiss/20贴地单片.png" alt="" v-if="alldone_== 311 || 112" > -->
            <img src="../assets/img/botton/kiss/20贴地单片.png" alt="" v-if="alldone_== 311" >
            <img src="../assets/img/botton/kiss/20贴地单片.png" alt="" v-if="alldone_== 112" >
            <img src="../assets/img/botton/kiss/20贴地单片.png" alt="" v-if="alldone_== 212" >
            <img src="../assets/img/botton/kiss/20贴地单片.png" alt="" v-if="alldone_== 313" >
            <!-- <img src="../assets/img/botton/kiss/20贴地双片.png" alt="" v-if="alldone_== 321 || 122" > -->
            <img src="../assets/img/botton/kiss/20贴地双片.png" alt="" v-if="alldone_== 122" >
            <img src="../assets/img/botton/kiss/20贴地双片.png" alt="" v-if="alldone_== 321" >
            <img src="../assets/img/botton/kiss/20贴地双片.png" alt="" v-if="alldone_== 222" >
            <img src="../assets/img/botton/kiss/20贴地双片.png" alt="" v-if="alldone_== 323" >
            <!--  -->
            <img src="../assets/img/botton/kiss/25贴地单片.png" alt="" v-if="alldone_== 312" >
            <img src="../assets/img/botton/kiss/25贴地双片.png" alt="" v-if="alldone_== 322" >



             <!-- <img src="../assets/img/fullness/15离地单片.png" alt="" v-if="small_img == 'rod_single'">
             <img src="../assets/img/fullness/15离地双片.png" alt="" v-if="small_img == 'rod_split'">
             <img src="../assets/img/fullness/20离地单片.png" alt="" v-if="small_img == 'gro_single'">
            <img src="../assets/img/fullness/20离地双片.png" alt="" v-if="small_img == 'gro_split'"> -->
             <span class="fuln_span fuln_span2">Kiss Floor</span></div>
             <p class="myfulnshu"></p>
         <div class="fuln_div bot_div3" @click="full_c3">
            <img src="../assets/img/botton/puddle/10拖地单片.png" alt="" v-if="alldone_==111">
            <img src="../assets/img/botton/puddle/10拖地双片.png" alt="" v-if="alldone_==121">
            <img src="../assets/img/botton/puddle/15拖地单片.png" alt="" v-if="alldone_==211">
            <img src="../assets/img/botton/puddle/15拖地双片.png" alt="" v-if="alldone_==221">
            <img src="../assets/img/botton/puddle/20拖地单片.png" alt="" v-if="alldone_==311">
            <img src="../assets/img/botton/puddle/20拖地单片.png" alt="" v-if="alldone_==313">
            <img src="../assets/img/botton/puddle/20拖地双片.png" alt="" v-if="alldone_==321">
            <img src="../assets/img/botton/puddle/20拖地双片.png" alt="" v-if="alldone_==323">
            <!-- <img src="../assets/img/botton/puddle/25拖地单片.png" alt="" v-if="alldone_==312 || 112"> -->
            <img src="../assets/img/botton/puddle/25拖地单片.png" alt="" v-if="alldone_==312">
            <img src="../assets/img/botton/puddle/25拖地单片.png" alt="" v-if="alldone_==112">
            <img src="../assets/img/botton/puddle/25拖地单片.png" alt="" v-if="alldone_==212">
            <!-- <img src="../assets/img/botton/puddle/25拖地双片.png" alt="" v-if="alldone_==322 || 122"> -->
            <img src="../assets/img/botton/puddle/25拖地双片.png" alt="" v-if="alldone_==322">
            <img src="../assets/img/botton/puddle/25拖地双片.png" alt="" v-if="alldone_==122">
            <img src="../assets/img/botton/puddle/25拖地双片.png" alt="" v-if="alldone_==222">

             


            <!-- <img src="../assets/img/fullness/20离地单片.png" alt="" v-if="small_img == 'rod_single'">
            <img src="../assets/img/fullness/20离地双片.png" alt="" v-if="small_img == 'rod_split'">
            <img src="../assets/img/fullness/25离地单片.png" alt="" v-if="small_img == 'gro_single'">
            <img src="../assets/img/fullness/25离地双片.png" alt="" v-if="small_img == 'gro_split'"> -->
            <span class="fuln_span fuln_span3">2" Puddle</span></div>
     </div>
<div class="ful_dis">
     <p class="fuln_r1 ">Original Choice </p>
     <div class="fuln_r2 "></div>
     <p class="fuln_r3 ">Get a flat sheet look when kept drawn in.
                                    Use original fabric to cover the width.
    </p>
</div>

 </div>


 <h1>{{bot_base}}</h1>
</template>
<script> 
import { inject, onActivated, onMounted, ref } from '@vue/runtime-core'
export default {
    props:["bot_base"],
    emits:["botton_index"],
    setup(_,{emit}) {
        //判断头部样式的索引值
        var full_index = ref(null)
        //判断单双 索引值
        var full_index_1 = ref(null)
        //判断 头部样式 + 单双 + 丰满度
        var full_index_2 = ref(null)
        let root_1 = inject("root_1")
        let small_img = ref(null)
        var alldone_ = ref(null)
        var kwang_done_c =ref(null)
        var bot_small_img =ref(null)
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


        const bot_div1 = document.querySelector('.bot_div1')
        const bot_div2 = document.querySelector('.bot_div2')
        const bot_div3 = document.querySelector('.bot_div3')
        bot_div1.addEventListener("mouseenter",function(){
            const f1_style = document.querySelector('.root_1_header').innerText
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = '1/2" Above Floor'
            document.querySelector('.fuln_r3').innerText = 'Easy cleaning \n Easy open and close \n Modern Style';
        let temp = getCookie('step6')
           kwang_done_c.value =  Number(temp)  + 500;
           console.log(kwang_done_c.value,Number(temp))
           document.cookie = `step7=${kwang_done_c.value}`;    
        });
        bot_div2.addEventListener("mouseenter",function(){
            const f1_style = document.querySelector('.root_1_header').innerText;
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = 'Kiss Floor'
            document.querySelector('.fuln_r3').innerText = 'Exquisite look \n Need most accurate measurement';
        let temp = getCookie('step6')
           
           kwang_done_c.value =  Number(temp)  + 1000;
           console.log(kwang_done_c.value)
           document.cookie = `step7=${kwang_done_c.value}`;        
        });
        bot_div3.addEventListener("mouseenter",function(){
            const f1_style = document.querySelector('.root_1_header').innerText;
            document.querySelector('.ful_dis').style.display = 'block';
            document.querySelector('.fuln_r1').innerText = '2" Puddle'
            document.querySelector('.fuln_r3').innerText = 'Luxurious look \n  Need cleaning more often';
        let temp = getCookie('step6')
           
           kwang_done_c.value =  Number(temp)  + 1500;
           console.log(kwang_done_c.value)    
           document.cookie = `step7=${kwang_done_c.value}`;    
        });
        });


        const full_c1 = ()=>{
            document.cookie = `botton_selected=1`;
            emit("botton_index",'1/2" Above Floor',"full_index_2.value")
        };
        const full_c2 = ()=>{
            document.cookie = `botton_selected=2`;
            emit("botton_index","Kiss Floor")
        };
        const full_c3 = ()=>{
            document.cookie = `botton_selected=3`;
            emit("botton_index",'2" Puddle')
        }

        onActivated(()=>{

        console.log( getCookie('step6'),'77777777777777')
        alldone_.value = getCookie('step6');
            let mouseenter = new Event('mouseenter');
            if(getCookie('botton_selected') == 1){
                let bot_div1 = document.querySelector('.bot_div1')
                bot_div1.dispatchEvent(mouseenter);
                console.log('chufale1111111111')
            }
            if(getCookie('botton_selected') == 2){
                let bot_div2 = document.querySelector('.bot_div2')
                bot_div2.dispatchEvent(mouseenter);
            }
            if(getCookie('botton_selected') == 3){
                let bot_div3 = document.querySelector('.bot_div3')
                bot_div3.dispatchEvent(mouseenter);

                console.log('chufale111111111133333333')
            }
        })
        return {full_index,full_c1,full_c2,full_c3,full_index_1,full_index_2,small_img,kwang_done_c,alldone_,bot_small_img,getCookie}

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