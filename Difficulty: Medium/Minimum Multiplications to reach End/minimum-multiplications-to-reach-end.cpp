//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    int minimumMultiplications(vector<int>& arr, int start, int end) {
        // If start and end are the same, no multiplication needed
        if (start == end) return 0;
        
        int mod = 100000;
        // Distance array initialized with a large value (infinity)
        vector<int> dist(mod, INT_MAX);
        queue<pair<int, int>> q; // Queue to store the {current_value, steps}
        
        dist[start] = 0; // Starting point
        q.push({start, 0}); // Push starting value with 0 steps
        
        while (!q.empty()) {
            int num = q.front().first; // Current number
            int steps = q.front().second; // Number of steps taken
            q.pop();
            
            // Loop through each factor in the array
            for (int factor : arr) {
                int newNum = (num * factor) % mod; // Multiply and take mod
                
                // If we reach the destination, return the steps
                if (newNum == end) return steps + 1;
                
                // If the new number hasn't been visited, update it and push to the queue
                if (dist[newNum] == INT_MAX) {
                    dist[newNum] = steps + 1;
                    q.push({newNum, steps + 1});
                }
            }
        }
        
        return -1; // Return -1 if there's no valid path to the end
    }
};


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        int start, end;
        cin >> start >> end;
        Solution obj;
        cout << obj.minimumMultiplications(arr, start, end) << endl;
    
cout << "~" << "\n";
}
}

// } Driver Code Ends