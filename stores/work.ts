export const useWorkStore = definePiniaStore("work-store", {
  state: () => ({
    work: [
      {
        id: 1,
        title: "SMIB X TNO FEST '24",
        headerImage: "/images/work/project-thumbnails/tnofest.jpg",
        headerImageAlt: "Smibtno-fest-24",
        client: "The New Originals / Smib",
        date: "2024",
        tags: ["Marketing", "Print design"],
        description:
          "Branding and socials for this edition of Smib x TNO fest. Collaborators: Bram Romkes ",
        images: [
        ],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr 1fr / 1fr 1fr / 1fr",
      },
      {
        id: 2,
        title: "The New Originals",
        headerImage: "/images/work/project-thumbnails/tno.jpg",
        headerImageAlt: "The-New-Originals",
        client: "The New Originals",
        date: "2024",
        tags: ["Marketing","Product development", "Illustration"],
        description:
          "Collection of design work through various projects during my time at The New Originals. From top to bottom: New Balance Jersey Kit for the Basement Cup 2024. Slipmat design as part of TNO Love Themes pt.2 vinyl release. Posters for collaborative events with TNO. Collaborators: Bram Romkes, Wessel, Gabriel Polo and Jessey de Nijs",
          images: [
            "/images/work/tno/NB-jersey.jpg",
            "/images/work/tno/nb-jersey-mockup.jpg",
            "/images/work/tno/slipmat.jpg",
            "/images/work/tno/slipmat-store.jpg",
            "/images/work/tno/prophet.jpg",
            "/images/work/tno/dankie.jpg",
            "/images/work/tno/tno-pgltm-mainflyer.jpg",
            "/images/work/tno/tno-pgltm-lineup.jpg",
            "/images/work/tno/jahjah.jpg",
            "/images/work/tno/frediletti.jpg",
            
          ],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr/ 1fr",
        desktopLayout: "1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr",
      
      },    
      {
        id: 3,
        title: "Avant Garde Battle",
        headerImage: "/images/work/project-thumbnails/avantgarde.webp",
        headerImageAlt: "Avant-Garde-Battle",
        client: "Avant Garde Collective",
        date: "2024",
        tags: ["Graphic design", "Branding"],
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
        id: 4,
        title: "Foundation Hiphop Centre",
        headerImage: "/images/work/project-thumbnails/foundation.jpg",
        headerImageAlt: "Foundation Hiphop Centre afbeelding",
        client: "Foundation Hiphop Centre",
        date: "2023-2024",
        tags: ["Graphic design"],
        description:
          "Collection of posters for Foundation Hiphop Centre, located in South-East of Amsterdam. Cultural centre that provides knowledge and development in various street styles.",
        images: [
          "/images/work/foundation/FD-BC-CLUB-24.jpg",
          "/images/work/foundation/FD-btcmp-24.jpg",
          "/images/work/foundation/ade-talk-24.jpg",
          "/images/work/foundation/HHisErfgoed-IBE.jpg",
          "/images/work/foundation/dreamhampton.jpg",
          "/images/work/foundation/tdhw-battle.jpg",
          "/images/work/foundation/comecorrekt.jpg",
          "/images/work/foundation/FD-OpenDay.jpg",
          "/images/work/foundation/hh-mosey.jpg",
          "/images/work/foundation/house-jasmin.jpg",
        ],
        mobileLayout:
          "1fr / 1fr / 1fr / 1fr/ 1fr / 1fr/ 1fr / 1fr / 1fr / 1fr",
        desktopLayout:
          "1fr 1fr  / 1fr 1fr / 1fr 1fr / 1fr 1fr/ 1fr 1fr",
      },
      {
        id: 5,
        title:
          "Coke Studio presents: 50 years hiphop tribute powered by Foundation",
        headerImage: "/images/work/project-thumbnails/LL-tribute.webp",
        headerImageAlt: "Lowlands tribute afbeelding",
        client: "Coke studio / Foundation",
        date: "2023",
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
      // {
      //   id: 2,
      //   title: "Foundation Bootcamp 2023",
      //   headerImage: "/images/work/project-thumbnails/FD-Bootcamp.webp",
      //   headerImageAlt: "Foundation Bootcamp afbeelding",
      //   client: "Foundation Amsterdam Hiphop Academy",
      //   date: "2023",
      //   tags: ["Graphic design", "Motion design", "3D"],
      //   description:
      //     "Foundation Bootcamp can be summarized as a journey of hard work, growth, challenges, physical and mental exertion and knowledge. Every summer, Foundation Hiphop Academy organizes a 3-week intensive bootcamp that allows dancers to immerse themselves in the elements of street and club culture. The bootcamp offers over 60 workshops in various street styles, as well as lectures, parties and an evaluation program known as the Hawks Method. \n\n The visual language of Foundation Bootcamp is influenced by street and pop art. My inspiration for the design came from hiphop and street magazines, graffiti art, and movie posters. The overall approach aimed to capture the essence of a cityscape, combining elements like an assembly of Avengers.",
      //   images: [
      //     "/images/work/FD-Bootcamp/FD-BOOTCAMP2023-FEED.webp",
      //     "/images/work/FD-Bootcamp/gifbootcamps.gif",
      //     "/images/work/FD-Bootcamp/arjun.webp",
      //     "/images/work/FD-Bootcamp/frankwa.webp",
      //     "/images/work/FD-Bootcamp/jimmyyudat.webp",
      //     "/images/work/FD-Bootcamp/josephgo.webp",
      //     "/images/work/FD-Bootcamp/mamson.webp",
      //     "/images/work/FD-Bootcamp/nedda.webp",
      //     "/images/work/FD-Bootcamp/suzume.webp",
      //     "/images/work/FD-Bootcamp/willow.webp",
      //     "/images/work/FD-Bootcamp/yugson.webp",
      //     [
      //       "/images/work/FD-Bootcamp/btcmp-promo.webm",
      //       "/images/work/FD-Bootcamp/btcmp-promo.webp",
      //       "/images/work/FD-Bootcamp/btcmp-promo.mp4",
      //     ],
      //     [
      //       "/images/work/FD-Bootcamp/btcmp-teaser_3.webm",
      //       "/images/work/FD-Bootcamp/btcmp-teaser.webp",
      //       "/images/work/FD-Bootcamp/btcmp-teaser_3.mp4",
      //     ],
      //     "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W1.webp",
      //     "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W2.webp",
      //     "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W3.webp",
      //   ],
      //   mobileLayout:
      //     "1fr / 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr /  1fr / 1fr / 1fr",
      //   desktopLayout:
      //     "1.2fr 0.8fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr",
      // },
      {
        id: 6,
        title: "Yeye: African Diasporic music",
        headerImage: "/images/work/project-thumbnails/YEYE.webp",
        headerImageAlt: "Yeye illustratie",
        client: "Yeye",
        date: "2023",
        tags: ["Motion design", "3D Modelling"],
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
