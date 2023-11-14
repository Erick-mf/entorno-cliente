window.onload = function () {
    let items = [];
    let input = document.getElementById("grocery-input");
    let submitButton = document.querySelector("button");
    let itemsDiv = document.getElementById("items");
    let clearButton = document.getElementById("clear-items");

    submitButton.onclick = function () {
        let item = input.value;
        if (item) {
            items.push(item);
            updateItems();
            input.value = "";
        }
    };

    clearButton.onclick = function () {
        items = [];
        updateItems();
    };

    function updateItems() {
        itemsDiv.innerHTML = "";
        for (let i = 0; i < items.length; i++) {
            let itemContainer = document.createElement("div");

            let itemDiv = document.createElement("div");
            let itemP = document.createElement("p");
            itemP.innerText = items[i];
            itemDiv.appendChild(itemP);
            itemContainer.appendChild(itemDiv);

            let buttonsDiv = document.createElement("div");
            let editImg = document.createElement("img");
            editImg.src = "./img/edit.png";
            editImg.alt = "edit";
            editImg.onclick = function () {
                let newItem = prompt("Edit item:", items[i]);
                if (newItem) {
                    items[i] = newItem;
                    updateItems();
                }
            };
            let deleteImg = document.createElement("img");
            deleteImg.src = "./img/delete.png";
            deleteImg.alt = "delete";
            deleteImg.onclick = function () {
                items.splice(i, 1);
                updateItems();
            };
            buttonsDiv.appendChild(editImg);
            buttonsDiv.appendChild(deleteImg);
            itemContainer.appendChild(buttonsDiv);

            itemsDiv.appendChild(itemContainer);
        }
    }
};
