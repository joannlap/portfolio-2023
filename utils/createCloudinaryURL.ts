export const createImageCloudinaryURL = (cld: any, item: string) => {
  return cld.image(item).format("auto").quality("auto").toURL();
};
export const createVideoCloudinaryURL = (cld: any, item: string) => {
  return cld.video(item).format("auto").quality("auto").toURL();
};
