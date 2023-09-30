import { ref } from 'vue';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const user = ref<User | null>(null);
const auth = getAuth();

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;
  } else {
    user.value = null;
  }
});

export const useAuth = () => {
  return { user };
};