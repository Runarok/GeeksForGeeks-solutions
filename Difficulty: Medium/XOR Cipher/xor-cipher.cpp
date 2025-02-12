//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
public:
    // Function to decrypt the given cipher text
    string deCypher(string str) {
        int n = str.size();  // Get the length of the input string
        string ans = "";  // Initialize the result string
        
        // Add the first character directly to the result (as no change is needed)
        ans += str[0];
        
        // Loop through the string from the second character to half of the string
        for (int i = 1; i <= n / 2; i++) {
            int p = 0;
            // If the character is a digit, convert it to an integer
            // If the character is a letter (A-F), convert it to a value from 10 to 15
            if (str[i - 1] >= '0' && str[i - 1] <= '9') 
                p = str[i - 1] - '0';
            else 
                p = str[i - 1] - 'A' + 10;

            int curr = 0;
            // Convert the current character similarly
            if (str[i] >= '0' && str[i] <= '9') 
                curr = str[i] - '0';
            else 
                curr = str[i] - 'A' + 10;

            // Perform XOR operation on the two values
            int xr = p ^ curr;

            // If the result is a valid digit, add it to the result as a digit
            if (xr >= 0 && xr <= 9) 
                ans.push_back(xr + '0');
            else {
                // Otherwise, convert it back to a letter (A-F) and add to the result
                char ch = xr - 10 + 'A';
                ans.push_back(ch);
            }
        }
        return ans;  // Return the final decrypted string
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    string s;
    while (t--) {
        cin >> s;
        Solution ob;
        cout << ob.deCypher(s) << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends