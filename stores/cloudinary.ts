import { Cloudinary } from "@cloudinary/url-gen";

export const useCloudinaryStore = definePiniaStore("cloudinary-store", {
  state: (): {} => ({}),
  getters: {},
  actions: {
    async fetchWorks() {},
  },
});
