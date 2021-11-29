<template>
  <div>
    <div class="container mt-5 px-5">
      <h1>LANGUAGES</h1>
      <div class="row mt-4">
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="html"></div>
          <div class="card-body">
            <h4 class="card-title">HTML</h4>
            <p style="color: gray">
            経験年数: 半年<br />
            </p>
            <p class="card-text text-left">
              <br />
              テックアカデミー課題、個人開発を行い、Qiita記事など参考に複数のサイトをコーディングしました。
            </p>
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="css"></div>
          <div class="card-body">
            <h4 class="card-title">CSS</h4>
            <p style="color: gray">
              経験年数: 半年<br />
              Bootstrap4</p>
            <p class="card-text text-left">
              テックアカデミー課題、個人開発を行い、Qiita記事など参考に複数のサイトをコーディングしました。Bootstrapに関しては、このサイトでも使用しています。
            </p>
          </div>
        </div>
        
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="ruby"></div>
          <div class="card-body">
            <h4 class="card-title">Ruby</h4>
            <p style="color: gray">
              経験年数: 半年<br />
              RubyOnRails/Sinatra</p>
            <p class="card-text text-left">
              Rails tutorialをはじめ、基礎学習を行っていき、基本的な項目については理解できています。また現在個人で様々なWebアプリケーションが開発できるよう日々チャレンジしています。
            </p>
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="php"></div>
          <div class="card-body">
            <h4 class="card-title">PHP</h4>
            <p style="color: gray">
              経験年数: ３ヶ月<br />
              Laravel/Wordpress</p>
            <p class="card-text text-left">
              プログラマの友人に誘われ、初めてみました。まだまだ初学者です。
            </p>
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="python"></div>
          <div class="card-body">
            <h4 class="card-title">Python</h4>
            <p style="color: gray">
              経験年数: 初心者<br />
              Django</p>
            <p class="card-text text-left">
              勉強中です。ポートフォリオ制作を検討中です。
            </p>
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="js"></div>
          <div class="card-body">
            <h4 class="card-title">Javascript</h4>
            <p style="color: gray">
              経験年数: 半年<br />
              Jquery/Vue</p>
            <p class="card-text text-left">
              テックアカデミー課題、個人開発を通じ学習してきました。また、このサイトはVue.cli3を用いて開発されています。
            </p>
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
h4 {
  font-size: 30px;
}
.html {
  background-color: rgb(227, 77, 37);
  height: 50px;
}
.css {
  background-color: rgb(91, 67, 128);
  height: 50px;
}
.ruby {
  background-color: rgb(193, 39, 45);
  height: 50px;
}
.php {
  background-color: rgb(136, 146, 191);
  height: 50px;
}
.python {
  background-color: rgb(52, 115, 165);
  height: 50px;
}
.js {
  background-color: rgb(241, 223, 90);
  height: 50px;
}
@media screen and (max-width: 800px) {
  .sp-block {
    display: none;
  }
}
</style>