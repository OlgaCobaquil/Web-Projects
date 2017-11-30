/*Olga Cobaquil, 13020*/


var mensajes = document.getElementById("message");
var chat = document.getElementById("chat");


getfun();
chat.scrollTop = chat.scrollHeight;

mensajes.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      console.log("enter");
      console.log()
      make(e);
    }
});

function make(e) {
    dopost()
    getfun();
}
function getfun(){
  $.getJSON("http://52.88.26.79:7000/").done(function(data){
    for(var i = data.length-1;i>-1;i--){
        /*console.log(data[i].username)
        console.log(data[i].chatmessage)*/
        chat.innerHTML += '<div class="messages"> <p>'+data[i].username +':</p> ' + data[i].chatmessage + '</div>'

    }

  });

}

function dopost(){
  $.post("http://52.88.26.79:7000/",{
    "username":"Olga C",
    "chatmessage":document.getElementById('message').value
  })
 chat.innerHTML = "";
  document.getElementById('message').value=""};




