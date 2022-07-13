<template>
  <div class="k_all">
    <!-- 步骤调转 -->
    <section class="kwang_step_a" style="position: relative">
      <ul class="kwang_step_ul">
        <li class="k_step_li" @click="index_1">
          <div class="k_step_u" :class="{ k_step_active: 1 == index, k_step_done: 1 < index }">
            <span class="hrleft" :class="{ active_fc: 1 == index }"> 1</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 1 == index }">Style</div>
          <p ref="root_1" class="root_1_header"></p>
        </li>
        <li class="k_step_li" @click="index_2">
          <div class="k_step_u" :class="{ k_step_active: 2 == index, k_step_done: 2 < index }">
            <span :class="{ active_fc: 2 == index }"> 2</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 2 == index }">
            Rod Installed
          </div>
          <p ref="root_2"></p>
        </li>
        <li class="k_step_li" @click="index = 3">
          <div class="k_step_u" :class="{ k_step_active: 3 == index, k_step_done: 3 < index }">
            <span :class="{ active_fc: 3 == index }"> 3</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 3 == index }">
            Coverage Width
          </div>
          <p ref="root_3"></p>
        </li>
        <li class="k_step_li" @click="index = 4">
          <div class="k_step_u" :class="{ k_step_active: 4 == index, k_step_done: 4 < index }">
            <span :class="{ active_fc: 4 == index }"> 4</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 4 == index }">
            Coverage Length
          </div>
          <p ref="root_4"></p>
        </li>
        <li class="k_step_li" @click="index = 5">
          <div class="k_step_u" :class="{ k_step_active: 5 == index, k_step_done: 5 < index }">
            <span :class="{ active_fc: 5 == index }"> 5</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 5 == index }">Panels</div>
          <p ref="root_5" class="panel_flag"></p>
        </li>
        <li class="k_step_li" @click="root_6_index">
          <div class="k_step_u" :class="{ k_step_active: 6 == index, k_step_done: 6 < index }">
            <span :class="{ active_fc: 6 == index }"> 6</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 6 == index }">
            Fullness
          </div>
          <p class="fullness_pin" ref="root_6"></p>
        </li>
        <li class="k_step_li" @click="index = 7">
          <div class="k_step_u" :class="{ k_step_active: 7 == index, k_step_done: 7 < index }">
            <span :class="{ active_fc: 7 == index }"> 7</span>
          </div>
          <div class="k_step_d" :class="{ active_fc: 7 == index }">Botton</div>
          <p ref="root_7"></p>
        </li>
        <li class="k_step_li" @click="index = 8">
          <div class="k_step_u" :class="{ k_step_active: 8 == index, k_step_done: 8 <= index }">
            <span class="hrright" :class="{ active_fc: 8 == index }"> 8</span>
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
    <p class="myBack" @click="myBack()"> ＜ PREVIOUS</p>
    <p class="myNext" @click="myNext()"> ＞ NEXT</p>

      <transition name="wwz" mode="out-in">
        <keep-alive>

      <style1 v-if="index === 1" :s_index="index" @style_index="style_index"></style1>

      <rod2 v-else-if="index === 2" @rod_index="rod_index"></rod2>

    <myWidth v-else-if="index === 3" v-model="noRod" @width_index="width_index"></myWidth>

    <length v-else-if="index === 4" v-model="noRod" @length_index="length_index"></length>

    <panel v-else-if="index === 5" @panel_index="panel_index"></panel>

    <fullness v-else-if="index === 6" @full_index="full_index" @botton_base="botton_base"></fullness>

    <botton v-else-if="index === 7" :bot_base="bot_base" @botton_index="botton_index"></botton>

    <alldone v-else-if="index === 8"></alldone>
        </keep-alive>
      </transition>

      
    <!-- 固定位置的 联系我们 -->

      <!-- <transition name="wwz" mode="out-in" appear > -->

    <!-- <router-view v-slot="{ Component , route}" >
        <keep-alive>
          <component :is="Component" :key="route.name"></component>
        </keep-alive>
    </router-view> -->
    
    <!-- <router-view></router-view>
      </transition> -->
    
    <h1><router-link to="/style">ssssssss</router-link></h1>
    <h1><router-link to="/rod">rrrrrrr</router-link></h1>
    <p class="kconpp">Need help? <a href="#"> CONTACT US </a></p>
  </div>

</template>

<script>
import { ref, onMounted, provide, readonly, computed } from "vue";
import { useRouter } from "vue-router";

import "@/assets/css/index.css";
import Style1 from "./components/style_1.vue";
import Rod2 from "./components/rod_2.vue";
import myWidth from "./components/width_3.vue";
import Length from "./components/length_4.vue";
import Panel from "./components/panel_5.vue";
import Fullness from "./components/fullness_6.vue";
import Botton from "./components/botton_7.vue";
import Alldone from "./components/done_8.vue";
export default {
  components: {

    Style1,
    Rod2,
    myWidth,
    Length,
    Panel,
    Fullness,
    Botton,
    Alldone,
  },
  setup(props) {
    const router = useRouter();

    var index = ref(1);
    const root_1 = ref(null);
    const root_2 = ref(null);
    const root_3 = ref(null);
    const root_4 = ref(null);
    const root_5 = ref(null);
    const root_6 = ref(null);
    const root_7 = ref(null);
    let bot_base = ref(null);
    var noRod = ref(11);

    const myprov = provide("kwang", 6);

    onMounted(() => {
      window.onresize = function () {
        var hrwid =
          document.querySelector(".hrright").offsetLeft -
          document.querySelector(".hrleft").offsetLeft;
        document.querySelector(".myhrwid").style.width = `${hrwid}px`;
      };
    });
    function myBack() {
      //判断若果是pinch头部，跳过fullness
      if (index.value == 7) {
        if (root_1.value.innerText == "Pinch Pleat – Double") {
          index.value--;
        }
      }
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
        noRod.value = 11;
      }
      if (a == "NO") {
        noRod.value = 12;
      }
      index.value++;
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
      //判断若果是pinch头部，跳过fullness
      if (root_1.value.innerText == "Pinch Pleat – Double") {
        index.value++;
        document.querySelector(".fullness_pin").innerText = "2x Fullness";
      }
      index.value++;
    };
    const root_6_index = function () {
      if (
        document.querySelector(".root_1_header").innerText ==
        "Pinch Pleat – Double"
      ) {
        if (index.value == 7) {
          index.value--;
          index.value--;
        }
      } else {
        index.value = 6;
      }
    };
    const full_index = function (a, b) {
      root_6.value.textContent = a;
      bot_base.value = b;
      console.log(bot_base.value, "/*-------");
      index.value++;
    };
    const botton_index = function (a) {
      root_7.value.textContent = a;
      index.value++;
    };
    const botton_base = function (a) {
      bot_base.value = a;
      console.log(bot_base.value);
    };



    // 编程式路由的跳转
    const index_1 = function () {
      router.push({ name: "style" ,
       });
    };
    const index_2 = function () {
      router.push({ name: "rod" ,
        });
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
      root_6_index,
      full_index,
      root_6,
      root_7,
      botton_index,
      botton_base,
      bot_base,
      // 
      index_1,
      index_2,
    };
  },
};
</script>

<style lang="less">
// 动画

// .why-enter-from,
// .why-leave-to {
//   opacity: 0;
// }
// .why-enter-active,
// .why-leave-active {
//   transition: opacity 0.5s ease;
// }

.wwz-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.wwz-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.wwz-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.wwz-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.wwz-enter-active,
.wwz-leave-active {
  transition: all 0.5s;
}

.why-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.why-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.why-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.why-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}

// .why-enter-from,
// .why-leave-to {
//   opacity: 0;
// }
// .why-enter-active,
// .why-leave-active {
//   transition: opacity 0.3s ease;
// }
// .why-enter-active {
//   animation: bounce 0.3s ease;
// }
// .why-leave-active {
//   animation: bounce 0.3s ease reverse;
// }

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

//
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

.k_step_done {
  background-color: #8f7760 !important;
  color: #fff !important;
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
  z-index: 3;
}
.myNext {
  position: absolute;
  font-family: "Inter";
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  right: 200px;
  padding-top: 10px;
  cursor: pointer;
  z-index: 3;
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
