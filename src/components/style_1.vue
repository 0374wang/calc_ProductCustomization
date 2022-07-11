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
import { onDeactivated, ref } from "vue";
import { useStore } from 'vuex';
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
    const store = useStore();
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

    const style_index1 = function () {
      store.state._headerStyle = "Rod Pocket";

      emit("style_index", style1.value.textContent);
    };
    const style_index2 = function () {
      store.state._headerStyle = "Grommet";

      emit("style_index", style2.value.textContent);
    };
    const style_index3 = function () {
      store.state._headerStyle = "Pinch Pleat – Double";

      emit("style_index", style3.value.textContent);
    };
    onDeactivated(()=>{
      // document.querySelector('.kwang_container').style.display = 'none';
    })
    return { style_index1, style_index2, style_index3, style1, style2, style3 ,getCookie };
  },
};
</script>
<style lang="less">
.k_change_m_l {
  padding: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: 0px 0px 14px #424242;
}
.k_change_m_l:hover {
  border: 1px solid #8f7760;
  border-radius: 5px;
}
.kwang_container {
  height: 704px;
  width: 100%;
  background: no-repeat url(../assets/底图.jpg);
  background-size: 100% 100% !important;
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