import { useEffect, useState } from 'react';
import { fetchDonacionMethodData } from "../functions/FetchDonacionMethodData";

export default function DonationComponent() {
  const [donationData, setDonationData] = useState<any>([]);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    fetchDonacionMethodData()
      .then((data) => {
        setDonationData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const copyCbu = (cbu: string) => {
    navigator.clipboard.writeText(cbu).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };


  return (
    <>
      <section id="support" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">
            Apóyame
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto text-center mb-12" data-aos="fade-up" data-aos-delay="100">
            Si disfrutas de mi contenido y quieres ayudarme a seguir creando, puedes apoyarme a través de las siguientes opciones. ¡Cada aporte hace una gran diferencia!
          </p>

          {/* Campo para ingresar el nombre del donante */}
         

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {donationData.map((donation:any, index:any) => (
              <div
                key={donation.id}
                className="bg-gradient-to-br from-purple-700/40 to-indigo-700/40 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={donation.attributes.IconoDeDondacion.data?.attributes?.url || ""} alt={donation.attributes.Metodo} />
                </div>

                <h3 className="text-xl font-bold mb-3">{donation.attributes.Metodo}</h3>
                <p className="text-purple-200 mb-4">{donation.attributes.Descripcion}</p>

                {/* Botón de PayPal usando el alias */}
                {donation.attributes.Metodo === "PayPal" && donation.attributes.Alias && (
                  <a
                    href={`https://www.paypal.me/${donation.attributes.Alias.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
                  >
                    Donar con PayPal
                  </a>
                )}

                {donation.attributes.Metodo === "MercadoPago" && donation.attributes.Enlace && (
                  <a
                    href={donation.attributes.Enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
                  >
                    Donar con MercadoPago
                  </a>
                )}

                {donation.attributes.Metodo === "CBU" && (
                  <>
                    <div className="bg-white/10 p-4 rounded-lg mb-4">
                      {donation.attributes.Banco && (
                        <p className="text-purple-200 mb-2">
                          <span className="font-bold">Banco:</span> {donation.attributes.Banco}
                        </p>
                      )}
                      {donation.attributes.Titular && (
                        <p className="text-purple-200 mb-2">
                          <span className="font-bold">Titular:</span> {donation.attributes.Titular}
                        </p>
                      )}
                      {donation.attributes.Alias && (
                        <p className="text-purple-200 mb-4">
                          <span className="font-bold">Alias:</span> {donation.attributes.Alias}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => copyCbu(donation.attributes.Descripcion)}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
                    >
                      {copied ? "¡CBU Copiado!" : "Copiar CBU"}
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
