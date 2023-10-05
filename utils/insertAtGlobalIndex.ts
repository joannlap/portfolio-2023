import { Ref } from "vue";
const insertAtGlobalIndex = (
  layoutArray: Ref<string[]>,
  newItem: string,
  targetIndex: number
) => {
  let currentIndex = 0;
  for (let i = 0; i < layoutArray.value.length; i++) {
    const row = layoutArray.value[i].trim().split(" ").length;

    if (currentIndex + row > targetIndex) {
      // Find the exact position within the row to insert
      const positionInRow = targetIndex - currentIndex;

      // Extract the items in the row and insert the new item
      const rowItems = layoutArray.value[i].trim().split(" ");
      rowItems.splice(positionInRow, 0, newItem);

      // Update the row string
      layoutArray.value[i] = rowItems.join(" ");

      // Break out of loop since the item has been inserted
      break;
    }

    currentIndex += row;
  }
};
export default insertAtGlobalIndex;
