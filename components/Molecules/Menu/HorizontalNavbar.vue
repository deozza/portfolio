<template>
  <div
    class="menu"
    :class="[{ [`menu-${theme}`]: theme }, { 'menu-toggled': navbarIsToggled }]"
  >
    <div class="flex-row flex-between">
      <div class="flex-row flex-between mobile-header">
        <n-link v-if="logo !== ''" to="/" class="logo">
          {{ logo }}
        </n-link>
        <div v-else></div>
        <span class="menu-icon" @click="navbarIsToggled = !navbarIsToggled"
          ><i class="fas fa-bars fa-2x"
        /></span>
      </div>

      <div>
        <div
          class="menu-content flex-row-desktop"
          :class="{
            'menu-content-toggled': navbarIsToggled,
            'flex-column-mobile': navbarIsToggled,
            'flex-around-mobile': navbarIsToggled,
          }"
        >
          <BaseLink v-for="(link, index) of links" :key="index" :link="link">{{
            link.title
          }}</BaseLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import BaseLinkModele from '~/components/Atoms/Link/BaseLinkModele'
import BaseLink from '~/components/Atoms/Link/BaseLink.vue'

export default defineComponent({
  name: 'BaseHorizontalNavbarVue',
  components: {
    BaseLink,
  },
  props: {
    theme: {
      type: String as () => string,
      required: true,
    },
    logo: {
      type: String as () => string,
      required: true,
    },
    links: {
      type: Array as () => Array<BaseLinkModele>,
      required: true,
    },
  },
  setup() {
    const navbarIsToggled = false
    return {
      navbarIsToggled,
    }
  },
})
</script>

<style scoped>
.menu {
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 20px;
}

.menu a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  display: block;
}
.menu a:hover {
  transition: all ease 0.2s;
}

.menu.menu-light {
  background-color: white;
  border-right: 1px solid black;
}

.menu.menu-light a,
.menu.menu-light i {
  color: black;
}

.menu.menu-dark {
  background-color: black;
}

.menu.menu-dark a,
.menu.menu-dark i {
  color: white;
}

div.menu .logo {
  font-size: 24px !important;
  font-weight: bold;
}

@media only screen and (min-width: 1024px) {
  div.menu .menu-btn,
  div.menu .menu-icon {
    display: none;
  }
}
@media only screen and (max-width: 1024px) {
  .menu-toggled {
    height: 100%;
  }
  div.menu .menu-btn,
  div.menu .menu-icon {
    display: block;
    cursor: pointer;
  }

  div.menu .menu-icon i {
    padding-right: 12px;
  }

  .mobile-header {
    width: 100%;
  }

  .menu-content {
    display: none;
  }

  .menu-content-toggled {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
}
</style>
