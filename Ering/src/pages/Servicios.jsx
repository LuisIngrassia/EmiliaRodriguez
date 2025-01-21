import React from "react";
import {
  Clock,
  Users,
  BedDouble,
  Video,
  Calendar,
  ChevronRight,
  House,
  HousePlus,
  Bath,
  Building,
} from "lucide-react";

const Servicios = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consultationType: "",
    preferedDate: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Para mostrar el estado del envío

  // Manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mgvvgpvr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Thank you for your message, I will contact you soon.");
      setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
    } else {
      setStatus("There was an error sending the message. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white select-none">
      {/* Consultation Types */}
      <section className="py-16" id="services">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Servicios de Asesoria
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1 Ambiente",
                description: (
                  <ul className="list-disc pl-4 text-left">
                    <li>1 Videollamada</li>
                    <li>
                      1 Plano con propuesta esquematica de distribucion del
                      ambiente
                    </li>
                    <li>1 Plano esquematico electrico</li>
                    <li>1 Moodboard de Materiales elegidos y referencias</li>
                    <li>Plantas y Vistas con Referencias</li>
                    <li>Plano de Muebles a Medida</li>
                    <li>Links de Compras</li>
                    <li>Modelado 3D</li>
                  </ul>
                ),
                icon: <BedDouble className="w-12 h-12 text-blue-600" />,
                price: "A partir de $100.000",
              },
              {
                title: "Cocina o Baño",
                description: (
                  <ul className="list-disc pl-5 text-left">
                    <li>2 Videollamadas</li>
                    <li>
                      2 Planos con propuesta esquematica de distribucion del
                      ambiente
                    </li>
                    <li>1 Plano esquematico electrico</li>
                    <li>1 Moodboard de Materiales elegidos y referencias</li>
                    <li>Plantas y Vistas con Referencias</li>
                    <li>Plano de Muebles a Medida</li>
                    <li>Links de Compras</li>
                    <li>Modelado 3D</li>
                  </ul>
                ),
                icon: <Bath className="w-12 h-12 text-blue-600" />,
                price: "A partir de $120.000",
              },
              {
                title: "Ambiente Integrado",
                description: (
                  <ul className="list-disc pl-5 text-left">
                    <li>2 Videollamadas</li>
                    <li>
                      2 Planos con propuesta esquematica de distribucion de los
                      ambientes (max 3)
                    </li>
                    <li>1 Plano esquematico electrico</li>
                    <li>1 Moodboard de Materiales elegidos y referencias</li>
                    <li>Plantas y Vistas con Referencias</li>
                    <li>Plano de Muebles a Medida</li>
                    <li>Links de Compras</li>
                    <li>Modelado 3D</li>
                  </ul>
                ),
                icon: <HousePlus className="w-12 h-12 text-blue-600" />,
                price: "A partir de $150.000",
              },
              {
                title: "Obra en General",
                description: (
                  <ul className="list-disc pl-5 text-left">
                    <li>2 Videollamadas</li>
                    <li>
                      2 Planos con propuesta esquematica de distribucion de los
                      ambientes (max 3)
                    </li>
                    <li>1 Plano esquematico electrico</li>
                    <li>1 Moodboard de Materiales elegidos y referencias</li>
                    <li>Plantas y Vistas con Referencias</li>
                    <li>Plano de Muebles a Medida</li>
                    <li>Links de Compras</li>
                    <li>Modelado 3D</li>
                  </ul>
                ),
                icon: <House className="w-12 h-12 text-blue-600" />,
                price: "A partir de $150.000",
              },
              {
                title: "Todos Los Ambientes",
                description: (
                  <ul className="list-disc pl-5 text-left">
                    <li>3 Videollamadas</li>
                    <li>
                      1 Plano con propuesta esquematica de distribucion de todos
                      los ambientes
                    </li>
                    <li>
                      1 Plano esquematico electrico por ambiente por ambiente
                    </li>
                    <li>1 Moodboard de Materiales elegidos y referencias</li>
                    <li>Plantas y Vistas con Referencias</li>
                    <li>Links de Compras</li>
                    <li>Modelado 3D</li>
                  </ul>
                ),
                icon: <Building className="w-12 h-12 text-blue-600" />,
                price: "A partir de $280.000",
              },
            ].map((consultation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex justify-center mb-4">
                  {consultation.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {consultation.title}
                </h4>
                <p className="text-gray-600 mb-6 text-center">
                  {consultation.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  {/* <span className="flex items-center" /> */}
                  <span className="font-semibold text-gray-700">
                    {consultation.price}
                  </span>
                </div>
                <a
                  href="#book-consultation"
                  className="block text-center bg-gray-100 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                >
                  Contactame Ahora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            ¿Porque Elegír Estas Consultas?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consejos de un Experto",
                description:
                  "Obtenga información de un arquitecto y diseñador experimentados.",
              },
              {
                title: "Soluciones a Medida",
                description:
                  "Reciba recomendaciones personalizadas según las necesidades específicas de su proyecto.",
              },
              {
                title: "Ahorro de tiempo y costes",
                description:
                  "Evite errores costosos y agilice el proceso de planificación de sus proyectos.",
              },
              {
                title: "Ideas Innovadoras",
                description:
                  "Explora conceptos y tecnologías de diseño de vanguardia.",
              },
              {
                title: "Prácticas Sustentables",
                description:
                  "Conozca las opciones ecológicas para hacer su proyecto más sustentable.",
              },
              {
                title: "Claridad y dirección",
                description:
                  "Obtenga una hoja de ruta clara para los próximos pasos y requisitos de su proyecto.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <ChevronRight className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-consultation" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Reserve Su Consulta
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre Y Apellido
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="consultationType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tipo de Consulta
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona un tipo de consulta</option>
                  <option value="1-ambiente">1 Ambiente</option>
                  <option value="cocina-baño">Cocina o Baño</option>
                  <option value="ambiente-integrado">Ambiente Integrado</option>
                  <option value="obra-general">Obra en General</option>
                  <option value="todos-ambientes">Todos los Ambientes</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Fecha Preferida
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Información Adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Programar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
