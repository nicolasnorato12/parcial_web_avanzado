import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Contáctanos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Consulta sobre reservaciones"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Información de contacto
              </h2>
              <div className="space-y-4">
                <p className="flex items-start text-gray-600">
                  <span className="font-medium mr-2">Dirección:</span>
                  Av. Principal #123, Ciudad
                </p>
                <p className="flex items-start text-gray-600">
                  <span className="font-medium mr-2">Teléfono:</span>
                  +1 234 567 890
                </p>
                <p className="flex items-start text-gray-600">
                  <span className="font-medium mr-2">Email:</span>
                  info@hoteladmin-plus.com
                </p>
                <p className="flex items-start text-gray-600">
                  <span className="font-medium mr-2">Horario:</span>
                  Atención 24/7
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Redes Sociales
              </h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  Facebook
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  Twitter
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  Instagram
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}