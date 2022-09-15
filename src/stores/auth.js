import { useStorage } from '@vueuse/core'
import { defineStore } from "pinia";
import { guest } from "@/services/api";

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
        },

        async login(form) {
            const userData = await guest.post('/login', {
                telefone: '65335705221',
                password: 'password',
            }).then((response) => {
                return response.data;
            });

            this.$patch({
                token: userData.access_token,
            })
        },
    },
})