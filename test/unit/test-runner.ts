import { spec } from "node:test/reporters";
import { run } from "node:test";
import { globSync } from "glob";

run({ files: globSync("test/unit/**/*.spec.ts") })
  .compose(new spec())
  .pipe(process.stdout);
