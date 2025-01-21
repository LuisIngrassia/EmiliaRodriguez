import React from "react";
import { Menu, X, ArrowRight, Building2, Users } from "lucide-react";
import "./Home.css";
import logotipo from "../assets/logotipo.jpeg";
import Footer from "../components/Footer";
import Servicios from "./Servicios";
import fondo2 from "../assets/fondo2.jpeg";

const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm select-none">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logotipo}
              alt="Logo"
              className="h-20 w-30 mr-2 select-none"
            />
            {/* <h1 className="text-2xl font-bold text-gray-800">Ering Studio</h1> */}
          </div>
          <nav className="hidden md:flex space-x-6 select-none">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900"
              onClick={handleSmoothScroll}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900"
              onClick={handleSmoothScroll}
            >
              Proyectos
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900"
              onClick={handleSmoothScroll}
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900"
              onClick={handleSmoothScroll}
            >
              Sobre Mi
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900"
              onClick={handleSmoothScroll}
            >
              Contacto
            </a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white py-4 select-none">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900"
                onClick={handleSmoothScroll}
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900"
                onClick={handleSmoothScroll}
              >
                Proyectos
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-900"
                onClick={handleSmoothScroll}
              >
                Servicios
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900"
                onClick={handleSmoothScroll}
              >
                Sobre Mi
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900"
                onClick={handleSmoothScroll}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-hero select-none" id="home">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Diseñando el futuro
            </h2>
            <p className="text-xl text-white mb-8">
              Soluciones arquitectónicas innovadoras para la vida moderna
            </p>
            <a
              href="#projects"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Explora Mis Proyectos
            </a>
          </div>
        </div>
      </section>

      {/* Featured Proyectos */}
      <section className="py-16 bg-gray-100 select-none" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Project ${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Proyecto {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 select-none" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={fondo2}
                alt="About Ering Studio"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Sobre Ering Estudio
              </h2>
              <p className="text-gray-600 mb-6">
                We are a team of passionate architects dedicated to creating
                innovative and sustainable designs that transform spaces and
                enhance lives.
              </p>
              <div className="flex items-center mb-4">
                <Building2 className="text-blue-600 mr-4" />
                <span className="text-gray-700">
                  Más de 10 proyectosd completados
                </span>
              </div>
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 mr-4" />
                <span className="text-gray-700">
                  Expert team of architects and designers
                </span>
              </div>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block"
              >
                Aprende Más Sobre Mi
              </a>
            </div>
          </div>
        </div>
      </section>

      <Servicios />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
