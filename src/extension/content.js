// dom manipulation & javascript for webpage go here

// inject backend scripts to run on the browser window
// timeout is not needed, but can run the code asynchronously
<<<<<<< HEAD

// Listening for the message from reactFileParser.js in backend folder
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log('content.js got message from index.js');
    // tree is sent from reactFileParser.js
    if (request.data) {
    // send the backend tree to the background.js
      console.log('I am sending back the tree to background.js');
      chrome.runtime.sendMessage(request.data);
    }
  },
);

// inject traversal script into tab's context
setTimeout(() => {
  const script = document.createElement('script');
  console.log('this set timeout is working!');
  script.src = chrome.extension.getURL('bundles/backend.bundle.js');
  document.head.appendChild(script);
}, 5000);

// window.onload = function () {
//   /** **** CONSOLE LOGS RUN IN BROWSER CONSOLE ***** */
//   console.log('content.js is loaded');
=======
// setTimeout (() => {
const script = document.createElement("script");
script.src = chrome.extension.getURL("bundles/backend.bundle.js");
document.head.appendChild(script);
// }, 500);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("content.js got message from index.js");
  // if (request.message === 'get-react-data') {

  // }
});

window.onload = function () {
  /** **** CONSOLE LOGS RUN IN BROWSER CONSOLE ***** */
  console.log("content.js is loaded");
>>>>>>> cd86998fb98d14c0a84ba669c28d9acbaf0b6fc5

//   /** **** DOM MANIPULATION WORKS HERE ***** */
//   // console.log(document.getElementById('Landing'));

<<<<<<< HEAD
//   /** **** CANNOT ACCESS CHROME.TABS FROM WINDOW AND CHROME ***** */
//   // console.log('content.js window', window);
//   // console.log('devtools content.js', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
=======
  /** **** CANNOT ACCESS CHROME.TABS FROM WINDOW AND CHROME ***** */
  // console.log("content.js window", window);
  // console.log(
  //   "devtools content.js",
  //   window.__REACT_DEVTOOLS_GLOBAL_HOOK__.getFiberRoots(1)
  // );
>>>>>>> cd86998fb98d14c0a84ba669c28d9acbaf0b6fc5

//   /** **** TO DO: ***** */
//   // create event listener
//   // receive message from index.js chrome tabs query
//   // send message to background.js
// };
