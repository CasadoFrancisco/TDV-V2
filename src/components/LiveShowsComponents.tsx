import { useState, useEffect } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { fetchShowsData } from "../functions/FetchShowsData";
import { TicketComponents } from "./TicketComponents";
import { Show } from "../interface/showsInterface";

;

export default function LiveShowsComponents() {
  const [showAllShows, setShowAllShows] = useState(false);
  const [showsData, setShowsData] = useState<{ data: Show[]; meta: any } | null>(null);

  useEffect(() => {
    fetchShowsData()
      .then((data) => {
        setShowsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const showsToDisplay = showAllShows
    ? showsData?.data
    : showsData?.data?.slice(0, 6) || [];
  const hasMoreShows = (showsData?.data?.length || 0) > 6;

  const toggleShowsDisplay = () => {
    setShowAllShows(!showAllShows);

    // Scroll to shows section when showing more
    if (!showAllShows) {
      setTimeout(() => {
        document
          .getElementById("shows")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  return (
    <>
      <section id="shows" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Próximos Shows en Vivo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showsToDisplay?.map((show) => (
              <TicketComponents
                key={show.id}
                title={show.attributes.titulo}
                date={show.attributes.diaFuncion}
                time={show.attributes.horaFuncion}
                category={show.attributes.ubicacion}
                link={show.attributes.linkPaginaFuncion}
              />
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
                    <IconChevronUp size={20} />
                    <span>Ver menos</span>
                  </>
                ) : (
                  <>
                    <IconChevronDown size={20} />
                    <span>Ver más shows</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}