<script lang="ts">
import { sleep } from "../sleep"

let isLoaded = false
async function fetch() {
  await sleep(3000)
  isLoaded = true

  return true
}
fetch()

</script>

{#if isLoaded}
    <p>Loaded!</p>
{:else}
   <p>...Loading</p>
{/if}





