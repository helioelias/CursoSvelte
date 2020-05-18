<script>

import Card from './Card.svelte';

const list = [
	{id:1, title: 'Titulo 1', cover: 'img1.jpg'},
	{id:2, title: 'Titulo 2', membersOnly: true,  cover: 'img1.jpg'},
	{id:3, title: 'Titulo 3', cover: 'img2.jpg'},
	{id:4, title: 'Titulo 4', membersOnly: false, cover: 'img1.jpg'},
	{id:5, title: 'Titulo 5', membersOnly: true, cover: 'img2.jpg'},
	{id:6, title: 'Titulo 6', cover: 'img1.jpg'}
	];

</script>

<main class="flex container mx-auto">
<div class="grid grid-cols-2 gap-4"></div>
{#each list as item}
	<Card {... item} />
{/each}
</main>
