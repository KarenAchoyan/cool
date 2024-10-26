import React from 'react';
import styles from "../../styles/app.module.css"
import {HeatMapOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import Link from "next/link";
import {t} from "../../utils/utils";
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerAbout}>
                    <h4>{t('about_us')}</h4>
                    <div className={styles.footerText}>
                        <p>Suspendisse non sem ante. Cras pretium gravida
                            leo a convallis. Nam malesuda interdum metus, sit amet dictum ante congue eu. Maecenas ut maximus enim</p>
                    </div>
                </div>
                <div className={styles.footerLink}>
                    <h4>{t('pages')}</h4>
                    <div className={styles.footerHome}>
                        <ul>
                            <li>  {t('home')}</li>
                            <li> {t('about_us')}</li>
                            <li>{t('courses')}</li>
                            <li> {t('contact_us')}</li>
                            <li><Link href={'/teachers'}>{t('specialists')}</Link></li>

                            <li>{t('international_exams')}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerContact}>
                    <h4>{t("feedback")}</h4>
                    <div className={styles.contact}>
                        <div className={styles.footerPhone}>
                            <p><PhoneOutlined/></p>
                        </div>
                        <div className={styles.footerNumber}>
                            <span>+374 41 597778</span>
                            <span>+374 55597778</span>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.footerPhone}>
                            <p><MailOutlined/></p>
                        </div>
                        <div className={styles.footerNumber}>
                            <span>coollanguagecenter@gmail.com</span>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.footerPhone}>
                            <p><HeatMapOutlined /></p>
                        </div>
                        <div className={styles.footerNumber}>
                            <span>Հրաչյա Քոչար 14</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.page}>
                <span className={styles.spans}>Հեղինակային իրավունքներ ©2024. Բոլոր իրավունքները պաշտպանված են.</span>
                <span className={styles.spans}>Կայքը պատրաստված է Geeklab ընկերության կողմից</span>

            </div>
        </>
    );
};

export default Footer;