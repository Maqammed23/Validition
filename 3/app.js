// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/users",
//     type: "GET",

//     success: function (data) {
//         console.log(data)
//     },
//     error:function (error) {
//          console.log(error)
//     }
// })

// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/photos?albumId=1",
//     type: "GET",

//     success: function (data) {
//         console.log(data)
//     },
//     error:function (error) {
//          console.log(error)
//     }
// })
// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/todos?userId=6",
//     type: "GET",

//     success: function (data) {
//         console.log(data)
//     },
//     error:function (error) {
//          console.log(error)
//     }
// })
$.ajax({
    url:  "https://jsonplaceholder.typicode.com/comments",
    type: "GET",

    success: function (data) {
        console.log(data)
        data.forEach(element => {
            let li = document.createElement("li")
            li.innerText = element.email
            $("ul").append(li)
        });
    },
    error:function (error) {
         console.log(error)
    }
})


