


const insertDataIntoPage = (pVenta, pCompra) => {


    document.querySelector('#dolar-blue-precio').innerHTML = `<h2 class="text-info"> <strong> 1 USD = ${pCompra} pesos </strong></h>`



}







fetch("https://criptoya.com/api/buenbit/dai/ars")
  .then(response => response.json())
  .then(data => {
    insertDataIntoPage(data.bid, data.ask)
}
    )
  .catch(error => console.error(error));