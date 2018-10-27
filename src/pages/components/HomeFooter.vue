<template>
  <div class="footer">
    <p class="footer-cnt">copyright by
      <a href="https://github.com/ices1/Vue-BBS">ics1</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    line-height: 1rem
    // left: 50%;
    // transform: translateX(-50%);
    // position: absolute
    // bottom: -1rem
    margin .6rem 0
    text-align center
    color #6666
    a
      color #999
</style>
