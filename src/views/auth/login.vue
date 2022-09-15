<template>
  <div class="col-md-8 col-lg-6 col-xl-5">
    <div class="card overflow-hidden">
      <div class="card-body pt-0">
        <h3 class="text-center mt-5 mb-4">
          <a href="index.html" class="d-block auth-logo">
            <img
              src="@/assets/images/logo-dark.png"
              alt=""
              height="30"
              class="auth-logo-dark"
            />
            <img
              src="@/assets/images/logo-light.png"
              alt=""
              height="30"
              class="auth-logo-light"
            />
          </a>
        </h3>

        <div class="p-3">
          <h4 class="text-muted font-size-18 mb-1 text-center">
            Bem vindo de volta !
          </h4>
          <p class="text-muted text-center">
            Faça login para continuar para COS.
          </p>
          <form class="form-horizontal mt-4" @submit.prevent="logar">
            <div class="mb-3">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Digite o e-mail"
              />
            </div>
            <div class="mb-3">
              <label for="password">Senha</label>
              <input
                type="password"
                class="form-control"
                id="password"
                autocomplete="on"
                placeholder="Digite a senha"
              />
            </div>
            <div class="mb-3 row mt-4">
              <div class="col-6">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customControlInline"
                  />
                  <label class="form-check-label" for="customControlInline"
                    >Lembre de mim
                  </label>
                </div>
              </div>
              <div class="col-6 text-end">
                <button
                  class="btn btn-primary w-md waves-effect waves-light"
                  type="submit"
                >
                  Logar
                </button>
              </div>
            </div>
            <div class="form-group mb-0 row">
              <div class="col-12 mt-4">
                <a href="pages-recoverpw.html" class="text-muted"
                  ><i class="mdi mdi-lock"></i> Esqueceu sua senha?</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mt-5 text-center">
      <p>
        Não tem uma conta?
        <a href="pages-register.html" class="text-primary">
          Inscreva-se agora
        </a>
      </p>
      © 2022 Lexa
      <span class="d-none d-sm-inline-block">
        - Crafted with <i class="mdi mdi-heart text-danger"></i> by
        Themesbrand.</span
      >
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { reactive } from "vue";

const form = reactive({
  email: "65335705221",
  password: "password",
})

const logar = () => {
  useAuthStore().login(form);
}


</script>