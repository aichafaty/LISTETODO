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
      <div class="card w-50 border-light" style="border:solid;" id="${idCart}">
       <div class="row">
          <div class="col-md-8"> 
            <div class="card-body">
            <h5 class="card-title" style="font-size: 48px;font-family: "Gill Sans", sans-serif;">${tache.titre}</h5>
              <p class="card-text" style="font-size: 30px;">${tache.description}</p>
              <p class="card-text" style="font-size: 30px;">${tache.dateline}</p>
              <p class="card-text" style="font-size: 30px;">${tache.priorite}</p>
            </div>
          </div>
          <div class="col-md-4">
          <img src="../LISTETODO/img/aa.png" alt="" style="width:300px ;" >
          </div>
       </div>
      </div>
      
      `
  
      )
}

})