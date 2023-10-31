window.onload = () => {
    html();
    body();
    lateral();
}

function html(){
let todosElementos = document.getElementsByTagName("*");

    for(let i = 0; i < todosElementos.length; i++) {
        todosElementos[i].style.margin = "0";
        todosElementos[i].style.padding = "0";
        todosElementos[i].style.boxSizing = "border-box";
    }
}

function body() {
    let main = document.getElementById("container");

    main.style.display = "flex";
}

function lateral() {
    let lateral = document.getElementById('lateral');

    lateral.style.backgroundColor = "aqua";
    lateral.style.height = "100vh";
    lateral.style.width = "150px";
}
