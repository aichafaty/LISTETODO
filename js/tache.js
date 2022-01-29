const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMjA3Nzk4LCJleHAiOjE5NTg3ODM3OTh9.GbOt-qWfLOpw0XqnHDbYv3jBond2q2Sj0wv4Bm3nm2Q"
const API_URL = "https://ybudgskgnibqrqhnolzt.supabase.co/rest/v1/todoLISTEAPP"

const form=document.getElementById("ajouter")
const titre =document.getElementById("titre")
const description =document.getElementById("description")
const dateline=document.getElementById("dateline")
const priorite=document.getElementById("priorite")
const carte=document.getElementById("carte")
const Tache=[]

form.addEventListener("click",(e)=>{
    e.preventDefault()

    let titreSaisi=titre.value
    let descriptionSaisi=description.value
    let datelineSaisi=dateline.value
    let prioriteSaisi=priorite.value

    let newTache={
        titre:titreSaisi,
        description:descriptionSaisi,
        dateline:datelineSaisi,
        priorite:prioriteSaisi
    }
    
    Tache.push(newTache)
    creerCarteTache(newTache,Tache.length)


     //ENVOYER LES DONNEES VERS SUPABASE
     fetch(API_URL, {
        method: "POST",
        headers: {
            apikey: API_KEY,
           // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NDE4NTQyLCJleHAiOjE5NTQ5OTQ1NDJ9.eCHBLBMBj6Dw21vQQX4cYO_4jQqB2sXaqNAECRqL2C0",
            "Content-Type": "application/json",
            Prefer: "return=representation",
        },
        body: JSON.stringify(Tache)
    })

    titre.value=""
    description.value=""
    dateline.value=""
    priorite.value=""

})

const creerCarteTache = (tache,index)=>{
  const id="btn_cart-" + tache.id


    carte.insertAdjacentHTML("afterend",`
    <div class="card w-80 border-light" style="border:solid;" id=${id}>
    <div class="card-body">
      <h5 class="card-title">${tache.titre}</h5>
      <p class="card-text">${tache.description}</p>
      <p class="card-text">${tache.dateline}</p>
      <p class="card-text">${tache.priorite}</p>
      
      <button class="bi bi-pencil btn-outline-secondary" style=" width: 70px; height: 60px;" ></button>
      <button class="bi bi-x-square btn-outline-danger" style="width: 70px; height: 60px;" ></button>
      <button class="bi bi-check-square btn-outline-success" style="width: 70px; height: 60px;"></button>
    </div>
  </div>
    
    `

    )}

    const liste = document.getElementById("lister")
liste.addEventListener("click", (e) => {
    window.location.href = "liste.html"
})
