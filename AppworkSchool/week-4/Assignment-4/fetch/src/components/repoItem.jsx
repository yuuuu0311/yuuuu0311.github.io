import { useState, useEffect } from "react";

const RepoItem = () => {
    // fetch Data
    const fetchData = (url, callBack) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // return data;
                callBack(data);
            });
    };

    // state
    const [number, setNumber] = useState(5);
    const [page, setPage] = useState(1);
    const [repoList, setRepoList] = useState([]); // 空陣列

    // handler
    const handlePageChange = (num) => {
        setPage(page + num);
    };

    // render list
    useEffect(() => {
        const url = `https://api.github.com/orgs/facebook/repos?per_page=${number}&page=${page}`;

        fetchData(url, (data) => {
            setRepoList(data);
        });
    }, [number, page]); // Depend on 'number' and 'page' changes

    return (
        <section>
            <ul>
                {repoList.map((repo) => {
                    return (
                        <li key={repo.id}>
                            <div>
                                <span className="name">{repo.name}</span>
                                <span className="visibility">
                                    {repo.visibility}
                                </span>
                            </div>
                            <div>
                                <span className="description">
                                    {repo.description}
                                </span>
                            </div>
                            <div className="topics">
                                {repo.topics.map((topic, index) => (
                                    <span key={index} className="topic">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button
                    onClick={() => {
                        handlePageChange(-1);
                    }}
                >
                    prev page
                </button>
                <button
                    onClick={() => {
                        handlePageChange(1);
                    }}
                >
                    next page
                </button>
            </div>
        </section>
    );
};

export default RepoItem;
