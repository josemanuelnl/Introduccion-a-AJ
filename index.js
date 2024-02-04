
precio = 400000;
cantidad = 0;
precioTotal = 0;

document.querySelector(".precio-inicial").innerHTML = precio;


document.getElementById('btnSum').addEventListener('click', function () {
    cantidad++;
    document.getElementById('cantidad').textContent = cantidad;
    incrementarTotal();
});

document.getElementById('btnRes').addEventListener('click', function () {
    if (cantidad > 0) {
        cantidad--;
        document.getElementById('cantidad').textContent = cantidad;
        incrementarTotal();
    }
});


function incrementarTotal() {
    precioTotal = cantidad * precio;
    document.querySelector('.valor-total').textContent = precioTotal;
}
