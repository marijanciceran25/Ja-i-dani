<template>
<div>
      <b-navbar toggleable="lg" type="dark" class="stil">
    <b-navbar-brand href="@/views/App.vue">Park Finder</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Mapa</b-nav-item>
        <b-nav-item-dropdown text="Lista Parkinga">
          <b-dropdown-item href="#">Rojc</b-dropdown-item>
          <b-dropdown-item href="#">Titov Park</b-dropdown-item>
          <b-dropdown-item href="#">Tržnica</b-dropdown-item>
          <b-dropdown-item href="#">Dobrićeva</b-dropdown-item>
          <b-dropdown-item href="#">Drosina</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Kalkulator</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
         <!-- Search form -->
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </b-nav-form>
        <hr>
        <b-nav-item-dropdown text="Jezik" right>
          <b-dropdown-item href="#">HRV</b-dropdown-item>
          <b-dropdown-item href="#">ENG</b-dropdown-item>
          <b-dropdown-item href="#">ITA</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
</div>
</template>


<script>
export default {
  name: "Navbar",  
};

</script>

<style scoped>

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.stil{
  background-color:#044ca4 !important;
}

hr {
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color: black;
  height: 1px;
}
</style>
