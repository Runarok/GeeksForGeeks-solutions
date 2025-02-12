//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;
long long int longestCommon (long long int n1, long long int n2);
int main()
{
    int t; cin >> t;
    while (t--)
    {
        long long int n1, n2; cin >> n1 >> n2;

        cout << longestCommon (n1, n2) << endl;
    
cout << "~" << "\n";
}
}

// Contributed By: Pranay Bansal

// } Driver Code Ends

#include <vector>
#include <string>
#include <cmath>
using namespace std;

// Function to convert a number into binary string
string convert(long long int N) {
    vector<int> v;
    // Convert number N to binary
    while (N > 0) {
        v.push_back(N % 2);
        N = N / 2;
    }
    
    string s;
    // Reverse the vector and convert to string
    for (int i = v.size() - 1; i >= 0; i--) {
        s = s + to_string(v[i]);
    }
    return s;
}

// Function to convert binary string back to its decimal value
long long value(string s) {
    long long ans = 0;
    int j = 0;
    // Iterate over the string and calculate the decimal value
    for (long long int i = s.size() - 1; i >= 0; i--) {
        if (s[i] == '1') {
            ans = ans + pow(2, j);
        }
        j++;
    }
    return ans;
}

// Function to find the longest common subsequence (LCS) in binary representation
long long int longestCommon(long long int N, long long int M) {
    string s1 = convert(N); // Convert N to binary string
    string s2 = convert(M); // Convert M to binary string
    
    long long int n = s1.length(); // Length of binary representation of N
    long long int m = s2.length(); // Length of binary representation of M
    
    // Create a 2D DP array to store the LCS results
    string dp[n + 1][m + 1];
    
    string final = "";
    
    // Fill the DP array based on common subsequences
    for (long long int i = 0; i <= n; i++) {
        for (long long j = 0; j <= m; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = "";
            }
            else if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
                
                // Update the final result by comparing binary strings' values
                if (final.size() == dp[i][j].size()) {
                    final = value(final) > value(dp[i][j]) ? final : dp[i][j];
                } else {
                    final = final.size() > dp[i][j].size() ? final : dp[i][j];
                }
            } else {
                dp[i][j] = "";
            }
        }
    }

    return value(final); // Return the decimal value of the longest common subsequence
}
