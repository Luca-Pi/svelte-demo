<script lang="ts">
  import Hello from "$lib/Hello.svelte"
  import Vue from "./Vue.svelte"
  import CountVue from "../assets/count-vue.png"
  import CountSvelte from "../assets/count-svelte.png"
  import CountReact from "../assets/count-react.png"
  import React from "./React.svelte"
  import Svelte from "./Svelte.svelte"
  import Counter from "$lib/Counter.svelte"
</script>

<svelte:head>
    <title>Reactivity</title>
</svelte:head>

<section class="logos-container">
    <Vue img={CountVue} />
    <Svelte img={CountSvelte} />
    <React img={CountReact} />
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
