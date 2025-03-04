import { useEffect, useState } from "react";
import { IconUsers, IconEye, IconVideo } from "@tabler/icons-react";
import { fetchAboutMe } from "../functions/AboutMeFetchData";

export default function AboutMeComponent() {
  const [aboutMeData, setAboutMeData] = useState<any>(null);

  useEffect(() => {
    fetchAboutMe()
      .then((data) => {
        setAboutMeData(data);
        console.log("Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Función para formatear números grandes
  const formatNumber = (num: string | number) => {
    // Asegurarse de que num sea un número
    const numValue = typeof num === 'string' 
      ? parseInt(num.replace(/,/g, ''), 10) || 0 
      : num || 0;
    
    if (numValue >= 1000000) {
      return (numValue / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (numValue >= 1000) {
      return (numValue / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    
    return numValue.toString();
  };

  console.log("aboutMeData", aboutMeData);

  const textAboutMe = aboutMeData?.data?.[0]?.attributes?.textoAcercaDeMi;
  const numberSubscribers = aboutMeData?.data?.[0]?.attributes?.suscriptoresYouTube;
  const numberTotalViews = aboutMeData?.data?.[0]?.attributes?.VisitasTotales;
  const numberVideos = aboutMeData?.data?.[0]?.attributes?.videoTotales;
  console.log("numberSubscribers", numberSubscribers);
  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div 
              className="md:w-1/2"
              data-aos="fade-right"
            >
              <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
              <p className="text-lg text-purple-200 mb-8">
                {textAboutMe || "Cargando..."}
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
                    <IconUsers className="text-purple-300 mb-2" size={32} />
                    <span className="text-3xl font-bold">{numberSubscribers ? formatNumber(numberSubscribers) : "-"}</span>
                    <span className="text-purple-300">Suscriptores</span>
                  </div>
                  
                  <div 
                    className="flex flex-col items-center p-4 bg-white/10 rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <IconEye className="text-purple-300 mb-2" size={32} />
                    <span className="text-3xl font-bold">{numberTotalViews ? formatNumber(numberTotalViews) : "-"}</span>
                    <span className="text-purple-300">Vistas Totales</span>
                  </div>
                  
                  <div 
                    className="flex flex-col items-center p-4 bg-white/10 rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <IconVideo className="text-purple-300 mb-2" size={32} />
                    <span className="text-3xl font-bold">{numberVideos ? formatNumber(numberVideos) : "-"}</span>
                    <span className="text-purple-300">Videos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}