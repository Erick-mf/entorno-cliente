window.onload = () => {
    let btn_1 = document.getElementById("btn-1");
    btn_1.onclick = () => {
        agregarFichero();
    };

    let btn_2 = document.getElementById("btn-2");
    btn_2.onclick = () => {
        enviar();
    };
};

function agregarFichero() {
    let inputs = document.getElementById("inputs");
    let input = document.createElement("input");

    input.type = "file";
    inputs.append(input);
}

function enviar() {
    let totalInputs = document.getElementsByTagName("input");

    alert(`Se enviaran ${totalInputs.length} archivos`);
}
