const divDom = document.getElementById("div")
const h1Dom = document.getElementById("h1")
const h2Dom = document.getElementById("h2")
const addDom = document.getElementById("add")
const btnDom = document.getElementById("btn")
const btn1Dom = document.getElementById("btn1")
const liDom = document.getElementById("li")


btnDom.addEventListener("click", elemanEkle)
btn1Dom.addEventListener("click", elemalarıSil)

function elemanEkle() {
    if (addDom.value == 0) {
        alert("Lütfen değer giriniz")
    }
    else {
        var li = document.createElement("li")
        li.innerHTML = addDom.value
        li.style.backgroundColor = "gray";
        liDom.appendChild(li)
        addDom.value = "";
    }
    return;
}
function elemalarıSil(){
    
        var secim = confirm("Hepsini Kalıcı Olarak Silmek İstediğinize Emin Misiniz?");
        if (secim == true) {
            
            // eğer onaylanırsa tüm elemanlar silinsin
            var silinecekler = document.querySelectorAll("li");
     
            for (var j = 0; j < silinecekler.length; j++) {
                silinecekler[j].remove();
            }
        }
    
}

