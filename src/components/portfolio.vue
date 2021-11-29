<template>
  <div class="container mt-5 px-5">
    <h1>PORTFOLIO</h1>
    <div class="page-inner list col-lg-10 mt-4 mx-auto">
      <h2 class="mb-3 pb-3">過去作品</h2>
      <p class="text-left" style="color: gray">
        Vue.jsはまだ使い始めて間もないですが、試行錯誤しながら作成しました。<br />
        モーダルウィンドウが出ますので、画像をクリックしてください。
      </p>
        <div class="item-list" v-for="item in items">
          <div class="card" style="margin: 30px;">
            <img  @click="openModal(item)" :src="item.img_src" alt="Card image">
          </div>
          <modal :val="postItem" v-show="showContent" @close="closeModal" />
        </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  components: {
    Modal
  },
  data () {
    return {
      showContent: false,
      postItem: "",
      items: [
        { id: 1,
          desc: '自作Webアプリケーションです。直売所共有サービスです。',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'Ruby on Rails',
          img_src: require('../assets/farmstand.png'),
        },
        { 
          id: 2, 
          desc: '課題で作成したコーポレートサイトです。',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS',
          img_src: require('../assets/kitchen.png'),
        },
        { 
          id: 3, 
          desc: '課題で作成したサービスです。',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'jquery, firebase',
          img_src: require('../assets/realtime-chat.png'),
        },
      ]
    };
  },
  methods: {
    openModal(item) {
      this.showContent = true;
      this.postItem = item;
    },
    closeModal () {
      this.showContent = false;
    }
  }
};
</script>

<style>
h2 {
  border-bottom: 1px solid rgba(65, 184, 131, 0.5);
}

.btn-horizontal-border {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 12px 0 8px;
  text-decoration: none;
  color: #67c5ff;
  transition: .4s;
}

.btn-horizontal-border:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 4px;
  top:100%;
  left: 0;
  border-radius: 3px;
  background:#67c5ff;
  transition: .2s;
}

.btn-horizontal-border:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 4px;
  top:0;
  left: 0;
  border-radius: 3px;
  background:#67c5ff;
  transition: .2s;
}

.btn-horizontal-border:hover:before {
  top: -webkit-calc(100% - 3px);
  top: calc(100% - 3px);
}

.btn-horizontal-border:hover:after {
  top: 3px;
}

</style>
