import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
interface WorkItem {
  id: string;
  title: string;
  description: string;
  client: string;
  date: string;
  tags: string[];
  media: {
    webm?: string;
    mp4?: string;
    cover?: string;
    image: string;
  }[];
  mobileLayout: string;
  desktopLayout: string;
}

export const useWorkStore = definePiniaStore("work-store", {
  state: (): { work: WorkItem[] } => ({
    work: [],
  }),
  getters: {
    getWork: (state) => state.work,
    getWorkById: (state) => (id: number) => {
      return state.work.filter((item) => parseInt(item.id) === id);
    },
  },
  actions: {
    async fetchWorks() {
      const db = getFirestore();
      const workCollection = collection(db, "work");
      const workSnapshot = await getDocs(workCollection);
      const work = workSnapshot.docs.map((doc) => {
        const data = doc.data() as {
          title: string;
          description: string;
          client: string;
          date: string;
          tags: string[];
          media: any;
          mobileLayout: string;
          desktopLayout: string;
        };
        return { id: doc.id, ...data };
      }) as WorkItem[];

      this.work = work;
    },
    async saveWorkItem(
      itemId: string,
      newMedia: any,
      desktopLayout: string,
      mobileLayout: string
    ) {
      const db = getFirestore();

      // Find the item by its id
      const items = this.getWorkById(parseInt(itemId));

      // If items array is not empty, we take the first item.
      if (items.length > 0) {
        const item = items[0];
        // Replace the entire media array
        const newMediaArray = [
          // Your new array elements here.
          // You can use newMedia if that's what you want to set it to.
          ...newMedia,
        ];
        console.log(newMediaArray);

        // Update the document in Firestore
        const workDoc = doc(db, "work", itemId);
        await updateDoc(workDoc, {
          media: newMediaArray,
          desktopLayout: desktopLayout,
          mobileLayout: mobileLayout,
        });
      }
    },
  },
});
