<template lang="">
   <div class="kwang_container">
      <div class="k_change_ct">
        <div class="k_change_u">
          <p>Which header style of curtain would you prefer?</p>
          <p>Not sure about the curtain size? Choose a header style, follow the guide, and answer a few <br> questions to figure out a suitable size.</p>
        </div>
        <div class="k_change_m">
            <div class="k_change_m_l">
                <div class="k_change_m1" @click="style_index1"><img src="../assets/img/header_style/rod_pocketzz.jpg" alt="">
                    <p class="kchangp1"  ref="style1">Rod Pocket</p>
                    <p class="kchangp2">Double-layer. <br> Concrete and classy.</p>
                </div>
            </div>
            <div class="k_change_m_l">
                <div class="k_change_m1" @click="style_index2" ><img src="../assets/img/header_style/grommet1.jpg" alt="">
                    <p class="kchangp1" ref="style2">Grommet</p>
                    <p class="kchangp2"> Most popular. <br> Clean and charming.</p>
                </div>
            </div>
            <div class="k_change_m_l">
                <div class="k_change_m1" @click="style_index3"><img src="../assets/img/header_style/pinchi_pleat.jpg" alt="">
                    <p class="kchangp1"  ref="style3">Pinch Pleat – Double</p>
                    <p class="kchangp2">Default 2x fullness. <br> Formal and elegant.</p>
                </div>
            </div>
            <div class="k_change_m_l">
                <div class="k_change_m1"><img src="../assets/img/header_style/more_design.jpg" alt="">
                    <p class="kchangp1">More Design Idea?</p>
                    <p class="kcahngp3"> contact us </p>
                </div>
            </div>
        </div>
        <div class="k_change_e"></div>
      </div>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    s_index: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const style1 = ref(null);
    const style2 = ref(null);
    const style3 = ref(null);

    const style_index1 = function () {
    //   console.log(document.querySelector(".k_step_d.active_fc").textContent);
    document.cookie = `cts_header_c=Rod Pocket`;
    // docCookies.setItem
    // document.cookie.setItem
      emit("style_index", style1.value.textContent);
      
    };
    const style_index2 = function () {
    document.cookie = `cts_header_c=Grommet`;
      emit("style_index", style2.value.textContent);
    };
    const style_index3 = function () {
      document.cookie = `cts_header_c=Pinch Pleat – Double` 
      emit("style_index", style3.value.textContent);
    };

    return { style_index1, style_index2, style_index3, style1,style2,style3 };
  },
};
</script>
<style lang="less">
.k_change_m_l {
  padding: 10px;
  cursor: pointer; 
}
.k_change_m_l:hover {
  border: 5px solid #c0c0bd;
}
.kwang_container {
  height: 720px;
  background: no-repeat url(../assets/底图.jpg);
  .k_change_ct {
    padding: 0 240px;
  }
  p {
    text-align: center;
    font-family: "Times New Roman Normal", "Times New Roman";
    font-weight: 400;
    font-style: normal;
    text-align: center;
    &:nth-child(1) {
      font-size: 20px;
      padding-top: 20px;
    }
    &:nth-child(2) {
      font-family: "Avenir Book", "Avenir";
      font-weight: 350;
      font-style: normal;
      font-size: 14px;
      text-align: center;
      margin: 25px auto;
      line-height: 20px;
    }
  }
  .k_change_m {
    display: flex;
    justify-content: space-around;
    .k_change_m1 {
      flex: 1;
      background: #f7f7f7;
      padding-bottom: 55px;
      .kchangp1 {
        font-family: "Avenir Book", "Avenir";
        font-weight: 350;
        font-style: normal;
        font-size: 20px;
        text-align: center;
      }
      .kchangp2 {
        font-family: "Avenir Book", "Avenir";
        font-weight: 350;
        font-style: normal;
        font-size: 14px;
        color: #b4aaa0;
        text-align: center;
        line-height: 20px;
      }
      .kcahngp3 {
        width: 130px;
        height: 23px;
        background: #756453;
        border-radius: 15px;
        margin: 0 auto;
        line-height: 23px;
        color: #fff;
      }
    }
  }
}
</style>