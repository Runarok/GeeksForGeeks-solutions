//{ Driver Code Starts
/* Driver program to test above function */

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int findMaxValue(vector<vector<int>>& mat, int n) {
        // Declaring a matrix to store maximum values from the bottom-right
        vector<vector<int>> maxmat(n, vector<int>(n));

        // Initializing the last element of maxmat with the last element of mat
        maxmat[n - 1][n - 1] = mat[n - 1][n - 1];

        // Filling the last row of maxmat
        for (int j = n - 2; j >= 0; j--) {
            maxmat[n - 1][j] = max(maxmat[n - 1][j + 1], mat[n - 1][j]);
        }

        // Filling the last column of maxmat
        for (int i = n - 2; i >= 0; i--) {
            maxmat[i][n - 1] = max(maxmat[i + 1][n - 1], mat[i][n - 1]);
        }

        // Filling up the remaining cells in maxmat
        for (int i = n - 2; i >= 0; i--) {
            for (int j = n - 2; j >= 0; j--) {
                maxmat[i][j] = max({maxmat[i + 1][j], maxmat[i][j + 1], mat[i][j]});
            }
        }

        int ans = INT_MIN;

        // Finding the maximum difference between maxmat[i+1][j+1] and mat[i][j]
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1; j++) {
                ans = max(ans, maxmat[i + 1][j + 1] - mat[i][j]);
            }
        }

        return ans;
    }
};


//{ Driver Code Starts.
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin >> n;
	    vector<vector<int>>mat(n,vector<int>(n, 0));
	    for(int i = 0; i < n; i++){
	        for(int j = 0; j < n; j++){
	            cin >> mat[i][j];
	        }
	    }
	    Solution ob;
	    int ans = ob.findMaxValue(mat, n);
	    cout << ans <<endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends