//str = "A"
//console.log(str.codePointAt(0))
//console.log(String.fromCharCode(65))

//cipiher
document.querySelector("#cipher").onclick = () => {
    let clearText = document.querySelector(".clearPart textarea")
    let option = document.querySelector(".clearPart select")
    let key = document.querySelector(".clearPart input")
    text = clearText.value
    results = ""
    if(key.value != ""){
        if(option.value == 1 ){
            for(i = 0 ; i < text.length ; i++ ){
                    code = text.codePointAt(i)
                    if(code >= 97 && code <= 122){
                        newValue = code + parseInt(key.value)
                        if(newValue >122)
                            newValue = newValue%122 + 96
                        results += String.fromCharCode(newValue)
                    }else if (code >= 65 && code <= 90){
                        newValue = code + parseInt(key.value)
                        if(newValue >90)
                            newValue = newValue%122 + 64
                        results += String.fromCharCode(newValue)
                    }else
                        results += text[i]    
            }
            key.classList.remove("empty")
            document.querySelector(".cipherPart textarea").value = results
        }
    }else
        key.classList.add("empty")
}


// decipher
document.querySelector("#decipher").onclick = () => {
    let cipherText = document.querySelector(".cipherPart textarea")
    let option = document.querySelector(".cipherPart select")
    let key = document.querySelector(".cipherPart input")
    text = cipherText.value
    results = ""
    if(key.value != ""){
        if(option.value == 1 ){
            for(i = 0 ; i < text.length ; i++ ){
                    code = text.codePointAt(i)
                    if(code >= 97 && code <= 122){
                        newValue = code - parseInt(key.value)
                        if(newValue < 97)
                            newValue =123 - (97- newValue )
                        results += String.fromCharCode(newValue)
                    }else if (code >= 65 && code <= 90){
                        newValue = code - parseInt(key.value)
                        if(newValue <65)
                            newValue =91 - (65- newValue )
                        results += String.fromCharCode(newValue)
                    }else
                        results += text[i]    
            }
            key.classList.remove("empty")
            document.querySelector(".clearPart textarea").value = results
        }
    }else
        key.classList.add("empty")
}
