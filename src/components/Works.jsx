import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects,prizelistfe ,prizelistfeapi,prizelistbeapi ,prizelistool} from "../constants";
import { fadeIn, textVariant} from "../utils/motion";
const ServiceCard = ({ index, title, price, description, time, features }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="text-green-400 font-semibold text-[18px]">{price}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          {time && <p className="mt-2 text-yellow-400 text-[14px]">Thời gian: {time}</p>}
        </div>

        {features && features.length > 0 && (
          <div className="mt-4">
            <h4 className="text-white font-semibold">Tính năng:</h4>
            <ul className="list-disc list-inside text-secondary text-[14px]">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const serviceCategories = [
  { title: "Gói Website", data: projects },
  { title: "Gói Giao Diện", data: prizelistfe },
  { title: "Gói API Frontend", data: prizelistfeapi },
  { title: "Gói API Backend", data: prizelistbeapi },
  { title: "Dịch Vụ Khác", data: prizelistool },
];

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Dịch vụ của tôi</p>
        <h2 className={`${styles.sectionHeadText}`}>Danh sách gói dịch vụ</h2>
      </motion.div>

      {serviceCategories.map((category, idx) => (
        <div key={idx} className="mt-16">
          <h3 className="text-white font-bold text-[26px] mb-5">{category.title}</h3>
          <div className='flex flex-wrap gap-7'>
            {category.data.map((service, index) => (
              <ServiceCard key={`service-${index}`} index={index} {...service} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Services, "");
