// import { v2 as cloudinary } from "cloudinary";
export const useCloudinaryStore = definePiniaStore("cloudinary-store", {
  state: (): {} => ({}),
  getters: {},
  actions: {
    // async uploadImage(imagePath: string) {
    //   try {
    //     const result = await cloudinary.uploader.upload(imagePath, {
    //       upload_preset: config.CLOUDINARY_UPLOAD_PRESET,
    //     });
    //     console.log("Image uploaded: ", result);
    //     const fileName = result.public_id; // File name is in the 'public_id' field
    //     console.log("File name: ", fileName);
    //   } catch (error) {
    //     console.error("An error occurred: ", error);
    //   }
    // },
  },
});
