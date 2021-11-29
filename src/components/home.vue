<template>
  <div>
    <div  class="popout">
      <span>
        <div class="main-image">
          <h1 class="main-image-title mb-5">
            Welcome!!
            <span style="font-size: 50px">by <span class="fumi">fumi</span></span>
          </h1>
          <p style="color: gray">
            はじめまして、fumiです。<br />このサイトはfumiの自己紹介サイトです。
          </p>
          </div>
      </span>
    </div>
  </div>
</template>

<script></script>

<style scoped>

.main-image-title {
  font-size: 70px;
  padding-top: 250px;
}
.fumi {
  color: rgba(65, 184, 131);
}
@media screen and (max-width: 800px) {
  .main-image-title {
    font-size: 50px;
    padding-top: 150px;
  }
}

.popout {
  display: inline-block;         /* 装飾用。なくても可。 */
  padding: 0 5px;                /* 装飾用。なくても可。 */
  overflow: hidden;              /* はみ出た分を非表示 */
}

.popout span {
  position: relative; /* bottomを指定するために必要 */
  animation: popanime 1s ease-out forwards; /* 最後ゆっくりになるアニメを1秒かけて1回だけやったあと固定 */
}

@keyframes popanime {
  from {
    /*transform: translateX(100px);*/
    bottom: -100px;
  }
  to{
    /*transform: translateX(0);*/
    bottom: 0px;
  }
}

</style>
