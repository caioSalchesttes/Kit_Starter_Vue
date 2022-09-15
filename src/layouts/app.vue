<template>
  <div id="layout-wrapper">
    <Topbar />
    <Sidebar />
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <div class="page-title-box">
                <h4>Blank page</h4>
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">Lexa</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">Pages</a>
                  </li>
                  <li class="breadcrumb-item active">Blank page</li>
                </ol>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="state-information d-none d-sm-block">
                <div class="state-graph">
                  <div id="header-chart-1"></div>
                  <div class="info">Balance $ 2,317</div>
                </div>
                <div class="state-graph">
                  <div id="header-chart-2"></div>
                  <div class="info">Item Sold 1230</div>
                </div>
              </div>
            </div>
          </div>
          <slot />
        </div>
      </div>
     <FooterPartial />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/partials/sidebar/index.vue";
import Topbar from "@/partials/topbar/index.vue";
import FooterPartial from "@/partials/footer/index.vue";
</script>