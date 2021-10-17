// windows tem mais objetos/metodos bom revisar
// Digitar "Window" no comando

// Propriedades

// closed                   Returns a Boolean value indicating whether a window has been closed or not
// console	                Returns a reference to the Console object, which provides methods for logging information to the browser's console (See Console object)
// defaultStatus	        Sets or returns the default text in the statusbar of a window
// document	                Returns the Document object for the window (See Document object)
// frameElement	            Returns the <iframe> element in which the current window is inserted
// frames	                Returns all <iframe> elements in the current window
// history	                Returns the History object for the window (See History object)
// innerHeight	            Returns the height of the window's content area (viewport) including scrollbars
// innerWidth	            Returns the width of a window's content area (viewport) including scrollbars
// length	                Returns the number of <iframe> elements in the current window
// localStorage	            Allows to save key/value pairs in a web browser. Stores the data with no expiration date
// location	                Returns the Location object for the window (See Location object)
// name	                    Sets or returns the name of a window
// navigator	            Returns the Navigator object for the window (See Navigator object)
// opener	                Returns a reference to the window that created the window
// outerHeight	            Returns the height of the browser window, including toolbars/scrollbars
// outerWidth	            Returns the width of the browser window, including toolbars/scrollbars
// pageXOffset	            Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
// pageYOffset	            Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
// parent	                Returns the parent window of the current window
// screen	                Returns the Screen object for the window (See Screen object)
// screenLeft	            Returns the horizontal coordinate of the window relative to the screen
// screenTop	            Returns the vertical coordinate of the window relative to the screen
// screenX      	        Returns the horizontal coordinate of the window relative to the screen
// screenY	                Returns the vertical coordinate of the window relative to the screen
// sessionStorage	        Allows to save key/value pairs in a web browser. Stores the data for one session
// scrollX	                An alias of pageXOffset
// scrollY	                An alias of pageYOffset
// self	                    Returns the current window
// status	                Sets or returns the text in the statusbar of a window
// top	                    Returns the topmost browser window

// Metodos

// alert()	                Displays an alert box with a message and an OK button
// atob()	                Decodes a base-64 encoded string
// blur()	                Removes focus from the current window
// btoa()	                Encodes a string in base-64
// clearInterval()	        Clears a timer set with setInterval()
// clearTimeout()	        Clears a timer set with setTimeout()
// close()	                Closes the current window
// confirm()	            Displays a dialog box with a message and an OK and a Cancel button
// focus()	                Sets focus to the current window
// getComputedStyle()	    Gets the current computed CSS styles applied to an element
// getSelection()	        Returns a Selection object representing the range of text selected by the user
// matchMedia()	            Returns a MediaQueryList object representing the specified CSS media query string
// moveBy()	                Moves a window relative to its current position
// moveTo()	                Moves a window to the specified position
// open()	                Opens a new browser window
// print()	                Prints the content of the current window
// prompt()	                Displays a dialog box that prompts the visitor for input
// requestAnimationFrame()	Requests the browser to call a function to update an animation before the next repaint
// resizeBy()	            Resizes the window by the specified pixels
// resizeTo()	            Resizes the window to the specified width and height
// scroll()	                Deprecated. This method has been replaced by the scrollTo() method.
// scrollBy()	            Scrolls the document by the specified number of pixels
// scrollTo()	            Scrolls the document to the specified coordinates
// setInterval()	        Calls a function or evaluates an expression at specified intervals (in milliseconds)
// setTimeout()	            Calls a function or evaluates an expression after a specified number of milliseconds
// stop()	                Stops the window from loading

// document.propriedade

// activeElement	        Returns the currently focused element in the document
// anchors	                Returns a collection of all <a> elements in the document that have a name attribute
// applets	                Returns a collection of all <applet> elements in the document
// baseURI	                Returns the absolute base URI of a document
// body	                    Sets or returns the document's body (the <body> element)
// characterSet	            Returns the character encoding for the document
// charset	                Deprecated. Use characterSet instead. Returns the character encoding for the document
// cookie	                Returns all name/value pairs of cookies in the document
// defaultView	            Returns the window object associated with a document, or null if none is available.
// designMode	            Controls whether the entire document should be editable or not.
// doctype	                Returns the Document Type Declaration associated with the document
// documentElement	        Returns the Document Element of the document (the <html> element)
// documentMode	            Returns the mode used by the browser to render the document
// documentURI	            Sets or returns the location of the document
// domain	                Returns the domain name of the server that loaded the document
// domConfig	            Obsolete. Returns the DOM configuration of the document
// embeds	                Returns a collection of all <embed> elements the document
// forms	                Returns a collection of all <form> elements in the document
// fullscreenElement	    Returns the current element that is displayed in fullscreen mode
// head	                    Returns the <head> element of the document
// images	                Returns a collection of all <img> elements in the document
// implementation	        Returns the DOMImplementation object that handles this document
// inputEncoding	        Returns the encoding, character set, used for the document
// lastModified	            Returns the date and time the document was last modified
// links	                Returns a collection of all <a> and <area> elements in the document that have a href attribute
// readyState	            Returns the (loading) status of the document
// referrer	                Returns the URL of the document that loaded the current document
// scripts	                Returns a collection of <script> elements in the document
// strictErrorChecking	    Sets or returns whether error-checking is enforced or not
// title	                Sets or returns the title of the document
// URL	                    Returns the full URL of the HTML document

// document.metodo()

// addEventListener()	    Attaches an event handler to the document
// adoptNode()	            Adopts a node from another document
// close()	                Closes the output stream previously opened with document.open()
// createAttribute()	    Creates an attribute node
// createComment()	        Creates a Comment node with the specified text
// createDocumentFragment()	Creates an empty DocumentFragment node
// createElement()	        Creates an Element node
// createEvent()	        Creates a new event
// createTextNode()	        Creates a Text node
// execCommand()	        Invokes the specified clipboard operation on the element currently having focus.
// fullscreenEnabled()	    Returns a Boolean value indicating whether the document can be viewed in fullscreen mode
// getElementById()	        Returns the element that has the ID attribute with the specified value
// getElementsByClassName()	Returns a NodeList containing all elements with the specified class name
// getElementsByName()	    Returns a NodeList containing all elements with a specified name
// getElementsByTagName()	Returns a NodeList containing all elements with the specified tag name
// hasFocus()	            Returns a Boolean value indicating whether the document has focus
// importNode()	            Imports a node from another document
// normalize()	            Removes empty Text nodes, and joins adjacent nodes
// normalizeDocument()	    Removes empty Text nodes, and joins adjacent nodes
// open()	                Opens an HTML output stream to collect output from document.write()
// querySelector()	        Returns the first element that matches a specified CSS selector(s) in the document
// querySelectorAll()	    Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
// removeEventListener()	Removes an event handler from the document (that has been attached with the addEventListener() method)
// renameNode()	            Renames the specified node
// write()	                Writes HTML expressions or JavaScript code to a document
// writeln()	            Same as write(), but adds a newline character after each statement

console.log(document.body)
console.log(document.body.innerHTML)

let d = document
console.log(d.body)

document.body.innerHTML = document.body.innerHTML + "<h1>Teste testado<h1>" 

let p1 = document.getElementById("p1")
let paragrafos = document.getElementsByClassName("paragrafo")

console.log(p1)
console.log(paragrafos)

// Alterando o texto da pagina

// innerHTML é o unico que recebe um bloco html
p1.innerHTML = "Novo conteúdo"
// innerText mostra somente o conteúdo da tag que esta aparecendo na tela
p1.innerText = "Conteúdo mais novo"
// text Content mostra o conteúdo da tag que tambem esta escondido (display: none;)
p1.textContent = "Mais novo conteúdo"

// Modificar o atributo (classe/id)
p1.className = ""
p1.style = "color:blue"
p1.setAttribute("novoAtt", "Atributo")
console.log(p1)
console.log(p1.style)

p1.style.backgroundColor = "red"

// HTML DOM Events

// abort	                The event occurs when the loading of a media is aborted
// afterprint	            The event occurs when a page has started printing, or if the print dialogue box has been closed
// animationend	            The event occurs when a CSS animation has completed
// animationiteration	    The event occurs when a CSS animation is repeated
// animationstart	        The event occurs when a CSS animation has started
// beforeprint	            The event occurs when a page is about to be printed
// beforeunload	            The event occurs before the document is about to be unloaded
// blur	                    The event occurs when an element loses focus
// canplay	                The event occurs when the browser can start playing the media (when it has buffered enough to begin)
// canplaythrough	        The event occurs when the browser can play through the media without stopping for buffering
// change	                The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
// click	                The event occurs when the user clicks on an element
// contextmenu	            The event occurs when the user right-clicks on an element to open a context menu
// copy	                    The event occurs when the user copies the content of an element
// cut	                    The event occurs when the user cuts the content of an element
// dblclick	                The event occurs when the user double-clicks on an element
// drag	                    The event occurs when an element is being dragged
// dragend	                The event occurs when the user has finished dragging an element
// dragenter	            The event occurs when the dragged element enters the drop target
// dragleave	            The event occurs when the dragged element leaves the drop target
// dragover	                The event occurs when the dragged element is over the drop target
// dragstart	            The event occurs when the user starts to drag an element
// drop	                    The event occurs when the dragged element is dropped on the drop target
// durationchange	        The event occurs when the duration of the media is changed
// ended	                The event occurs when the media has reach the end (useful for messages like "thanks for listening")
// error	                The event occurs when an error occurs while loading an external file
// focus	                The event occurs when an element gets focus
// focusin	                The event occurs when an element is about to get focus
// focusout	                The event occurs when an element is about to lose focus
// fullscreenchange	        The event occurs when an element is displayed in fullscreen mode
// fullscreenerror	        The event occurs when an element can not be displayed in fullscreen mode
// hashchange	            The event occurs when there has been changes to the anchor part of a URL
// input	                The event occurs when an element gets user input
// invalid	                The event occurs when an element is invalid
// keydown	                The event occurs when the user is pressing a key
// keypress	                The event occurs when the user presses a key
// keyup	                The event occurs when the user releases a key
// load	                    The event occurs when an object has loaded
// loadeddata	            The event occurs when media data is loaded
// loadedmetadata	        The event occurs when meta data (like dimensions and duration) are loaded
// loadstart	            The event occurs when the browser starts looking for the specified media
// message	                The event occurs when a message is received through the event source
// mousedown	            The event occurs when the user presses a mouse button over an element
// mouseenter	            The event occurs when the pointer is moved onto an element
// mouseleave	            The event occurs when the pointer is moved out of an element
// mousemove	            The event occurs when the pointer is moving while it is over an element
// mouseover	            The event occurs when the pointer is moved onto an element, or onto one of its children
// mouseout	                The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
// mouseup	                The event occurs when a user releases a mouse button over an element
// mousewheel	            Deprecated. Use the wheel event instead
// offline	                The event occurs when the browser starts to work offline
// online	                The event occurs when the browser starts to work online
// open	                    The event occurs when a connection with the event source is opened
// pagehide	                The event occurs when the user navigates away from a webpage
// pageshow	                The event occurs when the user navigates to a webpage
// paste	                The event occurs when the user pastes some content in an element
// pause	                The event occurs when the media is paused either by the user or programmatically
// play	                    The event occurs when the media has been started or is no longer paused
// playing	                The event occurs when the media is playing after having been paused or stopped for buffering
// popstate	                The event occurs when the window's history changes
// progress	                The event occurs when the browser is in the process of getting the media data (downloading the media)
// ratechange	            The event occurs when the playing speed of the media is changed
// resize	                The event occurs when the document view is resized
// reset	                The event occurs when a form is reset
// scroll	                The event occurs when an element's scrollbar is being scrolled
// search	                The event occurs when the user writes something in a search field (for <input="search">)
// seeked	                The event occurs when the user is finished moving/skipping to a new position in the media
// seeking	                The event occurs when the user starts moving/skipping to a new position in the media
// select	                The event occurs after the user selects some text (for <input> and <textarea>)
// show	                    The event occurs when a <menu> element is shown as a context menu
// stalled	                The event occurs when the browser is trying to get media data, but data is not available
// storage	                The event occurs when a Web Storage area is updated
// submit	                The event occurs when a form is submitted
// suspend	                The event occurs when the browser is intentionally not getting media data
// timeupdate	            The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)
// toggle	                The event occurs when the user opens or closes the <details> element
// touchcancel	            The event occurs when the touch is interrupted
// touchend	                The event occurs when a finger is removed from a touch screen
// touchmove	            The event occurs when a finger is dragged across the screen
// touchstart	            The event occurs when a finger is placed on a touch screen
// transitionend	        The event occurs when a CSS transition has completed
// unload	                The event occurs once a page has unloaded (for <body>)
// volumechange	            The event occurs when the volume of the media has changed (includes setting the volume to "mute")
// waiting	                The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)
// wheel	                The event occurs when the mouse wheel rolls up or down over an element

// HTML DOM Event Properties and Methods

// altKey	                Returns whether the "ALT" key was pressed when the mouse event was triggered	
// altKey	                Returns whether the "ALT" key was pressed when the key event was triggered	
// animationName	        Returns the name of the animation	
// bubbles	                Returns whether or not a specific event is a bubbling event	
// button	                Returns which mouse button was pressed when the mouse event was triggered	
// buttons	                Returns which mouse buttons were pressed when the mouse event was triggered	
// cancelable	            Returns whether or not an event can have its default action prevented	
// charCode	                Returns the Unicode character code of the key that triggered the onkeypress event	
// changeTouches	        Returns a list of all the touch objects whose state changed between the previous touch and this touch	
// clientX	                Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	
// clientY	                Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	
// clipboardData	        Returns an object containing the data affected by the clipboard operation	
// code	                    Returns the code of the key that triggered the event	
// composed	                Returns whether the event is composed or not	
// createEvent()	        Creates a new event	
// ctrlKey	                Returns whether the "CTRL" key was pressed when the key event was triggered	
// ctrlKey	                Returns whether the "CTRL" key was pressed when the mouse event was triggered	
// currentTarget	        Returns the element whose event listeners triggered the event	
// data	                    Returns the inserted characters	
// dataTransfer	            Returns an object containing the data being dragged/dropped, or inserted/deleted	
// defaultPrevented	        Returns whether or not the preventDefault() method was called for the event	
// deltaX	                Returns the horizontal scroll amount of a mouse wheel (x-axis)	
// deltaY	                Returns the vertical scroll amount of a mouse wheel (y-axis)	
// deltaZ	                Returns the scroll amount of a mouse wheel for the z-axis	
// deltaMode	            Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	
// detail	                Returns a number that indicates how many times the mouse was clicked	
// elapsedTime	            Returns the number of seconds an animation has been running	
// elapsedTime	            Returns the number of seconds a transition has been running	
// eventPhase	            Returns which phase of the event flow is currently being evaluated	
// getTargetRanges()	    Returns an array containing target ranges that will be affected by the insertion/deletion	
// getModifierState()	    Returns an array containing target ranges that will be affected by the insertion/deletion	
// inputType	            Returns the type of the change (i.e "inserting" or "deleting")	
// isComposing	            Returns whether the state of the event is composing or not	
// isTrusted	            Returns whether or not an event is trusted	
// key	                    Returns the key value of the key represented by the event	
// key	                    Returns the key of the changed storage item	
// keyCode	                Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	
// location	                Returns the location of a key on the keyboard or device	
// lengthComputable	        Returns whether the length of the progress can be computable or not	
// loaded	                Returns how much work has been loaded	
// metaKey	                Returns whether the "META" key was pressed when an event was triggered	
// metaKey	                Returns whether the "meta" key was pressed when the key event was triggered	
// MovementX	            Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	
// MovementY	            Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	
// newValue	                Returns the new value of the changed storage item	
// newURL	                Returns the URL of the document, after the hash has been changed	
// offsetX	                Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	
// offsetY	                Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	
// oldValue	                Returns the old value of the changed storage item	
// oldURL	                Returns the URL of the document, before the hash was changed	
// onemptied	            The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	
// pageX	                Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	
// pageY	                Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	
// persisted	            Returns whether the webpage was cached by the browser	
// preventDefault()     	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	
// propertyName	            Returns the name of the CSS property associated with the animation or transition	
// pseudoElement	        Returns the name of the pseudo-element of the animation or transition	
// relatedTarget	        Returns the element related to the element that triggered the mouse event	
// relatedTarget	        Returns the element related to the element that triggered the event	
// repeat	                Returns whether a key is being hold down repeatedly, or not	
// screenX	                Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	
// screenY	                Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	
// shiftKey	                Returns whether the "SHIFT" key was pressed when an event was triggered	
// shiftKey	                Returns whether the "SHIFT" key was pressed when the key event was triggered	
// state	                Returns an object containing a copy of the history entries	
// stopImmediatePropagation()		Prevents other listeners of the same event from being called
// stopPropagation()	    Prevents further propagation of an event during event flow	
// storageArea	            Returns an object representing the affected storage object	
// target	                Returns the element that triggered the event	
// targetTouches	        Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element	
// timeStamp	            Returns the time (in milliseconds relative to the epoch) at which the event was created	
// total	                Returns the total amount of work that will be loaded	
// touches	                Returns a list of all the touch objects that are currently in contact with the surface	
// transitionend	        The event occurs when a CSS transition has completed	
// type	                    Returns the name of the event	
// url	                    Returns the URL of the changed item's document	
// which	                Returns which mouse button was pressed when the mouse event was triggered	
// which	                Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	
// view	                    Returns a reference to the Window object where the event occurred	

function p1Click() {
    console.log("função de click p1")
}

function changeInputText() {
    let input = document.getElementById("textoInput")
    let h2Text = document.getElementById("alterarTexto")
    h2Text.innerText = input.value
}

function hideH2() {
    let h2Text = document.getElementById("alterarTexto")
    h2Text.style.display = "none"
}

function onOver(element) {
    element.style.backgroundColor = "red"
}

function onOut(element) {
    element.style.backgroundColor = "blue"
}

function mudarTexto() {
    let h2Text = document.getElementById("alterarTexto")
    h2Text.innerHTML = "none"
}

function addElement() {
    let h2Text = document.getElementById("alterarTexto")
    h2Text.addEventListener("click", mudarTexto)
}

// Elementos pai e filho

window.onload = function () {
    let d1= document.getElementById("d1")
    let h3 = d1.children[0]
    console.log(d1.children[0])
    console.log(d1.parentElement)
    console.log(document.body.children[0].children)
    
}

// Math

// abs(x)	                Returns the absolute value of x
// acos(x)	                Returns the arccosine of x, in radians
// asin(x)	                Returns the arcsine of x, in radians
// atan(x)	                Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	            Returns the arctangent of the quotient of its arguments
// ceil(x)	                Returns the value of x rounded up to its nearest integer
// cos(x)	                Returns the cosine of x (x is in radians)
// exp(x)	                Returns the value of Ex
// floor(x)	                Returns the value of x rounded down to its nearest integer
// log(x)	                Returns the natural logarithm (base E) of x
// min(x, y, z, ..., n)	    Returns the number with the lowest value
// max(x, y, z, ..., n)	    Returns the number with the highest value
// pow(x, y)	            Returns the value of x to the power of y
// random()	                Returns a random number between 0 and 1
// round(x)	                Returns the value of x rounded to its nearest integer
// sin(x)	                Returns the sine of x (x is in radians)
// sqrt(x)	                Returns the square root of x
// tan(x)	                Returns the tangent of an angle

let pi = Math.PI;
let e = Math.E;
console.log("pi")
console.log("e")

let raiz = Math.sqrt(16)
let potencia = Math.pow(2, 3)
console.log("raiz")
console.log("potencia")

let randomNum1 = Math.random();
let randomNum2 = Math.round(Math.random() * 10);
let randomNum3 = Math.ceil(Math.random() * 10);
let randomNum4 = Math.floor(Math.random() * 10);

// JSON

let jsonBase = {
    nome:"Igor",
    nota: 8.5
}

// transforma json em string
// JSON.stringify
// transforma string em json
// JSON.parse

let stringBase = JSON.stringify(jsonBase)

console.log(jsonBase)
console.log(stringBase)