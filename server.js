const { execSync } = require("child_process");

try {
  execSync("npm run build", { stdio: "inherit" });
} catch (e) {}

require("child_process").spawn(
  "node",
  ["node_modules/next/dist/bin/next", "start", "-p", process.env.PORT || "3000"],
  { stdio: "inherit" }
);
