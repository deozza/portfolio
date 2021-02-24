<template>
  <div class="flex-column card">
    <img
      :src="cardContent.img"
      :alt="cardContent.imgAlt"
      :width="cardContent.imgSize"
    />
    <BaseParagraph class="card-title">{{ cardContent.title }}</BaseParagraph>
    <BaseParagraph class="card-text">{{ cardContent.text }}</BaseParagraph>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseParagraph from '../../../Atoms/Typography/Paragraph/BaseParagraph.vue'
import CardIndexModele from '~/components/Molecules/Cards/Cardsindex/CardIndexModele'

export default defineComponent({
  name: 'BaseCardIndex',
  components: {
    BaseParagraph,
  },
  props: {
    cardContent: {
      type: Object as () => CardIndexModele,
      required: true,
    },
  },
})
</script>

<style scoped>
div.card {
  padding: 24px;
  width: 200px;
}
div.card p.card-title {
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 12px 0;
}

div.card p.card-text {
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  div.card {
    padding: 6px;
  }
}
</style>
