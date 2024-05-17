import React from 'react';
import styles from '@/styles/experience.module.css';
import Image from 'next/image';
import iphone from '@/public/iphone.svg';
import macbook from '@/public/macbook.svg';
import monitorMac from '@/public/mac.svg';
import printer from '@/public/3Dprinter.svg';

const Experience = (props: { theme: any }) => {
  return (
    <div id="experience" className={`${styles.section} ${props.theme}`}>
      <div className={styles.rowHolder}>
        <div className={styles.row1}>
          <div className={styles.text1}>
            <h4 className={styles.title1}>Teams iOS Intern</h4>
            <div>
              <h6 className={styles.subTitle1}>
                Microsoft Software Engineering Internship
              </h6>
              <div className={`${styles.subtext1} ${'subtitle1'}`}>
                As an intern on Microsoft&apos;s Teams team, I collaborated with
                the team to develop innovative features for Teams on iOS,
                integrating the platform&apos;s latest features and widgets to
                enhance productivity. My role centered around utilizing Xcode
                and Swift, coupled with a focus on UX design, under the
                mentorship of experienced full-time employees.
              </div>
            </div>
          </div>
          <div className={styles.iPhone}>
            <div className={styles.image1container}>
              <Image src={iphone} alt="iPhone" />
            </div>
          </div>
        </div>

        <div className={styles.row2}>
        <div className={styles.macbook}>
            <div className={styles.image2container}>
              <Image src={macbook} alt="Macbook" />
            </div>
          </div>
          <div className={styles.text2}>
            <h4 className={styles.title2}>Teams Mixed Reality Intern</h4>
            <div>
              <h6 className={styles.subTitle2}>Microsoft Explore Internship</h6>
              <div className={`${styles.subtext2} ${'subtitle1'}`}>
                As an intern on Microsoft&apos;s Teams Mixed Reality team, I
                joined forces with two other interns to develop a web
                application to improve remote collaboration. Our work, which
                involved using React and TypeScript for the interface and Azure
                Storage for database management, was nurtured under the guidance
                of an experienced software engineer and program manager.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row3}>
          <div className={styles.text3}>
            <h4 className={styles.title3}>Technical Operations Assistant</h4>
            <div>
              <h6 className={styles.subTitle3}>Undergraduate Assistant</h6>
              <div className={`${styles.subtext3} ${'subtitle1'}`}>
                As an Undergraduate Assistant, I enhanced user experiences in
                educational spaces, providing technical support in auditoriums,
                classrooms, and labs. I operated and instructed on maker space
                equipment like 3D printers, laser engravers, and CNC machines.
                Additionally, I conducted practical workshops for students and
                the community, focusing on skill-building with these tools.
              </div>
            </div>
          </div>
          <div className={styles.printer}>
            <div className={styles.image4container}>
              <Image src={printer} alt="Printer" />
            </div>
          </div>
        </div>

        <div className={styles.row4}>
        <div className={styles.monitorMac}>
            <div className={styles.image3container}>
              <Image src={monitorMac} alt="Monitor Mac" />
            </div>
          </div>
          <div className={styles.text4}>
            <h4 className={styles.title4}>Program Manager</h4>
            <div>
              <h6 className={styles.subTitle4}>Bandit Game Studio</h6>
              <div className={`${styles.subtext4} ${'subtitle1'}`}>
                As Program Manager at Bandit Game Studio, I have been tasked to
                lead the early development of our new website. My focus combines
                leadership with technical insight, guiding a talented team as we
                lay the groundwork for a user-centric, visually engaging
                platform. We aim to showcase our unique offerings and create a
                space for meaningful engagement with major industry players like
                Microsoft, Riot, and Google. With much work ahead, we are
                excited about the journey to transform our digital presence in
                the gaming industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
