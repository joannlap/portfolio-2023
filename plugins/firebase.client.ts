import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const { public: config } = useRuntimeConfig();
  console.log("Config", config);
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID,
    measurementId: config.FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
  const projectsData = [
    {
      id: 1,
      title:
        "Coke Studio presents: 50 years hiphop tribute powered by Foundation",
      headerImage: "/work/project-thumbnails/LL-tribute.webp",
      headerImageAlt: "Lowlands tribute afbeelding",
      client: "Foundation Amsterdam Hiphop Academy",
      date: "July 2023",
      tags: ["Motion Design"],
      description:
        "August 2023 marks the 50th anniversary of Hiphop, a genre known for its rich cultural history in music. To celebrate this milestone, Coke Studio is presenting a special tribute show titled '50 Years of Hiphop' in collaboration with Lowlands and Foundation Amsterdam Hiphop Academy. \n\n As part of the tribute show, an introductory video showcases a short timeline highlighting the pioneers who have had a significant impact on Hiphop music. This video is a compilation of interviews, music clips, and dynamic text motion.",
      images: [
        {
          webm: "/work/LL-tribute/Lowlands-50yrs-hiphop-intro_3.webm",
          cover: "/work/LL-tribute/LL-tribute.webp",
          mp4: "/work/LL-tribute/Lowlands-50yrs-hiphop-intro_3.mp4",
        },
        "/work/LL-tribute/73broke.webp",
        "/work/LL-tribute/electrifying.webp",
        "/work/LL-tribute/koolherc.webp",
        "/work/LL-tribute/LL-1.webp",
      ],
      imageGridSize: [1, 1],
      gridLayout: "100%",
      mobileLayout: "1fr / 1fr / 1fr / 1fr",
      desktopLayout: "1fr / 1fr / 1fr / 1fr",
    },
    {
      id: 2,
      title: "Foundation Bootcamp 2023",
      headerImage: "/work/project-thumbnails/FD-Bootcamp.webp",
      headerImageAlt: "Foundation Bootcamp afbeelding",
      client: "Foundation Amsterdam Hiphop Academy",
      date: "March-July 2023",
      tags: ["Graphic design", "Motion design", "3D"],
      description:
        "Foundation Bootcamp can be summarized as a journey of hard work, growth, challenges, physical and mental exertion and knowledge. Every summer, Foundation Hiphop Academy organizes a 3-week intensive bootcamp that allows dancers to immerse themselves in the elements of street and club culture. The bootcamp offers over 60 workshops in various street styles, as well as lectures, parties and an evaluation program known as the Hawks Method. \n\n The visual language of Foundation Bootcamp is influenced by street and pop art. My inspiration for the design came from hiphop and street magazines, graffiti art, and movie posters. The overall approach aimed to capture the essence of a cityscape, combining elements like an assembly of Avengers.",
      images: [
        "/work/FD-Bootcamp/FD-BOOTCAMP2023-FEED.webp",
        "/work/FD-Bootcamp/gifbootcamps.gif",
        "/work/FD-Bootcamp/arjun.webp",
        "/work/FD-Bootcamp/frankwa.webp",
        "/work/FD-Bootcamp/jimmyyudat.webp",
        "/work/FD-Bootcamp/josephgo.webp",
        "/work/FD-Bootcamp/mamson.webp",
        "/work/FD-Bootcamp/nedda.webp",
        "/work/FD-Bootcamp/suzume.webp",
        "/work/FD-Bootcamp/willow.webp",
        "/work/FD-Bootcamp/yugson.webp",
        {
          webm: "/work/FD-Bootcamp/btcmp-promo.webm",
          cover: "/work/FD-Bootcamp/btcmp-promo.webp",
          mp4: "/work/FD-Bootcamp/btcmp-promo.mp4",
        },
        {
          webm: "/work/FD-Bootcamp/btcmp-teaser_3.webm",
          cover: "/work/FD-Bootcamp/btcmp-teaser.webp",
          mp4: "/work/FD-Bootcamp/btcmp-teaser_3.mp4",
        },
        "/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W1.webp",
        "/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W2.webp",
        "/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W3.webp",
      ],
      mobileLayout:
        "1fr / 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr /  1fr / 1fr / 1fr",
      desktopLayout:
        "1.2fr 0.8fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr",
    },
    {
      id: 3,
      title: "Nightowls x Kwaku Festival",
      headerImage: "/work/project-thumbnails/Nightowls.webp",
      headerImageAlt: "NightOwls x Kwaku illustratie",
      client: "Foundation Amsterdam Hiphop Academy",
      date: "July 2023",
      tags: ["Graphic design"],
      description:
        "NightOwls Amsterdam presents an event in collaboration with the multicultural festival Kwaku at Nelson Mandelapark. The event will feature Afrotech, House Music, Deep House, and Techno sounds. \n\n The approach for this collaboration was to create a visually strong illustration that captures the essence of the event and its vibrant atmosphere by using a selected color palette that complements the event.",
      images: [
        "/work/nightowls/kwaku-2023-poster.webp",
        "/work/nightowls/kwaku-0508-story.webp",
        "/work/nightowls/Nightowls_Kwaku-3.webp",
        "/work/nightowls/Nightowls_Kwaku-v3.webp",
      ],
      imageGridSize: [1, 2],
      mobileLayout: "1fr / 1fr / 1fr / 1fr",
      desktopLayout: "64% 36% / 41.4% 58.6%",
    },
    {
      id: 4,
      title: "Yeye: African Diasporic music",
      headerImage: "/work/project-thumbnails/YEYE.webp",
      headerImageAlt: "Yeye illustratie",
      client: "Yeye",
      date: "April-June 2023",
      tags: ["Motion design"],
      description:
        "Yeye is an event that brings together the diverse sounds of African diasporic music, good vibes and a celebration of culture. It’s a gathering where people can immerse themselves in the rhythms and melodies that have emerged from the African diaspora, while enjoying delicious food. \n\n For the first event, a looped video backdrop will showcase different music clips with animations featuring Adrinka symbols.",
      images: [
        {
          webm: "/work/yeye/landscape.webm",
          cover: "/work/yeye/yeye-logo.webp",
          mp4: "/work/yeye/landscape.mp4",
        },
        "/work/yeye/yeye-pattern1.webp",
        "/work/yeye/yeye-pattern2.webp",
        "/work/yeye/yeye-pattern3.webp",
      ],
      imageGridSize: [1, 1],
      mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr",
      desktopLayout: "1fr / 1fr / 1fr / 1fr / 1fr",
    },
    {
      id: 5,
      title: "Foundation x OBA: Hiphop is Erfgoed",
      headerImage: "/work/project-thumbnails/HHisErfgoed.webp",
      headerImageAlt: "Hiphop is Erfgoed afbeelding",
      client: "Foundation Hiphop Academy",
      date: "February - July 2023",
      tags: ["Graphic design"],
      description:
        "The Foundation Hiphop Academy, in collaboration with the Public Library of Amsterdam, presents 'Hiphop is Heritage' or 'Hiphop is erfgoed'. This program includes lectures and debates that explore the theme of why Hiphop is considered heritage.",
      images: [
        "/work/HHisErfgoed/fd-lecture-poster.webp",
        "/work/HHisErfgoed/HHerfgoed-sugacane-feed.webp",
        "/work/HHisErfgoed/HHerfgoed-ArjunChadha-feed.webp",
        "/work/HHisErfgoed/debat-juni-geel-feed.webp",
        "/work/HHisErfgoed/debat-juni-geel-story.webp",
        "/work/HHisErfgoed/debat-poster-maart-feed.webp",
        "/work/HHisErfgoed/debat-poster-maart-story.webp",
        "/work/HHisErfgoed/lecture29JULY-04.webp",
      ],
      imageGridSize: [1, 2],
      mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr",
      desktopLayout: "1fr / 1fr 1fr / 1.3fr .7fr / 1.3fr .7fr / .7fr .7fr",
    },
    {
      id: 6,
      title: "Foundation Hiphop Academy",
      headerImage: "/work/project-thumbnails/Foundation-last.webp",
      headerImageAlt: "Foundation Hiphop Academy afbeelding",
      client: "Foundation Hiphop Academy",
      date: "January 2023 - ongoing",
      tags: ["Graphic design"],
      description:
        "Foundation Hiphop Academy, located in the South-East of Amsterdam, is a Hiphop Academy that provides knowledge and development in various street styles within the street culture. This enables dancers to explore, build, and develop their skills in the art form. 'For self-elevation, you need foundation' (Foundation, 2020). \n\n These posters showcase the classes that take place at Foundation, as well as past classes and events.",
      images: [
        "/work/foundation/HH-KELLY-NEW.webp",
        "/work/foundation/HH-MOSEY-NEW-story.webp",
        "/work/foundation/House-Jasmin-story.webp",
        "/work/foundation/House-John-NEW.webp",
        "/work/foundation/House-Nene-story-min.webp",
        "/work/foundation/kidsclass-afroteen-story-min.webp",
        "/work/foundation/kidsclass-ballet2-story-min.webp",
        "/work/foundation/fd-ketikoti-story.webp",
        "/work/foundation/foundation-jam-poster-story.webp",
        "/work/foundation/Instastory-dj-chainsaw-adv.webp",
        "/work/foundation/Instastory-dj-luckyjones-1.webp",
        "/work/foundation/Instastory-HH-kelly.webp",
        "/work/foundation/Instastory-HH-Mosey.webp",
        "/work/foundation/Instastory-house-miguel.webp",
        "/work/foundation/Instastory-house-nedda.webp",
        "/work/foundation/kidsclass-afro-story.webp",
        "/work/foundation/story-house-amisha-THUR.webp",
        "/work/foundation/story-house-kelly.webp",
      ],
      imageGridSize: [2, 3],
      mobileLayout:
        "1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr",
      desktopLayout:
        "1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr",
    },
    // Add as many projects as you like
  ];

  // Function to add project data to Firestore
  async function addProjects() {
    for (const projectData of projectsData) {
      console.log("Data: ", projectData.id.toString());
      try {
        if (!projectData || !projectData.id.toString()) return;
        const docRef = await setDoc(
          doc(firestore, "work", projectData.id.toString()),
          projectData
        );

        console.log(`Document written with ID: ${docRef.id}`);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  // Execute the function
  // addProjects();
});
