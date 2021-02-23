<template>
  <div>
    <section class="flex-column presentation">
      <div class="flex-row flex-between" style="width: 50vw; height: 100vh">
        <BaseParagraph visual-type="dark"
          >Welcome to my portfolio. I'm a fullstack developer from France. with
          a strong backend background.</BaseParagraph
        >
      </div>
    </section>

    <section
      class="flex-column"
      style="background-color: rgba(254, 226, 226, 1)"
    >
      <BaseHeader html-type="h2">Working with me is</BaseHeader>
      <div class="flex-row flex-around" style="width: 70vw">
        <BaseCardIndex
          v-for="(card, index) of aboutMeCards"
          :key="index"
          :card-content="card"
        />
      </div>
    </section>
    <section class="flex-column" style="width: 100%">
      <BaseHeader html-type="h2">The tech I used</BaseHeader>
      <div class="flex-column" style="width: 100%">
        <div class="flex-row flex-around" style="width: 100%">
          <img
            src="~/assets/img/logo/symfony.png"
            alt="symfony-logo"
            width="128px"
          />
          <BaseParagraph>Coucou</BaseParagraph>
        </div>
        <div class="flex-row flex-around" style="width: 100%">
          <BaseParagraph>Coucou</BaseParagraph>
          <img
            src="~/assets/img/logo/api-platform.png"
            alt="api-platform-logo"
            width="128px"
          />
        </div>
        <div class="flex-row flex-around" style="width: 100%">
          <img
            src="~/assets/img/logo/nuxtjs.png"
            alt="nuxtjs-logo"
            width="128px"
          />
          <BaseParagraph>Coucou</BaseParagraph>
        </div>
        <div class="flex-row flex-around" style="width: 100%">
          <BaseParagraph>Coucou</BaseParagraph>
          <img
            src="~/assets/img/logo/docker.png"
            alt="docker-logo"
            width="128px"
          />
        </div>
        <div class="flex-row flex-around" style="width: 100%">
          <img
            src="~/assets/img/logo/firebase.png"
            alt="firebase-logo"
            width="128px"
          />
          <BaseParagraph>Coucou</BaseParagraph>
        </div>
        <div class="flex-row flex-around" style="width: 100%">
          <BaseParagraph>Coucou</BaseParagraph>
          <img
            src="~/assets/img/logo/graphql.png"
            alt="grapqhl-logo"
            width="128px"
          />
        </div>
      </div>
    </section>
    <section
      class="flex-column"
      style="background-color: rgba(253, 230, 138, 1)"
    >
      <BaseHeader html-type="h2">I worked with</BaseHeader>
      <div class="flex-row flex-around" style="width: 100%">
        <BaseCardIndex
          v-for="(card, index) of workCards"
          :key="index"
          :card-content="card"
        />
      </div>
    </section>
    <section class="flex-column">
      <BaseHeader html-type="h2">Some personal projects</BaseHeader>
      <div class="flex-column" style="height: 100vh; width: 100%">
        <div class="flex-row flex-between" style="height: 100%; width: 100%">
          <div class="philarmony flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Philarmony</BaseParagraph
            >
          </div>
          <div class="atomnuxt flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Atomnuxt</BaseParagraph
            >
          </div>
        </div>
        <div class="flex-row flex-between" style="height: 100%; width: 100%">
          <div class="letsjam flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Letsjam</BaseParagraph
            >
          </div>
          <div class="atomnuxt flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Atomnuxt</BaseParagraph
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseParagraph from '@/components/Atoms/Typography/Paragraph/BaseParagraph'
import BaseHeader from '@/components/Atoms/Typography/Header/BaseHeader'
import BaseCardIndex from '~/components/Molecules/Cards/Cardsindex/BaseCardIndex.vue'
import CardIndexModele from '~/components/Molecules/Cards/Cardsindex/CardIndexModele'

export default defineComponent({
  name: 'IndexPage',
  components: {
    BaseParagraph,
    BaseHeader,
    BaseCardIndex,
  },
  setup() {
    const futureCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/startup.svg'),
      'future-card',
      'Future proofed',
      'I always code with the future in mind. To make maintenance easier.'
    )

    const testCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/exam.svg'),
      'test-card',
      'Resilient',
      'Test, test and test again ! Every line of code, there is a test for it.'
    )

    const knowledgeCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/knowledge.svg'),
      'knowledge-card',
      'Instructive',
      'I love to share with others what I know, and crave for others to teach me.'
    )

    const funCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/confetti.svg'),
      'fun-card',
      'Fun',
      "Oh this new tech has a funny name and we could experiment with it. Let's try it !"
    )

    const aboutMeCards: Array<CardIndexModele> = [
      futureCard,
      testCard,
      knowledgeCard,
      funCard,
    ]

    const everycheckCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/everycheck.png'),
      'everycheck-logo',
      '',
      'Everycheck is the leading background check company in France. I worked with them on their APIs and their front-end applications',
      '256px'
    )

    const blueCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/blue.png'),
      'blue-logo',
      '',
      "L'agence Blue is a 100% digital french real estate agency. I worked with them on their multiple websites.",
      '256px'
    )

    const workCards: Array<CardIndexModele> = [everycheckCard, blueCard]

    return {
      aboutMeCards,
      workCards,
    }
  },
})
</script>

<style>
section.presentation {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(assets/img/james-harrison-vpOeXr5wmR4-unsplash.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.philarmony {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(assets/img/philarmony.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.atomnuxt {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(assets/img/atomnuxt.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.letsjam {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(assets/img/letsjam.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.project-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
