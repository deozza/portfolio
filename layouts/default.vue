<template>
  <div>
    <HorizontalNavbar :links="menuLinks" logo="" theme="dark" />
    <section class="header flex-column">
      <BaseHeader html-type="h1" visual-type="light"
        >Hello, I'm Edenn Touitou</BaseHeader
      >
      <BaseParagraph visual-type="light"
                     class="sub-header"
        >A fullstack developper, amateur musician and much
        more...</BaseParagraph
      >
    </section>
    <div class="content">
      <Nuxt />
    </div>
    <BaseFooter
      theme="dark"
      copyright="letsjam"
      :links="menuLinks"
    ></BaseFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseLinkModele from '../components/Atoms/Link/BaseLinkModele'
import HorizontalNavbar from '~/components/Molecules/Menu/HorizontalNavbar.vue'
import BaseFooter from '~/components/Molecules/Footer/BaseFooter.vue'
import BaseHeader from '~/components/Atoms/Typography/Header/BaseHeader.vue'
import BaseParagraph from '~/components/Atoms/Typography/Paragraph/BaseParagraph.vue'

export default defineComponent({
  name: 'IndexLayoutVue',
  components: {
    HorizontalNavbar,
    BaseFooter,
    BaseHeader,
    BaseParagraph,
  },
  setup() {
    const homeLink: BaseLinkModele = new BaseLinkModele(['#'], 'Home', true, '')
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

    const menuLinks: Array<BaseLinkModele> = [
      homeLink,
      aboutLink,
      blogLink,
      contactLink,
    ]

    return {
      menuLinks,
    }
  },
})
</script>

<style scoped>
div div.content {
  min-height: calc(100vh - 72px);
}

div section.header {
  margin-top: 72px;
  height: 100vh;
  width: 100%;
  background-color: rgba(253, 230, 138, 1);
}

div section.header p.sub-header {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
