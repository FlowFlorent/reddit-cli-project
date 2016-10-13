var request = require('request');
var prompt = require("prompt");
var requestAsJson = require ('./request-as-json.js');

/*
This function should "return" the default homepage posts as an array of objects
*/
function getHomepage(callback) {
  // Load reddit.com/.json and call back with the array of posts
  // TODO: REPLACE request with requestAsJson!
  requestAsJson('https://www.reddit.com/.json', function(error, result){
    if(error){
      callback(error);
    }
    else {
      callback(null, result.data.children);
    }
  });
}

// getHomepage(function(error, homepage){
//   console.log(homepage);
// })
/*
This function should "return" the default homepage posts as an array of objects.
In contrast to the `getHomepage` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedHomepage(sortingMethod, callback) {
  // Load reddit.com/{sortingMethod}.json and call back with the array of posts
  // Check if the sorting method is valid based on the various Reddit sorting methods
  requestAsJson('https://reddit.com/' + sortingMethod + '/.json', function (error, result){
    if(error){
      callback(error);
    }
    else {
      callback(null, result.data.children);
    }
  });
}

// getSortedHomepage('top', function(error, sortedHomepage){
//   console.log(sortedHomepage);
// });

/*
This function should "return" the posts on the front page of a subreddit as an array of objects.
*/
function getSubreddit(subreddit, callback) {
  // Load reddit.com/r/{subreddit}.json and call back with the array of posts
  requestAsJson('https://reddit.com/r/' + subreddit + '.json', function(error, result) {
     if (error){
        console.log('1');
        callback(error);
     } 
     else {
        console.log('2');
        callback(null, result.data.children);
     }
  });
}

// getSubreddit('funny', function(error, subReddit){
//   if (error){
//       console.log("There was an error.");
//   }
//   else {
//       console.log(subReddit);
//   }
// });
/*
This function should "return" the posts on the front page of a subreddit as an array of objects.
In contrast to the `getSubreddit` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedSubreddit(subreddit, sortingMethod, callback) {
  // Load reddit.com/r/{subreddit}/{sortingMethod}.json and call back with the array of posts
  // Check if the sorting method is valid based on the various Reddit sorting methods
  requestAsJson('https://reddit.com/r/' + subreddit + '/' + sortingMethod + '.json', function(error, result) {
     if (error){
       callback(error);
     } 
     else {
       callback(null, result.data.children);
     }
  });
}

// getSortedSubreddit('funny', 'top', function(error, sortedSubreddit){
//   if(error){
//     console.log("There was an error");
//   }
//   else {
//     console.log(sortedSubreddit);
//   }
// });

/*
This function should "return" all the popular subreddits
*/
function getSubreddits(callback) {
  // Load reddit.com/subreddits.json and call back with an array of subreddits
  requestAsJson('https://reddit.com/subreddits.json', function(error, result) {
      if (error){
        callback(error);
      }
      else {
        callback(null, result.data.children);
      }
  });
}

// getSubreddits(function(error, subReddits){
//   if(error){
//     console.log("There was an error.");
//   }
//   else {
//     console.log(subReddits);
//   }
// });

// Export the API
module.exports = {
    'getHomepage': getHomepage,
    'getSortedHomepage': getSortedHomepage,
    'getSortedSubreddit': getSortedSubreddit,
    'getSubreddit':getSubreddit,
    'getSubreddits':getSubreddits
}