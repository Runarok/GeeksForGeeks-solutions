//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Modulo value to prevent overflow
    int mod = 1e9 + 7;

    // Function to multiply two 2x2 matrices (a and b) under modulo
    void solve(vector<vector<long long int>>& a, vector<vector<long long int>>& b) {
        // Perform matrix multiplication (a * b) and store the result back in 'a'
        long long int p = ((a[0][0] * b[0][0]) % mod + (a[0][1] * b[1][0]) % mod) % mod;
        long long int q = ((a[0][0] * b[0][1]) % mod + (a[0][1] * b[1][1]) % mod) % mod;
        long long int r = ((a[1][0] * b[0][0]) % mod + (a[1][1] * b[1][0]) % mod) % mod;
        long long int s = ((a[1][0] * b[0][1]) % mod + (a[1][1] * b[1][1]) % mod) % mod;

        // Update the matrix 'a' with the results of multiplication
        a[0][0] = p;
        a[0][1] = q;
        a[1][0] = r;
        a[1][1] = s;
        return;
    }

    // Function to compute the matrix power of a 2x2 matrix 'a' raised to the power 'n'
    void power(vector<vector<long long int>>& a, long long int n) {
        // Base case: If n is 0 or 1, we don't need to do anything
        if (n == 1 || n == 0) return;

        // If n is even, we compute the matrix power of a^(n/2) and then square the result
        if (n % 2 == 0) {
            power(a, n / 2);  // Recursively compute a^(n/2)
            solve(a, a);      // Square the matrix a by multiplying it with itself
            return;
        }

        // If n is odd, we compute the matrix power of a^(n/2) and then multiply it by the base matrix
        power(a, n / 2);  // Recursively compute a^(n/2)
        solve(a, a);      // Square the matrix a by multiplying it with itself
        
        // Multiply the result by the base matrix {{2, 5}, {1, 0}}
        vector<vector<long long int>> curr = {{2, 5}, {1, 0}};
        solve(a, curr);  // Multiply the resulting matrix by curr
        return;
    }

    // Function to compute the nth term in the sequence
    long long int NthTerm(long long int n) {
        // Base cases: If n is 1 or 2, return 1
        if (n <= 2) return 1;

        // Define the transformation matrix (corresponding to the recurrence relation)
        vector<vector<long long int>> a = {{2, 5}, {1, 0}};

        // Compute the power of the matrix a to (n-2) using matrix exponentiation
        power(a, n - 2);

        // Return the result (top row of the matrix a) modulo mod
        return (a[0][0] + a[0][1]) % mod;
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		long long int N;
		cin >> N;
		Solution obj;
		long long int ans = obj.NthTerm(N);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends