import React, {useState} from 'react';
import styles from "../../styles/app.module.css";
import {MenuOutlined} from "@ant-design/icons";
import {Drawer, Dropdown, Menu, Space} from 'antd';
import Link from "next/link";
import LanguageSwitcher from "./languageSwitcher";
import {t} from "../../utils/utils";

const Header = () => {
    const [open, setOpen] = useState(false);

    const [isOpenDrb, setIsOpenDrb] = useState(false)
    const [isOpenDrbFlag, setIsOpenDrbFlag] = useState(false)
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.header}>
            <div className={styles.menuUnfold} onClick={showDrawer}>
                <MenuOutlined/>
            </div>
            <div className={styles.headerLogo}>
                <Link href={"/"} className={styles.headerLogo}>
                    <img src="/Screenshot_2024-07-31_142531-removebg-preview.png" alt="Logo"/>
                </Link>
            </div>
            <div className={styles.headerText}>
                <ul>
                    <li>
                        <Link className={styles.text} href={"/"}>
                            {t('home')}
                        </Link>
                    </li>
                    <li><Link className={styles.text} href={"/about"}>
                        {t('about_us')}
                    </Link></li>
                    {/*<li><Link className={styles.text} href={"/lessons"}>*/}
                    {/*    {t('courses')}*/}
                    {/*</Link></li>*/}
                    <li>
                        <Link className={styles.text} href={"/contact"}>
                            {t('contact_us')}
                        </Link>
                    </li>
                    <li><Link className={styles.text} href={'/teachers'}>{t('specialists')}</Link></li>
                    <li><Link href={'/international'}>{t('international_exams')}</Link></li>
                    <li><Link href={'/gallery'}>{t('galleries')}</Link></li>
                    <LanguageSwitcher openDrb={isOpenDrb} isOpenDrbFlag={isOpenDrbFlag}
                                      setIsOpenDrb={setIsOpenDrb} setIsOpenDrbFlag={setIsOpenDrbFlag}/>

                </ul>
            </div>
            <Drawer
                width="250px"
                title="Menu"
                placement="left"
                closable={true}
                onClose={onClose}
                open={open}
            >
                <div className={styles.headerTexts}>
                    <ul>
                        <li>Գլխավոր</li>
                        <li>Դասընթացներ</li>
                        <li>Մասնագետներ</li>
                        <li>Պատկերասրահ</li>
                        <li>{t('international_exams')}</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default Header;
