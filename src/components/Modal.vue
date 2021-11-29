<template>
  <div id="overlay">
    <div id="content">
      <h1>紹介ページ</h1>
      <img :src="val.img_src">
      <p>説明：{{ val.desc }}</p>
      <p>作業範囲：{{ val.range }}</p>
      <p>使用技術：{{ val.lang }}</p>
      <a class="btn-horizontal-border btn mt-2 mb-5" @click="$emit('close')">閉じる</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['val']
};
</script>

<style>
  #overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
  color: white;
}

#content > img {
  width: 95%;
}
</style>
