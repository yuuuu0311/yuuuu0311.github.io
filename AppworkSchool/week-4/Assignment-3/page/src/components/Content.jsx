import { useState } from "react";

// mockData
import { content } from "../mockData";

const Content = () => {
    // hook
    // const [state, seterFunction] =  useState()
    let [listData, setListData] = useState(content);

    const contentData = [
        {
            label: "github repo",
            link: "https://github.com/yuuuu0311/yuuuu0311.github.io",
        },
        {
            label: "github repo",
            link: "https://github.com/yuuuu0311/yuuuu0311.github.io",
        },
        {
            label: "github repo",
            link: "https://github.com/yuuuu0311/yuuuu0311.github.io",
        },
        {
            label: "github repo",
            link: "https://github.com/yuuuu0311/yuuuu0311.github.io",
        },
    ];

    const renderContent = listData.map((content, index) => {
        const { label, link } = content;
        return (
            <li key={index} className="content-group-item">
                <a href={link}> {label}</a>
            </li>
        );
    });

    const showContent = () => {
        setListData((listData = [...listData, ...contentData]));
    };

    return (
        <main>
            <section className="content-section">
                <div className="content-container">
                    <h3 className="content-title">Section Title</h3>

                    <ul className="content-group">{renderContent}</ul>
                </div>
            </section>

            <section className="button-section">
                <button className="button-item" onClick={showContent}>
                    Call to Action
                </button>
            </section>
        </main>
    );
};

export default Content;
