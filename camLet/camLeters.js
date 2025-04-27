document.addEventListener('DOMContentLoaded', function() {
    const typedOutput = document.getElementById('cam');
    if (typedOutput) {
        const typed = new Typed(typedOutput, {
            strings: ['Con mas de 20 años de trayectoria construimos una sólida reputación basada en resultados.', 
                'Nuestros abogados especializados cuentan con una formación académica de prestigio.', 
                'Su caso es nuestra prioridad le ofrecemos una atención personalizada, una comunicación clara y constante.'],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true
        });
    }
});