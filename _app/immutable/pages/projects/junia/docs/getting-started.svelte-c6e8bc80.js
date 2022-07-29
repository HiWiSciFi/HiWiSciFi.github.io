import{S as re,i as ae,s as ie,l as h,m,p as g,h as _,q as le,b as Q,g as se,t as y,d as ce,f as $,L as ue,M as de,N as pe,O as fe,u as p,v as f,w as he,n as K,a as te,x as C,c as ne,y as L,r as me,J as a,z as x,C as T}from"../../../../chunks/index-06ce5a74.js";import{B as oe}from"../../../../chunks/block-code-67a0def5.js";function _e(u){let e;const n=u[2].default,t=ue(n,u,u[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,c){t&&t.m(r,c),e=!0},p(r,c){t&&t.p&&(!e||c&2)&&de(t,n,r,r[1],e?fe(n,r[1],c,null):pe(r[1]),null)},i(r){e||($(t,r),e=!0)},o(r){y(t,r),e=!1},d(r){t&&t.d(r)}}}function ge(u){let e;return{c(){e=p(u[0])},l(n){e=f(n,u[0])},m(n,t){Q(n,e,t)},p(n,t){t&1&&he(e,n[0])},i:K,o:K,d(n){n&&_(e)}}}function ye(u){let e,n,t,r;const c=[ge,_e],l=[];function I(i,d){return i[0]!=null?0:1}return n=I(u),t=l[n]=c[n](u),{c(){e=h("code"),t.c(),this.h()},l(i){e=m(i,"CODE",{class:!0});var d=g(e);t.l(d),d.forEach(_),this.h()},h(){le(e,"class","svelte-1fwu7hk")},m(i,d){Q(i,e,d),l[n].m(e,null),r=!0},p(i,[d]){let b=n;n=I(i),n===b?l[n].p(i,d):(se(),y(l[b],1,1,()=>{l[b]=null}),ce(),t=l[n],t?t.p(i,d):(t=l[n]=c[n](i),t.c()),$(t,1),t.m(e,null))},i(i){r||($(t),r=!0)},o(i){y(t),r=!1},d(i){i&&_(e),l[n].d()}}}function $e(u,e,n){let{$$slots:t={},$$scope:r}=e,{code:c=""}=e;return u.$$set=l=>{"code"in l&&n(0,c=l.code),"$$scope"in l&&n(1,r=l.$$scope)},[c,r,t]}class F extends re{constructor(e){super(),ae(this,e,$e,ye,ie,{code:0})}}function be(u){let e,n,t,r,c,l,I,i,d,b,q,z,A,G,O,w,P,v,Y,k,H,B,R,E,D,J,S,M,N,V,j;return w=new F({props:{code:"Junia::Application* CreateApplication()"}}),v=new F({props:{code:"<Junia/Core/EntryPoint.hpp>"}}),k=new oe({props:{language:"cpp",code:`#include <Junia.hpp>
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
	
Junia::Application* CreateApplication() { return new Testapp(); }`}}),E=new oe({props:{language:"cpp",code:`class ExampleLayer : public Junia::Layer
{
public:
    ExampleLayer() : Junia::Layer("ExampleLayer") { }
}`}}),J=new F({props:{code:"PushLayerBack(new ExampleLayer());"}}),{c(){e=h("div"),n=h("h1"),t=p("Getting started"),r=te(),c=h("h2"),l=p("Installing and linking Junia"),I=te(),i=h("b"),d=h("i"),b=p("!!! As of now it is required to use the premade Testproject for development !!!"),q=h("br"),z=p(`\r
Once you execute the project generation file (generates vs2022 project) all required files will be created!\r
`),A=h("h2"),G=p("Getting started"),O=p(`\r
In order to initialize Junia you do not need a main function, but implement the\r
`),C(w.$$.fragment),P=p(` function after including the\r
`),C(v.$$.fragment),Y=p(` header. You can use the CreateApplication function or the\r
constructor of your Application class as a main function in case you need to initialize something yourself. Your main\r
file should look something like this:\r
\r
`),C(k.$$.fragment),H=p(`\r
\r
If you were to compile and execute the application now you would end up with an empty window.\r
`),B=h("p"),R=p(`\r
In order to be able to hook into the game loop you have to create and attach a layer.\r
\r
`),C(E.$$.fragment),D=p(`\r
\r
Extend the constructor of your application class to call `),C(J.$$.fragment),S=p(" in order to attach the layer."),M=h("br"),N=p(`\r
The Layer class provides four member functions you might want to override in order to take control of the scene.`),V=h("br"),this.h()},l(s){e=m(s,"DIV",{style:!0});var o=g(e);n=m(o,"H1",{});var U=g(n);t=f(U,"Getting started"),U.forEach(_),r=ne(o),c=m(o,"H2",{});var W=g(c);l=f(W,"Installing and linking Junia"),W.forEach(_),I=ne(o),i=m(o,"B",{});var X=g(i);d=m(X,"I",{});var Z=g(d);b=f(Z,"!!! As of now it is required to use the premade Testproject for development !!!"),Z.forEach(_),X.forEach(_),q=m(o,"BR",{}),z=f(o,`\r
Once you execute the project generation file (generates vs2022 project) all required files will be created!\r
`),A=m(o,"H2",{});var ee=g(A);G=f(ee,"Getting started"),ee.forEach(_),O=f(o,`\r
In order to initialize Junia you do not need a main function, but implement the\r
`),L(w.$$.fragment,o),P=f(o,` function after including the\r
`),L(v.$$.fragment,o),Y=f(o,` header. You can use the CreateApplication function or the\r
constructor of your Application class as a main function in case you need to initialize something yourself. Your main\r
file should look something like this:\r
\r
`),L(k.$$.fragment,o),H=f(o,`\r
\r
If you were to compile and execute the application now you would end up with an empty window.\r
`),B=m(o,"P",{}),g(B).forEach(_),R=f(o,`\r
In order to be able to hook into the game loop you have to create and attach a layer.\r
\r
`),L(E.$$.fragment,o),D=f(o,`\r
\r
Extend the constructor of your application class to call `),L(J.$$.fragment,o),S=f(o," in order to attach the layer."),M=m(o,"BR",{}),N=f(o,`\r
The Layer class provides four member functions you might want to override in order to take control of the scene.`),V=m(o,"BR",{}),o.forEach(_),this.h()},h(){me(e,"display","block")},m(s,o){Q(s,e,o),a(e,n),a(n,t),a(e,r),a(e,c),a(c,l),a(e,I),a(e,i),a(i,d),a(d,b),a(e,q),a(e,z),a(e,A),a(A,G),a(e,O),x(w,e,null),a(e,P),x(v,e,null),a(e,Y),x(k,e,null),a(e,H),a(e,B),a(e,R),x(E,e,null),a(e,D),x(J,e,null),a(e,S),a(e,M),a(e,N),a(e,V),j=!0},p:K,i(s){j||($(w.$$.fragment,s),$(v.$$.fragment,s),$(k.$$.fragment,s),$(E.$$.fragment,s),$(J.$$.fragment,s),j=!0)},o(s){y(w.$$.fragment,s),y(v.$$.fragment,s),y(k.$$.fragment,s),y(E.$$.fragment,s),y(J.$$.fragment,s),j=!1},d(s){s&&_(e),T(w),T(v),T(k),T(E),T(J)}}}class ke extends re{constructor(e){super(),ae(this,e,null,be,ie,{})}}export{ke as default};
