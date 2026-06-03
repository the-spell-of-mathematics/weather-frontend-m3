/**
 * Renderiza las tarjetas del clima en la página de inicio.
 * Garantiza la manipulación del DOM y la creación de componentes Bootstrap.
 */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("weather-cards-container");

    // Verifica si estamos en la página de inicio
    if (container) {
        weatherData.forEach(location => {
            // Se crea el elemento columna para el grid de Bootstrap
            const col = document.createElement("article");
            col.className = "col";

            // Se genera la estructura de la Card
            col.innerHTML = `
                <div class="card h-100 shadow-sm text-center">
                    <div class="card-body">
                        <div class="display-4 mb-2" aria-hidden="true">${location.icon}</div>
                        <h2 class="card-title h5">${location.name}</h2>
                        <p class="card-text fs-3 fw-bold">${location.temp}°C</p>
                        <p class="text-muted">${location.condition}</p>
                        <a href="detalle.html?id=${location.id}" class="btn btn-outline-primary w-100">Ver Pronóstico</a>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    }
});