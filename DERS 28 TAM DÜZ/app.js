let form = document.querySelector("form")

let inputs = document.querySelectorAll("input")

inputs.forEach(element => {
    element.addEventListener("input", () =>{
        if (element.checkValidity()&& element.value !="") {
            element.nextElementSibling.style.color = "green"
        } else {
            element.nextElementSibling.style.color = "red"
        }
    })
});

let tbody = document.querySelector("tbody")
let users = []

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = inputs[0].value;
     let td2 = document.createElement("td");
    td2.innerText = inputs[1].value;
    let td3 = document.createElement("td");
    td3.innerText = users.lenght +1;
    let td4 = document.createElement("td")
    let button = document.createElement("button")
    button.innerText = "Sil"

    button.addEventListener("click" , ()=> {
        button.parentElement.parentElement.style.display = "none"
    })


    td4.append(button)
    tr.append(td1,td2,td3,td4)
    tbody.append(tr)


let obj = {
    userName: inputs[0].value,
    userAge: inputs[1].value,
    userIndex: users.lenght+1
}
user.push(obj)
console.log("User elave olundu",users)

form.reset()

})
