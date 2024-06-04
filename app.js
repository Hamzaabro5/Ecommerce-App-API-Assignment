const div = document.querySelector(`div`)





// Rendering Data

function renderData() {
    
    div.innerHTML = ``
    
    axios(`https://fakestoreapi.com/products`)
    .then((res)=>{
        console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        
        <hr/>
        
        <div class="card m-5" style="width: 24rem;">
        <div class="card-body p-5 border border-info border-2 ">
        <img class="ms-5" src="${item.image}" width ="200" height ="220" alt="">
        <h4 class="mt-5"> ${item.title}</h4><br/>
        <h5>Price: ${item.price}$</h5><br/>
        <p><b>Description</b>:<br/> ${item.description}</p><br/>
        <h6><i class="fa-regular fa-star"></i> Item Rating: ${item.rating.rate} </h6>
        </div>
        </div>
        `
    })
    
}).catch((err)=>{
    console.log(err);
})
}

renderData()

// Rendering Data




// Filtering Data

function filterBtn(btn) {

    console.log(btn.innerHTML);

    div.innerHTML = ``

    axios(`https://fakestoreapi.com/products`)
    .then((res)=>{
        console.log(res.data);
        res.data.filter(item => item.category === btn.innerHTML).map((item)=>{
            div.innerHTML += `
            <hr/>
            
            <div class="card m-5" style="width: 24rem;">
            <div class="card-body p-5 border border-info border-2 ">
        <img class="ms-5" src="${item.image}" width ="200" height ="220" alt="">
        <h4 class="mt-5"> ${item.title}</h4><br/>
        <h5>Price: ${item.price}$</h5><br/>
        <p><b>Description</b>:<br/> ${item.description}</p><br/>
        <h6><i class="fa-regular fa-star"></i> Item Rating: ${item.rating.rate} </h6>
        </div>
        </div>
        `
    })
    
}).catch((err)=>{
    console.log(err);
})
}

// Filtering Data
