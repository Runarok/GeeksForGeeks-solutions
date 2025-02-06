//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
public: 
    int countOfDistinctNo(string str) {
        // Get the length of the input string
        int length = str.length();

        // Arrays to store DP results and character frequencies
        long long int dp[length + 1], charFrequency[256];

        // Auxiliary DP table for binomial coefficients
        vector<vector<int>> binomialCoeff(length + 1, vector<int>(length + 1, 0));

        // Initialize arrays with zeros
        memset(dp, 0, sizeof(dp));
        memset(charFrequency, 0, sizeof(charFrequency));

        // Modulo value to prevent overflow
        long long int mod = 1000000007;

        // Precompute binomial coefficients using Pascal's Triangle
        for (int i = 0; i <= length; i++) {
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i)
                    binomialCoeff[i][j] = 1;
                else if (j == 1)
                    binomialCoeff[i][j] = i;
                else
                    binomialCoeff[i][j] = (binomialCoeff[i - 1][j] + binomialCoeff[i - 1][j - 1]) % mod;
            }
        }

        // Base case for DP: an empty string has one way to form a number (empty set)
        dp[0] = 1;
        int zeroCount = 0;

        // Count the frequency of each character in the string
        for (int i = 0; i < length; i++) {
            if (str[i] != '0')
                charFrequency[str[i]]++;
            else
                zeroCount++;
        }

        // Process each distinct non-zero character
        for (int i = 0; i < 256; i++) {
            if (charFrequency[i] == 0)
                continue;

            int frequency = charFrequency[i];

            // Update DP table based on character frequency
            for (int k = length; k >= 0; k--) {
                for (int j = 1; j <= frequency; j++) {
                    if (k - j < 0)
                        break;
                    dp[k] = (dp[k] + (dp[k - j] * 1LL * binomialCoeff[k][k - j]) % mod) % mod;
                }
            }
        }

        // Process zeroes separately
        for (int k = length; k >= 0; k--) {
            for (int j = 1; j <= zeroCount; j++) {
                if (k - j <= 0)
                    break;
                dp[k] = (dp[k] + (dp[k - j] * 1LL * binomialCoeff[k - 1][k - j - 1]) % mod) % mod;
            }
        }

        // If there are zeros, account for the case where a number starts with a nonzero digit
        if (zeroCount)
            dp[1]++;

        // Compute the final sum of distinct numbers
        long long int result = 0;
        for (int i = 1; i <= length; i++) {
            result = (result + dp[i]) % mod;
        }

        return result;
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		string str;
		cin >> str;
		Solution obj;
		int ans = obj.countOfDistinctNo(str);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends