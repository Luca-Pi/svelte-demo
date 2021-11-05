<script lang="ts">
  import Vue from "./Vue.svelte"
  import Reactivity2Vue from "../assets/reactivity2-vue.png"
  import Reactivity2Svelte from "../assets/reactivity2-svelte.png"
  import Reactivity2React from "../assets/reactivity2-react.png"
  import React from "./React.svelte"
  import Svelte from "./Svelte.svelte"
  import DoubledCounter from "$lib/DoubledCounter.svelte"
</script>

<svelte:head>
    <title>Reactivity2</title>
</svelte:head>

<section class="logos-container">
    <Vue img={Reactivity2Vue} />
    <Svelte img={Reactivity2Svelte} />
    <React img={Reactivity2React} />
</section>
<section class="code-container">
    <DoubledCounter />
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
