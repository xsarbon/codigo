var ocultar = document.getElementsByClassName('ing');
var mostrar = document.getElementsByClassName('esp');
var afirmativo = true;

while (afirmativo == true) {
    ocultar.id.add('active2');
    mostrar.id.add('active');
    setTimeout(() => {
        ocultar.id.remove('active2');
        mostrar.id.remove('active');
    }, 3000)
}