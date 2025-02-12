//{ Driver Code Starts

#include<bits/stdc++.h>

using namespace std;


// } Driver Code Ends

class Solution{
public: 
    int sisterCoin(int arr[], int n, int m){
        // total_money represents the total amount of money Gila currently has
        int total_money = 0;

        // Sum up all the amounts in the arr[] to get the total money Gila has
        for(int i = 0; i < n; i++) {
            total_money += arr[i];
        }

        // target represents the amount of money Gila needs to give to Mila to make the amounts equal
        int target = (total_money - m) / 2;

        // If the difference is odd (meaning it can't be evenly divided), or Mila already has more money than Gila,
        // then it is not possible to split the money.
        if ((total_money - m) % 2 == 1 || m > total_money) {
            return 0;
        }

        /*
        At this point, the problem is reduced to checking whether Gila can form a subset of coins
        that sum up to the target. This can be done using dynamic programming.
        The problem now is similar to the "Subset Sum Problem."
        */

        // Create a 2D dp array to store whether it's possible to get a sum using the first i coins
        vector<vector<bool>> dp(n + 1, vector<bool>(target + 1));

        // Initialize dp array where dp[i][j] is true if sum j can be achieved with first i elements
        for (int i = 0; i < dp.size(); i++) {
            for (int j = 0; j < dp[i].size(); j++) {
                // Base case: If the sum is 0, it's always possible (empty subset)
                if (i == 0 && j == 0) {
                    dp[i][j] = true;
                }
                // If no elements are available and the sum is not 0, it's not possible
                else if (i == 0) {
                    dp[i][j] = false;
                }
                // If the sum is 0, it's always possible (empty subset)
                else if (j == 0) {
                    dp[i][j] = true;
                }
                else {
                    // If the current coin can be used to form the sum (j >= arr[i-1]),
                    // check whether we can form the sum either by excluding or including the coin
                    if (j >= arr[i - 1]) {
                        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
                    }
                    // Otherwise, just carry forward the previous result (exclude the current coin)
                    else {
                        dp[i][j] = dp[i - 1][j];
                    }
                }
            }
        }

        // Return whether it's possible to form the target sum using all available coins
        return dp[n][target];
    }
};


//{ Driver Code Starts.

int main()
{
    Solution ob;
	int t;
	cin >> t;
	while(t--){
	    int n, m;
	    cin >> n >> m;
	    int a[n];
	    for(int i = 0; i < n; ++i){
	        cin >> a[i];
	    }
	    cout << ob.sisterCoin(a, n, m) << endl;
	    
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends