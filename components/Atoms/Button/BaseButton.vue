<template>
  <button
    class="btn"
    :type="htmlType"
    :class="[
      { [`btn-${visualType}`]: visualType },
      { 'btn-outline': outline },
      { 'btn-icon': icon.length > 0 && onlyIcon },
      { 'btn-round': (icon.length > 0 && onlyIcon) || round },
    ]"
    :disabled="disabled || loading"
    @click="emitEvent()"
  >
    <slot name="loading">
      <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    </slot>
    <slot name="icon">
      <i v-if="!loading && icon.length > 0" :class="icon"></i>
    </slot>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseButtonVue',
  props: {
    visualType: {
      type: String as () => string,
      required: false,
      default: 'light',
      validator(value: string): boolean {
        const expectedValues: Array<string> = [
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
        return expectedValues.includes(value)
      },
    },
    htmlType: {
      type: String as () => string,
      required: false,
      default: 'button',
    },
    icon: {
      type: String as () => string,
      required: false,
      default: '',
    },
    onlyIcon: {
      type: Boolean as () => boolean,
      required: false,
      default: false,
    },
    outline: {
      type: Boolean as () => boolean,
      required: false,
      default: false,
    },
    round: {
      type: Boolean as () => boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean as () => boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean as () => boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    emitEvent() {
      this.$emit('buttonClicked')
    },
  },
})
</script>

<style scoped>
button.btn {
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  color: #212529;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.333333;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.4285rem;
  padding: 11px 40px;
  margin: 4px;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

button.btn[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

button.btn.btn-icon {
  height: 2.375rem;
  min-width: 2.375rem;
  width: 2.375rem;
  border-radius: 10px;
  padding: 0 !important;
}

.btn-round {
  border-radius: 30px !important;
}

button.btn.btn-primary {
  color: white;
  background-color: var(--primary_bg);
  border-color: var(--primary_border);
}

button.btn.btn-primary:hover {
  text-decoration: none;
  background-color: var(--primary_bg_hover);
  border-color: var(--primary_border_hover);
}

button.btn.btn-primary.btn-outline {
  color: var(--primary_bg);
  background-color: transparent;
}
button.btn.btn-primary.btn-outline:hover {
  color: white;
  text-decoration: none;
  background-color: var(--primary_bg);
  border-color: var(--primary_border);
}

button.btn.btn-secondary {
  color: black;
  background-color: var(--secondary_bg);
  border-color: var(--secondary_border);
}

button.btn.secondary:hover {
  text-decoration: none;
  background-color: var(--secondary_bg_hover);
  border-color: var(--secondary_border_hover);
}

button.btn.btn-secondary.btn-outline {
  color: var(--secondary_bg);
  background-color: transparent;
}
button.btn.btn-secondary.btn-outline:hover {
  color: white;
  text-decoration: none;
  background-color: var(--secondary_bg);
  border-color: var(--secondary_border);
}

button.btn.btn-success {
  color: white;
  background-color: var(--success_bg);
  border-color: var(--success_border);
}

button.btn.btn-success:hover {
  text-decoration: none;
  background-color: var(--success_bg_hover);
  border-color: var(--success_border_hover);
}

button.btn.btn-success.btn-outline {
  color: var(--success_bg);
  background-color: transparent;
}
button.btn.btn-success.btn-outline:hover {
  color: white;
  text-decoration: none;
  background-color: var(--success_bg);
  border-color: var(--success_border);
}

button.btn.btn-danger {
  color: white;
  background-color: var(--danger_bg);
  border-color: var(--danger_border);
}

button.btn.btn-danger:hover {
  text-decoration: none;
  background-color: var(--danger_bg_hover);
  border-color: var(--danger_border_hover);
}

button.btn.btn-danger.btn-outline {
  color: var(--danger_bg);
  background-color: transparent;
}
button.btn.btn-danger.btn-outline:hover {
  color: white;
  text-decoration: none;
  background-color: var(--danger_bg);
  border-color: var(--danger_border);
}

button.btn.btn-warning {
  color: white;
  background-color: var(--warning_bg);
  border-color: var(--warning_border);
}

button.btn.btn-warning:hover {
  text-decoration: none;
  background-color: var(--warning_bg_hover);
  border-color: var(--warning_border_hover);
}

button.btn.btn-warning.btn-outline {
  color: var(--warning_bg);
  background-color: transparent;
}
button.btn.btn-warning.btn-outline:hover {
  color: white;
  text-decoration: none;
  background-color: var(--warning_bg);
  border-color: var(--warning_border);
}

button.btn.btn-info {
  color: white;
  background-color: var(--info_bg);
  border-color: var(--info_border);
}

button.btn.btn-info:hover {
  text-decoration: none;
  background-color: var(--info_bg_hover);
  border-color: var(--info_border_hover);
}

button.btn.btn-info.btn-outline {
  color: var(--info_bg);
  background-color: transparent;
}
button.btn.btn-info.btn-outline:hover {
  color: white;
  text-decoration: none;
  background-color: var(--info_bg);
  border-color: var(--info_border);
}
</style>
