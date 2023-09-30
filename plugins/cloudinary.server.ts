import { v2 as cloudinary } from "cloudinary";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { public: config } = useRuntimeConfig();
  console.log("Config", config);
  cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME as string,
    api_key: config.CLOUDINARY_API_KEY as string, // Store in .env.local
    api_secret: config.CLOUDINARY_API_SECRET as string, // Store in .env.local
    secure: true,
  });
  const result = await cloudinary.uploader.upload("/path/to/image");
});
