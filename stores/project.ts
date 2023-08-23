export const useProjectStore = definePiniaStore("project-store", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "project",
        color: "#00AADB",
        headerImage: "/images/projects/rinus/rinus-macbook.png",
        headerImageAlt: "Rinus on a Macbook",
      },
    ],
  }),
  getters: {
    getProjects: (state) => state.projects,
    getProject: (state) => (title: string) =>
      state.projects.find(
        (project) => project.title.toLowerCase() === title.toLowerCase()
      ),
  },
  actions: {},
});
