import { Ref } from "vue";

const removeAtGlobalIndex = (
  layoutArray: Ref<string[]>,
  targetIndex: number
) => {
  let currentIndex = 0;
  for (let i = 0; i < layoutArray.value.length; i++) {
    const row = layoutArray.value[i].trim().split(" ").length;

    if (currentIndex + row > targetIndex) {
      // Find the exact position within the row to remove
      const positionInRow = targetIndex - currentIndex;

      // Extract the items in the row
      const rowItems = layoutArray.value[i].trim().split(" ");

      // Remove the item at the specified position within the row
      rowItems.splice(positionInRow, 1);

      // Check if the child array is empty now
      if (rowItems.length === 0) {
        // Remove the whole child array
        layoutArray.value.splice(i, 1);
      } else {
        // Update the row string
        layoutArray.value[i] = rowItems.join(" ");
      }

      // Break out of loop since the item has been removed
      break;
    }

    currentIndex += row;
  }
};

export default removeAtGlobalIndex;
