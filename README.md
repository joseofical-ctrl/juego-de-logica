# 🧠 Logic Memory Game

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ef4aff?style=flat-square&logo=framer)
![Zustand](https://img.shields.io/badge/Zustand-latest-orange?style=flat-square)

---

## 📖 Descripción

**Logic Memory Game** es un juego web de memoria desarrollado con tecnologías modernas del ecosistema de React. El objetivo del juego es encontrar todos los pares de cartas iguales en el menor tiempo posible y con la menor cantidad de movimientos.

El juego cuenta con un sistema de ranking que guarda las mejores partidas en el navegador, un temporizador, un contador de movimientos y soporte para cambiar el idioma entre **español** e **inglés**.

---

## ✨ Características

- 🃏 **Juego de memoria interactivo** — 16 cartas (8 pares) mezcladas aleatoriamente en cada partida
- 👣 **Contador de movimientos** — registra cada vez que se voltean dos cartas
- ⏱️ **Temporizador** — inicia con el primer movimiento y se detiene al ganar
- 🏆 **Ranking de mejores partidas** — guarda el top 10 ordenado por tiempo y movimientos
- 🌐 **Cambio de idioma** — soporte completo para español e inglés, persistido entre sesiones
- 🔄 **Animaciones al voltear cartas** — efecto flip 3D fluido en cada carta
- 📱 **Diseño responsive** — adaptado para dispositivos móviles, tablets y escritorio
- 💾 **Persistencia local** — el ranking y el idioma se guardan en LocalStorage automáticamente

---

## 🛠️ Tecnologías utilizadas

| Tecnología                                                                        | Descripción                                          |
| --------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [Next.js 14](https://nextjs.org/)                                                 | Framework de React con App Router                    |
| [TypeScript](https://www.typescriptlang.org/)                                     | Tipado estático para mayor robustez                  |
| [TailwindCSS](https://tailwindcss.com/)                                           | Estilos utilitarios con diseño moderno               |
| [Zustand](https://zustand-demo.pmnd.rs/)                                          | Manejo de estado global sencillo y eficiente         |
| [Framer Motion](https://www.framer.com/motion/)                                   | Animaciones fluidas y declarativas                   |
| [Shadcn UI](https://ui.shadcn.com/)                                               | Componentes de interfaz accesibles y personalizables |
| [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) | Persistencia de datos en el navegador                |

---

## ⚙️ Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

**1. Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/juego-de-logica.git
```

**2. Entra a la carpeta del proyecto**

```bash
cd juego-de-logica
```

**3. Instala las dependencias**

```bash
npm install
```

**4. Inicia el servidor de desarrollo**

```bash
npm run dev
```

**5. Abre el proyecto en tu navegador**

```
http://localhost:3000
```

> **Requisitos previos:** tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y npm.

---

## 🎮 Uso

1. Al cargar la página verás el tablero con **16 cartas boca abajo**.
2. Haz clic en cualquier carta para revelarla.
3. Haz clic en una segunda carta para intentar encontrar su par.
   - ✅ Si coinciden, las cartas quedan visibles y marcadas en verde.
   - ❌ Si no coinciden, ambas cartas se voltean de nuevo después de un momento.
4. El **temporizador** comienza con tu primer movimiento.
5. Repite hasta encontrar los **8 pares** y ¡ganar la partida!
6. Al ganar, tu resultado se guarda automáticamente en el **ranking**.
7. Usa el botón **"Nuevo juego"** (o el ícono 🔄) para reiniciar en cualquier momento.
8. Cambia el idioma con el selector **ES | EN** en la esquina superior.

---

## 📁 Estructura del proyecto

```
juego-de-logica/
│
├── app/
│   ├── layout.tsx        # Layout raíz con metadatos SEO
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales y fondo animado
│
├── components/
│   ├── Card.tsx          # Carta individual con animación flip 3D
│   ├── GameBoard.tsx     # Tablero de juego y lógica de victoria
│   ├── GameStats.tsx     # Panel de movimientos y tiempo
│   ├── Ranking.tsx       # Lista de mejores partidas
│   └── LanguageToggle.tsx # Selector de idioma ES / EN
│
├── store/
│   ├── gameStore.ts      # Estado global del juego (Zustand)
│   └── languageStore.ts  # Estado del idioma (Zustand)
│
├── lib/
│   ├── gameLogic.ts      # Funciones del juego: generar cartas, verificar pares
│   ├── shuffle.ts        # Algoritmo Fisher-Yates para mezclar cartas
│   └── translations.ts   # Textos en español e inglés
│
└── types/
    └── game.ts           # Interfaces y tipos TypeScript del proyecto
```

---

## 👤 Autor

Soy un desarrollador que está comenzando su camino en el mundo del desarrollo web moderno. Este proyecto forma parte de mi proceso de aprendizaje y de la construcción de mi portfolio profesional.

Mi objetivo es seguir creciendo, aprendiendo nuevas tecnologías y creando proyectos que demuestren mis habilidades de forma práctica.

> 📌 _"Cada proyecto es un paso más en el camino."_

---

<p align="center">
  Hecho con ❤️ y mucho ☕ — Logic Memory Game © 2026
</p>
