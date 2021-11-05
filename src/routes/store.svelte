<script lang="ts">
  import StoreCount from "../assets/store-count.png"
  import StoreIncrementer from "../assets/store-incrementer.png"
  import StoreDecrementer from "../assets/store-decrementer.png"

  import Svelte from "./Svelte.svelte"
  import Counter from "$lib/Counter.svelte"
</script>

<svelte:head>
    <title>Store</title>
</svelte:head>

<section class="logos-container">
    <Svelte img={StoreDecrementer} />
    <Svelte img={StoreCount} />
    <Svelte img={StoreIncrementer} />
</section>
<section class="code-container">
    <Counter />
</section>

<style>
    .logos-container {
        width: 100vw;
        display: flex;
        gap: 2px;
    }
    .code-container {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
</style>
