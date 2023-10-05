import { v2 as cloudinary } from "cloudinary";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { public: config } = useRuntimeConfig();

  // Configure cloudinary
  cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME as string,
    api_key: config.CLOUDINARY_API_KEY as string,
    api_secret: config.CLOUDINARY_API_SECRET as string,
    secure: true,
  });

  // const signature = cloudinary.utils.api_sign_request(
  //   body.paramsToSign,
  //   config.CLOUDINARY_API_SECRET
  // );

  // // Just for demonstration; you'd probably want to upload somewhere else in your app
  // try {
  //   const result = await cloudinary.uploader.upload("/path/to/image");
  //   console.log("Upload Result:", result);
  // } catch (error) {
  //   console.error("Cloudinary Upload Error:", error);
  // }
});
