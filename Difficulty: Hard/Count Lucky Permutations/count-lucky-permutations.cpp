//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
  long long int luckyPermutations(int N, int M, vector<int> arr,
                                    vector<vector<int>> graph) {
        // Initialize adjacency matrix to store connections between nodes
        vector<vector<int>> adj(N, vector<int>(N, 0));
        
        // Fill adjacency matrix based on the given graph edges
        for (auto x : graph) {
            adj[x[0] - 1][x[1] - 1] = 1; // 0-indexed adjustment
            adj[x[1] - 1][x[0] - 1] = 1; // 0-indexed adjustment
        }

        // Initialize dp table: dp[i][bitmask] stores number of valid permutations 
        vector<vector<long long int>> dp(N, vector<long long int>(pow(2, N), 0));

        // Base case: if only the i-th node is in the set, set dp[i][bitmask] to 1
        for (int i = 0; i < N; i++) {
            dp[i][pow(2, i)] = 1;
        }

        // Iterate through all subsets of nodes (represented by bitmask)
        int p = pow(2, N); // Total number of subsets
        for (int bit = 1; bit < p; bit++) {
            for (int i = 0; i < N; i++) {
                if (1 & (bit >> i)) // Check if i-th node is in the subset represented by 'bit'
                    for (int j = 0; j < N; j++) {
                        if ((1 & (bit >> j)) && arr[i] != arr[j] && adj[arr[i] - 1][arr[j] - 1]) {
                            // If nodes i and j are connected and have different values, 
                            // add valid permutations from dp[j][new_bitmask]
                            dp[i][bit] += dp[j][bit ^ (1 << i)];
                        }
                    }
            }
        }

        // Calculate the final answer by summing valid permutations for all nodes
        long long int ans = 0;
        for (int i = 0; i < N; i++) {
            ans += dp[i][p - 1]; // Add the result of the full set of nodes
        }

        return ans; // Return the total number of lucky permutations
    }
};
//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, M;
        cin >> N >> M;
        vector<int> arr(N);
        vector<vector<int>> graph(M, vector<int>(2));
        for (int i = 0; i < N; i++) {
            cin >> arr[i];
        }
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < 2; j++) {
                cin >> graph[i][j];
            }
        }
        Solution obj;
        cout << obj.luckyPermutations(N, M, arr, graph) << endl;
    
cout << "~" << "\n";
}
}

// } Driver Code Ends