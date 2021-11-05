<script lang="ts">
  import react from "../assets/react.webp"

  export let img: string
</script>

<div class="container">
    <div class="img-container">
        <img src={react} alt="">
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
        width: 60px;
        height: 60px;
        margin-bottom: -8px;
        transform: translateY(-2px);
    }

</style>