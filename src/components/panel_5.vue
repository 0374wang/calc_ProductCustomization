<template>
<img src="../assets/img/panel/单双底图.jpg" alt="">
<img class="float_img had_dis" v-if="h_style == 'gro'" src="../assets/img/panel/grommet二倍贴地单双选择.png" alt="">
<img class="float_img had_dis" v-if="h_style == 'pin'" src="../assets/img/panel/pinch二倍贴地单双选择.png" alt="">
<img class="float_img had_dis" v-if="h_style == 'rod'" src="../assets/img/panel/rod二倍贴地单双选择.png" alt="">


<!-- 如果选过step6、7则此时显示最终状态。 -->
<!-- 判断是否选过6 -->
<!-- 判断是否选过7 -->


<img class="float_img" v-if="had_7 == 611 || had_7 == 621" src="../assets/img/panel/rod一倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1111 || had_7 == 1121" src="../assets/img/panel/rod一倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1611 || had_7 == 1621 " src="../assets/img/panel/rod一倍拖地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 711 || had_7 == 721" src="../assets/img/panel/rod一点五倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1211 || had_7 == 1221" src="../assets/img/panel/rod一点五倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1711 || had_7 == 1721" src="../assets/img/panel/rod一点五倍拖地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 811 || had_7 == 821" src="../assets/img/panel/rod二倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1311 || had_7 == 1321" src="../assets/img/panel/rod二倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1811 || had_7 == 1821" src="../assets/img/panel/rod两倍拖地单双选择.png" alt="">

<img class="float_img" v-if="had_7 == 612 || had_7 == 622" src="../assets/img/panel/grommet一点五倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1112 || had_7 == 1122" src="../assets/img/panel/grommet一点五倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1612 || had_7 == 1622" src="../assets/img/panel/grommet一点五倍拖地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 712 || had_7 == 722" src="../assets/img/panel/grommet二倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1212 || had_7 == 1222" src="../assets/img/panel/grommet二倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1712 || had_7 ==1722" src="../assets/img/panel/grommet二倍拖地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 812 || had_7 == 822" src="../assets/img/panel/grommet二点五倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1312 || had_7 == 1322" src="../assets/img/panel/grommet二点五倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1812 || had_7 == 1822" src="../assets/img/panel/grommet二点五倍拖地单双选择.png" alt="">

<img class="float_img" v-if="had_7 == 813 || had_7 == 823" src="../assets/img/panel/pinch二倍离地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1313 || had_7 == 1323" src="../assets/img/panel/pinch二倍贴地单双选择.png" alt="">
<img class="float_img" v-if="had_7 == 1813 || had_7 == 1823" src="../assets/img/panel/pinch二倍拖地单双选择.png" alt="">

<p class="k_center panel_p2" style="top:140px">Do you want single or split panels?</p>
<p class="k_center panel_p1" style="top:28%">Choose one</p>
<div class="k_panel_1 zongsebt" @click="panel_one">Single Panel</div>
<div class="k_panel_2 zongsebt" @click="panle_two">Split Panels</div>
</template>
<script>
import { inject, onActivated, onDeactivated, ref } from '@vue/runtime-core';
export default {
    emits:["panel_index"],
    setup(_,{emit}) {
        var had_7 = ref(null);
        const h_style = ref(null)
        var header = inject("header")
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
        // 设置cookie
        function setCookie(cname,cvalue,exdays){
              var d = new Date();
              d.setTime(d.getTime()+(exdays*24*60*60*1000));
              var expires = "expires="+d.toGMTString();
              document.cookie = cname + "=" + cvalue + "; " + expires;
        }
        onActivated(()=>{
            console.log(header.value)

            if(getCookie('step7')){
                console.log('此时有7');
                //此时已经选择过了step6
                //把默认的三张选择单双图隐藏掉
                document.querySelector('.had_dis').style.display = 'none';
                had_7.value = getCookie('step7')
                console.log(had_7.value)
            }else{
                console.log('此时无7')
            }


        if(header.value == 'Pinch Pleat – Double'){
            h_style.value = 'pin'
        }
        if(header.value == 'Grommet'){
            h_style.value = 'gro'
        }
        if(header.value == 'Rod Pocket'){
            h_style.value = 'rod'
        }
        
        })

        const panel_one = ()=>{
            document.cookie = 'cts_qty_c=1 panel';
            emit("panel_index","Single Panel")
        };
        const panle_two = (() =>{
            document.cookie = 'cts_qty_c=2 panel';
            emit("panel_index","Split Panels")
        });
        onDeactivated(()=>{
            if(header.value == 'Pinch Pleat – Double'){
                let panel_flag = document.querySelector('.panel_flag').innerText;
                    if(panel_flag == "Single Panel"){
                        document.cookie = `step6=313`;
                    }
                    if(panel_flag == "Split Panels"){
                        document.cookie = `step6=323`;
                    }        

            }   
        
        })
        return {panel_one,panle_two,header,h_style,getCookie,had_7}
    }
}
</script>
<style lang="less" scoped> 
    img{
        width: 100%;
    }
    .panel_p1{
    font-family: 'Avenir Bold', 'Avenir';
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    text-align: center;
    }
    .panel_p2{
    font-family: 'Times New Roman Normal', 'Times New Roman';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0.1px;
    text-align: center;
    }
    .k_panel_1{
            position: absolute;
    bottom: 13%;
    left: 30%;
    }
    .k_panel_2{
            position: absolute;
    bottom: 13%;
    right: 30%;
}
.zongsebt{
    cursor: pointer;
}
    
</style>