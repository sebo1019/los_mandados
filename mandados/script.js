function enviarWhatsApp() {
    let productos = document.getElementById("productos").value;
    let marca = document.getElementById("marca").value;
    let lugar = document.getElementById("lugar").value;
    let duda = document.getElementById("duda").value;
    let metodo = document.getElementById("metodo").value;
    let presupuesto = document.getElementById("presupuesto").value;
    let fecha = document.getElementById("fecha").value;
    let horaInicio = document.getElementById("horaInicio").value;
    let horaFin = document.getElementById("horaFin").value;
    let comentarios = document.getElementById("comentarios").value;

    // Verificar que los campos esenciales no estén vacíos
    if (lugar && productos && fecha && horaInicio && horaFin) {
        let mensaje = `📌 *Nuevo mandado*  
        🛒 *¿Qué tengo que comprar?* ${productos}
        🏷️ *¿Tienes una marca o modelo en mente?* ${marca}
        📍 *¿Dónde tengo que comprar?* ${lugar}
        ❓ *¿Aceptas una alternativa si no hay en el lugar indicado?* ${duda}
        💵 *¿Con qué dinero se realizará la compra?* ${metodo} 
        💸 *¿Tienes un presupuesto máximo?* ${presupuesto}
        📅 *¿Para qué día es?* ${fecha}  
        ⏰ *Desde qué hora:* ${horaInicio}  
        ⏳ *Hasta qué hora:* ${horaFin}  
        💬 *Comentario adicional:* ${comentarios || "Ninguno"}`;

        // Número de WhatsApp
        let numero = "56962534506"; // Reemplaza con tu número de WhatsApp
        let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
