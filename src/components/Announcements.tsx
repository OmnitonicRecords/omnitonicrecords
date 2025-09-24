import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Announcements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      id: 1,
      title: "Omnitonic Records有偿征稿第一期活动正式开启",
      content: "Omnitonic Records Launches Paid Call-for-Submissions – Round 1 Is Now Open",
      date: "2025.09.21",
      url: "https://www.beatarray.com/label/OmnitonicRecords"
    },
    {
      id: 2,
      title: "CELESTIAL RCRDS 天体记录「声维无界」Vol.1 已发布",
      content: "CELESTIAL RCRDS: Sonic Dimensions Unbound Vol.1 — Out Now",
      date: "2025.08.27",
      url: "https://fanlink.tv/wHEj"
    },
    {
      id: 3,
      title: "None.",
      content: "",
      date: "",
      url: ""
    },
    {
      id: 4,
      title: "None.",
      content: "",
      date: "",
      url: ""
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <section id="announcements" className="py-32 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Latest
            <span className="text-[#222ff1] ml-4">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            获取厂牌最新动态和重要公告
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-[#222ff1]" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-[#222ff1]" />
          </motion.button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {announcements.map((announcement) => (
                <motion.a
                  key={announcement.id}
                  href={announcement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex-shrink-0 block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-[#222ff1] to-[#1a1fb3] text-white p-8 lg:p-12 rounded-2xl mx-2">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-white/60 text-sm font-mono">{announcement.date}</span>
                      <ExternalLink className="w-5 h-5 text-white/60" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {announcements.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-[#222ff1]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;