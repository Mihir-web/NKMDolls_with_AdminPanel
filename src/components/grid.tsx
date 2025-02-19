import { Play, Clock } from "lucide-react";

export default function Component() {
  const tutorials = [
    {
      title: "Easy Detangling Tutorial",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      label: "PERM ROD SET WITH ZOE",
      imgSrc: "/perm.png",
      date: "1st Jan, 2024",
      isPrimary: true,
    },
    {
      title: "DETANGLING 101",
      subtitle: "DETANGLE ZOE'S HAIR WITH EASE",
      imgSrc: "/tut.png",
      date: "1st Jan, 2024",
    },
    {
      title: "Coming Soon",
      imgSrc: "/cash.png",
      date: "1st Jan, 2024",
    },
    {
      title: "DETANGLING 101",
      subtitle: "DETANGLE ZOE'S HAIR WITH EASE",
      imgSrc: "/perm.png",
      date: "1st Jan, 2024",
    },
    {
      title: "PERM ROD SET WITH ZOE",
      imgSrc: "/tut.png",
      date: "1st Jan, 2024",
    },
    {
      title: "DETANGLING 101",
      subtitle: "DETANGLE ZOE'S HAIR WITH EASE",
      imgSrc: "/cash.png",
      date: "1st Jan, 2024",
    },
    {
      title: "DETANGLING 101",
      subtitle: "DETANGLE ZOE'S HAIR WITH EASE",
      imgSrc: "/tut.png",
      date: "1st Jan, 2024",
    },
  ];

  return (
    <div className="w-4/5 mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div className="lg:max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
            CurlFriends Offer Real Hair Play!
          </h1>
          <p className="text-gray-600">
            Their hair is a specially designed full of curl power to be styled
            just like real hair. They teach all their new curlfriends how to
            wash, style and care for their hair through play!
          </p>
        </div>
        <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 mt-4 lg:mt-0">
          See All Tutorials
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        {tutorials.map((tutorial, index) =>
          tutorial.isPrimary ? (
            <div
              key={index}
              className="col-span-full relative overflow-hidden group cursor-pointer rounded-lg shadow-md"
            >
              <img
                src={tutorial.imgSrc}
                alt={tutorial.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-start p-6 text-white bg-black/40">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold">{tutorial.title}</span>
                  </div>
                  <p className="max-w-lg">{tutorial.description}</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                {tutorial.label}
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={tutorial.imgSrc}
                  alt={tutorial.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <span className="text-blue-400">★</span>
                  <span className="text-pink-400">♥</span>
                  <span className="text-yellow-400">⚡</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-cyan-500 mb-1">
                  {tutorial.title}
                </h3>
                {tutorial.subtitle && (
                  <p className="text-sm text-cyan-400 mb-2">
                    {tutorial.subtitle}
                  </p>
                )}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{tutorial.date}</span>
                </div>
                <h4 className="font-semibold mb-2">Hair Style Tutorial</h4>
                <p className="text-gray-600 text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim.
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
