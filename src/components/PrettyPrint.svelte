
<script>

import { onMount, beforeUpdate, afterUpdate } from 'svelte';

import prettyPrintJson from 'pretty-print-json';

export let formData = {};

    onMount(() => {
        console.log("Pronto para ser usado");
    });

    beforeUpdate(() => {
        console.log("Receberei atualização");
    });

    afterUpdate(() => {
        console.log("Fui atualizado");
    });

</script>

<div class="output">

    {@html prettyPrintJson.toHtml(formData)};

</div>