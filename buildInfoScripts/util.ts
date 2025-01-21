import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

type buildInfoType = {
  buildUtcDate: string;
  buildUnixTimeStamp: number;
  commitHash?: string;
  commitAuthor?: string;
  isDeployed: boolean;
};


export async function writeBuildInfo(): Promise<buildInfoType> {
  const { commitHash, commitAuthor } = await getGitCommitHash();
  const ans: buildInfoType = {
    buildUtcDate: new Date().toUTCString(),
    buildUnixTimeStamp: Date.now(),
    commitHash,
    commitAuthor,
    isDeployed: false,
  };

  const newBuildInfo: buildInfoType =  ans;
  writeFileSync(join(__dirname, "./index.json"), JSON.stringify(newBuildInfo));
  console.log({ newBuildInfo });
  return newBuildInfo;
}

export async function getGitCommitHash() {
  const gitLatestCommitHashCommand = "git log -1 --pretty=format:%H";

  const fetchCommitHash = execSync(gitLatestCommitHashCommand)
    .toString()
    .trim();

  const commitHash = fetchCommitHash;

  const gitLatestCommitHashAuthorCommand =
    'git log -1 --pretty=format:"%ae - %an"';
  const fetchCommitHashAuthor = execSync(gitLatestCommitHashAuthorCommand)
    .toString()
    .trim();

  const commitAuthor = fetchCommitHashAuthor;

  return { commitHash, commitAuthor };
}
