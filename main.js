


const insertDataIntoPage = (pVenta, pCompra) => {


    document.querySelector('#dolar-blue-precio').innerHTML = `
    <h3 class="text-info"> <strong> 1 USD = ${pCompra} ARS </strong></h3>
    <h3 class="text-secondary text-center">Dolar a peso argentino</h3>
    `
    document.querySelector('#dolar-blue-market-compra').innerHTML = `<strong> ${pCompra}  </strong>`
    document.querySelector('#dolar-blue-market-venta').innerHTML = `<strong> ${pVenta}  </strong>`


}


fetch("https://criptoya.com/api/buenbit/dai/ars")
  .then(response => response.json())
  .then(data => {
    insertDataIntoPage(data.bid, data.ask)
}
    )
  .catch(error => console.error(error));