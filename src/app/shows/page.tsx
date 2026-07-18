import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows | Melissa Hume",
  description:
    "Find Melissa Hume's ceramic work at markets, festivals, and events across Vancouver.",
};

type Show = {
  name: string;
  date: string;
  location?: string;
  description?: string;
  url?: string;
  status: "upcoming" | "past";
};

const shows: Show[] = [
  {
    name: "East Side Arts Festival",
    date: "July 25, 2026",
    location: "MacLean Park, 710 Keefer St., East Vancouver",
    description: "An outdoor arts festival celebrating the East Side community.",
    url: "https://eastsideartsfest.ca/",
    status: "upcoming",
  },
  {
    name: "Gastown Sunday Set",
    date: "August 16, 2026",
    location: "Gastown, Vancouver",
    description: "Water Street is turning into a stage, gallery, café patio, dance floor, and open-air playground"
    url: "https://gastown.org/sundayset/",
    status: "upcoming",
  },
  {
    name: "McSpadden County Fair",
    date: "September 13, 2026",
    location: "McSpadden Park, 2125 Victoria Drive, East Vancouver",
    description:
      "A beloved neighbourhood tradition featuring local artisans, live music, food trucks, and the legendary East Van Zucchini Races.",
    url: "https://www.mcspaddencountyfair.ca/",
    status: "upcoming",
  },
  {
    name: "Eastside Culture Crawl",
    date: "November 19-22, 2026",
    location: "Strathcona Studio, Vancouver",
    description:
      "Vancouver's annual four-day visual arts festival. Visit Melissa's studio during open hours: Thursday and Friday 5-10pm, Saturday and Sunday 11am-6pm.",
    url: "https://culturecrawl.ca/",
    status: "upcoming",
  },
  {
    name: "Enchanted Nights at Bloedel Conservatory",
    date: "December 2015",
    location: "VanDusen Botanical Garden, Vancouver",
    description:
      "Melissa contributed a miniature fairy village to this holiday installation at the VanDusen Festival of Lights.",
    status: "past",
  },
];

export default function ShowsPage() {
  const upcoming = shows.filter((s) => s.status === "upcoming");
  const past = shows.filter((s) => s.status === "past");

  return (
    <div className="px-6 md:px-12 py-16 max-w-3xl mx-auto">
      <h1 className="text-sm tracking-widest uppercase text-stone-500 mb-16 text-center">
        Shows
      </h1>

      {/* Upcoming */}
      <section className="mb-20">
        <h2 className="text-sm tracking-widest uppercase text-stone-400 mb-10">
          Upcoming
        </h2>
        <div className="space-y-10">
          {upcoming.map((show) => (
            <div key={show.name} className="border-t border-stone-200 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-lg text-stone-800">{show.name}</h3>
                <p className="text-sm text-stone-400 shrink-0">{show.date}</p>
              </div>
              {show.location && (
                <p className="mt-2 text-sm text-stone-500">{show.location}</p>
              )}
              {show.description && (
                <p className="mt-3 text-stone-600 leading-relaxed">
                  {show.description}
                </p>
              )}
              {show.url && (
                <a 
                  href={show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-stone-400 hover:text-stone-700 border-b border-stone-200 hover:border-stone-500 transition-colors"
                >
                  More information
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Past */}
      <section>
        <h2 className="text-sm tracking-widest uppercase text-stone-400 mb-10">
          Past
        </h2>
        <div className="space-y-10">
          {past.map((show) => (
            <div key={show.name} className="border-t border-stone-200 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-lg text-stone-800">{show.name}</h3>
                <p className="text-sm text-stone-400 shrink-0">{show.date}</p>
              </div>
              {show.location && (
                <p className="mt-2 text-sm text-stone-500">{show.location}</p>
              )}
              {show.description && (
                <p className="mt-3 text-stone-600 leading-relaxed">
                  {show.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}