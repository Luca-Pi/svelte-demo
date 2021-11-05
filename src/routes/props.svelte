<script lang="ts">
  import Hello from "$lib/Hello.svelte"
  import Vue from "./Vue.svelte"
  import HelloVue from "../assets/hello-vue.png"
  import HelloSvelte from "../assets/hello-svelte.png"
  import HelloReact from "../assets/hello-react.png"
  import React from "./React.svelte"
  import Svelte from "./Svelte.svelte"
</script>

<svelte:head>
    <title>Props</title>
</svelte:head>

<section class="logos-container">
    <Vue img={HelloVue} />
    <Svelte img={HelloSvelte} />
    <React img={HelloReact} />
</section>
<section class="code-container">
    <Hello name="Luca" age={28} />
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
