<template>
  <div class="header">
    <div class="logo section">
      Logo
    </div>
    <div class="option section">
      <div class="Projects">
        Projects
      </div>
      <div class="Blogs">
        Blogs
      </div>
      <div class="Contact me">
        Contact me
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {

  },
});
</script>
<style lang="scss">
.header{
  background: black;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;

  .section{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }
  .logo{

    flex: 0 0 100px;
  }
  .option{
justify-content: flex-end;
    background: red;
    flex: 1;
  }
}
</style>
