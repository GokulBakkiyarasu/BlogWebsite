import express, { response } from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
import axios from "axios";

const app = express();
const port = 3000;
let posts = [];
let latitude;
let longitude;
try {
  const response = await axios.get(
    "https://ipinfo.io/json?token=6c1aa2a422f7e0"
  );
  [latitude, longitude] = response.data.loc.split(",");
} catch (error) {
  console.error("Error fetching IP-based location:", error);
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//get method to fetch the home page
app.get("/", async (req, res) => {
  try {
    let result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c37b26d69f37780bf494774ca350cb6e`
    );
    res.render("index.ejs", {
      allPost: posts,
      climate: result.data.weather[0].id,
    });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", { allPost: posts });
  }
});

//get request to get the About page
app.get("/about", (req, res) => res.render("about.ejs", { isAbout: true }));

app.get("/contact", (req, res) =>
  res.render("contact.ejs", { isContact: true })
);

app.get("/create", (req, res) => res.render("createpost.ejs"));

app.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === req.params.id);
  res.render("blogpost.ejs", { post: post });
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find((post) => post.id === req.params.id);
  res.render("edit.ejs", { post: post });
});

// post method to create new post
app.post("/submit", (req, res) => {
  const newPost = {
    id: uuid(),
    postName: req.body.postName,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    detail: req.body.detail,
  };

  // Add the new post to the posts array (assuming posts is an array)
  posts.push(newPost);

  // Redirect back to the homepage
  res.redirect("/");
});

app.post("/edit/:id", (req, res) => {
  const replaceIndex = posts.findIndex((post) => post.id === req.params.id);
  const updatedPost = {
    id: req.params.id,
    postName: req.body.postName,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    detail: req.body.detail,
  };
  posts[replaceIndex] = updatedPost;

  res.redirect("/");
});

//delete method to delete a post
app.delete("/delete/:id", (req, res) => {
  // Filter out the post with the matching id
  posts = posts.filter((post) => post.id !== req.params.id);
});

//making the app to listen to a particular port.
app.listen(port, () => {
  console.log(`App is listening at: http://localhost:${port}/`);
});
