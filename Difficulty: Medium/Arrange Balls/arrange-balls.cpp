//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    int N = 1e9 + 7;  // Modulo value to avoid overflow during calculations
    int dp[101][101][101][5];  // DP table to store results for subproblems

    // Recursive function to calculate the number of ways to color the sequence
    int rec(int p, int q, int r, int last){
        // If any of the counts go negative, return 0 (invalid case)
        if(p < 0 || q < 0 || r < 0) return 0;

        // Base case: If all counts are zero, there is one way (doing nothing)
        if(p == 0 && q == 0 && r == 0) return 1;

        // If the result for this subproblem is already computed, return it from the DP table
        if(dp[p][q][r][last] != -1) return dp[p][q][r][last] % N;

        int ans = 0;  // Variable to store the result of the current subproblem

        // If the last color was not 1, consider using color 1 for the next move
        if(last != 1) ans += rec(p - 1, q, r, 1), ans %= N;

        // If the last color was not 2, consider using color 2 for the next move
        if(last != 2) ans += rec(p, q - 1, r, 2), ans %= N;

        // If the last color was not 3, consider using color 3 for the next move
        if(last != 3) ans += rec(p, q, r - 1, 3), ans %= N;

        // Store and return the result for the current subproblem
        return dp[p][q][r][last] = ans % N;
    }

    // Function to count the ways to color the sequence
    int CountWays(int p, int q, int r) {
        // Initialize the DP table with -1 (meaning not computed)
        memset(dp, -1, sizeof(dp));

        // Call the recursive function with the last color as -1 (indicating no previous color)
        return rec(p, q, r, -1);
    }
};
//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int p, q, r;
		cin >> p >> q >> r;
		Solution ob;
		int ans = ob.CountWays(p, q, r);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends