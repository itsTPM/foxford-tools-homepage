<script setup>
import Button from "./components/ui/Button.vue";

const mainLinks = [
  {
    subtitle: "установить для",
    title: "Chrome",
    iconSrc: "/icons/chrome.svg",
    link: "https://chromewebstore.google.com/detail/foxford-tools/mmhgkmkmoepfpcakdkajpendcnjichhm",
  },
  {
    subtitle: "код на",
    title: "GitHub",
    iconSrc: "/icons/github.svg",
    link: "https://github.com/itsTPM/foxford-tools",
  },
];
</script>

<template>
  <main>
    <section
      class="xs:px-8 xs:py-12 xs:border border-white/5 flex flex-col items-center justify-center gap-4 xs:bg-white/[0.01] xs:shadow-[0px_0px_25px_0px_rgba(0,0,0,0.5)]"
    >
      <header class="flex flex-col items-center justify-center">
        <img
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          class="w-48 h-28 mb-4"
        />
        <h1 class="tracking-tight text-4xl">Foxford Tools</h1>
        <p class="text-white/50 text-sm">кастомизация сайта Фокса</p>
      </header>

      <!-- Main links -->
      <ul
        class="flex flex-col items-center justify-center w-full [&_li]:w-full gap-2"
      >
        <li v-for="link in mainLinks">
          <Button as="a" class="relative pr-24 overflow-clip" :href="link.link">
            <div class="flex flex-col justify-center">
              <span class="text-sm font-normal text-white/50">{{
                link.subtitle
              }}</span>
              <span class="text-[1.75rem]">{{ link.title }}</span>
            </div>

            <img
              :src="link.iconSrc"
              alt=""
              aria-hidden="true"
              class="absolute w-[5.25rem] h-fit -right-3 -bottom-3"
            />
          </Button>
        </li>
      </ul>
    </section>
  </main>
</template>
