import fs from 'fs';
import path from 'path';
import VueRouterSitemap from 'vue-router-sitemap'

let import_regex = /(import?)\s(\w+)/gm;

const staticSitemap = path.join(__dirname, "../docs/sitemap.xml");

const filterConfig = {
    isValid: false,
    rules: [
        /\/example-page/,
        /\*/,
    ],
};

const router_path = path.join(__dirname, "../src/router/index.js");

let data = fs.readFileSync(router_path, { encoding: "utf-8" });

let import_strings = data.match(import_regex);

let queries = [];

for (let index = 0; index < import_strings.length; index++) {
    let item = import_strings[index].split(" ");

    let name = item[1];

    if (name !== "Vue" && name !== "VueRouter") {
        queries.push(name)
    }
}

for (let index = 0; index < queries.length; index++) {
    let regexp = new RegExp(`((component:?) (${queries[index]}?))`, "gm");

    data = data.replace(regexp, `component: Vue.component("${queries[index]}", {})`);
}

for (let index = 0; index < queries.length; index++) {
    let regexp = new RegExp(`((import?) (${queries[index]}?) (from?) ('|"?)(../views/${queries[index]}.vue?)('|"?);)`, "gm")

    data = data.replace(regexp, "");
}

fs.writeFileSync(path.join(__dirname, "router_emitter.js"), data, { encoding: "utf-8" });

let { router } = require('./router_emitter');

new VueRouterSitemap(router).filterPaths(filterConfig).build('https://victoria-kamaletdinova.online/').save(staticSitemap);

fs.unlinkSync(path.join(__dirname, "router_emitter.js"));