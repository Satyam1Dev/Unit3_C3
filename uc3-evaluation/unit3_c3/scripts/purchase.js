
let data= JSON.parse(localStorage.getItem("purchase")) || []



data.map(function(el){
    let x= document.getElementById("show")
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image;
    let name=document.createElement("h1")
    name.innerText=el.name
    let price=document.createElement("p")
    price.innerText=el.price
    

div.append(img, name ,price)
x.append(div)
})

let data2=JSON.parse(localStorage.getItem("user")) || []

  var total = data2.reduce(function (sum, elem, index, arr) {
    
    return sum + Number(elem.amount);
    
  }, 0);
  let data1=JSON.parse(localStorage.getItem("purchase")) || []

  data1.map(function(el){
    let x=(el.price)
    total=total-x
    console.log(x)
    console.log(total)
    
  })
  document.getElementById("wallet_balance").append(total)

