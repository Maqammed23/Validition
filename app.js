let inputs = document.querySelectorAll("input")

inputs.forEach(element => {
    element.addEventListener("input",()=>{
        if (element.checkValidity()&&element.value!="") {
            element.nextElementSibling.style.color = "green"
        } else {
            element.nextElementSibling.style.color = "red"
        }
    })
})


let tbody = document.querySelectorAll("tbody")

function addValidition() {
    let inputs = document.querySelectorAll("input")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = inputs[0].value
    let td2 = document.createElement("td")
    td2.innerText = inputs[1].value
     let td3 = document.createElement("td")
    td3.innerText = inputs[2].value
      let td4 = document.createElement("td")
    let img = document.getElementById("buttoniki")
    img = inputs[2].value
    tr.append(td1,td2,td3,td4)
    tbody.append(tr)
    
}

