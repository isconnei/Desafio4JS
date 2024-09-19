const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Un hermoso apartamento en el centro de la ciudad.',
        ubicacion: 'Centro de la ciudad',
        habitaciones: 2,
        costo: 800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con jardín',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Casa espaciosa con un amplio jardín.',
        ubicacion: 'Suburbios',
        habitaciones: 3,
        costo: 1200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Estudio moderno',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Estudio moderno cerca del transporte público.',
        ubicacion: 'Cerca del metro',
        habitaciones: 1,
        costo: 600,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Dúplex familiar',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Dúplex perfecto para una familia, con varias áreas de recreo.',
        ubicacion: 'Zona residencial',
        habitaciones: 4,
        costo: 1500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Loft industrial',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Loft amplio con estilo industrial en una zona céntrica.',
        ubicacion: 'Centro de la ciudad',
        habitaciones: 2,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento con vista al mar',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Apartamento con vistas espectaculares al mar.',
        ubicacion: 'Frente al mar',
        habitaciones: 3,
        costo: 2000,
        smoke: false,
        pets: true
    }
];
const propiedades_comprar = [
    {
        nombre: 'Casa en la playa',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Hermosa casa frente al mar con vistas espectaculares.',
        ubicacion: 'Playa del Carmen',
        habitaciones: 3,
        costo: 300000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Dúplex en el centro',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Dúplex moderno con fácil acceso a tiendas y restaurantes.',
        ubicacion: 'Centro de la ciudad',
        habitaciones: 2,
        costo: 250000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Chalet en las montañas',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Acogedor chalet en una ubicación tranquila en las montañas.',
        ubicacion: 'Sierra Nevada',
        habitaciones: 4,
        costo: 450000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Apartamento de lujo con acabados de alta calidad y vistas urbanas.',
        ubicacion: 'Manhattan, Nueva York',
        habitaciones: 2,
        costo: 800000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa con jardín',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Casa familiar con un amplio jardín ideal para reuniones.',
        ubicacion: 'Suburbios de Los Ángeles',
        habitaciones: 3,
        costo: 350000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Loft en el centro histórico',
        src: 'https://via.placeholder.com/250',
        descripcion: 'Loft con diseño contemporáneo en una zona histórica.',
        ubicacion: 'Centro Histórico de Barcelona',
        habitaciones: 1,
        costo: 400000,
        smoke: true,
        pets: false
    }
];

function crearCardHTML(propiedad) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                    <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                    <p><strong>Costo:</strong> $${propiedad.costo}</p>
                   <p class="${propiedad.smoke ? 'allowed-text' : 'not-allowed-text'}">
                        <i class="fas fa-smoking ${propiedad.smoke ? 'allowed' : 'not-allowed'} icon"></i>
                        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'allowed-text' : 'not-allowed-text'}">
                        <i class="fas fa-paw ${propiedad.pets ? 'allowed' : 'not-allowed'} icon"></i>
                        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function cargarCards() {
    const container = document.getElementById('cards');
    let cardsHTML = '';

    if(window.pageType === 'index'){
        const containerVenta = document.getElementById('cards-venta');
        const containerAlquiler = document.getElementById('cards-alquiler');
        let cardsVentaHTML = '';
        let cardsAlquilerHTML = '';
    
        const propiedadesVentaLimitadas = propiedades_comprar.slice(0, 3);
        for (const propiedad of propiedadesVentaLimitadas) {
            cardsVentaHTML += crearCardHTML(propiedad);
        }
    
        const propiedadesAlquilerLimitadas = propiedades_alquiler.slice(0, 3);
        for (const propiedad of propiedadesAlquilerLimitadas) {
            cardsAlquilerHTML += crearCardHTML(propiedad);
        }
    
        containerVenta.innerHTML = cardsVentaHTML;
        containerAlquiler.innerHTML = cardsAlquilerHTML;
    }
    else{
        if (window.pageType === 'alquiler') {
            for (const propiedad of propiedades_alquiler) {
                cardsHTML += crearCardHTML(propiedad);
            }
        } else if (window.pageType === 'compra') {
            for (const propiedad of propiedades_comprar) {
                cardsHTML += crearCardHTML(propiedad);
            }
        }
        container.innerHTML = cardsHTML;
    }
}
window.onload = cargarCards;