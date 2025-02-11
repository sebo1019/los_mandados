function enviarWhatsApp() {
    let tarea = document.getElementById("tarea").value;
    let area = document.getElementById("area").value;
    let dia = document.getElementById("dia").value;
    let horaInicio = document.getElementById("horaInicio").value;
    let horaFin = document.getElementById("horaFin").value;
    let productos = document.getElementById("productos").value;
    let materiales = document.getElementById("materiales").value;
    let detalles = document.getElementById("detalles").value;
    let aviso = document.getElementById("aviso").value;
    let foto = document.getElementById("foto").value;
    let extra = document.getElementById("extra").value;
    let confirmacion = document.getElementById("confirmacion").value;

    // Verificar que los campos esenciales no estén vacíos
    if (tarea && area && dia && horaInicio && horaFin && confirmacion === "Sí") {
        let mensaje = `🧹 *Nueva tarea del hogar*  
        ✅ *¿Qué tarea?* ${tarea}  
        📍 *¿Dónde se debe hacer?* ${area}  
        📅 *Día:* ${dia}  
        ⏰ *Desde:* ${horaInicio}  
        ⏳ *Hasta:* ${horaFin}  
        🧴 *Productos específicos:* ${productos || "No especificado"}  
        🗂️ *Materiales disponibles en:* ${materiales || "No especificado"}  
        📋 *Detalles:* ${detalles || "Ninguno"}  
        📢 *¿Avisar al terminar?* ${aviso}  
        📸 *¿Tomar foto?* ${foto}  
        ➕ *Tarea adicional:* ${extra || "Ninguna"}  
        ✅ *Confirmación:* ${confirmacion}`;

        // Número de WhatsApp
        let numero = "56962534506"; // Reemplaza con tu número de WhatsApp
        let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    } else {
        alert("Por favor, completa los campos obligatorios y confirma la asignación.");
    }
}
