document.addEventListener("DOMContentLoaded",(()=>{new Promise(((e,o)=>{fetch("https://jsonplaceholder.typicode.com/users").then((o=>{o.ok&&e(o.json())})).catch((e=>o(e)))})).then((e=>function(e){console.log(e),e.forEach((({id:e,name:o})=>{console.log(e,o)}))}(e))).catch((e=>new Error(e)))}));
//# sourceMappingURL=index.df86f39d.js.map
