const div = document.querySelector(`div`)

fetch(`https://fakestoreapi.com/products`)
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        <img src="${item.image}" width = "200" alt="">
        <h1>Title: ${item.title}</h1>
        <h1>Price: ${item.price}</h1>
        <p>Description: ${item.description}</p>
        <hr/>
        `
    })

}).catch((err)=>{
    console.log(err);
})
