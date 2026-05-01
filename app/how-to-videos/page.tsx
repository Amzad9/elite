'use client';
import { Play, MoreVertical } from 'lucide-react';

const HowToVideos = () => {
  const videos = [
    {
      id: 1,
      title: "How to Switch AT&T Sim Card to Pond Sim Card on PAX S920",
      videoId: "891890041",
      author: "Josh Hoffmann"
    },
    {
      id: 2,
      title: "How to Switch AT&T Sim Card to Pond Sim Card on PAX A920",
      videoId: "889983426",
      author: "Josh Hoffmann"
    },
    {
      id: 3,
      title: "How to Switch AT&T Sim Card to Pond Sim Card on VL500",
      videoId: "891877760",
      author: "Josh Hoffmann"
    },
    {
      id: 4,
      title: "How to Switch AT&T Sim Card to Pond Sim Card on VP500",
      videoId: "889608521",
      author: "Josh Hoffmann"
    }
  ];


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-20 via-gray-100 to-purple-10 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">

        <section className="relative flex h-[350px] sm:h-[400px] items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1661299347055-050d54d9c287?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/85 via-[#152E5A]/70 to-[#152E5A]/85" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/40 blur-[120px] animate-pulse" />
            <div className="absolute right-20 top-16 h-80 w-80 rounded-full bg-blue-800/25 blur-[140px] animate-pulse delay-700" />
            <div className="absolute bottom-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-green-500/20 blur-[110px] animate-pulse delay-1000" />
          </div>                {/* Content */}
          <div className="relative z-10 px-14 py-12 text-center">
            <h1 className="mb-4 text-6xl font-extrabold text-white">
              How To Videos
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow">
              Step-by-step guides to help you get the most out of your payment solutions
            </p>
            <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
          </div>
        </section>


        {/* Video Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group backdrop-blur-xl rounded-3xl border border-white/60 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-102 hover:shadow-2xl shadow-lg"
              >
                <div className='blur-3xl absolute top-0 bg-white/10 left-0 w-full h-full' />
                {/* Card Header */}
                <div className="p-6 pb-4 flex items-start justify-between">

                </div>

                {/* Video Thumbnail */}
                <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden bg-linear-to-br from-blue-100 to-indigo-100 aspect-video group-hover:shadow-xl transition-shadow shadow-md">
                  <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <div className="relative w-full pb-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 h-full w-full rounded-2xl"
                        src={`https://player.vimeo.com/video/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-gray-800 text-xl font-sans font-semibold mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm">
                      Instructional Guide from <span className="text-blue-600 font-medium">{video.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HowToVideos;