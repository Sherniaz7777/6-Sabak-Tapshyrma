const ul=document.querySelector('ul')





const _baseUrl='https://restcountries.com/v3.1/all'

function getUsers() {
    fetch(_baseUrl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        showUssers(data)
    })
}
getUsers()


function showUssers(arr) {
    ul.innerHTML=''
    for (const userrs of arr) {
        ul.innerHTML+=`
        
        <li>
        <img src="${userrs.flags.png}" />
        
        <h2>Аты: ${userrs.name.common}</h2>
        <h2>Борбор шаары :${userrs.capital}</h2>
        <h2>Калктын саны: ${userrs.population}</h2>
        
        
        </li>`
    }
}
// 