window.onload = () => {
    let btn = document.querySelector("button");

    btn.onclick = () => {
        let input = document.getElementById("input");
        if (input.value !== "") {
            agregar(input);
        } else {
            input.placeholder = "No puede estar vacio";
        }
    };
};

function agregar(item) {
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerHTML = item;

    lista.append(li);
}
