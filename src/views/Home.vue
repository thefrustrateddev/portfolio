<template>
  <div class="home">
    <Header />
    <div class="home-container">
      <div class="image">
        <img src="@/assets/home.png">
      </div>
      <div class="text">
        <!-- <img src="@/assets/under_construction.png"> -->
        Site Under Construction!!
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>
<style lang="scss">
.home{
  background: #181818;
  height: 100vh;
  width: 100vw;
  color:#fff;
  .home-container {
    height: calc(100% - 90px);
    text-align: left;
    display: flex;
    .image{
      height: 100%;
      img{
        height: 100%;
      }

    }
    .text{
      height: 100%;
      font-size: 84px;
      padding-top: 268px;
      color: #e99202;
      font-weight: 800;
      img {
        height: 100%;
      }
    }

  }
}
</style>
