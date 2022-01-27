var dr = document.querySelector("#dreptunghi")

dr.addEventListener("click", minimize)

async function minimize() {
    for(let i = 10; i >=0; i--){
        // aici asteptam 20 ms:
        await new Promise(r => setTimeout(r, 30))
        dr.style. height = i + "em"
    }
}