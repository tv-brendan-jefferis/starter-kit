import jsf from "json-schema-faker";
import {schema} from "./mockSchemaData";
import fs from "fs";
import chalk from "chalk";

/* eslint-disable no-console */

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, err => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.green("Mock database created."));
    }
});
