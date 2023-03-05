const userInput = document.querySelector("input");
const Appcontainer = document.querySelector(".wrapper")
const btn = document.querySelector("button")
let inputValue;

function callback(){
    inputValue = userInput.value
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      `
    https://restcountries.com/v3.1/name/${inputValue}
    `
    );
    request.send();
    request.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      
       if(data){
        const html = `<div class="wrapper">
        <div class="content">
        <img src=${data.flags.png} alt=${data.flags.alt} />
        <div class="info">
          <h3>country: <span>${data.name.common}</span></h3>
          <h3>capital: <span>${data.capital[0]}</span></h3>
          <h3>continent: <span>${data.continents[0]}</span></h3>
          <h3>language: <span>${Object.values(data.languages).join()}</span></h3>
          <h3>population: <span>${data.population}</span></h3>
          <h3>currencies: <span>${ Object.values(data.currencies)[0].name} ${Object.values(data.currencies)[0].symbol}</span></h3>
          <h3>latlng: <span>${data.capitalInfo.latlng.join()}</span></h3>
        </div>
        </div
      </div>`;
        Appcontainer.insertAdjacentHTML("afterbegin",html)  
       }else{
        alert(userInput.value +" " + "is not a country name")
       }
      
      
    });
}
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // inputValue = userInput.value;
    callback()
  }
});
btn.addEventListener("click", callback)