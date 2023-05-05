import { Octokit } from "octokit";
import * as dotenv from 'dotenv';
import * as fs from 'fs/promises';
dotenv.config()

const octokit = new Octokit({ auth: process.env.USER_TOKEN });

const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    mediaType: {
        format: "raw"
    },
    owner: "notracking",
    repo: "hosts-blocklists",
    path: "domains.txt"
}
)

let file = await fs.writeFile('domains.txt', response.data)

console.log(`Response status : ${response.status}`);
console.log(typeof response.data)

// process.env.config.USER_TOKEN