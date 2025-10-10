# Task Manager - Next.js con Feature-Sliced Design

Este proyecto es una aplicación de gestión de tareas construida con Next.js, siguiendo la arquitectura Feature-Sliced Design (FSD).

## Estructura del Proyecto

El proyecto sigue la arquitectura FSD con las siguientes capas:

- `entities/` - Definiciones de tipos y modelos base
- `features/` - Componentes con lógica de negocio
- `widgets/` - Componentes que combinan features
- `pages-todo/` - Páginas de la aplicación
- `app/` - Configuración de rutas de Next.js

## Tecnologías Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- Feature-Sliced Design

## Cómo Ejecutar

1. Instalar dependencias:
```bash
pnpm install
```

2. Ejecutar en modo desarrollo:
```bash
pnpm dev
```

3. Abrir [http://localhost:3000](http://localhost:3000)

## Características

- ✅ Agregar tareas
- ✅ Listar tareas
- ✅ Interfaz responsive
- ✅ Validación de formularios
