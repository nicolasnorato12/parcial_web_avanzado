import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'A simple task manager application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Layout principal de la aplicación. Mantener sencillo para facilitar pruebas y pruebas E2E.
  // Nota: Podemos añadir providers (Theme, Auth) aquí en el futuro.
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}