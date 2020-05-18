<script>

import Card from './components/Card.svelte';

const data = [
	{title: 'Titulo 1', cover: 'img1.jpg'},
	{title: 'Titulo 2', cover: 'img2.jpg'},
	];

const [card1, card2] = data;

</script>

<main class="flex container mx-auto">
<div class="grid grid-cols-2 gap-4"></div>
	<Card {... card1} />
	<Card {... card2} />
</main>
