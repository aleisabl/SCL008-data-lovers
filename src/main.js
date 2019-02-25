/* Manejo del DOM */
const data = window.POKEMON.pokemon;
console.log(data)
const showData = (data) => {
  data.forEach(elemento => {
    //console.log(elemento.img)
    // console.log(elemento.name)
    // console.log(elemento.num)
    document.getElementById('card').innerHTML += `<div class="col-md-4">
                                                    <img src="${elemento.img}" alt="${elemento.name}">
                                                    <p>Nombre: ${elemento.name}</p>
                                                    <p>Número: ${elemento.num}</p>
                                                  </div>`
  })
}
window.onload = showData(data)

document.getElementById("btn-start").addEventListener("click", () => {
    
  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

      document.getElementById("kanto-img").addEventListener("click", () => {
        document.getElementById("screen2").setAttribute('hidden', true);
        document.getElementById("screen3").removeAttribute('hidden');
    
      });


      
      /*const data = window.POKEMON;
      const showData = (data) =>{


      }

      const element = document.getElementById("cards");
      let returnCard = ""; 

      data.forEach(showData(element =>{
       element.innerHTML += document.getElementById("cards");
       
      });




    /*  const showData = (data) => {
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `<p>${element.name}</p>
                            <img class="image" src="${element.image}" alt="${element.name}">`
  })
}








      <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=  alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>    
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>*/