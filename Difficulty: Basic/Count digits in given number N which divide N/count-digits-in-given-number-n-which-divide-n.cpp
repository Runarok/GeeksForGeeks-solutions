//{ Driver Code Starts
// Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function template for C++

class Solution {
public:
    int divisibleByDigits(string s) {
        // Array to store remainders when divided by digits 1-9
        int remainders[10] = {0}, frequency[10] = {0};

        // Iterate over each character in the string
        for (const char c : s) {
            int digit = c - '0';
            
            // Compute remainders for digits 2 to 9
            for (int i = 2; i < 10; ++i) {
                remainders[i] = (remainders[i] * 10 + digit) % i;
            }
            
            // Count occurrences of each digit
            ++frequency[digit];
        }

        // Count how many digits 1-9 completely divide the number
        for (int i = 1; i < 10; ++i) {
            if (remainders[i] == 0) {
                remainders[0] += frequency[i];
            }
        }
        
        return remainders[0];
    }
};
//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;
        Solution ob;
        cout << ob.divisibleByDigits(S) << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends