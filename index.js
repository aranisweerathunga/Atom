import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const markCommit = (n) => {
  if (n===0) return; simpleGit().push();
  const x = random.int(0, 52);
  const y = random.int(0, 6);
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  console.log("Committing on: ", date);
  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add(path)
      .commit(date, { "--date": date }, markCommit.bind(this, --n));
  });
};

markCommit(50); // 1 week and 2 days ago
