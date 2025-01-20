import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/experience.module.css";
import Image from "next/image";
import TVEmac from "@/public/TVEmac.svg";
import iOSapp from "@/public/ios.svg";
import mixedMac from "@/public/mixed.svg";
import printer from "@/public/3dprinter.svg";

const Experience = (props: { theme: any }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [0.1, 1]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.35], [0.1, 1]);
  const scale3 = useTransform(scrollYProgress, [0.38, 0.5], [0.1, 1]);
  const scale4 = useTransform(scrollYProgress, [0.55, 0.6], [0.1, 1]);

  return (
    <div id="experience" className={`${styles.section} ${props.theme}`}>
      <div className={styles.rowHolder}>
        {/* Card 1 */}
        {isMobile ? (
          <div className={styles.row1}>
            <CardContent
              image={TVEmac}
              title="Teams Enterprise Voice"
              subTitle="Microsoft"
              date="May 2024 - Aug 2024"
              description="Contributed to a new product by enhancing key settings and initiating integration of the Copilot Recap feature into the Queues app. Gained hands-on experience in testing, code reviews, bug bashes, and shipping features, collaborating closely with seasoned engineers."
              link="https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone"
              num="01 | SOFTWARE ENGINEER INTERN"
            />
          </div>
        ) : (
          <motion.div style={{ scale: scale1 }} className={styles.row1}>
            <CardContent
              image={TVEmac}
              title="Teams Enterprise Voice"
              subTitle="Microsoft"
              date="May 2024 - Aug 2024"
              description="Contributed to a new product by enhancing key settings and initiating integration of the Copilot Recap feature into the Queues app. Gained hands-on experience in testing, code reviews, bug bashes, and shipping features, collaborating closely with seasoned engineers."
              link="https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone"
              num="01 | SOFTWARE ENGINEER INTERN"
            />
          </motion.div>
        )}

        {/* Card 2 */}
        {isMobile ? (
          <div className={styles.row2}>
            <CardContent
              image={iOSapp}
              title="Teams iOS"
              subTitle="Microsoft"
              date="May 2023 - Aug 2023"
              description="Collaborated on developing innovative Teams features for iOS, integrating the platform's latest widgets to boost productivity. Focused on UX design using Xcode and Swift, working under the guidance of experienced mentors."
              link="https://www.microsoft.com/en-us/microsoft-teams/download-app"
              num="02 | SOFTWARE ENGINEER INTERN"
            />
          </div>
        ) : (
          <motion.div style={{ scale: scale2 }} className={styles.row2}>
            <CardContent
              image={iOSapp}
              title="Teams iOS"
              subTitle="Microsoft"
              date="May 2023 - Aug 2023"
              description="Collaborated on developing innovative Teams features for iOS, integrating the platform's latest widgets to boost productivity. Focused on UX design using Xcode and Swift, working under the guidance of experienced mentors."
              link="https://www.microsoft.com/en-us/microsoft-teams/download-app"
              num="02 | SOFTWARE ENGINEER INTERN"
            />
          </motion.div>
        )}

        {/* Card 3 */}
        {isMobile ? (
          <div className={styles.row3}>
            <CardContent
              image={mixedMac}
              title="Teams Mesh"
              subTitle="Microsoft"
              date="May 2022 - Aug 2022"
              description="Designed and built a web application to enhance remote team collaboration using React, TypeScript, and Figma. Collaborated with two interns under the guidance of a software engineer and program manager."
              link="https://www.microsoft.com/en-us/microsoft-teams/microsoft-mesh"
              num="03 | EXPLORE INTERN"
            />
          </div>
        ) : (
          <motion.div style={{ scale: scale3 }} className={styles.row3}>
            <CardContent
              image={mixedMac}
              title="Teams Mesh"
              subTitle="Microsoft"
              date="May 2022 - Aug 2022"
              description="Designed and built a web application to enhance remote team collaboration using React, TypeScript, and Figma. Collaborated with two interns under the guidance of a software engineer and program manager."
              link="https://www.microsoft.com/en-us/microsoft-teams/microsoft-mesh"
              num="03 | EXPLORE INTERN"
            />
          </motion.div>
        )}

        {/* Card 4 */}
        {isMobile ? (
          <div className={styles.row4}>
            <CardContent
              image={printer}
              title="Technical Operations Assistant"
              subTitle="UTEP"
              date="Aug 2021 - May 2022"
              description="Improved user experience in auditoriums, classrooms, and labs while operating maker space tools like 3D printers, laser engravers, and CNC machines. Led technical and DIY workshops to teach students and the community how to use maker space tools."
              link="https://www.utep.edu/technologysupport/learning-environments/gaia.html"
              num="04 | UNDERGRADUATE ASSISTANT"
            />
          </div>
        ) : (
          <motion.div style={{ scale: scale4 }} className={styles.row4}>
            <CardContent
              image={printer}
              title="Technical Operations Assistant"
              subTitle="UTEP"
              date="Aug 2021 - May 2022"
              description="Improved user experience in auditoriums, classrooms, and labs while operating maker space tools like 3D printers, laser engravers, and CNC machines. Led technical and DIY workshops to teach students and the community how to use maker space tools."
              link="https://www.utep.edu/technologysupport/learning-environments/gaia.html"
              num="04 | UNDERGRADUATE ASSISTANT"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const CardContent = ({
  image,
  title,
  subTitle,
  date,
  description,
  link,
  num,
}: {
  image: string;
  title: string;
  subTitle: string;
  date: string;
  description: string;
  link: string;
  num: string;
}) => (
  <>
    <div className={styles.TVEmac}>
      <div className={styles.image1container}>
        <Image src={image} alt={title} />
      </div>
    </div>
    <div className={styles.cardNum}>{num}</div>
    <div className={styles.text1}>
      <h4 className={styles.title1}>{title}</h4>
      <h6 className={styles.subTitle1}>{subTitle}</h6>
      <div className={`${styles.date1} subtitle1`}>{date}</div>
      <div className={`${styles.subtext1} subtitle1`}>{description}</div>
      <div className={styles.readMore}>
        <a href={link} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </div>
    </div>
  </>
);

export default Experience;
