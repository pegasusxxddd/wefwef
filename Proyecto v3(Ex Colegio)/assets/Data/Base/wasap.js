
document.getElementById('enviar').addEventListener('click', () => {
    var nombre = localStorage.getItem("nombre_completo");
    var dni = localStorage.getItem("dni");
    var numero = localStorage.getItem("numero");
    var region = localStorage.getItem('region');
    var provincia = localStorage.getItem('provincia');
    var distrito = localStorage.getItem('distrito');
    var tipoDeProyecto = localStorage.getItem('tipoDeProyecto');
    var otroInput = localStorage.getItem('otroInput');
    var selec_frabricante = document.getElementById("selec-frabricante2").value;
    const ubicacion = document.getElementById('ubicacion').value;
    const area = document.getElementById('area').value;
    const perimetro = document.getElementById('perimetro').value;
    const documentos_pro = document.getElementById('documentos_pro').value;
    const certificado_parametros = document.getElementById('certificado_parametros').value;
    const mecanicas_suelo = document.getElementById('mecanicas_suelo').value;
    const zonificacion = document.getElementById('zonificacion').value;
    const pisos = document.getElementById('pisos').value;
    const especificaciones = document.getElementById('especificaciones').value;

    const mensaje = `╠════ INFORMACIÓN PERSONAL ════╣\n\nNombre: ${nombre}\nId: ${dni}\nNumero: ${numero}\nregion: ${region}\nprovincia: ${provincia}\ndistrito: ${distrito} \n\n╠════ PROYECTO ════╣\n\nEncargado Del Proyecto: ${selec_frabricante}\nTipo De Proyecto: ${tipoDeProyecto}\nAlgo como: ${otroInput} \n\n╠════ INFORMACION DEL TERRENO ════╣\n\nUbicación del Proyecto: ${ubicacion}\nÁrea del Terreno: ${area} m²\nPerímetro del Terreno: ${perimetro} m\nNúmero de Pisos: ${pisos}\nEspecificaciones del Proyecto: ${especificaciones}\n\n╠════ DOCUMENTOS ════╣\n\nDocumentos de Propiedad: ${documentos_pro}\nCertificado de Parámetros Urbanísticos: ${certificado_parametros}\nEstudio de Mecánicas de Suelo: ${mecanicas_suelo}\nZonificación Urbana: ${zonificacion}`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
});