fetch('../data/data.json')
.then(res=>{
    return res.json();
})
.then((data)=> {
    let laptop = data.laptop;
    console.table(laptop);
})