document.addEventListener('DOMContentLoaded', function() {
    const typedOutput = document.getElementById('typed-output');
    if (typedOutput) {
        const typed = new Typed(typedOutput, {
            strings: ['Planificando episodios...', 
                'Creando contenido...', 
                'Editando audios...'],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true
        });
    }
});