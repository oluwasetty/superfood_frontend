<template>
  <div>
    <footer class="footer">
      <div class="container-fluid">
        <nav class="float-left">
          <ul>
            <li>
              <a href="/">
                {{ config('app.name', 'Laravel') }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright float-right"> &copy; <span id="getyear"></span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "footer"
};
</script>