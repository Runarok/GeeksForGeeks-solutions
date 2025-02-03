//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let obj = new Twitter();
    for(let i=0;i<t;i++)
    {
        let inputLine = readLine().split(' ').map(x=>parseInt(x));
        let Query = inputLine[0];
        if(Query === 1)
        {
            obj.postTweet(inputLine[1], inputLine[2]);
        }
        else if(Query === 2)
        {
            let tweetFeed = obj.getNewsFeed(inputLine[1]);
            let N = tweetFeed.length;
            let res = '';
            for(let i=0;i<N;i++)
            {
                res+=tweetFeed[i] + " ";
            }
            console.log(res);
            
        }
        else if(Query === 3)
        {
            obj.follow(inputLine[1], inputLine[2]);
        }
        else if(Query === 4)
        {
            obj.unfollow(inputLine[1],inputLine[2]);
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} userId
 * @param {number} tweetId
 * @returns {void}
 */

class Twitter {
    constructor() {
        this.twt = 0; // Counter for the tweet ID
        this.friends = {}; // Object to store user's friends (followers)
        this.tweets = {}; // Object to store tweets by user
    }

    // Compose a new tweet
    postTweet(userId, tweetId) {
        // If the user hasn't tweeted before, initialize their tweets array
        if (!(userId in this.tweets)) {
            this.tweets[userId] = [[this.twt, tweetId]];
            this.twt += 1; // Increment the tweet ID counter
        } else {
            this.tweets[userId].push([this.twt, tweetId]);
            this.twt += 1; // Increment the tweet ID counter
        }
    }

    // Retrieve the 10 most recent tweet ids for the user's feed
    getNewsFeed(userId) {
        let tweets = [];

        // Gather tweets from the user's friends (followers)
        if (userId in this.friends) {
            for (let f of this.friends[userId]) {
                if (f in this.tweets) {
                    for (let tt of this.tweets[f]) {
                        tweets.push(tt);
                    }
                }
            }
        }

        // Add the user's own tweets
        if (userId in this.tweets) {
            for (let tt of this.tweets[userId]) {
                tweets.push(tt);
            }
        }

        // Sort tweets by timestamp (most recent first)
        let res = [];
        if (tweets.length > 0) {
            tweets.sort((x, y) => y[0] - x[0]);
            for (let i = 0; i < Math.min(10, tweets.length); i++) {
                res.push(tweets[i][1]); // Extract tweet ID
            }
        }

        return res; // Return the 10 most recent tweet IDs
    }

    // Follower follows a followee. If the operation is invalid, it should be a no-op.
    follow(followerId, followeeId) {
        if (!(followerId in this.friends)) {
            this.friends[followerId] = new Set();
            this.friends[followerId].add(followeeId); // Add followee to follower's friend list
        } else {
            this.friends[followerId].add(followeeId); // Add followee to follower's friend list
        }
    }

    // Follower unfollows a followee. If the operation is invalid, it should be a no-op.
    unfollow(followerId, followeeId) {
        if (followerId in this.friends) {
            this.friends[followerId].delete(followeeId); // Remove followee from follower's friend list
        }
    }
}
