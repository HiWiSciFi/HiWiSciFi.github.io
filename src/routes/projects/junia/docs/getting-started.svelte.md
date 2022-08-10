<script lang="ts">
	import BlockCode from "$lib/block-code.svelte";
	import InlineCode from "$lib/inline-code.svelte";
</script>

# Getting started
## Installing and linking Junia
_**!!! As of now it is required to use the premade Testproject for development !!!**_
Once you execute the project generation file (generates vs2022 project) all required files will be created!

## Getting started
In order to initialize Junia you do not need a main function, but implement the <InlineCode url="headerfiles/core/EntryPoint#CreateApplication" code="Junia::Application* CreateApplication()" /> function after including the <InlineCode url="headerfiles/core/EntryPoint" code="<Junia/Core/EntryPoint.hpp>" /> header. You can use the CreateApplication function or the constructor of your Application class as a main function in case you need to initialize something yourself. Your main file should look something like this:

<BlockCode language="cpp" code="{`#include <Junia.hpp>
#include <Junia/Core/EntryPoint.hpp>
	
class Testapp : public Junia::Application
{
public:
    Testapp()
    {
        /* Initialization code */
    }
    
    ~Testapp() override = default;
}
	
Junia::Application* CreateApplication() { return new Testapp(); }`}" />

If you were to compile and execute the application now you would end up with an empty window.

In order to be able to hook into the game loop you have to create and attach a layer.

<BlockCode language="cpp" code="{`class ExampleLayer : public Junia::Layer
{
public:
    ExampleLayer() : Junia::Layer("ExampleLayer") { }
}`}" />

Extend the constructor of your application class to call <InlineCode url="" code="PushLayerBack(new ExampleLayer());" /> in order to attach the layer.
The Layer class provides four member functions you might want to override in order to take control of the scene.

| Function | Description |
| --- | --- |
| <InlineCode url="" code="void OnEnable()" /> | This function should include all your layer-specific initialization code. |
| <InlineCode url="" code="void OnDisable()" /> | This function should include all your layer-specific deinitialization code. |
| <InlineCode url="" code="void OnUpdate()" /> | This function is called once every gameloop iteration. |
| <InlineCode url="" code="void OnUpdate(Junia::Timestep deltaTime)" /> | Same as <InlineCode url="" code="OnUpdate()" /> but also takes in the deltaTime for time-dependent calculations. |

<style>

	table {
		border: 0px;
		border-style: solid;
		border-collapse: collapse;
	}

	th, td {
		border: 0;
		border-bottom: 2px;
		border-style: solid;
	}

	tr:hover {
		background-color: coral;
	}

</style>