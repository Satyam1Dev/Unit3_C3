function student(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=am;
  }
  document.querySelector("form").addEventListener("submit",myfunction);
  let arr=JSON.parse(localStorage.getItem("user")) || [];
  function myfunction(){
    event.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value; 
    // console.log(name,email,address,amount)
  
   let s1=new student(name,email,address,amount);
   arr.push(s1);

   localStorage.setItem("user", JSON.stringify(arr))


   
  window.location.reload()
  }

  //**************************** */
  
  let data=JSON.parse(localStorage.getItem("user")) || []

  var total = data.reduce(function (sum, elem, index, arr) {
    
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


  // console.log(total);
  // document.getElementById("wallet").append(total)

