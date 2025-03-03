import React from "react";
import moment from "moment";
import { IconCalendarWeek,IconClock,IconMapPin,IconExternalLink } from '@tabler/icons-react';


interface TicketProps {
  title: string;
  date: string;
  time: string;
  category: string;
  link: string;
}

export const TicketComponents: React.FC<TicketProps> = (
  title,
  date,
  time,
  category,
  link
) => {
  const formattedDate = moment(date).format("DD/MM");
  const formattedTime = moment(time, "HH:mm:ss").format("HH:mm");
  return (
    <>
     <div
               
                className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <IconCalendarWeek size={18} />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300 mb-4">
                  <IconClock size={18} />
                  <span>{formattedTime} hs</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <div className="flex items-center gap-2 text-purple-200 mb-6">
                  <IconMapPin  size={18} />
                  <span>{category}</span>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition px-4 py-2 rounded-lg font-medium"
                >
                  <IconExternalLink  size={18} />
                  Comprar Entradas
                </a>
              </div>
    </>
  )
};
