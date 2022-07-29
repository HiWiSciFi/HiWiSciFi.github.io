<script lang="ts">
	export let code : string | undefined = "";
</script>

<code>
{#if code != undefined}
	{code}
{:else}
	<slot/>
{/if}
</code>

<style>
	code {
		display: inline;
		width: max-content;
		background-color: #282c34;
		color: #e6c067;
		border-radius: 3px;
		font-family: courier, monospace;
		padding: 0 3px;
	}
</style>
