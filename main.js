
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;

new_height = screen.height - 300;
new_width = screen.width - 70;

if (width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    //Addictonal Activity start
    //color = document.getElementById("color").value;
   // width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends
  
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
    
     ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

mouseevent = "";
var last_x;
var last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 color = "black";
 width = "25";

canvas.addEventListener("mousedown", mouse_d);

function mouse_d(e){
    mouseevent = "mousedown";
    
}

canvas.addEventListener("mouseup", mouse_u);

function mouse_u(e){
    mouseevent = "mouseup";
    
}
canvas.addEventListener("mouseleave", mouse_l);

function mouse_l(e){
    mouseevent = "mouseleave";
    
}
canvas.addEventListener("mousemove", mouse_m);

function mouse_m(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = width;
        
        console.log("Last position of x and y is = ");
        console.log ("x=" + last_x + "y=" + last_y);

        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y is = ");
        console.log ("x=" + current_x + "y=" + current_y);

         ctx.lineTo(current_x, current_y);

         ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
    
}