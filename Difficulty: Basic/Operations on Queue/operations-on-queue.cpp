//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
public:

    // Function to push an element in queue.
    void enqueue(std::queue<int>& q, int x) {
        // Add element x to the rear of the queue
        q.push(x);
    }

    // Function to remove front element from queue.
    void dequeue(std::queue<int>& q) {
        if (!q.empty()) {
            q.pop();  // Removes the front element
        }
    }

    // Function to find the front element of queue.
    int front(std::queue<int>& q) {
        if (!q.empty()) {
            return q.front();  // Returns the front element of the queue
        }
        return -1;  // Return -1 if the queue is empty
    }

    // Function to find an element in the queue.
    bool find(std::queue<int> q, int y) {
        // We need to check if element y exists in the queue.
        while (!q.empty()) {
            if (q.front() == y) {
                return true;
            }
            q.pop();  // Remove the front element
        }
        return false;
    }
};


//{ Driver Code Starts.

int main() {
    int testcases;
    cin >> testcases;
    while (testcases--) {
        queue<int> s;
        int q;
        cin >> q;
        Solution ob;
        while (q--) {
            char ch;
            cin >> ch;

            if (ch == 'i') {
                int x;
                cin >> x;

                ob.enqueue(s, x);

            } else if (ch == 'r') {
                ob.dequeue(s);
            } else if (ch == 'h') {
                cout << ob.front(s) << endl;
            } else if (ch == 'f') {
                int x;
                cin >> x;
                if (ob.find(s, x))
                    cout << "true";
                else
                    cout << "false";
                cout << endl;
            }
        }

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends