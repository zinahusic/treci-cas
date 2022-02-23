// Poziv funkcije compare na klik dugmeta A
input.onButtonPressed(Button.A, function () {
    comprate()
})
function comprate () {
    if (a < b) {
        basic.showString("a je manje od b")
    } else if (a > b) {
        basic.showString("a je vece od b")
    } else {
        basic.showString("a i b su jednakih vrijednosti")
    }
}
// Poziv funkcije add na klik dugmeta B
input.onButtonPressed(Button.B, function () {
    basic.showNumber(add(a, b))
})
function add (a: number, b: number) {
    sum = a + b
    return sum
}
//Varijable
let sum = 0
let b = 0
let a = 0
a = 5
b = 10
