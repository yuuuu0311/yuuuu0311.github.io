// api url https://api.github.com/orgs/facebook/repos?per_page=5&page=1

const fetchData = (url, callBack) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callBack(data);
        });
};

const config = {
    number: 5,
    page: 1,
};

fetchData(
    `https://api.github.com/orgs/facebook/repos?per_page=${config.number}&page=${config.page}`,
    (data) => {
        data.map((repo) => {
            const { name, visibility, description, topics } = repo;
            console.log(name, visibility, description, topics);
        });
    }
);

// render
const container = document.querySelector(".repo-item-list");
