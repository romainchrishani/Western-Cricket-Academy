import React from 'react';
import Container from '../../../Components/Container/Container';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import { motion } from "framer-motion";

const Facilities = () => {
    const fadeInAnimation = {
      initial: {
        opacity: 0,
        y: 100,
      },
      animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom + 0.07, 
          duration: 0.5,
        },
      }),
    };

    return (
      <div
        className="dark:bg-gray-700 bg-custom-blue pb-10 lg:pb-20"
        id="facilities"
      >
        <SectionHeader heading={"Our Academy Facilities"}></SectionHeader>
        <Container>
          <div className="-m-1 lg:flex lg:flex-wrap  md:-m-2">
            <motion.div
              className="flex lg:w-1/2 flex-wrap"
              variants={fadeInAnimation}
              initial="initial"
              custom={0}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://www.rubbuk.com/wp-content/uploads/sites/2/2022/03/DSC_0445.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Indoor Pitches</h4>
                    <p>Expertly Maintained Grounds</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:flex lg:w-1/2 lg:flex-wrap"
              variants={fadeInAnimation}
              initial="initial"
              custom={0.15}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://www.prosportsurfaces.co.uk/wp-content/uploads/2020/02/outdoor-football-pitch.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Outdoor Pitches</h4>
                    <p>Synthetic Sports Pitches</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://levelfyc.com/wp-content/uploads/2021/09/lou-3803.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Modern Gym</h4>
                    <p>With Professional Trainer</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://d2t6o06vr3cm40.cloudfront.net/2023/03/26/14/38/56/a1e14176-541b-4e92-bb37-44ede9180dc3/DSC04355.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Player Recovery</h4>
                    <p>To Become More Productive</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    );
};

export default Facilities;