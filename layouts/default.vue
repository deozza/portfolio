<template>
  <div>
    <!-- <HorizontalNavbar :links="menuLinks" logo="" theme="dark" /> -->
    <section class="header flex-column">
      <BaseHeader html-type="h1" visual-type="light"
        >Hello, I'm Edenn Touitou</BaseHeader
      >
      <BaseParagraph visual-type="light" class="sub-header"
        >A fullstack developper and much more...</BaseParagraph
      >
    </section>
    <div id="content" class="content">
      <Nuxt />
    </div>
    <BaseFooter
      theme="dark"
      copyright="Built with Nuxtjs, Atomnuxt and passion."
      :links="menuLinks"
    ></BaseFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseLinkModele from '../components/Atoms/Link/BaseLinkModele'
import BaseFooter from '~/components/Molecules/Footer/BaseFooter.vue'
import BaseHeader from '~/components/Atoms/Typography/Header/BaseHeader.vue'
import BaseParagraph from '~/components/Atoms/Typography/Paragraph/BaseParagraph.vue'
import BaseButton from '~/components/Atoms/Button/BaseButton.vue'

export default defineComponent({
  name: 'IndexLayoutVue',
  components: {
    BaseFooter,
    BaseHeader,
    BaseParagraph,
    BaseButton
  },
  setup() {
    /* const homeLink: BaseLinkModele = new BaseLinkModele(['#'], 'Home', true, '')
    const aboutLink: BaseLinkModele = new BaseLinkModele(
      ['#'],
      'About',
      true,
      ''
    )
    const blogLink: BaseLinkModele = new BaseLinkModele(
      ['#'],
      'Blog',
      true,
      ''
    )
    const contactLink: BaseLinkModele = new BaseLinkModele(
      ['#'],
      'Contact',
      true,
      ''
    )
*/
    const menuLinks: Array<BaseLinkModele> = [
      /* homeLink,
      aboutLink,
      blogLink,
      contactLink, */
    ]

    return {
      menuLinks,
    }
  },
})
</script>

<style scoped>
div div.content {
  min-height: 100vh;
}

div section.header {
  height: 100vh;
  width: 100%;
  background-color: var(--primary_bg);
}

div section.header p.sub-header {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
