<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Hello from "$lib/Hello.svelte"
	import Condition from "$lib/Condition.svelte"
	import Vue from "./Vue.svelte"
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	Select a link from the nav !
</section>

<style>
section	{
	height: 80vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
}
</style>
