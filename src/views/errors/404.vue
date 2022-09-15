<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card overflow-hidden">
            <div class="card-body pt-0">
              <div class="ex-page-content text-center">
                <h1 class="text-dark">404!</h1>
                <h3 class="">Desculpe, página não encontrada</h3>
                <br />
                <router-link
                  to="/"
                  class="btn btn-info mb-4 waves-effect waves-light"
                >
                  Voltar ao painel</router-link
                >
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            © {{ new Date().getFullYear() }} Painel
            <span class="d-none d-sm-inline-block">
              - feito com <i class="mdi mdi-heart text-danger"></i> by
              COS.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>