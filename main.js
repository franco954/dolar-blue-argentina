


const insertDataIntoPage = (pCompra) => {


    document.querySelector('#dolar-blue-precio').innerHTML = `<h2 class="text-info"> <strong> 1 USD = ${pCompra} pesos argentinos. </strong></h>`



}







fetch("https://criptoya.com/api/dolar")
  .then(response => response.json())
  .then(data => {
    insertDataIntoPage(data.oficial.price)
}
    )
  .catch(error => console.error(error));