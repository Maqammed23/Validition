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
// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/comments",
//     type: "GET",

//     success: function (data) {
//         console.log(data)
//         data.forEach(element => {
//             let li = document.createElement("li")
//             li.innerText = element.email
//             $("ul").append(li)
//         });
//     },
//     error:function (error) {
//          console.log(error)
//     }
// })


// let array = [3,8,5,6,12]
// if ( arr1 = array%2 == 0) {
//     console.log(arr1)
// } else {
//     console.log(array)
// }

// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/posts/1",
//     type: "PUT",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     data: JSON.stringify({
//         tittle: "SALAM",
//         body: "SALAM1"
//     }),
//     succes: function (data) {
//         console.log(data)
//     },

//     error:function (error) {
//          console.log(error)
//     }
// })
// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/posts/1",
//     type: "PATCH",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     data: JSON.stringify({
//         tittle: "samkvsgfad",
        
//     }),
//     succes: function (data) {
//         alert(data)
//     },

//     error:function (error) {
//          alert(error)
//     }
// })

// $.ajax({
//     url:  "https://jsonplaceholder.typicode.com/posts/1",
//     type: "DELETE",
   
//     succes: function (data) {
//       console.log("Post silindi")
//     },

//     error:function (error) {
//          console.log("Post silinmedi")
//     }
// })