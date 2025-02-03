//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution {
  public:
    int SaveGotham(vector<int>& heights) {
        // Get the number of buildings
        int numBuildings = heights.size();

        // Stack to keep track of next greater element
        stack<int> nextGreaterStack;
        int totalSum = 0, modValue = (int)(1e9+7);

        // Traverse from right to left
        for(int i = numBuildings - 1; i >= 0; i--) {
            // Pop elements from stack while they are smaller or equal to current height
            while(!nextGreaterStack.empty() && heights[i] >= nextGreaterStack.top()) {
                nextGreaterStack.pop();
            }
            
            // Add the next greater element to total sum, if stack is not empty
            totalSum = (totalSum + (nextGreaterStack.empty() ? 0 : nextGreaterStack.top()) % modValue) % modValue;
            
            // Push the current height onto the stack
            nextGreaterStack.push(heights[i]);
        }
        
        return totalSum;
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
        Solution obj;
        int res = obj.SaveGotham(arr);
        cout << res << endl;
        cout << "~" << endl;
        // string tl;
        // getline(cin, tl);
    }
    return 0;
}

// } Driver Code Ends