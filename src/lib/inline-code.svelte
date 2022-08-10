<script lang="ts">
	export let code : string | undefined = undefined;
	export let url : string | undefined = undefined;
</script>

{#if url != undefined}
<a href="{url}">
	<code>
		{#if code != undefined}
			{code}
		{:else}
			<slot/>
		{/if}
		</code>
</a>
{:else}
<code>
	{#if code != undefined}
		{code}
	{:else}
		<slot/>
	{/if}
	</code>
{/if}

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
