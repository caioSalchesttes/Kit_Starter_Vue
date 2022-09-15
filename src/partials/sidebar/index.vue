<template>
  <div class="vertical-menu">
    <div data-simplebar class="h-100">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>

          <li class="mmenu">
            <router-link :to="{name: 'home'}" activeClass="active" class="waves-effect">
              <i class="mdi mdi-view-dashboard"></i>
              <span>Dashboard</span>
            </router-link>
          </li>

          <li>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
              class="has-arrow waves-effect"
            >
              <i class="mdi mdi-email-outline"></i>
              <span>Email</span>
            </a>
            <div class="collapse" id="home-collapse">
              <ul class="sub-menu" aria-expanded="false">
                <li>
                  <router-link to="/">Inbox</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>

<script setup>
</script>

<style>
  body[data-sidebar=dark] .mmenu .active {
    color: #fff!important;
    background-color: #263442;
}
</style>