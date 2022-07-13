<template>
<!-- <div class="rod_all">
    <div class="rod_choose_1"> -->
<div class="rod2_container">
    <img src="../assets/img/rod/rod1.png" alt="" />
      <p class="rod1_1">Got a curtain rod already?</p>
      <p class="rod1_2">Choose one</p>
      <div class="baoguode">
          <div class="rod1_div_1" @click="rod_i_mod">YES</div>
      </div>
      <div class="baoguode">
          <div class="rod1_div_2" @click="rod_i_mod_2">NO</div>
      </div>
      <p class="rod1_3">I have a rod installed already.</p>
      <p class="rod1_4">I don't have a rod installed yet.</p>

      <div class="tigongchoosel" @click=" rod_i_mod"></div>
      <div class="tigongchooser" @click="rod_i_mod_2"></div>
      
</div>

  <!-- </div>
</div> -->
 
</template>
<script>
import { ref, onUnmounted } from "vue";
import store from "../store";
import { useStore } from 'vuex';
export default {

    emits:["rod_index","rod_i_mod_2"],
    setup(_,{emit}) {
    console.log("进入了2");
        const store =  useStore()
        const rod_i_mod = function(){
            store.state._rodHave = true;
            emit("rod_index",'YES')
        };
        const rod_i_mod_2 =function (){
            store.state._rodHave = false;
            emit("rod_index","NO")
        };
        onUnmounted(()=>{
            console.log("onUnmounted");
            document.querySelector("#app").style.color = "white";
        });
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
.rod2_container{
    position: relative;
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
.tigongchoosel {
    width: 20%;
    height: 50%;
    position: absolute;
    top: 150px;
    left: 25%;
    cursor: pointer;
}
.tigongchooser {
    cursor: pointer;
    width: 20%;
    height: 50%;
    position: absolute;
    top: 150px;
    right: 25%;
}
</style>