
document.getElementById('enviar').addEventListener('click', () => {
    var nombre = localStorage.getItem("nombre_completo");
    var dni = localStorage.getItem("dni");
    var numero = localStorage.getItem("numero");
    var region = localStorage.getItem('region');
    var provincia = localStorage.getItem('provincia');
    var distrito = localStorage.getItem('distrito');
    var tipoDeProyecto = localStorage.getItem('tipoDeProyecto');
    var otroInput = localStorage.getItem('otroInput');
    const ubicacion = document.getElementById('ubicacion').value;
    const area = document.getElementById('area').value;
    const perimetro = document.getElementById('perimetro').value;
    const documentos_pro = document.getElementById('documentos_pro').value;
    const certificado_parametros = document.getElementById('certificado_parametros').value;
    const mecanicas_suelo = document.getElementById('mecanicas_suelo').value;
    const zonificacion = document.getElementById('zonificacion').value;
    const pisos = document.getElementById('pisos').value;
    const especificaciones = document.getElementById('especificaciones').value;

    const mensaje = `Nombre: ${nombre}\nId: ${dni}\nNumero: ${numero}\nregion: ${region}\nprovincia: ${provincia}\ndistrito: ${distrito} \ntipoDeProyecto: ${tipoDeProyecto}\nAlgo como: ${otroInput} \n Ubicación del Proyecto: ${ubicacion}\nÁrea del Terreno: ${area} m²\nPerímetro del Terreno: ${perimetro} m\nDocumentos de Propiedad: ${documentos_pro}\nCertificado de Parámetros Urbanísticos: ${certificado_parametros}\nEstudio de Mecánicas de Suelo: ${mecanicas_suelo}\nZonificación Urbana: ${zonificacion}\nNúmero de Pisos: ${pisos}\nEspecificaciones del Proyecto: ${especificaciones}`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
});