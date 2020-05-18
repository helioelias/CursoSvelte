<script>
	let name = "Helio Elias";

	let images = [
		{
			path: '/img1.jpg',
			description: 'Primeira Imagem'
		},
		{
			path: '/img2.jpg',
			description: 'Segunda Imagem'
		},
	];

	const [imgObj1, imgObj2] = images;

	let count = 0;

	let timeArray = [];
	let timeObject = {};
	
	//$: doubled = count * 2;

	$: if (count === 10) {
		alert('Contagem está realmente alta');
		count = 9;
	}

	const clickHandler = () => {
		const d = new Date();
		const key = d.getTime();
		timeArray = [...timeArray, key];
		timeObject = {...timeObject, [key]: d.toLocaleDateString()};
	};	

</script>

<main class="container mx-auto pt-6">

	<button
	on:click={clickHandler}
	class="bg-blue-500 houver:bg-blue-700 text-white font-bold py-3 px-4 rounded"
	>Click Me</button>

<p></p>

Count: {count} <br>
Doubled: <br>
TimeArray: {JSON.stringify(timeArray) }<br>
TimeObject: {JSON.stringify(timeObject) }<br>

<h1>Ola {name}</h1>
<img src="{imgObj1.path}" alt="{imgObj1.description}">
<img src="{imgObj2.path}" alt="{imgObj2.description}">
</main>

