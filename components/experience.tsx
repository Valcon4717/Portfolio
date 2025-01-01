import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/experience.module.css";
import Image from "next/image";
import TVEmac from "@/public/TVEmac.svg";
import iOSapp from "@/public/ios.svg";
import mixedMac from "@/public/mixed.svg";
import printer from "@/public/3dprinter.svg";

const Experience = (props: { theme: any }) => {
  const { scrollYProgress } = useScroll();

  const scale1 = useTransform(scrollYProgress, [0, 0.2], [0.1, 1]); 
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [0.1, 1]); 
  const scale3 = useTransform(scrollYProgress, [0.35, 0.6], [0.1, 1]); 
  const scale4 = useTransform(scrollYProgress, [0.55, 0.8], [0.1, 1]); 
  
  return (
    <div id="experience" className={`${styles.section} ${props.theme}`}>
      <div className={styles.rowHolder}>
        {/* Card 1*/}
        <motion.div
          style={{ scale: scale1 }}
          className={styles.row1}
        >
           <div className={styles.TVEmac}>
            <div className={styles.image1container}>
              <Image src={TVEmac} alt="TVEmac" />
            </div>
          </div>
          <div className={styles.cardNum}>01 | SOFTWARE ENGINEER INTERN</div>
          <div className={styles.text1}>
            <h4 className={styles.title1}>Teams Enterprise Voice</h4>
            <div>
              <h6 className={styles.subTitle1}>
                Microsoft
              </h6>
              <div className={`${styles.subtext1} ${"subtitle1"}`}>
              Contributed to a new product by enhancing key settings and initiating integration of the Copilot Recap feature 
              into the Queues app. Gained hands-on experience in testing, code reviews, bug bashes, and shipping features, 
              collaborating closely with seasoned engineers.
              </div>
              <div className={`${styles.date1} ${"subtitle1"}`}>
              May 2024 - Aug 2024
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          style={{ scale: scale2 }}
          className={styles.row2}
        >
          <div className={styles.iOSapp}>
            <div className={styles.image2container}>
              <Image src={iOSapp} alt="iOSapp" />
            </div>
          </div>
          <div className={styles.cardNum}>02 | SOFTWARE ENGINEER INTERN</div>
          <div className={styles.text2}>
            <h4 className={styles.title2}>Teams iOS</h4>
            <div>
              <h6 className={styles.subTitle2}>Microsoft</h6>
              <div className={`${styles.subtext2} ${"subtitle1"}`}>
                Collaborated on developing innovative Teams features for iOS, integrating the platform&apos;s latest widgets to boost 
                productivity. Focused on UX design using Xcode and Swift, working under the guidance of experienced mentors.
              </div>
              <div className={`${styles.date2} ${"subtitle1"}`}>
              May 2023 - Aug 2023
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          style={{ scale: scale3 }}
          className={styles.row3}
        >
          <div className={styles.mixedMac}>
            <div className={styles.image4container}>
              <Image src={mixedMac} alt="mixedMac" />
            </div>
          </div>
          <div className={styles.cardNum}>03 | EXPLORE INTERN</div>
          <div className={styles.text3}>
            <h4 className={styles.title3}>Teams Mesh</h4>
            <div>
              <h6 className={styles.subTitle3}>Microsoft</h6>
              <div className={`${styles.subtext3} ${"subtitle1"}`}>
              Designed and built a web application to enhance remote team collaboration using React, TypeScript, and Figma. Collaborated 
              with two interns under the guidance of a software engineer and program manager.
              </div>
              <div className={`${styles.date3} ${"subtitle1"}`}>
              May 2022 - Aug 2022
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          style={{ scale: scale4 }}
          className={styles.row4}
        >
          <div className={styles.printer}>
            <div className={styles.image3container}>
              <Image src={printer} alt="printer" />
            </div>
          </div>
          <div className={styles.cardNum}>04 | UNDERGRADUATE ASSISTANT</div>
          <div className={styles.text4}>
            <h4 className={styles.title4}>Technical Operations Assistant</h4>
            <div>
              <h6 className={styles.subTitle4}>UTEP</h6>
              <div className={`${styles.subtext4} ${"subtitle1"}`}>
              Improved user experience in auditoriums, classrooms, and labs while operating maker space tools like 3D printers, laser 
              engravers, and CNC machines. Led technical and DIY workshops to teach students and the community how to use maker space tools.
              </div>
            </div>
            <div className={`${styles.date4} ${"subtitle1"}`}>
              Aug 2021 - May 2022
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Experience;