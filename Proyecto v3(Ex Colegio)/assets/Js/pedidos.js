document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.bar_lateral .btn');
    
    buttons.forEach(button => {
        const span = button.querySelector('span');
        const icons = button.querySelector("i");

        button.addEventListener('mouseover', function() {
            span.classList.add('activo_sub');
            icons.classList.add('activo_btn');
            span.style.display = 'block';
        });
        
        button.addEventListener('mouseout', function() {
            span.classList.remove('activo_sub');
            icons.classList.remove('activo_btn');
            span.style.display = 'none';
        });
    });
});

function trabajos() {
    var select = document.getElementById("Tipo-De-Proyecto");
    var PDE = document.getElementById("PDE");
    if (select.value === "PDEs" || select.value === "PDEs") {
        PDE.style.display = "block";
    } else {
        PDE.style.display = "none";
    }
}

document.querySelectorAll('.como-btn').forEach(button => {
    button.addEventListener('click', () => {
        const span = button.nextElementSibling;
        span.style.display = span.style.display === 'blokc' ? 'none' : 'blokc';
    });
});





