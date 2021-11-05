<script lang="ts">
  import Vue from "./Vue.svelte"
  import ConditionVue from "../assets/condition-vue.png"
  import ConditionSvelte from "../assets/condition-svelte.png"
  import ConditionReact from "../assets/condition-react.png"
  import React from "./React.svelte"
  import Svelte from "./Svelte.svelte"
  import Condition from "$lib/Condition.svelte"
</script>

<svelte:head>
    <title>Conditions</title>
</svelte:head>

<section class="logos-container">
    <Vue img={ConditionVue} />
    <Svelte img={ConditionSvelte} />
    <React img={ConditionReact} />
</section>
<section class="code-container">
    <Condition />
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
