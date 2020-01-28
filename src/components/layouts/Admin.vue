<template>
  <div>
    <headers />
    <slot />
    <footers />
  </div>
</template>
<script>
import headers from "./../sub/Header.vue";
import footers from "./../sub/Footer.vue";
export default {
  components: {
    headers: headers,
    footers: footers
  }
};
</script>