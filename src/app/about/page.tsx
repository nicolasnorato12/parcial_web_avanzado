import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Sobre HotelAdmin Plus
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Bienvenido a HotelAdmin Plus, tu destino premium para una experiencia hotelera excepcional. 
            Nos enorgullece ofrecer un servicio de primera clase y comodidades modernas en un ambiente 
            acogedor y sofisticado.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Nuestra Historia
          </h2>
          <p className="text-gray-600">
            Fundado en 2024, HotelAdmin Plus nació de la visión de crear un espacio donde la 
            hospitalidad tradicional se encuentra con la tecnología moderna. Desde entonces, 
            nos hemos dedicado a proporcionar experiencias memorables a nuestros huéspedes, 
            combinando comodidad, lujo y servicio personalizado.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Nuestro Compromiso
          </h2>
          <p className="text-gray-600">
            Nos comprometemos a:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>Proporcionar un servicio excepcional las 24 horas del día</li>
            <li>Mantener los más altos estándares de limpieza y comodidad</li>
            <li>Ofrecer experiencias personalizadas para cada huésped</li>
            <li>Innovar constantemente para mejorar la experiencia del cliente</li>
            <li>Ser un referente en sostenibilidad y responsabilidad ambiental</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ubicación
          </h2>
          <p className="text-gray-600">
            Estratégicamente ubicado en el corazón de la ciudad, HotelAdmin Plus ofrece 
            fácil acceso a las principales atracciones turísticas, centros comerciales 
            y distritos de negocios. Nuestro hotel es el punto de partida perfecto para 
            explorar todo lo que la ciudad tiene para ofrecer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Contacto
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
            <p className="text-gray-600">
              <strong>Dirección:</strong> Av. Principal #123, Ciudad<br />
              <strong>Teléfono:</strong> +1 234 567 890<br />
              <strong>Email:</strong> info@hoteladmin-plus.com<br />
              <strong>Horario de atención:</strong> 24/7
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}