<template>
  <div id="canvas">
    <div id="box_wrapper">
      <footer class="page_footer ds section_padding_top_50 section_padding_bottom_65 columns_padding_25 table_section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12 col-md-push-4 text-center">
              <div class="widget widget_text">
                <a
                  href="index.htm"
                  class="logo vertical_logo"
                >
                  <img
                    src="images\logo-vertical.png"
                    alt
                  />
                </a>

                <p class="divider_30">Smart Farming innovations is committed to evolving agriculture at all levels from just being an occupation into a sustainable industry; promoting participation among diverse groups in the society and eliminating all limitations that results in the lack of efficiency.</p>

                <p class="bottommargin_5 grey">
                  <i
                    class="fa fa-map-marker highlight rightpadding_10"
                    aria-hidden="true"
                  ></i> A10, FHA Road Beside RCCG Praise Assembly Karu Site Abuja
                  FCT, Nigeria
                </p>
                <p class="bottommargin_5 grey">
                  <i
                    class="fa fa-phone highlight rightpadding_10"
                    aria-hidden="true"
                  ></i> +2349070543641
                </p>
                <p class="darklinks bottommargin_5">
                  <i
                    class="fa fa-envelope highlight rightpadding_10"
                    aria-hidden="true"
                  ></i>
                  <a href="#0">royalsuperfood@gmail.com </a>
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-md-pull-4 text-center">
              <div class="widget widget_text widget_media_margin">
                <h3 class="widget-title">Quick Links</h3>
                <ul class="list1 no-bullets no-top-border no-bottom-border greylinks">
                  <li>
                    <router-link :to="{name: 'empowerment'}">Register for Empowerment</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'sponsorship'}">Register for Sponsorship</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'terms'}">Terms and Conditions</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 text-center">
              <div class="widget widget_mailchimp widget_media_margin">
                <h3 class="widget-title">Newsletter</h3>
                <form
                  @submit.prevent="storeNewsletter"
                  class="signup"
                  action="./"
                  method="get"
                >
                  <p>Enter your email address here always to be updated. We promise not to spam!</p>
                  <div class="form-group topmargin_25 bottommargin_30">
                    <label
                      for="mailchimp"
                      class="sr-only"
                    >Enter your email here</label>
                    <input
                      v-model="email"
                      type="email"
                      id="mailchimp"
                      class="mailchimp_email form-control text-center"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="theme_button color1"
                    >Subscribe</button>
                  </div>
                  <div class="response"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section class="ds ms page_copyright section_padding_15">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <p class="small-text grey">&copy; Copyright 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- eof #box_wrapper -->
  </div>
  <!-- eof #canvas -->
</template>
<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    storeNewsletter() {}
  }
};
</script>