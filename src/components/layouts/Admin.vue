<template>
  <div>
    <headers />
    <slot />
    <footers />
  </div>
</template>
<script>
import headers from "./../sub/AdminHeader.vue";
import footers from "./../sub/AdminFooter.vue";
export default {
  components: {
    headers: headers,
    footers: footers
  }
};
</script>