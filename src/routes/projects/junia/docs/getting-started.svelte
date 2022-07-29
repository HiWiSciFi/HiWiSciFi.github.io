<script lang="ts">
	import BlockCode from "$lib/block-code.svelte";
	import InlineCode from "$lib/inline-code.svelte";
</script>

<div style="display: block">

<h1>Getting started</h1>
<h2>Installing and linking Junia</h2>
<b><i>!!! As of now it is required to use the premade Testproject for development !!!</i></b><br/>
Once you execute the project generation file (generates vs2022 project) all required files will be created!
<h2>Getting started</h2>
In order to initialize Junia you do not need a main function, but implement the
<InlineCode code="Junia::Application* CreateApplication()" /> function after including the
<InlineCode code="<Junia/Core/EntryPoint.hpp>" /> header. You can use the CreateApplication function or the
constructor of your Application class as a main function in case you need to initialize something yourself. Your main
file should look something like this:

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
<p/>
In order to be able to hook into the game loop you have to create and attach a layer.

<BlockCode language="cpp" code="{`class ExampleLayer : public Junia::Layer
{
public:
    ExampleLayer() : Junia::Layer("ExampleLayer") { }
}`}" />

Extend the constructor of your application class to call <InlineCode code="PushLayerBack(new ExampleLayer());" /> in order to attach the layer.<br/>
The Layer class provides four member functions you might want to override in order to take control of the scene.<br/>

</div>
