console.log('%c HI', 'color: firebrick')

let breedArray = [];

document.addEventListener("DOMContentLoaded", function(){
    const dropDown = document.body.querySelector("#breed-dropdown");
   

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(slapDogOnTheDOM)


    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(addBreedList)

    dropDown.addEventListener("change", function(event){
        let li = document.querySelectorAll("li").forEach(function(singleLi){
            singleLi.remove()
        })

        breedArray.filter(breed => breed.startsWith(event.target.value))
        .forEach(function(breed){

            const breedLi = document.createElement('li')
            
            breedLi.innerHTML = breed
            document.getElementById("dog-breeds").append(breedLi)
            
            breedLi.addEventListener("click", function(){
                breedLi.style.color = "pink";
            })
        });
    })
});

function slapDogOnTheDOM(dogJson){

    dogJson.message.forEach(function(dog){
    const dogDiv = document.createElement('div')

    dogDiv.innerHTML = `
      <img src="${ dog }" />`
      document.getElementById("dog-image-container").append(dogDiv)
    });
  };

function addBreedList(breedJson){
   
    Object.keys(breedJson.message)
        .forEach(function(breed){

            const breedLi = document.createElement('li')
            breedArray.push(breed)
            breedLi.innerHTML = breed
            document.getElementById("dog-breeds").append(breedLi)
            
            breedLi.addEventListener("click", function(){
                breedLi.style.color = "pink";
            })
        });
}

