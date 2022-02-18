const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMjA3Nzk4LCJleHAiOjE5NTg3ODM3OTh9.GbOt-qWfLOpw0XqnHDbYv3jBond2q2Sj0wv4Bm3nm2Q"
const API_URL = "https://ybudgskgnibqrqhnolzt.supabase.co/rest/v1/todoLISTEAPP"

const form=document.getElementById("ajouter")
const titre =document.getElementById("titre")
const formulaire=document.getElementById("formulaire")
const description =document.getElementById("description")
const dateline=document.getElementById("dateline")
const priorite=document.getElementById("priorite")
const carte=document.getElementById("carte")
const bouttonModifier=document.getElementById("modifier")
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
    const id = new Date().getTime().toString()
    
    const btnModifier = "btn_modifier-" + tache.creerAjout
    const btnTacheFin = "btn_supprimer-" + id
   // const idCarte= "btn_cart-" + id
  
   
    carte.insertAdjacentHTML("afterend",`
    <div class="card w-80 border-light" style="border:solid;" id="${id}">
    <div class="card-body">
      <h5 class="card-titre" >${tache.titre}</h5>
      <p class="card-text">${tache.description}</p>
      <p class="card-texte">${tache.dateline}</p>
      <p class="card-textes">${tache.priorite}</p>
      
      <button class="bi-pencil" id=${btnModifier}></button>
     
      <button class="bi-check-square" id=${btnTacheFin}></button>
    </div>
  </div><br>
  
    
    `

    )
      
     const idCarte=document.getElementById(id)
      const modifierBtn=document.getElementById(btnModifier)
      const tacheFinBtn=document.getElementById(btnTacheFin)
      
        console.log(tacheFinBtn);

    //    supprimerBtn.addEventListener("click",(e)=>{
    //      e.preventDefault()
    //     let carte=cartId
    //     Tache.splice(index,1)
    //    })

    modifierBtn.addEventListener("click", (e) => {
        e.preventDefault()
        alert("je suis la")
        console.log(idCarte);
        ajouter.classList.add('d-none')
        bouttonModifier.classList.remove('d-none')
        
        //<button type="button">Modifier</button>
        modifierBtn.dataset.idCarte= id
        console.log(modifierBtn);
        console.log(id);
        //<button type="button" data-id="3">Modifier</button>
        modifierBtn.dataset.index = index
        //<button type="button" data-id="3" data-index="4">Modifier</button>
        //bouttonModifier.dataset
        //{id:3,index:4}

            
        //alert("on est le")
        const Titre = idCarte.querySelector(".card-titre").textContent
        
      
        const Description = idCarte.querySelector(".card-text").textContent
      
        const Dateline =idCarte.querySelector(".card-texte").textContent
       
        const Priorite = idCarte.querySelector(".card-textes").textContent
       
        titre.value=Titre
        description.value=Description
        dateline.value=Dateline
        priorite.value=Priorite
    
        const card = document.getElementById(id)
            console.log(card);
        
        bouttonModifier.addEventListener("click", (e) => {
            e.preventDefault()
            alert("maguiniii")
           
            const id = e.target.dataset.id
            const index = e.target.dataset.index
           
             
              
        
            //Recuperer les elements de la carte  
            const ancientitre = card.querySelector(".card-titre")
            console.log(ancientitre);
            const anciendescription = card.querySelector(".card-text")
            const anciendateline = card.querySelector(".card-texte")
            const ancienpriorite = card.querySelector(".card-texte")
            //Mettre à jour la carte
           
            ancientitre.textContent = titre.value
            anciendescription.textContent = description.value
            anciendateline.textContent=dateline.value
            ancienpriorite.textContent = priorite.value
            
            // Tache[index].titre = titre.value
            // Tache[index].description =description.value
            // Tache[index].dateline = dateline.value
            // Tache[index].priorite = priorite.value
        
        
            //reset permet de vider le formulaire
            formulaire.reset()
            e.target.classList.add("d-none")
            ajouter.classList.remove("d-none")
        
        })
    })
       
    tacheFinBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        alert("finTache")
        idCarte.style.background="#255A01"
       
        modifierBtn.style.visibility="hidden"

        
    })
}
            const liste = document.getElementById("lister")
            liste.addEventListener("click", (e) => {
                window.location.href = "liste.html"
            })



    function verifier() {
    
        if(titre=""){
            alert("veuillez remplir toute les champs")
        }
        

        let titreSaisi=titre.value
        let descriptionSaisi=description.value
        let datelineSaisi=dateline.value
        let prioriteSaisi=priorite.value
    
        console.log("titreSaisi = " + titre.value);
        console.log("description = " + description.value);
        console.log("dateline = " + dateline.value);
        console.log("priorite = " + priorite.value);
    
        localStorage.setItem("titre", titreSaisi)
        localStorage.setItem("description", descriptionSaisi)
        localStorage.setItem("dateline", datelineSaisi)
        localStorage.setItem("priorite", prioriteSaisi)
    
        localStorage.getItem("titre")
        localStorage.getItem("description")
        localStorage.getItem("dateline")
        localStorage.getItem("priorite")
  
    
    }
    