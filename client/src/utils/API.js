import axios from "axios";

const url = `https://www.googleapis.com/books/v1/volumes?q=`;

export default {
  getBook: function (term) {
    return axios.get(url + term);
  },
  getAllBooks: function () {
    return axios.get("/api/books");
  },
};

// export default {
//   // Gets all posts
//   getPosts: function () {
//     return axios.get("/api/posts");
//   },
//   // Gets the post with the given id
//   getPost: function (id) {
//     return axios.get("/api/posts/" + id);
//   },
//   // Deletes the post with the given id
//   deletePost: function (id) {
//     return axios.delete("/api/posts/" + id);
//   },
//   // Saves a post to the database
//   savePost: function (postData) {
//     return axios.post("/api/posts", postData);
//   },
// };
