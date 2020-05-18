<script>

    export let title = "um titulo padrão";
    export let cover = "img1.jpg";
    export let membersOnly = true;
    export let id = 0;
    let something = "Something";

    const clickHandler = () => console.log(id);

</script>
<a href="#" 
on:click|preventDefault={clickHandler}>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/{cover}" alt="Sunset in the mountains">  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  {#if membersOnly}
  <p>Members Only</p>
  {:else}
  <p>&nbsp;</p>
  {/if}
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
</a>