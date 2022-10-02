import { exec } from "node:child_process";

const promiseExec = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log({ error, stdout, stderr });
      error && reject(error);
      resolve(stdout);
    });
  });
[1].map(async () => {
  const cp = await promiseExec("pwd");
});
