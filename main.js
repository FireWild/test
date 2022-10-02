import { exec } from "node:child_process";
let attrs = [
  // {
  //   name: "test",
  //   attr: "git@github.com:FireWild/test.git",
  // },
  {
    name: "test2",
    attr: "git@github.com:FireWild/test2.git",
  },
];

let commands = ({ name, attr, branch1, branch2 }) => [
  `git clone  ${attr}`,
  `cd ${name}`,
  `git checkout ${branch1}`,
  `git pull origin ${branch1}`,
  `git checkout -b ${branch2}`,
  `git push origin ${branch2}`,
];
let baranch = { branch1: "main", branch2: "aojie" };

const promiseExec = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      //   console.log({ error, stdout, stderr });
      //   error && reject(error);
      resolve({ error, stdout, stderr });
    });
  });
attrs.map(async (item) => {
  const commond = commands(Object.assign(item, baranch));

  for await (let ele of commond) {
    const res = await promiseExec(ele);
    console.log(res);
    if (res.error) break;
  }
});
