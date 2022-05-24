<template>
  <div class="k_all">
    <!-- 步骤调转 -->
    <section class="kwang_step_a" style="position: relative">
      <ul class="kwang_step_ul">
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 1 == index }">
            <span
              class="hrleft"
              @click="index = 1"
              :class="{ active_fc: 1 == index }"
            >
              1</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 1 == index }">Style</div>
          <p ref="root_1"></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 2 == index }">
            <span @click="index = 2" :class="{ active_fc: 2 == index }">
              2</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 2 == index }">
            Rod Installed
          </div>
          <p ref="root_2"></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 3 == index }">
            <span @click="index = 3" :class="{ active_fc: 3 == index }">
              3</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 3 == index }">
            Coverage Width
          </div>
          <p ref="root_3"></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 4 == index }">
            <span @click="index = 4" :class="{ active_fc: 4 == index }">
              4</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 4 == index }">
            Coverage Length
          </div>
          <p ref="root_4"></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 5 == index }">
            <span @click="index = 5" :class="{ active_fc: 5 == index }">
              5</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 5 == index }">Panels</div>
          <p ref="root_5"></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 6 == index }">
            <span @click="index = 6" :class="{ active_fc: 6 == index }">
              6</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 6 == index }">
            Fullness
          </div>
          <p></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 7 == index }">
            <span @click="index = 7" :class="{ active_fc: 7 == index }">
              7</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 7 == index }">Botton</div>
          <p></p>
        </li>
        <li class="k_step_li">
          <div class="k_step_u" :class="{ k_step_active: 8 == index }">
            <span
              class="hrright"
              @click="index = 8"
              :class="{ active_fc: 8 == index }"
            >
              8</span
            >
          </div>
          <div class="k_step_d" :class="{ active_fc: 8 == index }">
            All done
          </div>
          <p></p>
        </li>
        <p class="myhrwid"></p>
      </ul>
    </section>

    <!-- 返回 -->
    <p class="myBack" @click="myBack()">＜ PREVIOUS</p>

    <keep-alive>
      <style1
        v-if="index === 1"
        :s_index="index"
        @style_index="style_index"
      ></style1>
    </keep-alive>
    <keep-alive>
      <rod2 v-if="index === 2" @rod_index="rod_index"></rod2>
    </keep-alive>
    <keep-alive>
      <width v-model="noRod" v-if="index === 3" @width_index="width_index">
      </width>
    </keep-alive>
    <keep-alive>
      <length
        v-model="noRod"
        v-if="index === 4"
        @length_index="length_index"
      ></length>
    </keep-alive>
    <keep-alive>
      <panel v-if="index === 5" @panel_index="panel_index"></panel>
    </keep-alive>
    <keep-alive>
      <fullness v-if="index === 6"></fullness>
    </keep-alive>
    <keep-alive>
      <botton v-if="index === 7"></botton>
    </keep-alive>
    <keep-alive>
      <alldone v-if="index === 8"></alldone>
    </keep-alive>

    <!-- 固定位置的 联系我们 -->
    <p class="kconpp">Need help? <a href="#"> CONTACT US </a></p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import "@/assets/css/index.css";
import Style1 from "./components/style_1.vue";
import Rod2 from "./components/rod_2.vue";
import Width from "./components/width_3.vue";
import Length from "./components/length_4.vue";
import Panel from "./components/panel_5.vue";
import Fullness from "./components/fullness_6.vue";
import Botton from "./components/botton_7.vue";
import Alldone from "./components/done_8.vue";
export default {
  components: {
    Style1,
    Rod2,
    Width,
    Length,
    Panel,
    Fullness,
    Botton,
    Alldone,
  },
  setup(props) {
    var index = ref(1);
    const root_1 = ref(null);
    const root_2 = ref(null);
    const root_3 = ref(null);
    const root_4 = ref(null);
    const root_5 = ref(null);
    var noRod = ref(11);
    onMounted(() => {
      window.onresize = function () {
        var hrwid =
          document.querySelector(".hrright").offsetLeft -
          document.querySelector(".hrleft").offsetLeft;
        document.querySelector(".myhrwid").style.width = `${hrwid}px`;
      };
    });
    function myBack() {
      if (index.value != 1) {
        index.value--;
      }
    }
    const style_index = function (a) {
      root_1.value.textContent = a;
      index.value++;
    };
    const rod_index = function (a) {
      root_2.value.textContent = a;
      if (a == "YES") {
        console.log("此时有杆");
        noRod.value = 11;
      }
      if (a == "NO") {
        console.log("无");
        noRod.value = 12;
      }
      index.value++;
      console.log(noRod);
      return noRod;
    };
    const width_index = function (a) {
      root_3.value.textContent = a;
      index.value++;
    };
    const length_index = function (a) {
      root_4.value.textContent = a;
      index.value++;
    };
    const panel_index = function (a) {
      root_5.value.textContent = a;
      index.value++;
    };
    return {
      index,
      myBack,
      style_index,
      root_1,
      rod_index,
      root_2,
      width_index,
      root_3,
      length_index,
      root_4,
      panel_index,
      root_5,
      noRod,
    };
  },
};
</script>

<style lang="less">
.k_all {
  position: relative;
}
.kwang_step_a {
  background-color: #d6d1ca;
}
.kwang_step_ul {
  margin: 0 260px;
  margin-top: 30px;
}
.k_step_active {
  border: 2px solid #333333 !important;
}
.active_fc {
  color: #333333 !important;
}
.kconpp {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50px);
  a {
    color: #fff;
  }
}
.myBack {
  position: absolute;
  font-family: "Inter";
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  left: 200px;
  padding-top: 10px;
  cursor: pointer;
}

//初始化样式
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
