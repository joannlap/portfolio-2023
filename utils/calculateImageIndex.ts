const calculateImageIndex = (
  rows: string[][] | undefined,
  rowIndex: number,
  colIndex: number,
  images: any[] | undefined // Note: Use the correct type for images based on your application's needs
) => {
  if (!rows || !images) return -1;
  let imageIndex = 0;
  for (let r = 0; r < rows?.length; r++) {
    // Loop through each row
    for (let c = 0; c < rows[r]?.length; c++) {
      // Loop through each column in the current row
      if (r === rowIndex && c === colIndex) {
        // Found the target cell
        return imageIndex; // Return the calculated image index
      }
      imageIndex++; // Increment the image index
    }
  }
  return -1; // If we can't find it for some reason, return an error code (-1)
};
export default calculateImageIndex;
