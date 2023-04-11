/// Este código se ejecuta cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    // Creamos un elemento p para mostrar el mensaje de bienvenida
    const saludo = document.createElement('p');
    saludo.textContent = '¡Aprende sobre muchos helados en diferentes idiomas!';
    // Agregamos el elemento p al cuerpo de la página
    document.body.appendChild(saludo);

    // Este código se ejecuta cuando se selecciona un idioma o país en el elemento select
    const languageSelect = document.getElementById('language-select');
    const wordOptions = document.querySelector('.word-options');

    languageSelect.addEventListener('change', function() {
        console.log('Seleccionaste un idioma o país');
        // Resto del código para mostrar las opciones de palabras, imágenes y frases

        // Obtenemos el valor del idioma o país seleccionado
        const selectedLanguage = languageSelect.value;
        // Obtenemos las opciones de palabras, imágenes y frases para el idioma o país seleccionado
        const selectedOptions = options[selectedLanguage];
        // Creamos el HTML para mostrar las opciones de palabras, imágenes y frases
        const optionsHTML = selectedOptions.map(option => `
            <div class="word-option">
            <img src="${option.image}" alt="${option.word}" style="max-width: 50%;">
                <h3>${option.word}</h3>
                <p>${option.phrase}</p>
            </div>
        `).join('');
        // Mostramos las opciones de palabras, imágenes y frases en la página
        wordOptions.innerHTML = optionsHTML;
    });
});

// Opciones de palabras, imágenes y frases para cada idioma o país
const options = {
    en: [
        { word: 'Ice cream', image: 'images/ice-cream.png', phrase: 'I love ice cream!' },
        { word: 'Cone', image: 'images/cone.png', phrase: 'I want a cone, please.' },
        { word: 'Sundae', image: 'images/sundae.png', phrase: 'I like my sundae with lots of toppings!' }
    ],
    es: [
        { word: 'Helado', image: 'images/ice-cream.png', phrase: '¡Me encanta el helado!' },
        { word: 'Cono', image: 'images/cone.png', phrase: 'Quiero un cono, por favor.' },
        { word: 'Sundae', image: 'images/sundae.png', phrase: 'Me gusta mi sundae con muchos toppings!' }
    ],
    fr: [
        { word: 'Glace', image: 'images/ice-cream.png', phrase: 'J\'adore la glace!' },
        { word: 'Cornet', image: 'images/cone.png', phrase: 'Je veux un cornet, s\'il vous plaît.' },
        { word: 'Sundae', image: 'images/sundae.png', phrase: 'J\'aime mon sundae avec beaucoup de toppings!' }
    ],
    pt: [
        { word: 'Sorvete', image: 'images/ice-cream.png', phrase: 'Eu amo sorvete!' },
        { word: 'Casquinha', image: 'images/cone.png', phrase: 'Eu quero uma casquinha, por favor.' },
        { word: 'Sundae', image: 'images/sundae.png', phrase: 'Eu gosto do meu sundae com muitas coberturas!' }
    ],
    ru: [
        { word: 'Мороженое', image: 'images/ice-cream.png', phrase: 'Я люблю мороженое!' },
        { word: 'Рожок', image: 'images/cone.png', phrase: 'Я хочу рожок, пожалуйста.' },
        { word: 'Сандэй', image: 'images/sundae.png', phrase: 'Мне нравится мой сандэй с множеством топпингов!' }
    ]
};
