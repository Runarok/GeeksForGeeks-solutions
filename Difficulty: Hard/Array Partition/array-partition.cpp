//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution {
    public:
    // Recursive function to check if we can partition the array into K subarrays
    // such that the difference between the maximum and minimum of any subarray is <= M
    int solve(int idx, int k, int m, vector<int>& a) {
        // Base case: If the index is less than or equal to -1, we have successfully partitioned the array
        if(idx <= -1) 
            return 1;  // We can make the required partition

        bool f = false;  // Variable to track if partitioning is possible

        // Try to create a partition from the current index and move backwards
        // Start from index `idx + 1 - k` because we need at least `k` subarrays
        // Check if the difference between the current element and the element at the possible cut is <= M
        for(int i = idx + 1 - k; i >= 0 && a[idx] - a[i] <= m; i--) {
            // Recursively check if we can partition the array by including the current element
            f |= solve(i - 1, k, m, a);
            
            // If the result is true, break out of the loop (found a valid partition)
            if(f) 
                break;
        }

        // Return whether we found a valid partition configuration
        return f;
    }

    // Main function to determine if we can partition the array
    bool partitionArray(int N, int K, int M, vector<int>& A) {
        // Sort the array to make it easier to partition (ensures elements are in ascending order)
        sort(A.begin(), A.end());

        // Call the recursive function starting from the last index (N-1)
        return solve(N - 1, K, M, A);
    }
};


//{ Driver Code Starts.

int main(){
    int T;
    cin >> T;
    while(T--){
        int N, K, M;
        cin >> N >> K >> M;
        vector<int> A(N);
        for(int i = 0; i < N; i++){
            cin >> A[i];
        }
        Solution obj;
        bool ans = obj.partitionArray(N, K, M, A);
        if(ans){
            cout << "YES\n";
        }
        else{
            cout<< "NO\n";
        }
    
cout << "~" << "\n";
}
}

// } Driver Code Ends