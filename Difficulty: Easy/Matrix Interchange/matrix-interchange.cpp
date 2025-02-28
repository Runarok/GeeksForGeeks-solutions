//{ Driver Code Starts
//Initial Template for C++

#include <bits//stdc++.h>
using namespace std;

// } Driver Code Ends

// Back-end complete function Template for C++

class Solution {
    public:
    
    // Complete this function to interchange first and last column of the matrix
    void interchange(vector<vector<int>>& arr, int r, int c) {
        // Check if there are more than one column to swap
        if (c > 1) {
            // Iterate through all the rows and swap the first and last elements in each row
            for (int i = 0; i < r; i++) {
                arr[i][0] ^= arr[i][c - 1]; // XOR swap for the first column
                arr[i][c - 1] ^= arr[i][0]; // XOR swap for the last column
                arr[i][0] ^= arr[i][c - 1]; // Final XOR swap to complete the interchange
            }
        }
        
        // Print the modified matrix
        for (int i = 0; i < r; i++) { 
            for (int j = 0; j < c; j++) {
                cout << arr[i][j] << " "; // Print each element followed by a space
            }
            cout << endl; // Move to the next line after each row
        }
    }
};



//{ Driver Code Starts.
int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int r,c;
	    cin>>r>>c;
	    vector<vector<int>>arr(r,vector<int>(c));
	    for(int i=0;i<r;i++){
    	    for(int j=0;j<c;j++){
    	        int x;
    	        cin>>x;
    	        arr[i][j]=x;
    	    }
	    }
	    Solution ob;
	    ob.interchange(arr, r, c);
	
cout << "~" << "\n";
}
	return 0;
}


// } Driver Code Ends