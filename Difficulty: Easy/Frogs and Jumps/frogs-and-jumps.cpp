//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    int unvisitedLeaves(int N, int leaves, int frogs[]) {
        // Create a vector to track visited leaves
        vector<bool> visited(leaves + 1, false);

        // Initializing unvisited leaves count with total number of leaves
        int unvisitedLeavesCount = leaves;

        // Sorting frogs' strength in increasing order
        sort(frogs, frogs + N);

        // Iterating over all frogs to process their jumps
        for (int i = 0; i < N; ++i) {
            int strength_i = frogs[i];

            // If frog strength is 1, it visits all leaves, return 0
            if (strength_i == 1)
                return 0;

            // If frog's strength is greater than total number of leaves, skip this frog
            if (strength_i > leaves)
                continue;

            // Skip if this frog's leaves have already been visited
            if (visited[strength_i] == true)
                continue;

            // If frog has not visited its leaves, mark them as visited
            for (int j = strength_i; j <= leaves; j += strength_i) {

                // If the leaf is unvisited, decrease the unvisited leaves count
                if (visited[j] == false)
                    unvisitedLeavesCount--;

                // Mark the leaf as visited
                visited[j] = true;
            }
        }

        // Return the final count of unvisited leaves
        return unvisitedLeavesCount;
    }
};



//{ Driver Code Starts.


int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, leaves;
        cin >> N >> leaves;
        int frogs[N];
        for (int i = 0; i < N; i++) {
            cin >> frogs[i];
        }

        Solution ob;
        cout << ob.unvisitedLeaves(N, leaves, frogs) << endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends