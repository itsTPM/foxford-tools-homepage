<script setup>
import Link from './components/ui/Link.vue';

const mainLinks = [
  {
    subtitle: 'установить для',
    title: 'Chrome',
    iconSrc: '/icons/chrome.svg',
    link: 'https://chromewebstore.google.com/detail/foxford-tools/mmhgkmkmoepfpcakdkajpendcnjichhm',
  },
  {
    subtitle: 'код на',
    title: 'GitHub',
    iconSrc: '/icons/github.svg',
    link: 'https://github.com/itsTPM/foxford-tools',
  },
  {
    title: 'Справка',
    iconSrc: '/icons/docs.svg',
    link: 'https://foxwiki.itstpm.rocks',
  },
];
</script>

<template>
  <main>
    <section class="card">
      <header class="card-header">
        <img src="/icons/logo.svg" alt="" aria-hidden="true" class="logo" />
        <div>
          <h1 class="title">Foxford Tools</h1>
          <p class="subtitle">кастомизация сайта Фокса</p>
        </div>
      </header>

      <ul class="links">
        <li v-for="link in mainLinks">
          <Link :href="link.link" :title="link.title" :subtitle="link.subtitle" :icon-src="link.iconSrc" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 20rem) {
    padding: 3rem 2rem;
    border: 1px solid rgb(255 255 255 / 0.05);
    background-color: rgb(255 255 255 / 0.01);
    box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 0.5);
  }
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.logo {
  height: 6rem;
}

.title {
  font-size: 2.25rem;
  letter-spacing: -0.025em;
  font-weight: 500;
}

.subtitle {
  font-size: 0.875rem;
  color: rgb(255 255 255 / 0.5);
}

.links {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
}

.links li {
  width: 100%;
}
</style>
