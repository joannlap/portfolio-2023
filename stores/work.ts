import { getFirestore, collection, getDocs } from 'firebase/firestore'
interface WorkItem {
  id: string;
  // Include any other fields you have in the Firestore 'work' collection
  [key: string]: any;
}
export const useWorkStore = definePiniaStore("work-store", {
  state: (): {work: WorkItem[]} => ({
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
      const workCollection = collection(db, 'work');
      const workSnapshot = await getDocs(workCollection);
      const work = workSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      
      // Debugging log, can remove later
      console.log("Fetched work: ", work);
      
      this.work = work;
    },
  },
});
