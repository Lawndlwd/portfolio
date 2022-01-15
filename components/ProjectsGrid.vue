<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center">
      <p
        class="
          text-2xl
          sm:text-5xl
          font-semibold
          mb-3
          text-primary-dark
          dark:text-ternary-light
        "
      >
        {{ projectsHeading }}
      </p>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <!-- <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p> -->
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 mt-16 sm:gap-10">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="
          rounded-xl
          border-2 border-black
          py-5
          px-10
          hover:shadow-xl
          grid grid-cols-1
          lg:grid-cols-2
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-primary-dark
          gap-4
        "
        aria-label="Single Project"
      >
        <div>
          <img
            :src="project.img"
            :alt="project.title"
            class="rounded-xl border-none object-covers mx-auto"
          />
          <div class="flex justify-center items-center">
            <a
              :href="project.url"
              class="
                mx-auto
                flex
                justify-center
                items-center
                w-36
                sm:w-48
                mt-12
                mb-6
                sm:mb-0
                text-lg
                border border-purple-200
                dark:border-primary-dark
                py-2.5
                sm:py-3
                shadow-lg
                rounded-lg
                bg-purple-200
                focus:ring-1 focus:ring-purple-900
                hover:bg-purple-700
                text-gray-500
                hover:text-white
              "
              target="_blank"
            >
              <span class="text-sm sm:text-lg">Live demo</span></a
            >
            <a
              :href="project.github || '#'"
              class="
                mx-auto
                flex
                justify-center
                items-center
                w-36
                sm:w-48
                mt-12
                mb-6
                sm:mb-0
                text-lg
                border-2 border-purple-800
                dark:border-primary-dark
                py-2.5
                sm:py-3
                shadow-lg
                rounded-lg
                focus:ring-1 focus:ring-purple-900
                hover:bg-purple-700
                text-gray-500
                hover:text-white
              "
              target="_blank"
            >
              <span class="text-sm sm:text-lg">{{
                project.github ? "Github repo" : "Private repo"
              }}</span></a
            >
          </div>
        </div>
        <div class="px-4 py-6">
          <p
            class="
              text-purple-800 text-xl
              font-bold
              bg-purple-100
              px-4
              mb-6
              py-5
            "
          >
            {{ project.title }}
          </p>
          <p class="text-lg text-purple-800 mb-5">{{ project.category }}</p>
          <p
            v-for="projectDetail in project.projectDetails"
            :key="projectDetail.id"
            class="mb-5 text-lg text-primary-dark dark:text-ternary-light pl-5"
          >
            {{ projectDetail.details }}
          </p>
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                bg-purple-100
                px-4
                mb-6
                py-5
                text-purple-800
              "
            >
              {{ project.techTitle }}
            </p>
            <span
              v-for="tool in project.technologies"
              class="
                bg-purple-100
                px-2
                py-1
                rounded-lg
                mx-3
                leading-loose
                text-purple-800
              "
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import feather from "feather-icons";

export default {
  data: () => {
    return {
      selectedProject: "",
      searchProject: "",
    };
  },
  computed: {
    ...mapState(["projectsHeading", "projectsDescription", "projects"]),
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
    computed: {
      project() {
        return this.$store.getters.getProjectById(this.$route.params.id);
      },
    },
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(this.selectedProject);
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style lang="scss" scoped></style>
