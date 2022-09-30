import { useStorage } from '@vueuse/core'
import { defineStore } from "pinia";
import { guest } from "@/services/api";
import router from "@/router";
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import { useLoading } from "vue-loading-overlay";
const $loading = useLoading();


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        name: useStorage('name', ''),
        email: useStorage('email', ''),
        token: useStorage('token', ''),
        avatar: useStorage('avatar', ''),
    }),

    getters: {
        getData: (state) => state,
    },

    actions: {
        logout() {
            this.$patch({
                name: '',
                email: '',
                token: '',
                avatar: '',
            })

            router.push({ name: 'login' })
        },

        async login(form, ref) {

            const loader = $loading.show({
                container: ref.value,
                color: "#2b3a4a",
                backgroundColor: "#fff",
                opacity: 0.9,
            });


            const userData = await guest.post('/login', {
                telefone: '1199999999',
                password: 'password',
            }).then((response) => {
                return response.data;
            }).catch((error) => {
                loader.hide();


            });

            this.$patch({
                token: userData.access_token,
            })

            router.push({ name: 'home' })
        },
    },
})
