const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;  
app.set('view engine', 'hbs');
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
app.use(express.static(publicPath));
app.set('views', viewsPath);
console.log("Public directory:", publicPath);
console.log("Views directory:", viewsPath);

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render("404error");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
