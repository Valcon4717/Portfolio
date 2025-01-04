import React from 'react';
import styles from '@/styles/footer.module.css';
import Image from 'next/image';
import figmaDark from '../public/Dark/Figma.svg';
import figmaLight from '../public/Light/Figma.svg';
import githubDark from '../public/Dark/GitHub.svg';
import githubLight from '../public/Light/GitHub.svg';
import linkedinDark from '../public/Dark/LinkedIn.svg';
import linkedinLight from '../public/Light/LinkedIn.svg';
import mailDark from '../public/Dark/Mail.svg';
import mailLight from '../public/Light/Mail.svg';

const Footer = (props: { theme: any }) => {
  return (
    <footer className={`${styles.box} ${props.theme}`}>
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.thankyou}>
            Thank you for visiting! Feel free to get in touch 👉
          </div>
          <p className={styles.copyright}>
            Designed with {" "}
            <a
              href="https://www.figma.com/design/D0BjglGzAK1hs7K22biuN1/Portfolio?node-id=0-1&t=YjTXex3vHJOfCntn-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
            {" "} and coded with ❤️ by Valeria © {new Date().getFullYear()}
          </p>
        </div>
        <div className={styles.column2}>
            <div className={styles.social}>
                {props.theme === 'dark-mode' ? (
                <>
                    <a href="https://www.figma.com/files/team/897665907060382954/all-projects"><Image className="figma" src={figmaDark} alt="figma" /></a>
                    <a href="https://github.com/Valcon4717"><Image src={githubDark} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/valcon4717/"><Image src={linkedinDark} alt="linkedin" /></a>
                    <a href="mailto: Valcon4717@gmail.com"><Image src={mailDark} alt="mail" /></a>
                </>
            ) : (
                <>
                    <a href="https://www.figma.com/files/team/897665907060382954/all-projects"><Image src={figmaLight} alt="figma" /></a>
                    <a href="https://github.com/Valcon4717"><Image src={githubLight} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/valcon4717/"><Image src={linkedinLight} alt="linkedin" /></a>
                    <a href="mailto: Valcon4717@gmail.com"><Image src={mailLight} alt="mail" /></a>
                </>
            )}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
