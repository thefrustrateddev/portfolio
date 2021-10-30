<template>
  <div class="home">
    <Header />
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
  background: blue;
  height: 100vh;
  width: 100vw;
}
</style>
