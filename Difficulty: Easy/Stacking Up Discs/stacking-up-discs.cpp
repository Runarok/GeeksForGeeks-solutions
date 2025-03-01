//{ Driver Code Starts
//initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function template for C++

class Solution {
public:

    // Function to find the maximum height of stacked discs
    int StackingUpDiscs(int N, int R[], int H[]) {
        // Create a vector to store discs as pairs of {radius, height}
        vector<pair<int, int>> discs;

        // Step 1: Populate the discs vector with radius and height pairs
        for (int i = 0; i < N; i++) {
            discs.push_back({R[i], H[i]});
        }

        // Step 2: Sort the discs
        // Sort first by radius (ascending), and if radii are equal, by height (descending)
        sort(discs.begin(), discs.end(), [](pair<int, int> &a, pair<int, int> &b) {
            if (a.first == b.first) return a.second > b.second; // Height descending if radius is same
            return a.first < b.first; // Radius ascending
        });

        // Step 3: Apply Longest Increasing Subsequence (LIS) concept to find max height stack
        vector<int> dp(N, 0); // dp[i] will store the maximum height of stack ending at disc i
        int maxHeight = 0; // To store the maximum height of any valid stack

        // Step 4: Calculate maximum stack height
        for (int i = 0; i < N; i++) {
            dp[i] = discs[i].second; // Initialize dp[i] with the height of the disc itself
            for (int j = 0; j < i; j++) {
                // Valid stacking condition: radius[j] < radius[i] and height[j] < height[i]
                if (discs[j].first < discs[i].first && discs[j].second < discs[i].second) {
                    dp[i] = max(dp[i], dp[j] + discs[i].second); // Update dp[i] with a higher stack height if possible
                }
            }
            maxHeight = max(maxHeight, dp[i]); // Update maxHeight if the current stack is the highest found so far
        }

        return maxHeight; // Return the maximum height of the stack
    }
};



//{ Driver Code Starts.
int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        int R[N],H[N];
        for(int i=0;i<N;i++)
         cin>>R[i]>>H[i];
         
        Solution ob;
        cout<<ob.StackingUpDiscs(N,R,H)<<endl; 
    
cout << "~" << "\n";
}
}
// } Driver Code Ends