<template>
<img src="../assets/img/panel/单双底图.jpg" alt="">
<img class="float_img" v-if="h_style == 'gro'" src="../assets/img/panel/grommet二倍贴地单双选择.png" alt="">
<img class="float_img" v-if="h_style == 'pin'" src="../assets/img/panel/pinch二倍贴地单双选择.png" alt="">
<img class="float_img" v-if="h_style == 'rod'" src="../assets/img/panel/rod二倍贴地单双选择.png" alt="">
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
        const h_style = ref(null)
        var header = inject("header")
        onActivated(()=>{
            console.log(header.value)
            console.log(h_style)
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
        })
        return {panel_one,panle_two,header,h_style}
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