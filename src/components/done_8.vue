<template>
  <img src="../assets/img/fullness/fullness_1.png" alt="" />
  <p class="k_fuln_p1 k_center">All done</p>
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
  <aside class="side_done">
    <p class="ald_1">Header:</p>

    <p class="ald_d1"></p>

    <p class="ald_1">Size per panel:</p>

    <p class="ald_d2">占位</p>

    <p class="ald_1">Qty:</p>

    <p class="ald_d3">占位</p>

    <p class="ald_1 ald_2" @click="recalc">RECALCULATE NOW</p>
    <p class="ald_3 zanshide">
      Send your measurements to yourself so you don't forget them!
    </p>
    <div class="k_email">
      <input
        class="k_email_1 k_email_3 zanshide"
        type="email"
        placeholder="Your email"
      />
      <input
        class="k_email_2 k_email_3 zanshide"
        type="text"
        placeholder="Your project/room name (not required)"
      />
      <div class="k_email_da">
        <a href="" class="k_email_a">SHOP NOW</a>
        <div class="k_email_d zanshide">SEND</div>
      </div>
    </div>
  </aside>
</template>
<script>
import { onMounted, onActivated, ref } from "vue";
export default {
  setup(props) {
    let kwang_done_c = ref(null);
    onActivated(() => {
      document.querySelector(".ald_d1").innerText = getCookie("cts_header_c");
      document.querySelector(".ald_d2").innerText = getCookie("cts_width_c");
      document.querySelector(".ald_d3").innerText = getCookie("cts_qty_c");
      let temp = getCookie("step7");
      kwang_done_c.value = Number(temp);
      console.log('444444444', kwang_done_c.value, temp);
    });
    function recalc() {
      location.reload();
    }
    let allcookies = document.cookie;
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
    // let cookie_val = getCookie(cookie的名字);

    return { recalc,kwang_done_c };
  },
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
}

.zanshide {
  visibility: hidden;
}

.k_fuln_p1 {
  position: absolute;
  top: 140px;
  font-family: "Times New Roman Normal", "Times New Roman";
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 0.1px;
  text-align: center;
}

.side_done {
  position: absolute;
  top: 250px;
  right: 18%;

  p {
    margin-bottom: 1.5%;
  }
}

.ald_1 {
  font-family: "Avenir Book", "Avenir";
  font-weight: 350;
  font-style: normal;
  letter-spacing: 0.1px;
  line-height: 22px;
  font-size: 13px;
  color: #756453;
}

.ald_2 {
  font-family: "Avenir Book", "Avenir";
  font-weight: 350;
  font-style: normal;
  text-decoration: underline;
  letter-spacing: 0.2px;
  color: #988c81;
  padding: 20px 0;
  cursor: pointer;
}

.ald_3 {
  font-family: "Avenir Book", "Avenir";
  font-weight: 350;
  font-style: normal;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-size: 13px;
}

.ald_d {
  font-family: "Avenir Book", "Avenir";
  font-weight: 350;
  font-style: normal;
  letter-spacing: 0.1px;
  line-height: 22px;
  font-size: 16px;
  color: #333333;
}

.k_email {
  display: flex;
  flex-direction: column;
}

.k_email_1 {
  margin-bottom: 15px;
}

.k_email_2 {
  margin-bottom: 20px;
}

.k_email_3 {
  box-shadow: 2px 2px 3px #a0a0a0;
  font-family: "Avenir Book", "Avenir";
  font-weight: 350;
  font-style: normal;
  letter-spacing: 0.1px;
  color: #b4aaa0;
  text-align: left;
  width: 326px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 252, 252, 1);
  border: none;
  border-radius: 46px;
}

.k_email_3[placeholder] {
  padding-left: 30px;
  color: #dbbca0;
}

.k_email_a {
  font-family: "Avenir Book", "Avenir";
  display: block;
  text-align: center;
  line-height: 30px;
  text-decoration: none;
  font-weight: 350;
  font-style: normal;
  letter-spacing: 0.1px;
  color: #fafafa;
  border-width: 0px;
  width: 150px;
  height: 30px;
  background: inherit;
  background-color: rgba(51, 51, 51, 1);
  border: none;
  border-radius: 20px;
  margin-right: 22px;
}

.k_email_d {
  width: 150px;
  height: 30px;
  font-family: "Avenir Book", "Avenir";
  font-weight: 350;
  font-style: normal;
  letter-spacing: 0.1px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(51, 51, 51, 1);
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
}

.k_email_da {
  display: flex;
}

@media screen and (max-width: 1600px) {
  .side_done {
    transform: scale(0.8);
    top: 150px;
  }
}

@media screen and (max-width: 1250px) {
  .side_done {
  }
}
</style>
