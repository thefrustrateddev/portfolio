<template>
  <div class="tagcloud" />
</template>
<script>
import TagCloud from 'TagCloud';

export default {
  name: 'TagCloudComponent',
  components: {

  },
  props: {
    radius: {
      type: String,
      default: '300',
    },
    keep: {
      type: Boolean,
      default: true,
    },
    itemClass: {
      type: String,
      default: 'tagcloud--item',
    },
    list: {
      type: Array,
      default: () => ([
        'Javascript', 'PostgreSQL', 'Vue',
        'CSS3', 'Angular', 'Booststrap',
        'Git', 'Docker', 'Heroku',
        'Dialogflow', 'Nodejs', 'Koa', 'Bookshelf', 'Express',
      ]),
    },
  },
  mounted() {
    const container = '.tagcloud';
    const {
      radius, keep, itemClass, list,
    } = this.$props;
    const options = {
      radius, keep, itemClass,
    };

    TagCloud(container, list, options);
  },
};
</script>
<style lang="scss">
    .tagcloud--item{
        color: #e89203;
    }
</style>
