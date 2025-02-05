//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++
class Solution {
  public:
    // Function to count the number of palindromic substrings in the string 's'
    int numberOfPalindromicSubstrings(string s) {
        int count = 0;  // To keep track of the number of palindromic substrings
        int n = s.size();  // Length of the string

        // Lambda function to expand around the center and count palindromic substrings
        auto expandAroundCenter = [&](int left, int right) {
            // Expand as long as the characters at 'left' and 'right' are equal
            // and the indices are within bounds
            while (left >= 0 && right < n && s[left] == s[right]) {
                count++;  // Found a palindrome, so increment the count
                left--;    // Expand to the left
                right++;   // Expand to the right
            }
        };
        
        // Iterate through each character in the string
        for (int i = 0; i < n; i++) {
            // Check for palindromes of odd length (center is at i)
            expandAroundCenter(i, i);
            // Check for palindromes of even length (center is between i and i+1)
            expandAroundCenter(i, i + 1);
        }

        return count;  // Return the total number of palindromic substrings
    }
};



//{ Driver Code Starts.

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string s;
        cin >> s;
        Solution obj;
        cout << obj.numberOfPalindromicSubstrings(s) << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends