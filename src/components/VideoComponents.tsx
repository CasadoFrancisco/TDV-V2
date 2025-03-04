import { useState, useEffect } from "react";
import {
  IconEye,
  IconBrandYoutube,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { fetchVideosData } from "../functions/FetchVideosData";
import { Video } from "../interface/interface-video"; 

export default function VideoComponents() {
  const [youtuberData, setYoutuberData] = useState<Video[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  useEffect(() => {
    fetchVideosData()
      .then((response) => {
        const transformedData: Video[] = response.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.titulo,
          views: item.attributes.vistasVideo,
          url: item.attributes.urlVideo,
          thumbnail: item.attributes.presentacionImagen?.data?.attributes.url || "",
          featured: item.attributes.destacado,
        }));
        setYoutuberData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("youtuberData:", youtuberData);

  const featuredVideos = youtuberData.filter((video) => video.featured);

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

  return (
    <section id="videos" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Mis Videos Destacados</h2>

        {/* Carrusel de Videos Destacados */}
        {featuredVideos.length > 0 && (
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-xl shadow-2xl aspect-video max-w-4xl mx-auto">
              <img
                src={featuredVideos[activeVideoIndex]?.thumbnail}
                alt={featuredVideos[activeVideoIndex]?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {featuredVideos[activeVideoIndex]?.title}
                </h3>
                <div className="flex items-center gap-2">
                  <IconEye size={16} />
                  <span>{featuredVideos[activeVideoIndex]?.views} vistas</span>
                </div>
                <a
                  href={featuredVideos[activeVideoIndex]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg font-medium"
                >
                  <IconBrandYoutube size={18} />
                  Ver en YouTube
                </a>
              </div>
            </div>

            {/* Botones de Navegación */}
            <button onClick={prevVideo} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition p-2 rounded-full">
              <IconChevronLeft size={24} />
            </button>
            <button onClick={nextVideo} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition p-2 rounded-full">
              <IconChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Más Videos Populares */}
        <h3 className="text-2xl font-bold mb-6 text-center">Más Videos Populares</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtuberData
            .filter((video) => !video.featured)
            .map((video) => (
              <div key={video.id} className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
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
                    <IconEye size={16} />
                    <span>{video.views} vistas</span>
                  </div>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition">
                    <IconBrandYoutube size={18} />
                    Ver video
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
