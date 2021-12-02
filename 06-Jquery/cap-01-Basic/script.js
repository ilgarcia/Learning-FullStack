
// Para não ter conflito com outros frameworks

// substitui o $ por jquery
// $.noConflict();

// substitui o $ por uma variavel
// let jq = $.noConflict();

console.log($("h1"))

// $("h1").hide()
$("#primeirosPassos").hide()

setTimeout(()=> {
    $("#primeirosPassos").show()
}, 2000)

// Eventos
$(".tituloOne").click(()=>{
    console.log("click")
})

$(".tituloOne").mouseenter(()=>{
    console.log("entra")
})

$(".tituloOne").mouseleave(()=>{
    console.log("sai")
})

$(".tituloOne").dblclick(()=>{
    console.log("double click")
})

$("#buttonFadeIn").click((e) => {
    console.log(e.target)
    // Serve para outros metodos de animações
    // $("#squareFadeIn").fadeIn(3000)
    $("#squareFadeIn").fadeToggle(1000)
})

// CallBack

function callBack() {
    console.log("Verde escondido")
}

$("#buttonCallBack").click(()=>{
    $("#squareCallBack").hide(2000, callBack).show()
})

// Elemento filho

// $("#lista1 > .item2").hide()

let lista1 = $("#lista1")

// lista1.find(".item2").hide()

lista1.children(".item2").fadeOut()

// Manipulando elementos

console.log($("#lista3").text())
console.log($("#lista3").html())

console.log($("#novoElemento").attr("name", "Item de compra"))
console.log($("#novoElemento").val())

console.log($(".manipularH2").text("Lista de compras"))
console.log($("#lista3").find("[key = 2]").html("Novo item"))

console.log($("li").attr("name", function(i){
    return "Item " + i
}))

// Esvazia o elemento
console.log($("[key = 4]").empty())

// Remove o elemento do html
console.log($("[key = 5]").remove())

// Incluindo um elemento

let lista3 = $("#lista3")
let items = lista3.html()

lista3.html(items + "<li>Teste</li>")

// Forma mais correta

lista3.prepend("<li>Teste dois</li>")
lista3.append("<li>Teste dois</li>")

lista3.before("<li>Teste before</li>")
lista3.after("<li>Teste after</li>")

// Alterando o CSS

setTimeout(()=>{
    $(".manipularH2").addClass("bg-blue")
},1000)

setTimeout(()=>{
    $(".manipularH2").removeClass("bg-blue")
},3000)

setTimeout(()=>{
    $(".manipularH2").toggleClass("bg-blue")
},5000)

setTimeout(()=>{
    $(".manipularH2").toggleClass("bg-blue")
},7000)

console.log($(".item").css({"background-color": "blue"}))

// Dimensões

let box = $(".box")

box.append("largura:", box.width(), "<br>", 
            "largura + padding:", box.innerWidth(), "<br>", 
            "largura + padding + borda:", box.outerWidth(), "<br>",
            "largura + padding + borda + margem:", box.outerWidth(true))

// Elementos Irmãos

let selectedOne = $("#div3").siblings()
// let selected = $("#div3").siblings("#div4")
let selectedTwo = $("#div3").nextAll()
let selectedThree = $("#div3").next()
// let selectedThree = $("#div3").nextUntil("#div5")
let selectedFour = $("#div3").prevAll()
let selectedFive = $("#div3").prev()
// let selectedFive = $("#div3").prevUntil("#div5")

console.log(selectedOne)
console.log(selectedTwo)
console.log(selectedThree)
console.log(selectedFour)
console.log(selectedFive)

// Seletores
let selectedDivOne = $("#Selector").children().filter(".div2")
let selectedDivTwo = $("#Selector").children().first()
let selectedDivThree = $("#Selector").children().last()
let selectedDivFour = $("#Selector").children().not(".div8")
let selectedDivFive = $("#Selector").children().eq(2)


