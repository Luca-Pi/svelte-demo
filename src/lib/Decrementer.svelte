<script>
import { count } from "./store/counter"
</script>

<button on:click={() => count.update(count => count - 1 )}>-</button>
