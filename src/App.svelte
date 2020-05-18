<script>
import List from "./components/List.svelte";
</script>
<List on:cardClicked={ev => console.log('Evento capturado no App.svelte', ev.detail)} />
