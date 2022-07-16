export interface GitHubStatus {
  emoji: string;
  message: string;
}

export interface GetConfigOutput {
  title: string;
  desc: string;
  date: string;
  updated?: string;
}

export interface PostMeta extends GetConfigOutput {
  content: string;
}
