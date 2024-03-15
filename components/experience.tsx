import React, { Suspense } from 'react';
import Image from 'next/image';
import graphicDark1 from '../public/Dark/graphic 2.1.svg';
import graphicLight1 from '../public/Light/graphic 2.1.svg';
import graphicDark2 from '../public/Dark/graphic 3.svg';
import graphicLight2 from '../public/Light/graphic 3.svg';
import graphicDark3 from '../public/Dark/graphic 4.svg';
import graphicLight3 from '../public/Light/graphic 4.svg';
import graphicDark4 from '../public/Dark/graphic 5.svg';
import graphicLight4 from '../public/Light/graphic 5.svg';
import graphicDark5 from '../public/Dark/graphic 6.svg';
import graphicLight5 from '../public/Light/graphic 6.svg';
import styles from '@/styles/experience.module.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Experience = (props: { theme: any }) => {
  return (
    <div id="experience" className={`${styles.section} ${props.theme}`}>
      <div className={styles.graphicTop}>
        {props.theme === 'dark-mode' ? (
          <Image
            src={graphicDark1}
            alt="darkGraphic1 icon"
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Image
            src={graphicLight1}
            alt="lightGraphic1 icon"
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className={styles.graphicmid1}>
        {props.theme === 'dark-mode' ? (
          <Image
            src={graphicDark2}
            alt="darkGraphic2 icon"
            width={230}
            height={230}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Image
            src={graphicLight2}
            alt="lightGraphic2 icon"
            width={230}
            height={230}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className={styles.graphicmid2}>
        {props.theme === 'dark-mode' ? (
          <Image
            src={graphicDark3}
            alt="darkGraphic3 icon"
            width={280}
            height={280}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Image
            src={graphicLight3}
            alt="lightGraphic3 icon"
            width={280}
            height={280}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className={styles.graphicmid3}>
        {props.theme === 'dark-mode' ? (
          <Image
            src={graphicDark4}
            alt="darkGraphic4 icon"
            width={280}
            height={280}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Image
            src={graphicLight4}
            alt="lightGraphic4 icon"
            width={280}
            height={280}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className={styles.grid}>
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
              enhance productivity. My role centered around utilizing Xcode and
              Swift, coupled with a focus on UX design, under the mentorship of
              experienced full-time employees.
            </div>
          </div>
        </div>
        <div className={styles.iPhone}>
          <div className={styles.image1container}>
            <Suspense fallback={<div>Loading Spline...</div>}>
              <Spline
                scene="https://draft.spline.design/hokwpdu5k4xpxAxm/scene.splinecode"
                className={styles.spline}
              />
            </Suspense>
          </div>
        </div>

        <div className={styles.macbook}>
          <div className={styles.image2container}>
            <Suspense fallback={<div>Loading Spline...</div>}>
              <Spline
                scene="https://draft.spline.design/aW5RaTfe43FXOkfW/scene.splinecode"
                className={styles.spline}
              />
            </Suspense>
          </div>
        </div>
        <div className={styles.text2}>
          <h4 className={styles.title2}>Teams Mixed Reality Intern</h4>
          <div>
            <h6 className={styles.subTitle2}>Microsoft Explore Internship</h6>
            <div className={`${styles.subtext2} ${'subtitle1'}`}>
              As an intern on Microsoft&apos;s Teams Mixed Reality team, I
              joined forces with two other interns to develop a web application
              to improve remote collaboration. Our work, which involved using
              React and TypeScript for the interface and Azure Storage for
              database management, was nurtured under the guidance of an
              experienced software engineer and program manager.
            </div>
          </div>
        </div>

        <div className={styles.text3}>
          <h4 className={styles.title3}>Program Manager</h4>
          <div>
            <h6 className={styles.subTitle3}>Bandit Game Studio</h6>
            <div className={`${styles.subtext3} ${'subtitle1'}`}>
              As Program Manager at Bandit Game Studio, I have been tasked to
              lead the early development of our new website. My focus combines
              leadership with technical insight, guiding a talented team as we
              lay the groundwork for a user-centric, visually engaging platform.
              We aim to showcase our unique offerings and create a space for
              meaningful engagement with major industry players like Microsoft,
              Riot, and Google. With much work ahead, we are excited about the
              journey to transform our digital presence in the gaming industry.
            </div>
          </div>
        </div>
        <div className={styles.monitorMac}>
          <div className={styles.image3container}>
            <Suspense fallback={<div>Loading Spline...</div>}>
              <Spline
                scene="https://draft.spline.design/bFxNmSitNlMsw7tk/scene.splinecode"
                className={styles.spline}
              />
            </Suspense>
          </div>
        </div>

        <div className={styles.printer}>
          <div className={styles.image4container}>
            <Suspense fallback={<div>Loading Spline...</div>}>
              <Spline
                scene="https://draft.spline.design/5hzfse7VMn7dJHOs/scene.splinecode"
                className={styles.spline}
              />
            </Suspense>
          </div>
        </div>
        <div className={styles.text4}>
          <h4 className={styles.title4}>Technical Operations Assistant</h4>
          <div>
            <h6 className={styles.subTitle4}>Undergraduate Assistant</h6>
            <div className={`${styles.subtext4} ${'subtitle1'}`}>
              As an Undergraduate Assistant, I enhanced user experiences in
              educational spaces, providing technical support in auditoriums,
              classrooms, and labs. I operated and instructed on maker space
              equipment like 3D printers, laser engravers, and CNC machines.
              Additionally, I conducted practical workshops for students and the
              community, focusing on skill-building with these tools.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.graphicBottom}>
        {props.theme === 'dark-mode' ? (
          <Image
            src={graphicDark5}
            alt="darkGraphic5 icon"
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Image
            src={graphicLight5}
            alt="lightGraphic5 icon"
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
    </div>
  );
};
export default Experience;
