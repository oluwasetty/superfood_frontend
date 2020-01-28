<template>
  <div>
    <section class="ls section_404 background_cover section_padding_top_150 section_padding_bottom_150">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="inline-block text-center">
              <p class="not_found">
                <span class="highlight2">404</span>
                <span class="oops grey">Ooops!</span>
              </p>
              <h3 class="text-uppercase">Sorry page nor found!</h3>
              <p>
                <a
                  href="#"
                  @click.prevent="back"
                  class="theme_button color1"
                >Go back</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>