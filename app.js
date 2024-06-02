const div = document.querySelector(`div`)

axios(`https://fakestoreapi.com/products`)
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        
        <hr/>

        <div class="card m-5" style="width: 24rem;">
        <div class="card-body p-5 border border-info border-2 ">
        <img class="ms-5" src="${item.image}" width ="150" alt="">
        <h4 class="mt-5"> ${item.title}</h4><br/>
        <h5>Price: ${item.price}$</h5><br/>
        <p><b>Description</b>:<br/> ${item.description}</p>
        </div>
        </div>
        `
    })

}).catch((err)=>{
    console.log(err);
})
