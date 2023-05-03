import { Octokit } from "octokit";

const octokit = new Octokit({ });

const response = await octokit.request("GET /{owner}/{repo}/README.md", {
    owner: "notracking",
    repo: "hosts-blocklists"
});

console.log(`Response status : ${response.status}`);