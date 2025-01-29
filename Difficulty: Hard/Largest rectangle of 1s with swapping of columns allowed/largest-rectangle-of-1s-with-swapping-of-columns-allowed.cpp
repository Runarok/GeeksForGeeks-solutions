//{ Driver Code Starts
#include<bits/stdc++.h>

using namespace std;

// } Driver Code Ends

class Solution {
public:	
	// Returns the area of the largest rectangle of 1's
	int maxArea(vector<bool> mat[], int r, int c) {
	    // Create a histogram matrix to store heights of consecutive 1's
	    vector<vector<int>> histo(r, vector<int>(c, 0));
	    
	    // Fill the histogram matrix
	    for (int j = 0; j < c; j++) {
	        histo[0][j] = mat[0][j]; // First row is same as matrix
	        for (int i = 1; i < r; i++) {
	            // If current cell is 1, add it to the previous height; else, set it to 0
	            histo[i][j] = (mat[i][j] == 0) ? 0 : histo[i - 1][j] + 1;
	        }
	    }
	    
	    // Sort each row in descending order to arrange histogram heights
	    for (int i = 0; i < r; i++) {
	        sort(histo[i].rbegin(), histo[i].rend()); // Sort in descending order
	    }
	    
	    int area = 0; // Variable to store the maximum area
	    
	    // Calculate maximum rectangular area possible for each row
	    for (int i = 0; i < r; i++) {
	        for (int j = 0; j < c; j++) {
	            // Area = height * width (width = j+1 since it's sorted)
	            area = max(area, histo[i][j] * (j + 1));
	        }
	    }
	    
	    return area; // Return the maximum area found
	}
};
//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int r, c, x;
        cin >> r >> c;
        vector<bool> mat[r];
        for (int i = 0; i < r; i++) {
            mat[i].assign(c, false);
            for (int j = 0; j < c; j++) {
                cin >> x;
                mat[i][j] = x;
            }
        }
        Solution ob;
        auto ans = ob.maxArea(mat, r, c);
        cout << ans << "\n";

    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends