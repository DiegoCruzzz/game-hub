# 👾 Game Hub

> **Tu colección de minijuegos offline en una aplicación web progresiva (PWA).**

Game Hub es una plataforma web ligera, moderna y modular diseñada para reunir minijuegos clásicos en una interfaz unificada. Funciona completamente sin conexión a internet gracias a su arquitectura con Service Workers y se puede instalar como aplicación nativa en dispositivos móviles o de escritorio.

---

## ✨ Características Principales

* **🚀 Cero dependencias pesadas:** Construido 100% con HTML5 semántico, CSS3 moderno y Vanilla JavaScript.
* **📶 Soporte Offline (PWA):** Integra un `service-worker.js` y `manifest.json` que permiten jugar sin conexión y añadir la app a tu pantalla de inicio.
* **🧩 Arquitectura Modular:** Los juegos individuales se integran mediante **Git Submodules**, manteniendo sus repositorios y desarrollos desacoplados.
* **🎨 Diseño Premium:** Estética oscura (*Dark Mode*), efectos de desenfoque (*Glassmorphism*), fondos con orbes animados y tipografía moderna (*Outfit* de Google Fonts).
* **🛠️ Automatización sencilla:** Comandos listos con `Makefile` y script de construcción `build.sh` para empaquetar en la carpeta de producción `dist/`.

---

## 🎮 Juegos Incluidos

| Juego | Descripción | Repositorio |
| :--- | :--- | :--- |
| **🔢 Sudoku** | Clásico rompecabezas numérico con dificultades, temporizador y numpad táctil. | [sudoku](https://github.com/DiegoCruzzz/sudoku) |
| **🧱 Rompebloques** | Arcade estilo Breakout en HTML5 Canvas con soporte para teclado, mouse y touch. | [rompebloques](https://github.com/DiegoCruzzz/rompebloques) |
| **🧩 2048** | El adictivo puzzle deslizante para fusionar números hasta llegar al bloque 2048. | [2048](https://github.com/gabrielecirulli/2048) |

---

## 📁 Estructura del Proyecto

```text
game-hub/
├── games/                  # Submódulos de Git con los juegos individuales
│   ├── sudoku/
│   ├── rompebloques/
│   └── 2048/
├── dist/                   # Paquete limpio generado para producción
├── build.sh                # Script Bash que empaqueta y limpia dist/
├── index.html              # Menú principal y visualización del catálogo
├── index.css               # Estilos del hub, animaciones y tema oscuro
├── manifest.json           # Configuración PWA para instalación
└── service-worker.js       # Almacenamiento en caché y soporte offline
```

---

## 🚀 Inicio Rápido

### Requisitos previos
* [Node.js](https://nodejs.org/) (incluye `npx` para levantar el servidor local).
* [Git](https://git-scm.com/) (para gestionar los submódulos).

### Comandos de ejecución (desde la raíz con Makefile)

```bash
# 1. Compilar la versión de producción en dist/
make build

# 2. Levantar el servidor local en el puerto 8080
make serve
```

Abre tu navegador en [http://localhost:8080](http://localhost:8080).

### Otros comandos útiles

```bash
# Sincronizar y actualizar todos los submódulos de juegos
make update

# Subir cambios de todos los repositorios a GitHub en un solo paso
make push-all
```

---

## ➕ Cómo añadir un nuevo juego

1. Agrega el nuevo repositorio como submódulo dentro de `games/`:
   ```bash
   git submodule add <URL_DEL_REPOSITORIO> games/<nombre-del-juego>
   ```
2. Agrega una nueva tarjeta en `index.html`:
   ```html
   <a href="games/<nombre-del-juego>/index.html" class="game-card">
       <div class="card-icon">🎮</div>
       <div class="card-content">
           <h2>Mi Nuevo Juego</h2>
           <p>Descripción breve del juego.</p>
       </div>
   </a>
   ```
3. Incluye la carpeta en `build.sh` para copiarla al compilar:
   ```bash
   cp -r games/<nombre-del-juego> dist/games/
   ```
4. Ejecuta `make build` y ¡listo!

---

## 👤 Autor

Desarrollado por **[Diego Cruz](https://github.com/DiegoCruzzz)**.
