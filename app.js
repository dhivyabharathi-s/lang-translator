//!java script code ....

let selectTags = document.querySelectorAll("select");
let fromText=document.querySelector(".from-text")
let toText=document.querySelector(".to-text")
// console.log(fromText)
let translate=document.querySelector(".main")
selectTags.forEach((ele,id)=>{
    for (const code in countries) {
        let selected;
        if(id ==0 && code =="en-GB"){
            selected="selected"
        }else if(id ==1 && code =="hi-IN"){
            selected="selected"
        }
    //    console.log(countries[code])

      let option=` <option value="${code}"${selected}>${countries[code]}</option>`
        ele.insertAdjacentHTML('beforeend', option)
    }
})

translate.addEventListener('click', ()=>{
    let text=fromText.value;
    translateFrom=selectTags[0].value,
    translateTo=selectTags[1].value,
    console.log(text,translateFrom,translateTo)


    let apiUrl=`https://api.mymemory.translated.net/get?q=${text} !&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl).then(res=>res.json()).then(data=>{
        console.log(data)
        toText.value=data.responseData.translatedText
    })
})



