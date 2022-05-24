<template>
<img src="../assets/img/panel/panel_1.png" alt="">
<p class="k_center panel_p2" style="top:140px">Do you want single or split panels?</p>
<p class="k_center panel_p1" style="top:28%">Choose one</p>
<div class="k_panel_1 zongsebt" @click="panel_one">Single Panel</div>
<div class="k_panel_2 zongsebt" @click="panle_two">Split Panels</div>
</template>
<script>
export default {
    emits:["panel_index"],
    setup(_,{emit}) {
        const panel_one = ()=>{
            document.cookie = 'cts_qty_c=1 panel';
            emit("panel_index","Single Panel")
        };
        const panle_two = (() =>{
            document.cookie = 'cts_qty_c=2 panel';
            emit("panel_index","Split Panels")
        });
        return {panel_one,panle_two}
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
    left: 33%;
    }
    .k_panel_2{
            position: absolute;
    bottom: 13%;
    right: 33%;
}
.zongsebt{
    cursor: pointer;
}
    
</style>