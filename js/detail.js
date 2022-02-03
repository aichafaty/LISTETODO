const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMjA3Nzk4LCJleHAiOjE5NTg3ODM3OTh9.GbOt-qWfLOpw0XqnHDbYv3jBond2q2Sj0wv4Bm3nm2Q"
const API_URL = "https://ybudgskgnibqrqhnolzt.supabase.co/rest/v1/todoLISTEAPP"

window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL + "?id=eq." + localStorage.getItem("identifiantDetail"), {
        headers: {
          apikey: API_KEY,
        },
      })
     
    .then((response) => response.json())
    .then((Tache) => {
      console.log(Tache)
      Tache.forEach((i) => {
        creerCarteTache(i)
      })
    })
  



const creerCarteTache = (tache)=>{
    const btnDetail = "btn_detail-" + tache.id
    const idCart="btn_cart-" + tache.id
  
    detail.insertAdjacentHTML("afterend",`
      <div class="card w-80 border-light" style="border:solid;" id="${idCart}">
      <div class="card-body">
        <h5 class="card-title">${tache.titre}</h5>
        <p class="card-text">${tache.description}</p>
        <p class="card-text">${tache.dateline}</p>
        <p class="card-text">${tache.priorite}</p>
       
        
      </div>
    </div>
      
      `
  
      )
}

})