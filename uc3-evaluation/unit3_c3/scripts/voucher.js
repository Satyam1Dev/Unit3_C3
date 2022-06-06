let data=JSON.parse(localStorage.getItem("user")) || []

  var total = data.reduce(function (sum, elem, index, arr) {
    
    return sum + Number(elem.amount);
    
  }, 0);

  

const url=" https://masai-vouchers-api.herokuapp.com/api/vouchers"

  async function getData(){
    try{
      let res=await fetch(url);
      
      let users = await res.json();
      append(users[0].vouchers)
      console.log(users[0].vouchers)
      
      

    }
    catch(err){
      console.log("err")
    }
    
  }
  getData();

  
  function append(data){
    data.map(function(el){
      let box=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.image
    let price1=document.createElement("h1");
    price1.innerText=el.price
    let Name=document.createElement("h1");
    Name.innerText=el.name
      let btn=document.createElement("button");
      btn.innerText="Buy"
      btn.addEventListener("click",function(){
        buyproduct(el)
      })

      box.append(img,Name,price1,btn)

      
    let container=document.getElementById("container")
    container.append(box)

    })

    var arr1=[]

    function buyproduct(el){
      arr1.push(el)
      localStorage.setItem("purchase",JSON.stringify(arr1))

       window.location.reload()
    }
  }
  let data1=JSON.parse(localStorage.getItem("purchase")) || []

  data1.map(function(el){
    let x=(el.price)
    total=total-x
    console.log(x)
    console.log(total)
    if(x<=total)
    {
      alert("Hurray! purchase successful")
    }
    else{
      alert("Sorry! insufficient balance")
    }
    
  })
  
  document.getElementById("wallet_balance").append(total)


  