// $.ajax({
//     url: '/testapi',
//     dataType: 'json',
//     async: true,
//     success: function (data) {
//         console.log(data.data.name);
//     }
// });

// document.getElementById("fa").addEventListener("click",function () {
//     console.log("fa bh");
// }, true);
// document.getElementById("son").addEventListener("click",function () {
//     console.log("son bh");
// }, true);
// document.getElementById("fa").addEventListener("click",function () {
//     console.log("fa mp");
// }, false);
// document.getElementById("son").addEventListener("click",function () {
//     console.log("son mp");
// }, true);
// document.getElementById("goHome").onclick =  function () {
//     console.log("click");
//     // return false
//     // event.preventDefault();
//     event.stopPropagation();
// }
// function fn (type) {
//     console.log("this is " + type)
// }
// // $("#goHome").live("click",function () {
// //     console.log("this is live")
// // });
// $("#fa").delegate("#son","click",function de () {
//     console.log("this is delegate")
// });
// $("#fa").on("click","#son",function o () {
//     console.log("this is on")
// });
document.getElementById("entranceSearch").addEventListener("keydown", function () {
    console.log(this);
    console.log(event);
});

