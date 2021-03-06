"use strict"; // 🐸

// Various URLs to choose from
const myURL = "http://localhost:6969";
const testURL = "http://secure-reddit.herokuapp.com/simple";
const LeviURL = "https://time-radish.glitch.me/posts";

// Root URL 
const rootURL = myURL;

// These arrays will contain users and posts as JSON objects
let users = [];
let posts = [];

// We will render all post to this element on the page
let contentBox = document.getElementById("content");

// This function will construct and send HTTP requests also set the onload function (given as a parameter)
// this is the heart of everything..
function generalRequest(method = "GET", URL = rootURL, query = "", parameters = [], fragment = "", header = "", body = {}, onloadFunction = function () {}) {
  console.log(`\nGeneral request sent with method: ${method} \nURL: ${URL} \nquery: ${query} \nparameters: ${parameters} \nfragment: ${fragment} \nheader: ${header} \nbody: ${body}`);
  let MyRequester = new XMLHttpRequest();
  MyRequester.open(method, URL);
  if (header === "JSON") {
    MyRequester.setRequestHeader("Content-Type", "application/json");
    MyRequester.setRequestHeader("Accept", "application/json");
  }
  MyRequester.send(JSON.stringify(body));  
  MyRequester.onload = function () {onloadFunction(JSON.parse(MyRequester.responseText))};
}

// This function will launch HTTP requests in order to refresh user and post data
function loadAll(URL) {
  generalRequest("GET", URL + "/posts", "", [], "", "JSON", {}, (parsed) => {posts = parsed.posts});   
  generalRequest("GET", URL + "/users", "", [], "", "JSON", {}, (parsed) => {users = parsed.users});   
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// These short functions will help to construct the posts on the page
// If the user has no profile-pic-URL present, he/she will get the Guy Fawkes mask
function getProfilePic(URL){    
  if (URL === undefined || URL.length < 3) {
    URL = "https://pbs.twimg.com/profile_images/824716853989744640/8Fcd0bji.jpg";
  } 
  return URL;
}
// Convert post"s timestamp to readable date
function timeStampToDate(timeStamp) {
  return new Date(timeStamp).toGMTString();
}
// This is a very important function! This will render each post to the content-div!
function renderPost(user, post, htmlElement) {
  let newPost = document.createElement("div");
  newPost.id = "POST_ID" + post["POST_ID"];
  newPost.classList = "post";
  newPost.innerHTML = `                 
  <div class = "point_box">
  <div class = "upvote_button arrow_button">▲</div>
  <div class = "point_counter">${post["points"]}</div>
  <div class = "downvote_button arrow_button">▼</div>
  </div>  
  <div class = "avatar_box">
  <img class = "avatar_pic" src = ${getProfilePic(user["profile_pic"])} alt = "profil_pic">
  </div>  
  <div class = "post_box">        
  <div class = "username">by: ${user["username"]} on: ${timeStampToDate(post["timestamp"])}</div>
  <div class = "link_box">
  <a href = ${post["url"]}>${post["url"]}</a>
  </div>        
  <div class = "post_text">
  ${post["title"]}
  </div>`;
  htmlElement.appendChild(newPost);
}

function renderPosts() {
  posts.forEach((post) => {renderPost(users.find(function (user) {return user["USER_ID"] === post["USER_ID"]} ), post, contentBox ); } );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function openPostForm() {
  let wrappper = getElementById("wrapper");
  let postDialog = document.createElement("div");
  postDialog.id = "post_dialog";
  // postDialog.classList = "";
  postDialog.innerHTML = `                 
  <div class = "point_box">
  <div class = "upvote_button arrow_button">▲</div>
  <div class = "point_counter">${post["points"]}</div>
  <div class = "downvote_button arrow_button">▼</div>
  </div>  
  <div class = "avatar_box">
  <img class = "avatar_pic" src = ${getProfilePic(user["profile_pic"])} alt = "profil_pic">
  </div>  
  <div class = "post_box">        
  <div class = "username">by: ${user["username"]} on: ${timeStampToDate(post["timestamp"])}</div>
  <div class = "link_box">
  <a href = ${post["url"]}>${post["url"]}</a>
  </div>        
  <div class = "post_text">
  ${post["title"]}
  </div>`;
  wrapper.appendChild(postDialog);  
}

function initEvents() {
  let postButton = getElementById("post_button");
  postButton.addEventListener('click', openPostForm, false);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Init data
loadAll(rootURL);

// initEvents();

// a little test (can be removed later)
setTimeout(renderPosts, 500);
