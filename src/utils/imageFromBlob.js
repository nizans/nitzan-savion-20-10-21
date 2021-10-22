const parseImageToSrc = (img) => {
  if (img instanceof Blob) return URL.createObjectURL(img);
  return img;
};

export default parseImageToSrc;
