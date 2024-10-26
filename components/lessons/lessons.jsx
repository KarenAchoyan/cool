import React from 'react';
import styles from "../../styles/lesson.module.css";
import {Input, Row, Col, Card, Tag} from 'antd';
import {AudioOutlined, UsergroupDeleteOutlined} from "@ant-design/icons";
import Link from "next/link";

const Lessons = () => {
    const {Search} = Input;
    const {Meta} = Card;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );

    const onSearch = value => console.log(value);

    // Array of card data
    const cardsData = [
        {
            category: "WordPress",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE06iyzmKzcrlqqhppT52GjH3hbE5seXMH9g&s",
            title: "Information About UI/UX Design Degree",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            category: "Advanced",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE06iyzmKzcrlqqhppT52GjH3hbE5seXMH9g&s",
            title: "Photography Crash Course for Photographer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return (
        <div className={styles.lesson}>
            <div className={styles.item}>
                <Row gutter={[16, 16]} className={styles.card}>
                    {cardsData.map((card, index) => (
                        <Col xs={24} sm={12} md={8} lg={8} key={index}>
                            <Link href={"/lessons/1"}>

                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className={styles.cardImage}
                                        />
                                    }
                                >
                                    <Meta
                                        title={card.title}
                                        description={card.description}
                                    />
                                </Card>
                            </Link>

                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Lessons;
