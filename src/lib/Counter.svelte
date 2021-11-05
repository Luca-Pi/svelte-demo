<script lang="ts">
  let count = 0
</script>
<div>
    <div class="counter-digits">
        {count}
    </div>
    <div class="buttons">
        <button on:click={() => count -= 1}>-</button>
        <button on:click={() => count += 1}>+</button>
    </div>
</div>









<style>
    button {
        width: 2em;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        color: var(--text-color);
        font-size: 2rem;
    }

    .counter-digits {
        display: flex;
        width: 100%;
        height: 100%;
        font-weight: 400;
        color: var(--accent-color);
        font-size: 4rem;
        align-items: center;
        justify-content: center;
    }

    .buttons {
        display: flex;
    }
</style>
