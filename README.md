# 🌤️ App de Clima (Frontend) - Módulo 3

Refactorización de la interfaz de la aplicación de clima utilizando metodologías de organización de estilos y preprocesadores CSS. Muestra el clima de 10 ciudades globales icónicas.

## 🚀 Enlace al Repositorio
[Repositorio en GitHub](https://github.com/the-spell-of-mathematics/weather-frontend-m3)

## 🎨 Arquitectura de Estilos y SASS
Para este rediseño, se abandonó el CSS plano a favor de **SASS**, estructurando el proyecto de la siguiente manera:
* `/base/_variables.scss`: Agrupa los colores principales y radios de borde.
* `/components/_place-card.scss`: Contiene los estilos específicos de las tarjetas de clima y un *mixin* para los efectos interactivos (*hover*).
* `main.scss`: Actúa como el núcleo central que importa los parciales para compilar un único archivo `main.css`.

### Metodología BEM
Se implementó la metodología **BEM (Block, Element, Modifier)** para garantizar un código mantenible. 
* **Bloque:** `.place-card` (Componente independiente).
* **Elementos:** `.place-card__icon`, `.place-card__title`, `.place-card__temp` (Partes que dependen del bloque).

## ⚙️ Tecnologías Utilizadas
* **HTML5 y JavaScript (Vanilla)**
* **Bootstrap 5:** Sistema de grillas responsivo (apiladas en móvil, columnas en escritorio).
* **SASS (SCSS):** Uso de variables, anidamiento y *mixins*.