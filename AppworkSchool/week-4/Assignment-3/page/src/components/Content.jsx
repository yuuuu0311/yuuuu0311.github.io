import { useState } from "react";

const Content = ({ contentList }) => {
    // hook
    // const [state, seterFunction] =  useState()
    let [listData, setListData] = useState(contentList);

    const renderContent = listData.map((content, index) => {
        const { label, link } = content;
        return (
            <li key={index}>
                <a href={link}> {label}</a>
            </li>
        );
    });

    const showContent = () => {
        setListData(
            (listData = [
                ...listData,
                {
                    label: "github repo",
                    link: "https://github.com/yuuuu0311/yuuuu0311.github.io",
                },
            ])
        );
    };

    return (
        <section>
            <h3>Section Title</h3>
            <ul>{renderContent}</ul>
            <button onClick={showContent}>Call to Action</button>
        </section>
    );
};

export default Content;
