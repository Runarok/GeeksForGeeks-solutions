//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends

// User function Template for C++
// Back-end complete function Template for C++

class StackQueue {
  private:
    stack<int> s1; // Main stack to store elements
    stack<int> s2; // Temporary stack for operations

  public:
    // Function to push an element into the queue
    void push(int B) {
        // Move all elements from s1 to s2
        while (!s1.empty()) {
            s2.push(s1.top());
            s1.pop();
        }

        // Push the new element into s1 (acting as the queue front)
        s1.push(B);

        // Move all elements back from s2 to s1 to maintain order
        while (!s2.empty()) {
            s1.push(s2.top());
            s2.pop();
        }
    }

    // Function to pop an element from the queue
    int pop() {
        // If s1 is empty, queue is empty, return -1
        if (s1.empty()) {
            return -1;
        }

        // Pop the front element
        int elem = s1.top();
        s1.pop();
        return elem;
    }
};

//{ Driver Code Starts.

int main() {

    int T;
    cin >> T;
    while (T--) {
        StackQueue *sq = new StackQueue();

        int Q;
        cin >> Q;
        while (Q--) {
            int QueryType = 0;
            cin >> QueryType;
            if (QueryType == 1) {
                int a;
                cin >> a;
                sq->push(a);
            } else if (QueryType == 2) {
                cout << sq->pop() << " ";
            }
        }
        cout << endl;

        cout << "~"
             << "\n";
    }
}

// } Driver Code Ends