import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Label = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="relative py-32 bg-[#222ff1] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-full bg-white"
              style={{
                left: `${i * 5}%`,
                transform: `rotate(${i * 18}deg)`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
        </motion.div>
      </div>

      <div ref={ref} className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black tracking-tight"
          >
            听见未来
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              定义可能
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">创新先锋</h3>
              <p className="text-white/80 leading-relaxed">
                我们致力于推动电子音乐的边界，探索声音的无限可能性，创造属于未来的音乐体验。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">艺术家们</h3>
              <p className="text-white/80 leading-relaxed">
                为才华横溢的艺术家提供专业平台，助力他们将创意转化为震撼人心的音乐作品。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">全球视野</h3>
              <p className="text-white/80 leading-relaxed">
                连接世界各地的音乐爱好者，打造跨越地域界限的音乐文化交流平台。
              </p>
            </div>
          </motion.div>

         <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="pt-8"
  className="pt-8 flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-left">
              <h3 className="text-2xl font-bold mb-4">关于我们</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                Omnitonic Records「OMR 光时域记录」
<p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                创立于 2024 年 12 月 25 日
  </p>
<p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                旗下厂牌 Celestial RCRDS「CTR 天体记录」
  </p>
<p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                创立于 2024 年 8 月 27 日
  </p>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                  共同构建了一个多元且富有创造力的音乐生态
                  </p>

<p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                突破传统电子音乐的边界，探索新的声音维度与表现形式
  </p>

<p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                我们坚信音乐是穿越时空的宇宙信号，是连接声音与多维世界的桥梁。
  </p>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Label;