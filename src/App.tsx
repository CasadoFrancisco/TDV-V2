import React, { useState, useEffect } from 'react';
import { 
  Youtube, 
  Twitch, 
  Instagram, 
  BookIcon as TiktokIcon, 
  Calendar, 
  MapPin, 
  Clock, 
  ExternalLink,
  Heart,
  DollarSign,
  User,
  Video,
  Eye,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [showAllShows, setShowAllShows] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  // YouTuber data
  const youtuberData = {
    name: "Alex StreamMaster",
    bio: "Creador de contenido apasionado por los videojuegos y el entretenimiento. Llevo más de 5 años creando contenido divertido y emocionante para mi comunidad.",
    statistics: {
      subscribers: "250K",
      totalViews: "15M",
      videoCount: "450"
    },
    socialMedia: [
      { name: "YouTube", url: "https://youtube.com/c/alexstreammaster", icon: <Youtube size={24} /> },
      { name: "Twitch", url: "https://twitch.tv/alexstreammaster", icon: <Twitch size={24} /> },
      { name: "Instagram", url: "https://instagram.com/alexstreammaster", icon: <Instagram size={24} /> },
      { name: "TikTok", url: "https://tiktok.com/@alexstreammaster", icon: <TiktokIcon size={24} /> }
    ],
    liveShows: [
      { 
        date: "15 Noviembre 2025", 
        time: "20:00", 
        title: "Gaming Night Live", 
        location: "Teatro Gran Rex, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/gaming-night-live" 
      },
      { 
        date: "22 Noviembre 2025", 
        time: "19:30", 
        title: "Meet & Greet Fans", 
        location: "Centro Cultural Konex, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/meet-greet-fans" 
      },
      { 
        date: "5 Diciembre 2025", 
        time: "21:00", 
        title: "Streaming Awards Show", 
        location: "Teatro Opera, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/streaming-awards-show" 
      },
      { 
        date: "12 Diciembre 2025", 
        time: "18:00", 
        title: "Podcast en Vivo", 
        location: "La Trastienda, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/podcast-en-vivo" 
      },
      { 
        date: "20 Diciembre 2025", 
        time: "20:30", 
        title: "Torneo Gaming con Fans", 
        location: "Estadio Luna Park, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/torneo-gaming-fans" 
      },
      { 
        date: "15 Enero 2026", 
        time: "19:00", 
        title: "Firma de Autógrafos", 
        location: "Shopping Abasto, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/firma-autografos" 
      },
      { 
        date: "28 Enero 2026", 
        time: "21:00", 
        title: "Concierto Streamers Unidos", 
        location: "Estadio Obras, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/concierto-streamers" 
      },
      { 
        date: "10 Febrero 2026", 
        time: "20:00", 
        title: "Presentación Nuevo Proyecto", 
        location: "Teatro Coliseo, Buenos Aires", 
        ticketUrl: "https://entradas.com/evento/nuevo-proyecto" 
      }
    ],
    videos: [
      {
        title: "Mi setup gaming 2025 - Tour completo",
        thumbnail: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "1.2M",
        url: "https://youtube.com/watch?v=example1",
        featured: true
      },
      {
        title: "Cómo empezar tu canal de YouTube en 2025",
        thumbnail: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "850K",
        url: "https://youtube.com/watch?v=example2",
        featured: true
      },
      {
        title: "Reaccionando a mis primeros videos",
        thumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "1.5M",
        url: "https://youtube.com/watch?v=example3",
        featured: true
      },
      {
        title: "Jugando con mis suscriptores",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "720K",
        url: "https://youtube.com/watch?v=example4",
        featured: false
      },
      {
        title: "Unboxing de regalos de fans",
        thumbnail: "https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "980K",
        url: "https://youtube.com/watch?v=example5",
        featured: false
      }
    ],
    donation: {
      paypal: "paypal.me/alexstreammaster",
      mercadoPago: "mercadopago.me/alexstreammaster",
      cbu: "0000000000000000000000"
    }
  };

  const featuredVideos = youtuberData.videos.filter(video => video.featured);
  const showsToDisplay = showAllShows ? youtuberData.liveShows : youtuberData.liveShows.slice(0, 6);
  const hasMoreShows = youtuberData.liveShows.length > 6;

  const nextVideo = () => {
    setActiveVideoIndex((prevIndex) => 
      prevIndex === featuredVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setActiveVideoIndex((prevIndex) => 
      prevIndex === 0 ? featuredVideos.length - 1 : prevIndex - 1
    );
  };

  const toggleShowsDisplay = () => {
    setShowAllShows(!showAllShows);
    
    // Scroll to shows section when showing more
    if (!showAllShows) {
      setTimeout(() => {
        document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">{youtuberData.name}</div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="hover:text-purple-300 transition">Inicio</a></li>
            <li><a href="#shows" className="hover:text-purple-300 transition">Shows</a></li>
            <li><a href="#about" className="hover:text-purple-300 transition">Sobre Mí</a></li>
            <li><a href="#videos" className="hover:text-purple-300 transition">Videos</a></li>
            <li><a href="#support" className="hover:text-purple-300 transition">Apóyame</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center">
        <div 
          className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-6 flex items-center justify-center"
          data-aos="zoom-in"
        >
          <User size={64} />
        </div>
        <h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {youtuberData.name}
        </h1>
        <p 
          className="text-xl max-w-2xl mb-8 text-purple-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {youtuberData.bio}
        </p>
        
        {/* Social Media Links */}
        <div 
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {youtuberData.socialMedia.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full"
              data-aos="zoom-in"
              data-aos-delay={350 + (index * 50)}
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Live Shows Section */}
      <section id="shows" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Próximos Shows en Vivo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showsToDisplay.map((show, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <Calendar size={18} />
                  <span>{show.date}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300 mb-4">
                  <Clock size={18} />
                  <span>{show.time} hs</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{show.title}</h3>
                <div className="flex items-center gap-2 text-purple-200 mb-6">
                  <MapPin size={18} />
                  <span>{show.location}</span>
                </div>
                <a 
                  href={show.ticketUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition px-4 py-2 rounded-lg font-medium"
                >
                  <ExternalLink size={18} />
                  Comprar Entradas
                </a>
              </div>
            ))}
          </div>
          
          {hasMoreShows && (
            <div className="flex justify-center mt-12">
              <button
                onClick={toggleShowsDisplay}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-full font-medium"
                data-aos="fade-up"
              >
                {showAllShows ? (
                  <>
                    <ChevronUp size={20} />
                    <span>Ver menos</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    <span>Ver más shows</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About & Statistics Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div 
              className="md:w-1/2"
              data-aos="fade-right"
            >
              <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
              <p className="text-lg text-purple-200 mb-8">
                Hola a todos! Soy {youtuberData.name}, creador de contenido y streamer. Mi pasión es entretener y conectar con mi audiencia a través de contenido auténtico y divertido.
              </p>
              <p className="text-lg text-purple-200 mb-8">
                Comencé mi canal en 2020 y desde entonces he crecido junto a una increíble comunidad. Me especializo en gaming, reacciones y vlogs de mi día a día. Mi objetivo es crear un espacio donde todos se sientan bienvenidos y puedan disfrutar de buen contenido.
              </p>
              <p className="text-lg text-purple-200">
                Cuando no estoy creando contenido, me gusta viajar, probar nuevos juegos y pasar tiempo con mi familia y amigos. ¡Gracias por ser parte de este viaje!
              </p>
            </div>
            
            <div 
              className="md:w-1/2"
              data-aos="fade-left"
            >
              <div className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Estadísticas de YouTube</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div 
                    className="flex flex-col items-center p-4 bg-white/10 rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <Users className="text-purple-300 mb-2" size={32} />
                    <span className="text-3xl font-bold">{youtuberData.statistics.subscribers}</span>
                    <span className="text-purple-300">Suscriptores</span>
                  </div>
                  
                  <div 
                    className="flex flex-col items-center p-4 bg-white/10 rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <Eye className="text-purple-300 mb-2" size={32} />
                    <span className="text-3xl font-bold">{youtuberData.statistics.totalViews}</span>
                    <span className="text-purple-300">Vistas Totales</span>
                  </div>
                  
                  <div 
                    className="flex flex-col items-center p-4 bg-white/10 rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <Video className="text-purple-300 mb-2" size={32} />
                    <span className="text-3xl font-bold">{youtuberData.statistics.videoCount}</span>
                    <span className="text-purple-300">Videos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Mis Videos Destacados
          </h2>
          
          {/* Featured Video Carousel */}
          <div 
            className="relative mb-16"
            data-aos="fade-up"
          >
            <div className="overflow-hidden rounded-xl shadow-2xl aspect-video max-w-4xl mx-auto">
              <img 
                src={featuredVideos[activeVideoIndex].thumbnail} 
                alt={featuredVideos[activeVideoIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold mb-2">{featuredVideos[activeVideoIndex].title}</h3>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>{featuredVideos[activeVideoIndex].views} vistas</span>
                </div>
                <a 
                  href={featuredVideos[activeVideoIndex].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg font-medium"
                >
                  <Youtube size={18} />
                  Ver en YouTube
                </a>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevVideo}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextVideo}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Video Grid */}
          <h3 
            className="text-2xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            Más Videos Populares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtuberData.videos.filter(video => !video.featured).map((video, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{video.title}</h4>
                  <div className="flex items-center gap-2 text-purple-300 mb-4">
                    <Eye size={16} />
                    <span>{video.views} vistas</span>
                  </div>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition"
                  >
                    <Youtube size={18} />
                    Ver video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            Apóyame
          </h2>
          <p 
            className="text-lg text-purple-200 max-w-2xl mx-auto text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Si disfrutas de mi contenido y quieres ayudarme a seguir creando, puedes apoyarme a través de las siguientes opciones. ¡Cada aporte hace una gran diferencia!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">PayPal</h3>
              <p className="text-purple-200 mb-4">Realiza donaciones rápidas y seguras a través de PayPal</p>
              <a 
                href={`https://${youtuberData.donation.paypal}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
              >
                Donar con PayPal
              </a>
            </div>
            
            <div 
              className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">MercadoPago</h3>
              <p className="text-purple-200 mb-4">Apóyame usando MercadoPago si estás en Latinoamérica</p>
              <a 
                href={`https://${youtuberData.donation.mercadoPago}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
              >
                Donar con MercadoPago
              </a>
            </div>
            
            <div 
              className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transferencia Bancaria</h3>
              <p className="text-purple-200 mb-4">Transferencia directa a mi cuenta bancaria (Argentina)</p>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-mono text-sm break-all">{youtuberData.donation.cbu}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold">{youtuberData.name}</p>
              <p className="text-purple-300">© {new Date().getFullYear()} - Todos los derechos reservados</p>
            </div>
            
            <div className="flex gap-4">
              {youtuberData.socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;