import React from 'react';
import styles from '@/styles/footer.module.css';

const Footer = (props: { theme: any }) => {
    return (
        <footer className={`${styles.box} ${props.theme}`}>
            <p className={styles.text}>© 2023 Valeria Contreras. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
