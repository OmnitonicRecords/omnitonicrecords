import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const Artists = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const artists = [
    {
      name: "CyberNexi",
      genre: "创始人/主理/美工/审核",
      image: "https://youke1.picui.cn/s1/2025/09/24/68d36d9cc5c57.png",
      description: "Progressive House / Future Bounce / Melodic Dubstep Producer",
      netease: "https://music.163.com/#/artist?id=58143422",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Cluboy",
      genre: "副主理/运营/审核",
      image: "https://youke1.picui.cn/s1/2025/09/24/68d36e4cbd583.png",
      description: "Techno / House Producer",
      netease: "https://music.163.com/#/artist?id=97740282",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "DJ - Itao",
      genre: "审核",
      image: "https://youke1.picui.cn/s1/2025/09/24/68d371f4be3a4.jpg",
      description: "国内新锐电音制作人，主风格Bigroom Techno / Peak Time Techno",
      netease: "https://music.163.com/artist?id=345678",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "X-Dimension",
      genre: "审核/母带师",
      image: "",
      description: "",
      netease: "https://music.163.com/#/artist?id=27869699",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "S1NTD",
      genre: "审核",
      image: "",
      description: "",
      netease: "https://music.163.com/#/artist?id=53622167",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Omnitonic Records",
      genre: "网易云音乐官方账号",
      image: "https://youke1.picui.cn/s1/2025/09/24/68d3729bb4b5e.png",
      description: "欢迎收听",
      netease: "https://music.163.com/#/artist?id=96800166",
      social: {
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="artists" className="py-32 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Our
            <span className="text-[#222ff1] ml-4">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            认识我们
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-150"
            >
              <motion.a
                href={artist.netease}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden aspect-square"
              >
                <motion.img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute top-4 right-4 flex space-x-2"
                >
                  <motion.a
                    href={artist.social.instagram}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.08 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={artist.social.twitter}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.08 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </motion.a>
                </motion.div>

                {/* Artist Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{artist.name}</h3>
                  <p className="text-white/80 text-sm">{artist.genre}</p>
                </div>
              </motion.a>

              <div className="p-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {artist.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Artists;