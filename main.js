
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
window.addEventListener("keydown", my_keydown );

block_y=1
block_x=1

var canvas = new fabric.Canvas('myCanvas')

var block_image_height = 400
var block_image_width = 350

var block_image_object="";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:block_y,left:block_x});
        canvas.add(block_image_object);
    });
}


function my_keydown(e)
{

keyPressed = e.keyCode
}
document.getElementById("key_value").innerHTML = keyPressed;
document.getElementById("key_arrow").innerHTML = "";
document.getElementById("key_value_h4").style.display = "inline-block";

	if(keyPressed == '65')
	{
        block_x = 10;
        new_image('red.png')
        console.log('g')
    }