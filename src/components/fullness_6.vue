<template>
<img src="../assets/img/fullness/fullness_1.png" alt="">
<p class=" k_fuln_p1 k_center">Which finished look of curtain do you prefer?<br>
 Choose fullness based on that.</p>

 <div class="fuln_all_l">
     <div class="fuln_img_all"></div>
     <p class="fuln_r1">Original Choice </p>
     <div class="fuln_r2"></div>
     <p class="fuln_r3">Get a flat sheet look when kept drawn in.

Use original fabric to cover the width.

</p>
 </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    img{
        width: 100%;
    }
    .k_fuln_p1{
    position: absolute;
    top: 140px;
    font-family: 'Times New Roman Normal', 'Times New Roman';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0.1px;
    text-align: center;
    }
    .fuln_all_l{ 
            position: absolute;
    top: 300px;
    right: 15%;
    width: 300px;
        .fuln_img_all{
            width: 200px;
            height: 100px;
            background-color: pink;
        }
        .fuln_r1{
                font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    letter-spacing: normal;
    color: #333333;
        }
        .fuln_r2{
            height: 1px;
            border-bottom: 1px solid #a3907d;
            margin: 15px 0;
            width: 200px;
        }
        .fuln_r3{
                font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
        }
    }
</style>