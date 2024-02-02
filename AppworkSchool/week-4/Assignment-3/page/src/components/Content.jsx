const Content = () => {
    const contentList = [
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

    const renderContent = contentList.map((content, index) => {
        const { label, link } = content;
        return (
            <li key={index}>
                <a href={link}> {label}</a>
            </li>
        );
    });

    const showContent = () => {
        contentList.push({
            label: "github repo",
            link: "https://github.com/yuuuu0311/yuuuu0311.github.io",
        });
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
