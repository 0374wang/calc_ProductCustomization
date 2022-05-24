<template>
<img src="../assets/img/rod/rod1.png" alt="" />
<!-- <div class="rod_all">
  <div class="rod_choose_1"> -->
      <p class="rod1_1">Got a curtain rod already?</p>
      <p class="rod1_2">Choose one</p>
      <div class="rod1_div_1" @click=" rod_i_mod">YES</div>
      <div class="rod1_div_2" @click="rod_i_mod_2">NO</div>
      <p class="rod1_3">I have a rod installed already.</p>
      <p class="rod1_4">I don't have a rod installed yet.</p>
  <!-- </div>
</div> -->

</template>
<script>
import { ref } from "vue";

export default {

    emits:["rod_index","rod_i_mod_2"],
    setup(_,{emit}) {
        const rod_i_mod = function(){
            emit("rod_index",'YES')
        };
        const rod_i_mod_2 =function (){
            emit("rod_index","NO")
        };
        return {rod_i_mod,rod_i_mod_2};
    }
};

</script>
<style lang="less" scoped>
// .rod_all{
//     width: 100%;
//     position: relative;
// }
// .rod_choose_1{

// }
img{
    width: 100%;
}
.rod1_1{
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translate(-50%, 0);
}
.rod1_2{
        position: absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%, 0);
}
.rod1_3{
    position: absolute;
    top: 75%;
    left: 36%;
    transform: translate(-50%, 0);
}
.rod1_div_1{
position: absolute;
    top: 69%;
    left: 36%;
    transform: translate(-50%, 0);
    width: 180px;
    height: 28px;
    background: #756454;
    color: #fff;
    text-align: center;
    line-height: 28px;
    border-radius: 15px;
    cursor: pointer;
}
.rod1_4{
        position: absolute;
    top: 75%;
    left: 65%;
    transform: translate(-50%, 0);
}
.rod1_div_2{
    position: absolute;
    top: 69%;
    left: 65%;
    transform: translate(-50%, 0);
    width: 180px;
    height: 28px;
    background: #756454;
    color: #fff;
    text-align: center;
    line-height: 28px;
    border-radius: 15px;
    cursor: pointer;
}
</style>