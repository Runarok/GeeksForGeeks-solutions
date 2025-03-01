//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to calculate the minimum number of exchanges needed to make the matrix follow the required pattern
    int MinimumExchange(vector<vector<char>> matrix) {
        // Get the number of rows and columns in the matrix
        int n = matrix.size();
        int m = matrix[0].size();
        
        // Variable to count the number of incorrect characters in positions that should follow a specific pattern
        int a = 0;
        
        // Loop through the matrix to check each position
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // Check positions where the sum of row and column indices is even
                if ((i + j) % 2 == 0 && matrix[i][j] != 'A') {
                    a++;  // Increment if the character is not 'A' where it should be
                }
                // Check positions where the sum of row and column indices is odd
                if ((i + j) % 2 == 1 && matrix[i][j] != 'B') {
                    a++;  // Increment if the character is not 'B' where it should be
                }
            }
        }
        
        // Calculate the number of incorrect characters for the opposite pattern
        int b = (n * m) - a;
        
        // Check for odd counts and return the minimum number of exchanges needed
        if (a & 1) return b / 2;  // If 'a' is odd, return half of 'b'
        if (b & 1) return a / 2;  // If 'b' is odd, return half of 'a'
        
        // Otherwise, return the minimum number of exchanges needed between 'a' and 'b'
        return min(a / 2, b / 2);
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, m;
		cin >> n >> m;
		vector<vector<char>>matrix(n, vector<char>(m,'x'));
		for(int i = 0; i < n; i++){
			for(int j = 0; j < m; j++)
				cin >> matrix[i][j];
		}
		Solution obj;
		int ans = obj.MinimumExchange(matrix);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends