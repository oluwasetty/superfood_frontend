<template>
  <div>

    <div class="preloader">
      <div class="preloader_image"></div>
    </div>
    <!-- search modal -->
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="search_modal"
      id="search_modal"
    >
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">
          <i class="rt-icon2-cross2"></i>
        </span>
      </button>
      <div class="widget widget_search">
        <form
          method="get"
          class="searchform search-form form-inline"
          action="./"
        >
          <div class="form-group bottommargin_0">
            <input
              type="text"
              value=""
              name="search"
              class="form-control"
              placeholder="Search keyword"
              id="modal-search-input"
            >
          </div>
          <button
            type="submit"
            class="theme_button"
          >Search</button>
        </form>
      </div>
    </div>

    <!-- Unyson messages modal -->
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      id="messages_modal"
    >
      <div class="fw-messages-wrap ls with_padding">
        <!-- Uncomment this UL with LI to show messages in modal popup to your user: -->
        <!--
		<ul class="list-unstyled">
			<li>Message To User</li>
		</ul>
		-->

      </div>
    </div>
    <!-- wrappers for visual page editor and boxed version of template -->
    <div id="canvas">
      <div id="box_wrapper">

        <!-- template sections -->

        <section class="page_topline ds table_section table_section_sm section_padding_top_5 section_padding_bottom_5">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 text-center text-sm-left">
                <div class="small-text">
                  <span class="grey inline-block rightpadding_5">Text, Call, or Email</span>
                  <span class="divided-content greylinks">
                    <span>
                      <span>+2349070543641</span>
                    </span>
                    <span>
                      <a href="#">royalsuperfood@gmail.com</a>
                    </span>
                  </span>
                </div>
              </div>
              <div class="col-sm-4 text-center text-sm-right">
                <a
                  class="social-icon color-icon soc-facebook"
                  href="#"
                  title="Facebook"
                ></a>
                <a
                  class="social-icon color-icon soc-twitter"
                  href="#"
                  title="Twitter"
                ></a>
                <a
                  class="social-icon color-icon soc-google"
                  href="#"
                  title="Twitter"
                ></a>
                <a
                  class="social-icon color-icon soc-linkedin"
                  href="#"
                  title="Twitter"
                ></a>
                <a
                  class="social-icon color-icon soc-youtube"
                  href="#"
                  title="Youtube"
                ></a>
              </div>
            </div>
          </div>
        </section>

        <header class="page_header header_white toggler_right section_padding_20">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 display_table">
                <div class="header_left_logo display_table_cell">
                  <router-link
                    :to="{name: 'home'}"
                    class="logo top_logo"
                  >
                    <img
                      src="images\superfoodlogo.jpg"
                      alt=""
                    >
                  </router-link>
                </div>

                <div class="header_mainmenu display_table_cell text-right">
                  <!-- main nav start -->
                  <nav class="mainmenu_wrapper">
                    <ul class="mainmenu nav sf-menu">
                      <li
                        id="home"
                        class="active"
                      >
                        <router-link :to="{name: 'home'}">Home</router-link>
                      </li>
                      <li>
                        <router-link
                          :to="{name: 'home'}"
                          v-scroll-to="'#about'"
                        >About us</router-link>
                      </li>
                      <!-- eof pages -->

                      <!-- shop -->
                      <li>
                        <router-link
                          :to="{name: 'home'}"
                          v-scroll-to="'#services'"
                        >Services</router-link>
                      </li>
                      <!-- eof shop -->

                      <li>
                        <router-link
                          :to="{name: 'home'}"
                          v-scroll-to="'#products'"
                        >Products</router-link>
                      </li>
                      <!-- eof features -->

                      <!-- blog -->
                      <li>
                        <router-link
                          :to="{name: 'home'}"
                          v-scroll-to="'#team'"
                        >Team</router-link>
                      </li>
                      <!-- eof blog -->

                      <!-- contacts -->
                      <li>
                        <router-link
                          :to="{name: 'home'}"
                          v-scroll-to="'#contact'"
                        >Contact us</router-link>
                      </li>
                      <!-- eof contacts -->

                      <!-- registrations -->
                      <li>
                        <a href="#">Registrations</a>
                        <ul>
                          <li>
                            <router-link :to="{name: 'empowerment'}">Empowerment</router-link>
                          </li>
                          <li>
                            <router-link :to="{name: 'sponsorship'}">Sponsorship</router-link>
                          </li>
                        </ul>
                      </li>
                      <!-- eof registrations -->

                      <li class="search hidden-xs hidden-sm">
                        <a
                          class="search_form_trigger header-button"
                          href="#"
                        >
                          <span>
                            <i
                              class="fa fa-search"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-times"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <!-- eof main nav -->
                  <!-- header toggler -->
                  <span class="toggle_menu">
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="ls ms search_form_wrapper hidden-xs hidden-sm">
            <div class="container">
              <div class="row columns_margin_top_20 columns_margin_bottom_20">
                <div class="col-sm-12">

                  <div class="widget_search">
                    <form
                      method="get"
                      class="searchform"
                      action="/"
                    >
                      <div class="form-group margin_0">
                        <label
                          class="sr-only"
                          for="headeer-widget-search"
                        >Search for:</label>
                        <input
                          id="headeer-widget-search"
                          type="text"
                          value=""
                          name="search"
                          class="form-control"
                          placeholder="Type search keyword here"
                        >
                      </div>
                      <button
                        type="submit"
                        class="theme_button"
                      >Search</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name: "header"
};
</script>