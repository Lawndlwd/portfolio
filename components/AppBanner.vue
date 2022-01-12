<template>
  <section class="text-left mt-48 w-8/1">
    <!-- Banner left contents -->
    <h1
      class="
        mx-auto
        text-3xl
        md:text-4xl
        xl:text-5xl
        text-center text-ternary-dark
        dark:text-primary-light
      "
    >
      <span class="font-mono leading-relaxed"> Hi, I'm </span>
      <p class="font-extrabold mt-5 text-4xl md:text-5xl xl:text-7xl">
        Levende Mohammad
      </p>
    </h1>
    <p
      class="
        mt-4
        text-2xl text-center
        font-semibold
        leading-none
        text-purple-700
        font-mono
      "
    >
      Full Stack JavaScript 🤖. React, Vue, TypeScript, Node.
    </p>
    <div class="flex justify-center items-center sm:block">
      <a
        href="/Levende-CV.pdf"
        download=""
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
          border border-indigo-200
          dark:border-ternary-dark
          py-2.5
          sm:py-3
          shadow-lg
          rounded-lg
          bg-purple-200
          focus:ring-1 focus:ring-indigo-900
          hover:bg-indigo-500
          text-gray-500
          hover:text-white
        "
        aria-label="Download Resume"
      >
        <i
          data-feather="arrow-down-circle"
          class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"
        ></i>
        <span class="text-sm sm:text-lg">Download CV</span></a
      >
    </div>

    <!-- Banner right illustration -->
    <!-- <div class="w-full md:w-2/3 text-right float-right mt-4 sm:mt-0">
      <img
        src="https://i.ibb.co/pnQhHMV/IMG-2298-removebg-preview.png"
        alt="IMG-2298-removebg-preview"
        border="0"
      />
    </div> -->
  </section>
</template>

<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
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
