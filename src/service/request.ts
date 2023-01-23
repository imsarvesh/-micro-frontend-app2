const request = async (url) => await fetch(url).then((res) => res.json());

export const getMeetings = () => request("http://localhost:4000/meetings");
