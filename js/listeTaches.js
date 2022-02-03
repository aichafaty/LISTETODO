const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMjA3Nzk4LCJleHAiOjE5NTg3ODM3OTh9.GbOt-qWfLOpw0XqnHDbYv3jBond2q2Sj0wv4Bm3nm2Q"
const API_URL = "https://ybudgskgnibqrqhnolzt.supabase.co/rest/v1/todoLISTEAPP"

 
  window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
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
  

})




const creerCarteTache = (tache)=>{
  const btnDetail = "btn_detail-" + tache.id
  const idCart="btn_cart-" + tache.id

  listeTache.insertAdjacentHTML("afterend",`
    <div class="card w-80 border-light" style="border:solid;" id="${idCart}" >
    <div class="card-body">
      <h5 class="card-title">${tache.titre}</h5>
      <p class="card-text">${tache.description}</p>
      <p class="card-text">${tache.dateline}</p>
      <p class="card-text">${tache.priorite}</p>
     
      <button class="bi bi-check-square btn-outline-success" style="width: 70px; height: 60px;"  id="${btnDetail}">details</button>
    </div>
  </div>
    
    `

    )
  
  

    const detail=document.getElementById(btnDetail)
   detail.addEventListener("click",(e)=>{
     alert("okok")
  let getid=btnDetail
   console.log(detail);
   console.log(window.location.pathname);
  console.log(getid.substring(11));
 localStorage.setItem("identifiantDetail",getid.substring(11))
window.location.href="detail.html"
  
  })


}


