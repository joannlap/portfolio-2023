import { Ref } from "vue";

const getAtGlobalIndex = (
  layoutArray: string[],
  targetIndex: number
): string | null => {
  let currentIndex = 0;
  for (let i = 0; i < layoutArray.length; i++) {
    const row = layoutArray[i].trim().split(" ").length;

    if (currentIndex + row > targetIndex) {
      // Find the exact position within the row
      const positionInRow = targetIndex - currentIndex;

      // Extract the items in the row
      const rowItems = layoutArray[i].trim().split(" ");

      // Return the item at the specified position within the row
      return rowItems[positionInRow];
    }

    currentIndex += row;
  }

  // If the function hasn't returned by now, the targetIndex was out of bounds
  return null;
};

export default getAtGlobalIndex;
