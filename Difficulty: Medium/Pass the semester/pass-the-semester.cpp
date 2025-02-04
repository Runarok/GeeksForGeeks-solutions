//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

int Ispossible(vector<vector<int>> &arr, int n, int w, int p);


int main()
{
	int t;
	cin>>t;
	while(t--){
	    int n,w,p,i,j;
	    cin>>n>>w>>p;
	    
	    vector<vector<int>> arr(n);
	    
	    for(int i=0;i<n;i++){
	        int a, b;
	        cin >> a >> b;
	        arr[i].push_back(a);
	        arr[i].push_back(b);
	    }
	    
	    int ans = Ispossible(arr, n, w, p);
	    if(ans == -1){
	        cout << "NO\n";
	    }
	    else{
	        cout << "YES " << ans << endl;
	    }
	    
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends

int Ispossible(vector<vector<int>> &arr, int n, int w, int p)
{
    // DP table: each cell stores a pair of values:
    // - First value: maximum value achieved so far.
    // - Second value: corresponding weight of the selected items.
    vector<vector<pair<int, int>>> dp(n + 1, vector<pair<int, int>>(w + 1));
    
    // Initialize DP table
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j <= w; j++)
        {
            if (i == 0 || j == 0)
            {
                dp[i][j] = {0, 0};  // No items or weight results in 0 value and 0 weight
            }
            else if (arr[i - 1].front() <= j) // If item weight can fit within the remaining weight
            {
                // Option 1: Include the current item
                int option1Value = arr[i - 1].back() + dp[i - 1][j - arr[i - 1].front()].first;
                int option1Weight = dp[i - 1][j - arr[i - 1].front()].second + arr[i - 1].front();
                
                // Option 2: Exclude the current item (carry forward the previous result)
                int option2Value = dp[i - 1][j].first;
                int option2Weight = dp[i - 1][j].second;
                
                // Choose the option that gives the higher value
                if (option1Value > option2Value)
                {
                    dp[i][j] = {option1Value, option1Weight};
                }
                else
                {
                    dp[i][j] = {option2Value, option2Weight};
                }
            }
            else // Item can't fit in the remaining weight, so skip it
            {
                dp[i][j] = {dp[i - 1][j].first, dp[i - 1][j].second};
            }
        }
    }

    // Check if the maximum value is greater than or equal to the required value (p)
    if (dp[n][w].first >= p)
    {
        return dp[n][w].second;  // Return the total weight of the items selected
    }
    
    // If not possible, return -1
    return -1;
}
