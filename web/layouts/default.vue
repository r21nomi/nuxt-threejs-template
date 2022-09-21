<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class extends Vue {}
</script>

<style lang="stylus">
@require '~@/assets/style/common.styl'
</style>
