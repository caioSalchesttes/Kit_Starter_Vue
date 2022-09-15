<template>
     <div class="vertical-menu">
      <div data-simplebar class="h-100">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
          <!-- Left Menu Start -->
          <ul class="metismenu list-unstyled" id="side-menu">
            <li class="menu-title">Menu</li>

            <li>
              <a href="index.html" class="waves-effect">
                <i class="mdi mdi-view-dashboard"></i>
                <span class="badge rounded-pill bg-primary float-end">2</span>
                <span>Dashboard</span>
              </a>
            </li>

            <li>
              <a data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true" class="has-arrow waves-effect">
                <i class="mdi mdi-email-outline"></i>
                <span>Email</span>
              </a>
              <div class="collapse" id="home-collapse">
                <ul class="sub-menu" aria-expanded="false">
                <li><a href="email-inbox.html">Inbox</a></li>
                <li><a href="email-read.html">Email Read</a></li>
                <li><a href="email-compose.html">Email Compose</a></li>
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