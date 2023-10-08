export const useModalStore = definePiniaStore("modal-store", {
  state: () => ({
    imageLink: "",
  }),
  getters: {
    getLink: (state) => state.imageLink,
  },
  actions: {
    setLink(link: string) {
      this.imageLink = link;
    },
  },
});
