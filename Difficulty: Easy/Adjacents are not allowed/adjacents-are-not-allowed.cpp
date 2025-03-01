//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to calculate the maximum sum by selecting elements from matrix
    int maxSum(int N, vector<vector<int>> mat) {
        // Initialize the variables to track the maximum sums
        int low, high, mid;

        // Set low to the maximum of the first column's elements
        low = max(mat[0][0], mat[1][0]);
        
        // If there's only one column, return the maximum of the first column's elements
        if (N == 1) return low;

        // Initialize mid to the maximum of the first two columns' elements
        mid = max(low, max(mat[0][1], mat[1][1]));

        // Iterate through the rest of the columns
        for (int i = 2; i < N; i++) {
            // Calculate high as the maximum of the current column's element plus the low value,
            // or the previous mid value
            high = max(max(mat[0][i], mat[1][i]) + low, mid);

            // Update low to the previous mid, and mid to the current high
            low = mid;
            mid = high;
        }

        // Return the final maximum sum
        return mid;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        vector<vector<int>> mat(2, vector<int>(N, 0));
        for(int i = 0;i < 2; i++){
            for(int j = 0; j < N; j++)
                cin>>mat[i][j];
        }
        
        Solution ob;
        cout<<ob.maxSum(N, mat)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends