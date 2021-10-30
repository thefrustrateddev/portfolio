<template>
  <div class="header">
    <div class="logo section">
      <img src="@/assets/logo.png">
    </div>
    <div class="options section">
      <div class="menu-option projects">
        <div>Projects</div>
        <div class="bar" />
      </div>
      <div class="menu-option blogs">
        Blogs
        <div class="bar" />
      </div>
      <div class="menu-option contact">
        Contact me
        <div class="bar" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {

  },
  mounted() {

  },
};
</script>
<style lang="scss">

.header {
  // background-color: rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  padding: 20px;
  .section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

  }
  .logo {
    flex: 0 0 200px;
    display: flex;
    justify-content: flex-start;
    img {
      height:100%
    }
  }
  .options {
    justify-content: flex-end;
    flex: 1;
    .menu-option {
      padding-right:30px;
      cursor: pointer;
      font-size: 18px;
      .bar{
        width: 0px;
        background: #e99202;
        height: 3px;
        margin-top: 3px;
        transition: all 0.4s ease;
      }
      &:hover{
        .bar{
          width: 100%;
        }
      }
    }
  }
}
</style>
