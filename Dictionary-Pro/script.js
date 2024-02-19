const url= `https://api.dictionaryapi.dev/api/v2/entries/en/`
const result = document.getElementById("result")
const btn = document.getElementById("search-btn")

btn.addEventListener("click", ()=>{
    let inpWord = document.getElementById("inp").
    value;

    fetch (`${url} ${inpWord}`)
        .then (response => response.json())
        .then ((data) => {
            console.log(data)
            result. innerHTML=`
            <div class="word">
                <h3>${inpWord}</h3>
                </div>

                <div class="detailes">
                    <p>${data[0].meanings[0].partOfSpeech} </p>
                    <p class="p1"><strong>Synonyms:</strong>  ${data[0].meanings[0].synonyms}</p>
                </div>
                
                <p class="word-meaning"><strong>Definition:</strong>  ${data[0].meanings[0].definitions[0].definition}
                </p>`
            
        });

});








