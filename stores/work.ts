export const useWorkStore = definePiniaStore("work-store", {
  state: () => ({
    work: [
      {
        id: 3,
        title: "Avant Garde Battle",
        headerImage: "/images/work/project-thumbnails/avantgarde.webp",
        headerImageAlt: "Avant-Garde-Battle",
        client: "Avant Garde Collective",
        date: "February-April 2024",
        tags: ["Graphic design"],
        description:
          "A battle event organized by the Avant Garde Collective that took place at the city theater in Haarlem.  It features three categories, each with its unique rules and prize money. \n\n The visual language of the event is inspired by the Avant Garde collective's style, blending vintage aesthetics from the early 20th century. This approach reflects both historical influences and modern artistic expression.",
        images: [
          "/images/work/avantgarde/AvantGardeBattle-poster.webp",
          "/images/work/avantgarde/avg-battleguest-1.webp",
          "/images/work/avantgarde/avg-battleguest-2.webp",
          "/images/work/avantgarde/avg-dj.webp",
          "/images/work/avantgarde/avg-lucinda.webp",
          "/images/work/avantgarde/avg-price.webp",
        ],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr 1fr / 1fr 1fr / 1fr",
      },
      {
        id: 1,
        title:
          "Coke Studio presents: 50 years hiphop tribute powered by Foundation",
        headerImage: "/images/work/project-thumbnails/LL-tribute.webp",
        headerImageAlt: "Lowlands tribute afbeelding",
        client: "Coke studio / Foundation",
        date: "July 2023",
        tags: ["Motion Design"],
        description:
          "August 2023 marks the 50th anniversary of Hiphop, a genre known for its rich cultural history in music. To celebrate this milestone, Coke Studio is presenting a special tribute show titled '50 Years of Hiphop' in collaboration with Lowlands and Foundation Amsterdam Hiphop Academy. \n\n As part of the tribute show, an introductory video showcases a short timeline highlighting the pioneers who have had a significant impact on Hiphop music. This video is a compilation of interviews, music clips, and dynamic text motion.",
        images: [
          [
            "/images/work/LL-tribute/Lowlands-50yrs-hiphop-intro_3.webm",
            "/images/work/LL-tribute/LL-tribute.webp",
            "/images/work/LL-tribute/Lowlands-50yrs-hiphop-intro_3.mp4",
          ],
          "/images/work/LL-tribute/73broke.webp",
          "/images/work/LL-tribute/electrifying.webp",
          "/images/work/LL-tribute/koolherc.webp",
          "/images/work/LL-tribute/LL-1.webp",
        ],
        gridLayout: "100%",
        mobileLayout: "1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr / 1fr / 1fr",
      },
      {
        id: 2,
        title: "Foundation Bootcamp 2023",
        headerImage: "/images/work/project-thumbnails/FD-Bootcamp.webp",
        headerImageAlt: "Foundation Bootcamp afbeelding",
        client: "Foundation Amsterdam Hiphop Academy",
        date: "March-July 2023",
        tags: ["Graphic design", "Motion design", "3D"],
        description:
          "Foundation Bootcamp can be summarized as a journey of hard work, growth, challenges, physical and mental exertion and knowledge. Every summer, Foundation Hiphop Academy organizes a 3-week intensive bootcamp that allows dancers to immerse themselves in the elements of street and club culture. The bootcamp offers over 60 workshops in various street styles, as well as lectures, parties and an evaluation program known as the Hawks Method. \n\n The visual language of Foundation Bootcamp is influenced by street and pop art. My inspiration for the design came from hiphop and street magazines, graffiti art, and movie posters. The overall approach aimed to capture the essence of a cityscape, combining elements like an assembly of Avengers.",
        images: [
          "/images/work/FD-Bootcamp/FD-BOOTCAMP2023-FEED.webp",
          "/images/work/FD-Bootcamp/gifbootcamps.gif",
          "/images/work/FD-Bootcamp/arjun.webp",
          "/images/work/FD-Bootcamp/frankwa.webp",
          "/images/work/FD-Bootcamp/jimmyyudat.webp",
          "/images/work/FD-Bootcamp/josephgo.webp",
          "/images/work/FD-Bootcamp/mamson.webp",
          "/images/work/FD-Bootcamp/nedda.webp",
          "/images/work/FD-Bootcamp/suzume.webp",
          "/images/work/FD-Bootcamp/willow.webp",
          "/images/work/FD-Bootcamp/yugson.webp",
          [
            "/images/work/FD-Bootcamp/btcmp-promo.webm",
            "/images/work/FD-Bootcamp/btcmp-promo.webp",
            "/images/work/FD-Bootcamp/btcmp-promo.mp4",
          ],
          [
            "/images/work/FD-Bootcamp/btcmp-teaser_3.webm",
            "/images/work/FD-Bootcamp/btcmp-teaser.webp",
            "/images/work/FD-Bootcamp/btcmp-teaser_3.mp4",
          ],
          "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W1.webp",
          "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W2.webp",
          "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W3.webp",
        ],
        mobileLayout:
          "1fr / 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr /  1fr / 1fr / 1fr",
        desktopLayout:
          "1.2fr 0.8fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr",
      },
      {
        id: 4,
        title: "Yeye: African Diasporic music",
        headerImage: "/images/work/project-thumbnails/YEYE.webp",
        headerImageAlt: "Yeye illustratie",
        client: "Yeye",
        date: "April-June 2023",
        tags: ["Motion design"],
        description:
          "Yeye is an event that brings together the diverse sounds of African diasporic music, good vibes and a celebration of culture. It’s a gathering where people can immerse themselves in the rhythms and melodies that have emerged from the African diaspora, while enjoying delicious food. \n\n For the first event, a looped video backdrop will showcase different music clips with animations featuring Adrinka symbols.",
        images: [
          [
            "/images/work/yeye/landscape.webm",
            "/images/work/yeye/yeye-logo.webp",
            "/images/work/yeye/landscape.mp4",
          ],
          "/images/work/yeye/yeye-logo.webp",
          "/images/work/yeye/yeye-pattern1.webp",
          "/images/work/yeye/yeye-pattern2.webp",
          "/images/work/yeye/yeye-pattern3.webp",
        ],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr / 1fr / 1fr / 1fr",
      },
      {
        id: 5,
        title: "Hiphop is Erfgoed",
        headerImage: "/images/work/project-thumbnails/hh-iserfgoed 1.webp",
        headerImageAlt: "Hiphop is Erfgoed afbeelding",
        client: "Foundation Hiphop Academy",
        date: "February - July 2023",
        tags: ["Graphic design"],
        description:
          "The Foundation Hiphop Academy, in collaboration with the Public Library of Amsterdam, presents 'Hiphop is Heritage' or 'Hiphop is erfgoed'. This program includes lectures and debates that explore the theme of why Hiphop is considered heritage.",
        images: [
          "/images/work/HHisErfgoed/debat-juni-geel-story.webp",
          "/images/work/HHisErfgoed/lecture29JULY-04.webp",
          "/images/work/HHisErfgoed/debat-ade-story.webp",
           "/images/work/HHisErfgoed/HHisErfgoed-feb1724-story.webp"
        ],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr",
        desktopLayout: " .7fr .7fr / .7fr .7fr / .7fr .7fr",
      },
      {
        id: 6,
        title: "Foundation Hiphop Academy",
        headerImage: "/images/work/project-thumbnails/Foundation-last.webp",
        headerImageAlt: "Foundation Hiphop Academy afbeelding",
        client: "Foundation Hiphop Academy",
        date: "January 2023 - ongoing",
        tags: ["Graphic design"],
        description:
          "Foundation Hiphop Academy, located in the South-East of Amsterdam, is a Hiphop Academy that provides knowledge and development in various street styles within the street culture. This enables dancers to explore, build, and develop their skills in the art form. 'For self-elevation, you need foundation' (Foundation, 2020). \n\n These posters showcase the classes that take place at Foundation, as well as past classes and events.",
        images: [
          "/images/work/foundation/House-Jasmin-Story.jpg",
          "/images/work/foundation/House-Miguel-Story.jpg",
          "/images/work/foundation/House-John-Story.jpg",
          "/images/work/foundation/HH-Kelly-story.jpg",
          "/images/work/foundation/HH-Karel-story.jpg",
          "/images/work/foundation/HH-Mosey-story.jpg",
          "/images/work/foundation/Youth-Lara-story.jpg",
          "/images/work/foundation/Youth-DiAnnah-story.jpg",
          "/images/work/foundation/Youth-Danimé-story.jpg",
          "/images/work/foundation/Dj-lucky-story.jpg",
          "/images/work/foundation/DJ-Shug-story.jpg",
          "/images/work/foundation/Turn-chainsaw-story.jpg",
        ],
        mobileLayout:
          "1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr",
        desktopLayout:
          "1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr",
      },
    ],
  }),
  getters: {
    getWork: (state) => state.work,
    getWorkItem: (state) => (title: string) =>
      state.work.find(
        (workItem) => workItem.title.toLowerCase() === title.toLowerCase()
      ),
  },
  actions: {},
});
