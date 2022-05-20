let fd_demo = document.getElementById("flex-direction-demo");
let fd_add_b = document.querySelector("#add-flex-item");
let fd_flex_row_b = document.querySelector("#flex-row");
let fd_flex_row_inv_b = document.querySelector("#flex-row-inv");
let fd_flex_col_b = document.querySelector("#flex-col");
let fd_flex_col_inv_b = document.querySelector("#flex-col-inv");
let fd_template = document.getElementsByTagName("template")[0];

let fd_num_added = 0;
const fd_max_additions = 20;

fd_add_b.addEventListener('click', () => {
    if(fd_num_added >= fd_max_additions) return;
    let clone = fd_template.content.cloneNode(true);
    fd_demo.appendChild(clone);

    fd_num_added++;
})

fd_flex_row_b.addEventListener('click', () => {
    fd_demo.style.flexDirection = "row";
})
fd_flex_row_inv_b.addEventListener('click', () => {
    fd_demo.style.flexDirection = "row-reverse";
})
fd_flex_col_b.addEventListener('click', () => {
    fd_demo.style.flexDirection = "column";
})
fd_flex_col_inv_b.addEventListener('click', () => {
    fd_demo.style.flexDirection = "column-reverse";
})
