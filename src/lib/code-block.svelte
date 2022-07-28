<script lang="ts">
	import Highlight from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import typescript from 'svelte-highlight/languages/typescript';
	import cpp from 'svelte-highlight/languages/cpp';

	export let url : string | undefined = undefined;
	export let language : string = "js";
	export let code : string | undefined = undefined;

	var lang : any;
	var loaded : boolean = false;

	function getLang()
	{
		switch(language)
		{
			case "cpp":
				lang = cpp;
				break;
			case "js":
			case "ts":
			default:
				lang = typescript;
		}
	}
	getLang();

	async function getCode()
	{
		if (url !== undefined)
		{
			await fetch(url)
			.then(r => r.text())
			.then(r => {
				code = r;
				loaded = true;
			}).catch(() => { console.log("CodeBlock ERROR: Code could not be loaded from URL"); });
		}
		else if (code !== undefined) loaded = true;
		else console.log("CodeBlock ERROR: Code or URL have to be defined!");
	}
	getCode();

</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{#if loaded}
	<Highlight language="{lang}" code="{code}" />
{:else}
	Loading code block...
{/if}
