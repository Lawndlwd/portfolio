<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-7
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <img
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-purple-800
                bg-purple-100
                px-4
                mb-6
                py-5
              "
            >
              {{ project.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li
                v-for="info in project.companyInfos"
                :key="info.id"
                class="text-ternary-dark dark:text-ternary-light"
              >
                <span>{{ info.title }}: </span>
                <a
                  href="#"
                  :class="
                    info.title == 'Website' || info.title == 'Phone'
                      ? 'hover:underline cursor-pointer'
                      : ''
                  "
                  aria-label="Project Webiste and Phone"
                  >{{ info.details }}</a
                >
              </li>
            </ul>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-purple-800
                bg-purple-100
                px-4
                mb-6
                py-5
              "
            >
              {{ project.objectivesTitle }}
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ project.objectivesDetails }}
            </p>
          </div>

          <!-- Single project technologies -->
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

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
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
            {{ project.detailsTitle }}
          </p>
          <p
            v-for="projectDetail in project.projectDetails"
            :key="projectDetail.id"
            class="mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {{ projectDetail.details }}
          </p>
        </div>
      </div>
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  scrollToTop: true,
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style lang="scss" scoped></style>
