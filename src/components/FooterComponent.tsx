import { useEffect, useState } from "react";
import {
  IconBrandTwitch,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { fetchHeaderData } from "../functions/HeaderFecthData";

export default function FooterComponent() {
  const [socialMedia, setSocialMedia] = useState<any>([]);

  useEffect(() => {
    fetchHeaderData()
      .then((data) => {
        setSocialMedia(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("socialMediaaaa:", socialMedia?.[0]?.attributes?.socialMedia?.[0]?.URL);

  const linkInstagram =
  socialMedia?.[0]?.attributes?.socialMedia?.[0]?.URL;
  const linkTwitch = socialMedia?.[1]?.attributes?.socialMedia?.[0]?.URL;
  const linkYoutube = socialMedia?.[2]?.attributes?.socialMedia?.[0]?.URL;
  const linkTiktok = socialMedia?.[3]?.attributes?.socialMedia?.[0]?.URL;

  return (
    <>
      <footer className="bg-black/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold">Emilio Gonzalez</p>
              <p className="text-purple-300">
                © {new Date().getFullYear()} - Todos los derechos reservados
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition p-2 rounded-full"
                
              >
                <IconBrandInstagram  size={24} />
                
              </a>
              <a
                href={linkTwitch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition p-2 rounded-full"
                
              >
                <IconBrandTwitch size={24} />
                
              </a>
              <a
                href={linkYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition p-2 rounded-full"
                
              >
                <IconBrandYoutube size={24} />
                
              </a>
              <a
                href={linkTiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition p-2 rounded-full"
                
              >
                <IconBrandTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
