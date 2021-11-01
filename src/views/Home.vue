<template>
  <div class="home">
    <Header />
    <div class="home-container">
      <div class="image">
        <img src="@/assets/home.png">
      </div>
      <div class="text">
        <!-- <img src="@/assets/under_construction.png"> -->
        <!-- <div class="anim">
          Site
        </div>
        <div class="anim">
          Under
        </div>
        <div>
          Construction!!
        </div> -->
      </div>
      <!-- <div class="tagcloud" /> -->
      <TagCloud />
    </div>
  </div>
</template>

<script>
import 'animate.css';
import Header from '@/components/Header.vue';
import TagCloud from '@/components/TagCloud.vue';

export default {
  name: 'Home',
  components: {
    Header,
    TagCloud,
  },
  mounted() {

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

      .anim{
        animation: bounce; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 2s;
        animation-play-state: paused;
        animation-iteration-count: infinite;

        &:hover{
          animation-play-state: running;
        }
      }

      img {
        height: 100%;
      }
    }

  }
  .tagcloud{
    width: 500px;
  }
}
</style>
