export const useUserStore = definePiniaStore("user-store", {
  state: () => ({
   user: {},
  }),
  getters: {},
  actions: {
    async setUser(user) {
      this.user = user;
    },
    async clearUser() {
      this.user = {};
    },
  },
});