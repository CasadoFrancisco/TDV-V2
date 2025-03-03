import React, { useState, useEffect } from "react";
import { IconCalendarWeek,IconClock,IconMapPin,IconExternalLink,IconChevronUp ,IconChevronDown } from '@tabler/icons-react';
import { fetchShowsData } from "../functions/FetchShowsData";
import { TicketComponents } from "./TicketComponents";
 

export default function LiveShowsComponents() {
  const [showAllShows, setShowAllShows] = useState(false);
  const [showsData, setShowsData] = useState<any>(null);

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
    ? showsData
    : showsData.slice(0, 6);
    const hasMoreShows = showsData.length > 6;

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
            {showsToDisplay.map((show: any, index: number) => (
              <TicketComponents
                key={index}
                title={show.title}
                date={show.date}
                time={show.time}
                category={show.location}
                link={show.ticketUrl}
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
                    <IconChevronUp  size={20} />
                    <span>Ver menos</span>
                  </>
                ) : (
                  <>
                    <IconChevronDown  size={20} />
                    <span>Ver más shows</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
