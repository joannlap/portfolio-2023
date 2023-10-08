<template>
  <div class="uw">
    <!-- <button @click="openUploadModal(e)" id="upload_widget">Upload</button> -->
    <button
      @click="myWidget.open()"
      id="upload_widget"
      class="cloudinary-button"
    >
      Upload files
    </button>
  </div>
</template>

<script setup lang="ts">
// import { useCloudinaryStore } from "~/stores/cloudinary";

import { defineProps, onMounted } from "vue";
const { public: config } = useRuntimeConfig();
// // const cloudinaryStore = useCloudinaryStore();
// const openUploadModal = (e) => {
//   // e.preventDefault();
//   console.log("Hello", window);
//   window.cloudinary
//     .openUploadWidget(
//       {
//         cloud_name: config.cloudinary.cloudName,
//         upload_preset: config.CLOUDINARY_UPLOAD_PRESET,
//       },
//       (error, result) => {
//         if (!error && result && result.event === "success") {
//           console.log("Image uploaded..: ", result);
//         }
//       }
//     )
//     .open();
// };

const myWidget = await window.cloudinary.createUploadWidget(
  {
    cloudName: config.cloudinary.cloudName,
    uploadPreset: config.CLOUDINARY_UPLOAD_PRESET,
    multiple: false,
    // publicId: "special"
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    folder: "work/FD-Bootcamp", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      console.log(document.getElementById("upload_widget").value);
    } else if (error) {
      console.log(error);
    }
  }
);
// console.log(cloudinaryStore.uploadImage("test"));
</script>
