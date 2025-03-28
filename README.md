[![Netlify Status](https://api.netlify.com/api/v1/badges/eb7946d2-6cef-417e-988e-9ad61dc096b0/deploy-status)](https://app.netlify.com/sites/chimerical-platypus-822400/deploys)

# 🎬 Cinemate

**Cinemate** es una aplicación web desarrollada con React que permite explorar películas populares, mejor valoradas, próximas y en cartelera, utilizando la API de The Movie Database (TMDb).  
También ofrece una función de búsqueda por título y un interruptor para cambiar entre modo claro y oscuro.

🔗 Puedes visitar la app desplegada en Netlify: [CINEMATE](https://chimerical-platypus-822400.netlify.app/)

---

### 🎥 Vista previa

![Preview](https://github.com/user-attachments/assets/7cb21371-36fd-42f1-a713-1596e1486d97)  
![Preview](https://github.com/user-attachments/assets/bdb6f344-a725-4145-9b91-ff6619e843f5)

---

## 🚀 Tecnologías Utilizadas

### 🧩 Frontend

- **React 19**
- **React Router DOM v6.30**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Vite + React Scripts (CRA)**

### 🔌 API

- **TMDb** para la obtención de datos de películas

### ☁️ Hosting

- **Netlify**

---

## 📂 Estructura del Proyecto

```plaintext
cinema/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── App.js
│   ├── index.js
├── .env
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── netlify.toml
└── README.md
```
## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/CXarlosss/cinemate.git
cd cinema
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade tu clave de la API de TMDb:

```env
REACT_APP_API_KEY=tu_clave_aqui
```

### 4. Iniciar el Servidor Local

```bash
npm start
```

---

## 📜 Scripts Disponibles

| Comando           | Descripción                                |
|-------------------|--------------------------------------------|
| `npm start`       | Inicia el servidor de desarrollo            |
| `npm run build`   | Compila la aplicación para producción       |

---

## 🌐 Despliegue en Netlify

1. Ejecuta el build de producción:

   ```bash
   npm run build
   ```

2. Crea un nuevo proyecto en [Netlify](https://www.netlify.com/)

3. Conecta el repositorio o sube manualmente la carpeta `build/`

4. Añade tu variable de entorno en:

   ```
   Site Settings → Environment Variables → REACT_APP_API_KEY
   ```

### 📁 Configuración del Build en Netlify

- **Build command:** `npm run build`  
- **Publish directory:** `build`

### `netlify.toml` (opcional)

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔧 Funcionalidades

- 🎥 Ver películas populares, top, próximas y en cartelera
- 🔎 Buscar películas por título
- 🌙 Modo claro/oscuro
- 📱 Diseño responsive
- 📄 Detalles completos de cada película

---

## 📚 Aprendizajes

- Manejo de hooks personalizados (`useTitle`, `useFetch`)
- Uso de React Router DOM v6.30
- Configuración de Tailwind con CRA
- Deploy en Netlify con variables de entorno

---

## 👤 Autor  
**Carlos de Petronila**  
[LinkedIn](https://www.linkedin.com/in/carlos-de-petronila-rodriguez) • [GitHub](https://github.com/CXarlosss) • [Instagram](https://www.instagram.com/carlospetronila)

---

✨ Disfruta del cine desde tu pantalla con **Cinemate**. ✨
