//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Memoization table to store the results of subproblems
    int t[1005][1005];

    // Recursive function to solve the problem with dynamic programming
    int Solve(int *A, int i, int N, int K) {
        // Base case: If K == 0, return 0 (no more elements to consider)
        if(K == 0) return 0;
        
        // If we have exhausted all elements, return a large value to indicate impossibility
        if(i == N) return 1e9;
        
        // If the result has been computed before, return it from the memoization table
        if(t[i][K] != -1) return t[i][K];
        
        // Initialize the answer to a large value
        int Ans = 1e9;
        
        // Loop through the remaining elements to find the optimal solution
        for(int j = i + 1; j < N; j++) {
            // Check if the current element is greater than or equal to the element at i
            if(A[j] >= A[i]) {
                // Update the answer with the minimum value obtained from the recursive call
                Ans = min(Ans, A[j] + Solve(A, j, N, K - 1));
            }
        }
        
        // Store the result in the memoization table and return it
        return t[i][K] = Ans;
    }

    // Main function to find the minimum sum of K elements
    int minSum(int arr[], int N, int K) {
        // Initialize the memoization table with -1 (indicating uncalculated values)
        memset(t, -1, sizeof(t));
        
        // Initialize the answer to a large value
        int Ans = 1e9;
        
        // Loop through all starting points to find the optimal solution
        for(int i = 0; i <= N - K; i++) {
            // Update the answer with the minimum sum found from the recursive call
            Ans = min(Ans, arr[i] + Solve(arr, i, N, K - 1));
        }
        
        // If the answer is still the large value, return -1 (no valid solution)
        if(Ans >= 1e9) return -1;
        
        // Return the minimum sum found
        return Ans;
    }
};


//{ Driver Code Starts.
int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
        int n, k;
        cin >> n >> k;

        int a[n];
        for(int i = 0; i < n; i++)
        	cin >> a[i];

        

	    Solution ob;
	    cout << ob.minSum(a, n, k) << "\n";
	     
    
cout << "~" << "\n";
}
    return 0;
}


// } Driver Code Ends