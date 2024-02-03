import { useState } from "react";

const RepoItem = () => {
    // fetch Data
    const fetchData = (url) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
                // callBack(data);
            });
    };

    // state
    const [number, setNumber] = useState(5);
    const [page, setPage] = useState(1);
    const [repoList, setRepoList] = useState(() => {});

    const repoData = fetchData(
        `https://api.github.com/orgs/facebook/repos?per_page=${number}&page=${page}`
        // (data) => {
        //     data.map((repo) => {
        //         const { name, visibility, description, topics } = repo;
        //         // console.log(name, visibility, description, topics);
        //     });
        // }
    );

    console.log(repoData);

    return (
        <ul>
            <li>repo</li>
        </ul>
    );
};

export default RepoItem;
