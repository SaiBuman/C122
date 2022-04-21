x = 0 ;
y = 0 ;
draw_circle = "";
draw_rect = ""
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
 function start() {
     document.getElementById("status").innerHTML = "System is listening please speak ";
     recognition.start();
 }

 recognition.onresult = function(event) {
     console.log(event);
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("status").innerHTML = "The speech has been recognised as " + content ;
     if (content == "circle") {
         x=Math.floor(Math.random()*900);
         y=Math.floor(Math.random()*600);
         draw_circle = "set";
         document.getElementById("status").innerHTML = "Started drawing circle"
     }

     if (content == "rectangle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        draw_rect = "set";
        document.getElementById("status").innerHTML = "Started drawing rectangle"
    }
 }

  function setup() {
      canvas =createCanvas(900,600)
  }

  function draw() {
      if (draw_circle == "set") {
          radius = 100;
          circle(x,y,radius);
          document.getElementById("status").innerHTML = "Circle is drawn";
          draw_circle = "";
      }

      if (draw_rect == "set") {
        w= 200;
        h= 100 ;
        rect(x,y,w,h);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
  }