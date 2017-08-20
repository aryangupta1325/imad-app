var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone: {
    title: 'article-one',
    datef: '20-Sep-2017',
    content: `test
    test3
    test5`
},
articletwo : {
    title: 'article-two',
    datef: '25-march-2017',
    content: `Kritis Birthday
    test3
    test5`
}
}

function createTemplate(data){
    var title = data.title;
    var datef = data.datef;
    var content = data.content;
        var htmlTemplate =
        `   <html>
            <head>
              <title>
                    ${title}
                </title>
            <link href ="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
            <div class= "container">
            ${datef}
            <p>
            ${content}
            </p>
            </div>
            </body>
            </html>`;
    return htmlTemplate;        
  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    console.log(articleName);
  res.send(createTemplate(articles[articleName]));
  console.log(res);
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articlecontent2));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
