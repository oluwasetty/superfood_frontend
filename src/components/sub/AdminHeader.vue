<template>
  <div>
    <div
      class="sidebar"
      data-color="danger"
      data-background-color="black"
      data-image="assets/img/sidebar-1.jpg"
    >
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo">
        <a
          href="/"
          class="simple-text logo-normal"
        >
          my app
        </a>
        <a
          style="font-size: 12px; line-height: 2px;"
          class="simple-text logo-normal"
          href="/"
        >Taiwo</a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="/admin"
            >
              <i class="material-icons">dashboard</i>
              <p>Home</p>
            </a>
          </li>
          <li
            class="nav-item"
            data-toggle="collapse"
            data-target="#reports"
          >
            <a
              class="nav-link"
              href="#"
            >
              <i class="material-icons">trending_up</i>
              <p>Reports <span class="material-icons">keyboard_arrow_down</span></p>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <div class="main-panel">
      <!-- Navbar -->
      <nav
        class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
        id="msq"
      >
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a
              class="navbar-brand"
              href="#msq"
            >Users</a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
            </form>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdownProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="material-icons">person</i> <span>Taiwo Soewu</span>
                  <span class='material-icons'>keyboard_arrow_down</span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownProfile"
                >
                  {{--  <div class="dropdown-divider"></div>  --}}
                  <a
                    class="dropdown-item"
                    href="/adminlogout"
                  ><i class="material-icons">exit_to_app</i> Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  // name: "header"
};
</script>