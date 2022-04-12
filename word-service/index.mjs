import * as http from "http";

const words =  ["Typescript", "Mobx js", "Remix run", "Nest js", "Webpack"]

const server = http.createServer((req, res) => {
    if (req.url === '/words') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(words[getRandomInt(0, words.length)]);
        res.end();
    }
});


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

server.listen(3001);