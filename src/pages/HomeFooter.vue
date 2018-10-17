<template>
  <div class="p-2">
    <p class="p-2 footer text-muted">copyright by
      <a class="text-muted" href="https://github.com/ices1/Vue-BBS">ics1</a>
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

<style scoped>
.footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
</style>
