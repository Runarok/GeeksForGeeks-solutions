//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution {
public:
    vector<int> maxSubMatrixSumQueries(vector<int> mat[], int n, int m,
                                       vector<pair<int, int>> &queries, int q) {
        // Create a prefix sum matrix with dimensions (n+1) x (m+1), initialized to 0
        vector<vector<int>> prefix(n + 1, vector<int>(m + 1, 0));

        // Compute the prefix sum for the given matrix
        for (int i = 1; i <= n; ++i) {
            for (int j = 1; j <= m; ++j) {
                prefix[i][j] = mat[i - 1][j - 1] +  // Value from the matrix
                               prefix[i - 1][j] +      // Top value
                               prefix[i][j - 1] -      // Left value
                               prefix[i - 1][j - 1];   // Overlap value (top-left corner)
            }
        }

        // Initialize a result vector to store the answers for each query
        vector<int> result;

        // Process each query
        for (auto &query : queries) {
            int a = query.first;  // Starting row index of submatrix
            int b = query.second; // Starting column index of submatrix
            int maxSum = INT_MIN; // To track the maximum sum found for the submatrix

            // Iterate through all possible submatrices that start at (a, b)
            for (int i = a; i <= n; ++i) {
                for (int j = b; j <= m; ++j) {
                    // Calculate the sum of the current submatrix using the prefix sum
                    int sum = prefix[i][j] -
                              prefix[i - a][j] -
                              prefix[i][j - b] +
                              prefix[i - a][j - b];

                    // Update the maximum sum for this query
                    maxSum = max(maxSum, sum);
                }
            }

            // Add the result for this query to the result vector
            result.push_back(maxSum);
        }

        // Return the final result vector with the maximum submatrix sums for each query
        return result;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m, q;
        cin >> n >> m;
        vector<int> mat[n];
        for (int i = 0; i < n; i++) {
            mat[i].assign(m, 0);
            for (int j = 0; j < m; j++) {
                cin >> mat[i][j];
            }
        }
        cin >> q;
        vector<pair<int, int>> queries(q);
        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }
        Solution ob;
        auto ans = ob.maxSubMatrixSumQueries(mat, n, m, queries, q);
        for (auto sum : ans) {
            cout << sum << " ";
        }
        cout << "\n";
    
cout << "~" << "\n";
}
    return 0;
}


// } Driver Code Ends