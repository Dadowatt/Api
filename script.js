const urlApi = 'https://dummyjson.com/products';

function fetchProduct(){
    fetch(urlApi)
    .then(Response => {
        if(!Response.ok){
            throw new Error("le produit n'est pas disponible");
        }return Response.json();
    })
    .then(data => {
        console.log(data);
        let produit = data.products;
        produit.forEach(product=>{
            const elementProduit = document.querySelector(".product");
            
            const produitItems = document.createElement("div");
            produitItems.classList.add("col-3");
        
            produitItems.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${product.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${product.title}</h4>
              <p class="card-subtitle">${product.description}</p>
              <p class="card-text">${product.price}</p>
            </div>
          </div>`;
            elementProduit.appendChild(produitItems)
        })
    })
}

fetchProduct()
// titre, description, prix, image