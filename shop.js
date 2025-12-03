async function getResponce() {
    const node_for_insert = document.getElementById("node_for_insert");
    if (!node_for_insert) return;

    try {
        const responce = await fetch("./data/shop.json");
        const content = await responce.json();

        const products = content.slice(0, 6);

        node_for_insert.innerHTML = '';

        for (let key in products) {
            node_for_insert.innerHTML += `
            <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src="${products[key].img}" alt="${products[key].title}">
                <h5 class="card-subtitle">${products[key].title}</h5>
                <p class="card-text">${products[key].description}. Цена ${products[key].price} р.</p>
                <input type="hidden" name="vendor_code" value="${products[key].vendor_code}">
                <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
            </li>
            `;
        }

    } catch (error) {
        node_for_insert.innerHTML = '<p>Ошибка загрузки товаров</p>';
    }
}

document.addEventListener('DOMContentLoaded', getResponce);