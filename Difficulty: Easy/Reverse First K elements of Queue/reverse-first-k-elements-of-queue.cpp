//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

vector<int> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    int num;
    vector<int> res;
    while (ss >> num) {
        res.push_back(num);
    }
    return res;
}


// } Driver Code Ends
//Back-end complete function Template for C++

class Solution
{
    public:
    // Function to reverse first k elements of a queue.
    queue<int> modifyQueue(queue<int> q, int k) {
        // Create a stack to store the first k elements
        stack<int> St;

        // Step 1: Pop the first k elements from the queue and push them to the stack
        for(int i = 0; i < k; i++) {
            int temp = q.front();
            q.pop();
            St.push(temp);
        }

        // Step 2: Pop from the stack and push into the queue to reverse the order
        for(int i = 0; i < k; i++) {
            int temp = St.top();
            St.pop();
            q.push(temp);
        }

        // Step 3: Move the remaining elements (size - k) to the back of the queue
        int m = q.size() - k;
        for(int i = 0; i < m; i++) {
            int temp = q.front();
            q.pop();
            q.push(temp);
        }

        // Return the modified queue
        return q;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t-- > 0) {
        int k;
        cin >> k;
        cin.ignore();
        queue<int> q;
        vector<int> v = inputLine();
        for (auto it : v)
            q.push(it);
        Solution ob;
        queue<int> ans = ob.modifyQueue(q, k);
        while (!ans.empty()) {
            int a = ans.front();
            ans.pop();
            cout << a << " ";
        }
        cout << endl;
        cout << "~" << endl;
    }
}
// } Driver Code Ends