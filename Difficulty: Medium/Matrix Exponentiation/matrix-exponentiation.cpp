//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to multiply two 2x2 matrices
    vector<vector<long long>> mul(vector<vector<long long>>& matrix, vector<vector<long long>>& base) {
        vector<vector<long long>> res(2, vector<long long>(2, 0));  // Resultant matrix initialization
        long long mod = 1e9 + 7;  // Modulo value to avoid overflow
        
        // Iterate through the matrix rows and columns for multiplication
        for (int k = 0; k < 2; k++) {
            for (int i = 0; i < matrix.size(); i++) {
                long long cnt = 0;  // Temporary variable to store intermediate sum for cell (k, i)
                for (int j = 0; j < base.size(); j++) {
                    // Apply matrix multiplication formula: res[k][i] = sum(matrix[k][j] * base[j][i])
                    cnt = (cnt + matrix[k][j] * base[j][i]) % mod;
                }
                res[k][i] = cnt;  // Store the result in the appropriate position in the resultant matrix
            }
        }
        return res;  // Return the resultant matrix after multiplication
    }

    // Function to find the nth Fibonacci number using matrix exponentiation
    int FindNthTerm(long long int n) {
        // Base matrix representing the first Fibonacci numbers F(0) and F(1)
        vector<vector<long long>> base = {{1, 0}, {1, 0}};   
        
        // Matrix that defines the transformation for Fibonacci sequence: F(n) = F(n-1) + F(n-2)
        vector<vector<long long>> matrix = {{1, 1}, {1, 0}}; 
        
        // Use fast exponentiation (exponentiation by squaring) to raise the matrix to the power of n
        while (n) {
            if (n & 1) {  // If n is odd, multiply the base matrix with the current matrix
                base = mul(matrix, base);  // Multiply matrix and base matrix
            }
            matrix = mul(matrix, matrix);  // Square the matrix for the next iteration
            n >>= 1;  // Right shift n by 1 (essentially dividing n by 2)
        }
        
        // Return the nth Fibonacci number from the matrix result (base[1][0] holds the result)
        return base[1][0];  
    }
};
//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		long long int n;
		cin >> n;
		Solution obj;
		int ans = obj.FindNthTerm(n);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends