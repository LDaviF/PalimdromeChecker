
/*
function palindrome(){
    document.getElementById('text').innerHTML = "True";
}
*/

function palindrome() {
    let Finput = window.document.getElementById('word');
    var str = String(Finput.value)
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "");
    cleanedStr = cleanedStr.toLowerCase()
    let str2 = cleanedStr.split("")
    str2.reverse()
    str2 = str2.join("")
    if(cleanedStr == str2){
        document.getElementById('text').innerHTML = "True";
    } else {
        return document.getElementById('text').innerHTML = "False";
    }
}

