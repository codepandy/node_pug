const pug = require("pug");
const fs = require("fs");

// Compile the source code
const compiledFunction = pug.compileFile("./template.pug");

// Render a set of data
console.log(
  compiledFunction({
    name: "Timothy"
  })
);
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(
  compiledFunction({
    name: "Forbes"
  })
);

/*********** 相关核心代码*******************/
let data = "";

const citys = [
  { city: "zhengzhou", cityName: "郑州", title: "大郑州的发展方向" },
  { city: "wuhan", cityName: "武汉", title: "武汉的科技发展之路" }
];

citys.forEach(item => {
  data = pug.renderFile("template.pug", {
    ...item
  });
  fs.writeFile(`./dist/${item.city}.html`, data, err => {
    if (err) throw err;
    console.log(`${item.city}.html 已生成。`);
  });
});
