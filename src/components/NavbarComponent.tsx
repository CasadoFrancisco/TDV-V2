import  { useEffect, useState } from "react";
import { fetchHeaderData } from "../functions/HeaderFecthData";

export default function NavbarComponent() {

  const [headerData, setHeaderData] = useState<any>([]);

  useEffect(() => {
    fetchHeaderData().then((data) => {
      setHeaderData(data);
    });
  }, []);

  const iconoNavbarUrl =
  headerData?.data?.[0]?.attributes?.iconoNabvar?.data?.attributes?.url;

  return (
    <>
      <header className="container mx-auto py-6 px-4 fixed top-2 rounded-2xl left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md">
        <nav className="flex justify-between items-center">
          <div className="flex flex-row gap-4 text-2xl font-bold">
            <img src={iconoNavbarUrl} className="w-16 h-16 rounded-full" alt="" />
            <div className="flex flex-col items-start ">
              <span>Emilio</span>
              <span>Gonzalez</span>
            </div>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#home" className="hover:text-purple-300 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#shows" className="hover:text-purple-300 transition">
                Shows
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-300 transition">
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#videos" className="hover:text-purple-300 transition">
                Videos
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-purple-300 transition">
                Apóyame
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
