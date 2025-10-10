# Task Manager

Aplicación de gestión de tareas construida con Next.js utilizando Feature Sliced Design Architecture.

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Feature Sliced Design

## Estructura del Proyecto

```
src/
├── entities/       # Modelos de datos y tipos
├── features/       # Componentes con lógica de negocio
├── widgets/        # Componentes compuestos
├── pages-todo/     # Páginas de la aplicación
└── app/           # Configuración de rutas
```

## Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

## Características

- ✅ Agregar nuevas tareas
- ✅ Listar tareas
- ✅ Interfaz responsive
- ✅ Validación de formularios

## Arquitectura

Este proyecto sigue la arquitectura Feature Sliced Design (FSD), que ayuda a mantener el código organizado y escalable a medida que la aplicación crece.

## Cómo usar

1. Visita http://localhost:3000/tasks
2. Escribe el título de una nueva tarea
3. Presiona "Add" para agregar la tarea
4. La tarea aparecerá en la lista debajo del formulario
