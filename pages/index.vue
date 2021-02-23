<template>
  <div>
    <section class="flex-column presentation">
      <div class="flex-row flex-between" style="width: 50vw; height: 100vh">
        <BaseParagraph visual-type="dark" class="portfolio-description"
          >Welcome to my portfolio. I'm a fullstack developer from France. with
          a strong backend background. I am also a self-teached guitarist and
          bassist, gamer, pc builder. Let's dive into my world, shall we ?</BaseParagraph
        >
      </div>
    </section>

    <section
      class="flex-column"
      style="background-color: var(--secondary_bg)"
    >
      <BaseHeader html-type="h2">Working with me is</BaseHeader>
      <div class="flex-row flex-around" style="width: 70vw; height: 50vh">
        <BaseCardIndex
          v-for="(card, index) of aboutMeCards"
          :key="index"
          :card-content="card"
        />
      </div>
    </section>
    <section class="flex-column" style="width: 100%; height: 50vh">
      <BaseHeader html-type="h2">The tech I love</BaseHeader>
      <div class="flex-row" style="width: 100%">
        <img
          src="~/assets/img/logo/api-platform.png"
          alt="api-platform-logo"
          width="128px"
        />
        <img
          src="~/assets/img/logo/nuxtjs.png"
          alt="nuxtjs-logo"
          width="128px"
        />
        <img
          src="~/assets/img/logo/docker.png"
          alt="docker-logo"
          width="128px"
        />
        <img
          src="~/assets/img/logo/firebase.png"
          alt="firebase-logo"
          width="128px"
        />
        <img
          src="~/assets/img/logo/graphql.png"
          alt="grapqhl-logo"
          width="128px"
        />
      </div>
    </section>
    <section
      class="flex-column"
      style="background-color: var(--primary_bg)"
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
    <section class="flex-column" style="background-color: black">
      <BaseHeader html-type="h2" visual-type="dark">Some personal projects</BaseHeader>
      <div class="flex-column" style="height: 100vh; width: 100%">
        <div class="flex-row flex-between" style="height: 100%; width: 100%">
          <div class="philarmony flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Philarmony</BaseParagraph
            >
            <div style="text-align: center; width: 70%; padding: 12px 0">
              <BaseParagraph visual-type="dark">Philarmony was meant to ease creation and maintenance of REST APIs on top of Symfony 4. All the data scheme, endpoints, forms, worflows and authorizations are based on 4 YAML config files.</BaseParagraph>
            </div>
            <BaseButton
              visual-type="secondary"
              icon="fab fa-github"
              @buttonClicked="goToRepo('PhilarmonyCore')"
              >Know more</BaseButton
            >
          </div>
          <div class="atomnuxt flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Atomnuxt</BaseParagraph
            >
            <div style="text-align: center; width: 70%; padding: 12px 0">
              <BaseParagraph visual-type="dark">Atomnuxt is a try to push the limits of atomic design and component based design with Nuxtjs.</BaseParagraph>
            </div>
            <BaseButton
              visual-type="secondary"
              icon="fab fa-github"
              @buttonClicked="goToRepo('atomnuxt')"
            >Know more</BaseButton
            >
          </div>
        </div>
        <div class="flex-row flex-between" style="height: 100%; width: 100%">
          <div class="letsjam flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Letsjam</BaseParagraph
            >
            <div style="text-align: center; width: 70%; padding: 12px 0">
              <BaseParagraph visual-type="dark">Letsjam is a blog for audiophiles and musicians, developped with Nuxtjs, Firebase and Graphql.</BaseParagraph>
            </div>
            <BaseButton
              visual-type="secondary"
              icon="fab fa-github"
              @buttonClicked="goToRepo('letsjam-ssg')"
            >Know more</BaseButton
            >
          </div>
          <div class="appquarium flex-column" style="height: 100%; width: 50%">
            <BaseParagraph visual-type="dark" class="project-title"
              >Appquarium</BaseParagraph
            >
            <div style="text-align: center; width: 70%; padding: 12px 0">
              <BaseParagraph visual-type="dark">Appquarium is an aquariophile web database, developped with Api-Platform and Docker, in the form of a micro-architecture API.</BaseParagraph>
            </div>
            <BaseButton
              visual-type="secondary"
              icon="fab fa-github"
              @buttonClicked="goToRepo('?tab=repositories&q=appquarium&type=&language=')"
            >Know more</BaseButton
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseParagraph from '@/components/Atoms/Typography/Paragraph/BaseParagraph.vue'
import BaseHeader from '@/components/Atoms/Typography/Header/BaseHeader.vue'
import BaseCardIndex from '~/components/Molecules/Cards/Cardsindex/BaseCardIndex.vue'
import CardIndexModele from '~/components/Molecules/Cards/Cardsindex/CardIndexModele'
import BaseButton from '~/components/Atoms/Button/BaseButton.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    BaseParagraph,
    BaseHeader,
    BaseCardIndex,
    BaseButton,
  },
  setup() {
    const futureCard: CardIndexModele = new CardIndexModele(
      require('~/assets/img/startup.svg'),
      'future-card',
      'Future proofed',
      'I always code with the future in mind. To make my job and the job of the others easier.'
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
  methods: {
    goToRepo(repo: string) {
      const win = window.open('https://github.com/deozza/' + repo, '_blank')
      win.focus()
    },
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

.appquarium {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(assets/img/appquarium.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.project-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.portfolio-description {
  text-align: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
