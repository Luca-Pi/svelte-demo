<script lang="ts">
  import svelte from "../assets/svelte.png"

  export let img: string
</script>

<div class="container">
    <div class="img-container">
        <img src={svelte} alt="">
    </div>
    <img src={img} alt="">
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
    .container > img {
        width: 100%;
    }
    .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img-container img {
        width: 50px;
        height: 50px;
        margin-bottom: 2px;
    }
</style>