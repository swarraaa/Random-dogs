const dogImageDiv=document.getElementById('dogImage')

const generator=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(json=>{
            dogImageDiv.innerHTML=`<img src='${json.message}'/>`
        })
}

generator() 