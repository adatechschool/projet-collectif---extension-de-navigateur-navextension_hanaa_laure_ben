import { Octokit } from "octokit";
import * as config from 'config.env';

const octokit = new Octokit({ process.env.config.USER_TOKEN });

const response = await octokit.request("GET {owner}/{repo}/blob/master", {
    owner: "notracking",
    repo: "hosts-blocklists"
});

console.log(`Response status : ${response.status}`);
// console.log(response)

