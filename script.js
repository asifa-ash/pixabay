const btn = document.getElementById('btn');

let index = 0;
let state;

var colors = ["btn-secondary", "btn-success", "btn-danger", "btn-warning", "btn-info", "btn-light", "btn-dark"];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.className = `btn `+ colors[index++]
    console.log(btn)
    
    if(index==colors.length-1){
        index = 0
    }
})





