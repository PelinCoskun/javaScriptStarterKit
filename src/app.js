console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)
 
//const euroDun=11.2  //const sabit bi şey atayınca başka bi şey atanamaz
//euroDun=11
//console.log(euroDun)

//array
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
console.log(konutKredileri)
//xfbzb