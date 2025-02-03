//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    vector<int> deleteElement(vector<int>& arr, int k) {
        // Initialize a stack to help with removing elements
        stack<int> st;

        // Iterate through the array to decide which elements to keep
        for(int i = 0; i < arr.size(); i++) {
            // Remove elements from the stack if they are smaller than the current element
            // and we still have deletions (k > 0)
            while(!st.empty() && st.top() < arr[i] && k != 0) {
                st.pop();
                k--;
            }
            // Push the current element onto the stack
            st.push(arr[i]);
        }
        
        // Prepare a vector to store the result
        vector<int> ans;
        
        // Pop elements from the stack and push them into the result vector
        while(!st.empty()) {
            ans.push_back(st.top());
            st.pop();
        }
        
        // Reverse the result to maintain the correct order
        reverse(ans.begin(), ans.end());

        return ans;
    }
};

//{ Driver Code Starts.

int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {

        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        string ks;
        getline(cin, ks);
        int k = stoi(ks);
        Solution ob;

        vector<int> v = ob.deleteElement(arr, k);
        vector<int>::iterator it;
        for (it = v.begin(); it != v.end(); it++)
            cout << *it << " ";
        cout << endl;
    }
    return 0;
}

// } Driver Code Ends