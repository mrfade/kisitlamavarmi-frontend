<template>
  <div
    :style="
      '--status-color: ' +
      $store.state.currentCity.status.color +
      '; --sc-r: ' +
      hexToRgb($store.state.currentCity.status.color).r +
      '; --sc-g: ' +
      hexToRgb($store.state.currentCity.status.color).g +
      '; --sc-b: ' +
      hexToRgb($store.state.currentCity.status.color).b
    "
  >
    <div
      class="city-title text-5xl p-2 font-semibold italic text-white rounded-xl rounded-b-none"
    >
      {{ $store.state.currentCity.name }}
    </div>

    <table class="city-table w-full table-auto p-4 rounded-xl rounded-t-none">
      <tbody>
        <tr
          v-for="detail in $store.state.currentCity.status.detail"
          :key="detail.title"
        >
          <td class="leading-loose">
            {{ detail.title }}
          </td>
          <td class="leading-loose">
            {{ detail.answer }}
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="last-updated text-center mt-5 p-2 leading-4 bg-gray-200 rounded-full"
    >
      Son Güncelleme:
      {{
        $moment($store.state.currentCity.status.last_updated)
          .local()
          .format('DD MMMM YYYY HH:mm')
      }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null
    },
  },
}
</script>

<style lang="scss">
.city-title {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: var(--status-color);
}

.city-table {
  tr:nth-child(even) {
    @apply bg-gray-200;
  }

  tr:nth-child(odd) {
    @apply bg-gray-100;
  }
}
</style>
