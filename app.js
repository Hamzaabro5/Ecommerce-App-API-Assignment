const div = document.querySelector(`div`)

axios(`https://fakestoreapi.com/products`)
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        
        <hr/>

        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <img src="${item.image}" width = "200" alt="">
        <h4> ${item.title}</h4><br/>
        <h5>Price: ${item.price}$</h5><br/>
        <p><b>Description</b>:<br/> ${item.description}</p>
        </div>
        </div>
        `
    })

}).catch((err)=>{
    console.log(err);
})
