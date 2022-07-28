<script lang="ts">
	import CodeBlock from "$lib/code-block.svelte";
	const code =
`function l()
{
	await fetch("https://google.com").then(r => { console.log(r); });
}
`;
</script>

<CodeBlock language="cpp" url="https://raw.githubusercontent.com/HiWiSciFi/Junia/development/Junia/src/Junia/Core/Logger.hpp" />
<CodeBlock language="cpp" code="{`#include <iostream>
int main(int argc, char** argv)
{
	for (int i = 0; i < argc; i++) std::cout << argv[i] << std::endl;
}`}" />
