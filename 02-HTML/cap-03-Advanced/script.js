// Atributos

let image = document.getElementById("like")

image.addEventListener("click", function () {
    // image.src = "./assets/pc2.jpg"

    let lastImage = image.getAttribute("src")
    image.setAttribute("src", "./assets/pc2.jpg")

    console.log(lastImage)
})

let listaAtributo = document.getElementById("listaAtributo")
let numAtribute = parseInt(listaAtributo.getAttribute("data-num"))

// colocar o atributo data-num permite usar o .dataset.num contem o valor do atributo
// Substitui o getAtribute
console.log(listaAtributo.dataset.num)

let conteudo = ""

for (let i = 0; i < numAtribute; i++) {
    conteudo += "<li>" + i + "</li>"
}

listaAtributo.innerHTML = conteudo

// Audio/Video

// Metodos

// addTextTrack()	        Adds a new text track to the audio/video
// canPlayType()	        Checks if the browser can play the specified audio/video type
// load()	                Re-loads the audio/video element
// play()	                Starts playing the audio/video
// pause()	                Pauses the currently playing audio/video

// Atributos

// audioTracks	            Returns an AudioTrackList object representing available audio tracks
// autoplay	                Sets or returns whether the audio/video should start playing as soon as it is loaded
// buffered	                Returns a TimeRanges object representing the buffered parts of the audio/video
// controller	            Returns the MediaController object representing the current media controller of the audio/video
// controls	                Sets or returns whether the audio/video should display controls (like play/pause etc.)
// crossOrigin	            Sets or returns the CORS settings of the audio/video
// currentSrc	            Returns the URL of the current audio/video
// currentTime	            Sets or returns the current playback position in the audio/video (in seconds)
// defaultMuted	            Sets or returns whether the audio/video should be muted by default
// defaultPlaybackRate	    Sets or returns the default speed of the audio/video playback
// duration	                Returns the length of the current audio/video (in seconds)
// ended	                Returns whether the playback of the audio/video has ended or not
// error	                Returns a MediaError object representing the error state of the audio/video
// loop	                    Sets or returns whether the audio/video should start over again when finished
// mediaGroup	            Sets or returns the group the audio/video belongs to (used to link multiple audio/video elements)
// muted	                Sets or returns whether the audio/video is muted or not
// networkState     	    Returns the current network state of the audio/video
// paused	                Returns whether the audio/video is paused or not
// playbackRate	            Sets or returns the speed of the audio/video playback
// played	                Returns a TimeRanges object representing the played parts of the audio/video
// preload	                Sets or returns whether the audio/video should be loaded when the page loads
// readyState	            Returns the current ready state of the audio/video
// seekable	                Returns a TimeRanges object representing the seekable parts of the audio/video
// seeking	                Returns whether the user is currently seeking in the audio/video
// src	                    Sets or returns the current source of the audio/video element
// startDate	            Returns a Date object representing the current time offset
// textTracks	            Returns a TextTrackList object representing the available text tracks
// videoTracks	            Returns a VideoTrackList object representing the available video tracks
// volume	                Sets or returns the volume of the audio/video

let videoJS = document.getElementById("videoJS")

function retroceder() {
    videoJS.currentTime -= 15;
}

function avancar(){
    videoJS.currentTime += 15;
}

function diminuirVelocidade(){
    videoJS.playbackRate -= 0.1;
}

function aumentarVelocidade(){
    videoJS.playbackRate += 0.1;
}

function play(){
    videoJS.play();
}

function stop(){
    videoJS.pause();
    videoJS.currentTime = 0
}

/* animação HTML */

let jogador = document.getElementById("jogador");

let xInicial = 0
let yInicial = 0

function moverJogadorPara(x, y) {
    let posX = x + "px"
    let posY = y + "px"

    jogador.style.top= posX
    jogador.style.left= posY
}

setInterval(function () {
    
    moverJogadorPara(xInicial++, yInicial++)

}, 500);

// Canvas

// Colors, Styles, and Shadows

// Property	

// fillStyle	            Sets or returns the color, gradient, or pattern used to fill the drawing
// strokeStyle	            Sets or returns the color, gradient, or pattern used for strokes
// shadowColor	            Sets or returns the color to use for shadows
// shadowBlur	            Sets or returns the blur level for shadows
// shadowOffsetX	        Sets or returns the horizontal distance of the shadow from the shape
// shadowOffsetY	        Sets or returns the vertical distance of the shadow from the shape

// Method

// createLinearGradient()	Creates a linear gradient (to use on canvas content)
// createPattern()	        Repeats a specified element in the specified direction
// createRadialGradient()	Creates a radial/circular gradient (to use on canvas content)
// addColorStop()	        Specifies the colors and stop positions in a gradient object

// Line Styles

// Property

// lineCap	                Sets or returns the style of the end caps for a line
// lineJoin	                Sets or returns the type of corner created, when two lines meet
// lineWidth	            Sets or returns the current line width
// miterLimit	            Sets or returns the maximum miter length

// Rectangles

// Method	

// rect()	                Creates a rectangle
// fillRect()	            Draws a "filled" rectangle
// strokeRect()	            Draws a rectangle (no fill)
// clearRect()	            Clears the specified pixels within a given rectangle

// Paths

// Method	

// fill()	                Fills the current drawing (path)
// stroke()	                Actually draws the path you have defined
// beginPath()	            Begins a path, or resets the current path
// moveTo()	                Moves the path to the specified point in the canvas, without creating a line
// closePath()	            Creates a path from the current point back to the starting point
// lineTo()	                Adds a new point and creates a line to that point from the last specified point in the canvas
// clip()	                Clips a region of any shape and size from the original canvas
// quadraticCurveTo()	    Creates a quadratic Bézier curve
// bezierCurveTo()	        Creates a cubic Bézier curve
// arc()	                Creates an arc/curve (used to create circles, or parts of circles)
// arcTo()	                Creates an arc/curve between two tangents
// isPointInPath()	        Returns true if the specified point is in the current path, otherwise false

// Transformations

// Method	

// scale()	                Scales the current drawing bigger or smaller
// rotate()	                Rotates the current drawing
// translate()	            Remaps the (0,0) position on the canvas
// transform()	            Replaces the current transformation matrix for the drawing
// setTransform()	        Resets the current transform to the identity matrix. Then runs transform()

// Text

// Property	
// font	                    Sets or returns the current font properties for text content
// textAlign	            Sets or returns the current alignment for text content
// textBaseline	            Sets or returns the current text baseline used when drawing text

// Method	

// fillText()	            Draws "filled" text on the canvas
// strokeText()	            Draws text on the canvas (no fill)
// measureText()	        Returns an object that contains the width of the specified text

// Image Drawing

// Method	

// drawImage()	            Draws an image, canvas, or video onto the canvas

// Pixel Manipulation

// Property	

// width	                Returns the width of an ImageData object
// height	                Returns the height of an ImageData object
// data	                    Returns an object that contains image data of a specified ImageData object

// Method	

// createImageData()	    Creates a new, blank ImageData object
// getImageData()	        Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
// putImageData()	        Puts the image data (from a specified ImageData object) back onto the canvas

// Compositing

// Property	

// globalAlpha	            Sets or returns the current alpha or transparency value of the drawing
// globalCompositeOperation	Sets or returns how a new image are drawn onto an existing image

// Other

// Method	

// save()	                Saves the state of the current context
// restore()	            Returns previously saved path state and attributes
// createEvent()	 
// getContext()	 
// toDataURL()


let telaCanvas = document.getElementById("tela");
let ctx = telaCanvas.getContext("2d");

Linha

ctx.moveTo(0,0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineWidth = 5;
ctx.strokeStyle = "blue"
ctx.stroke();

// Retangulo 1 

// ctx.fillStyle = "blue"
// ctx.fillRect(10, 10, 100, 200)

// Retangulo 2 

// ctx.strokeStyle = "red"
// ctx.strokeRect(10, 10, 100, 200)

// Retangulo 3 

// ctx.rect(10, 10, 100, 200)
// ctx.strokeStyle = "blue"
// ctx.strokeStyle = "red"
// ctx.fill();
// ctx.stroke();

// ctx.clearRect(20,20,30,30)

// Iniciar e finalizar caminho

// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue"
// ctx.moveTo(10,10)
// ctx.lineTo(200,100)
// ctx.stroke();

// ctx.beginPath();
// ctx.lineWidth = 7;
// ctx.strokeStyle = "red"
// ctx.moveTo(50,10)
// ctx.lineTo(200,200)
// ctx.lineTo(200,300)
// ctx.cloePath();
// ctx.stroke();


// Circulo

// let circle = {
//     x: 100,
//     y: 100,
//     raio: 100,
//     inicio: 0,
//     fim: 0
// }

// function drawCircle(c) {
//     ctx.beginPath();
//     ctx.lineWidth = 5;
//     ctx.strokeStyle = "red"
//     ctx.fillStyle = "blue"
    
//     ctx.arc(c.x,c.y, c.raio, c.inicio, c.fim)
    
//     ctx.fill();
//     ctx.stroke();
// }

// setInterval(function () {
//     if (circle.fim < 2 * Math.PI) {
//         circle.fim += 1;
//     }
//     drawCircle(circle);
// }, 150)

// Imagem 1

// let img = document.getElementById()
// ctx.drawImage(img, 20, 20)

// Imagem 2

// let img = new Image()
// img.src = ""

// img.onload = desenharImg 

// function desenharImg(){
//     ctx.drawImage(img, 20, 20)
// }
