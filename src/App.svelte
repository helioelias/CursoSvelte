<script>

import Card from './components/Card.svelte';

const list = [
	{title: 'Titulo 1', cover: 'img1.jpg'},
	{title: 'Titulo 2', membersOnly: true,  cover: 'img1.jpg'},
	{title: 'Titulo 3', cover: 'img2.jpg'},
	{title: 'Titulo 4', membersOnly: false, cover: 'img1.jpg'},
	{title: 'Titulo 5', membersOnly: true, cover: 'img2.jpg'},
	{title: 'Titulo 6', cover: 'img1.jpg'}
	];

</script>

<main class="flex container mx-auto">
<div class="grid grid-cols-2 gap-4"></div>
{#each list as item}
	
	{@debug item}

	<Card {... item} />
{/each}
</main>
