import { useEffect, useState } from "react";
import {
  IconBrandTwitch,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { fetchHeaderData } from "../functions/HeaderFecthData";
import { fetchTextAboutMeTextData } from "../functions/TextAboutMeTextFetchData";

export default function HeroSectionComponent() {
  const [headerData, setHeaderData] = useState<any>(null);
  const [textAboutMeTextData, setTextAboutMeTextData] = useState<any>(null);

  useEffect(() => {
    fetchTextAboutMeTextData()
      .then((data) => {
        setTextAboutMeTextData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchHeaderData()
      .then((data) => {
        setHeaderData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const titulo = headerData?.data?.[0]?.attributes?.titulo ?? "Loading...";
  const bio = textAboutMeTextData?.data?.[0]?.attributes?.Texto ?? "Cargando descripción...";
  const iconoInicioUrl =
    headerData?.data?.[0]?.attributes?.iconoInicio?.data?.attributes?.url ?? "/images/default-avatar.png";

  const socialLinks = headerData?.data?.[0]?.attributes?.socialMedia ?? [];
  const linkInstagram = socialLinks.find((s: any) => s.Nombre === "Instagram")?.URL;
  const linkTwitch = socialLinks.find((s: any) => s.Nombre === "Twitch")?.URL;
  const linkYoutube = socialLinks.find((s: any) => s.Nombre === "YouTube")?.URL;
  const linkTiktok = socialLinks.find((s: any) => s.Nombre === "TikTok")?.URL;

  return (
    <section
      id="home"
      className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center"
    >
      <div
        className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-200 to-purple-300 mb-6 flex items-center justify-center"
        data-aos="zoom-in"
      >
        <img
          className="w-32 h-32 rounded-full"
          src={iconoInicioUrl}
          alt="Icono de inicio"
        />
      </div>

      <h1
        className="text-5xl md:text-6xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {titulo}
      </h1>

      <p
        className="text-xl max-w-2xl mb-8 text-purple-200"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {bio}
      </p>

      {/* Social Media Links */}
      <div
        className="flex flex-wrap justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {linkInstagram && (
          <a
            href={linkInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full"
            data-aos="zoom-in"
            data-aos-delay={350}
          >
            <IconBrandInstagram size={24} />
            
          </a>
        )}

        {linkTwitch && (
          <a
            href={linkTwitch}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full"
            data-aos="zoom-in"
            data-aos-delay={350}
          >
            <IconBrandTwitch size={24} />
            
          </a>
        )}

        {linkYoutube && (
          <a
            href={linkYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full"
            data-aos="zoom-in"
            data-aos-delay={350}
          >
            <IconBrandYoutube size={24} />
           
          </a>
        )}

        {linkTiktok && (
          <a
            href={linkTiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full"
            data-aos="zoom-in"
            data-aos-delay={350}
          >
            <IconBrandTiktok size={24} />
            
          </a>
        )}
      </div>
    </section>
  );
}
