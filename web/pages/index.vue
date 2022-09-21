<template>
  <div class="topPage">
    <ArtCanvas />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ArtCanvas from '~/components/ArtCanvas.vue'

@Component({
  components: { ArtCanvas },
})
export default class TopPage extends Vue {}
</script>
