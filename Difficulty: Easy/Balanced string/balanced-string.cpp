//{ Driver Code Starts
// Initial template for c++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function template for C++

class Solution {
public:
    string BalancedString(int n) {
        // Define the lowercase English alphabet
        string alphabet = "abcdefghijklmnopqrstuvwxyz";
        
        // Vector to store how many full/partial alphabets we need
        vector<int> parts;
        
        // Resultant string to store the final balanced string
        string result = "";
        
        // Store the original value of 'n' to calculate digit sum later
        int originalN = n;
        
        // Break 'n' into parts of 26 (full alphabet) and remainder
        while (n > 0) {
            if (n >= 26) {
                parts.push_back(26);
                n -= 26;
            } else {
                parts.push_back(n);
                n = 0;
            }
        }
        
        // Process each part (either full alphabet or a smaller segment)
        for (int i = 0; i < parts.size(); i++) {
            if (parts[i] == 26) {
                // If the part is exactly 26, add the full alphabet to result
                result += alphabet;
            } else {
                int half;
                if (parts[i] % 2 == 0) {
                    // Even length - split equally from both ends of alphabet
                    half = parts[i] / 2;
                    result += alphabet.substr(0, half);
                    result += alphabet.substr(26 - half, half);
                } else {
                    // Odd length - determine split based on sum of digits of original 'n'
                    int digitSum = 0;
                    int temp = originalN;
                    while (temp > 0) {
                        digitSum += (temp % 10);
                        temp /= 10;
                    }
                    if (digitSum % 2 == 0) {
                        // Even digit sum
                        half = (parts[i] + 1) / 2;
                        result += alphabet.substr(0, half);
                        half = (parts[i] - 1) / 2;
                        result += alphabet.substr(26 - half, half);
                    } else {
                        // Odd digit sum
                        half = (parts[i] - 1) / 2;
                        result += alphabet.substr(0, half);
                        half = (parts[i] + 1) / 2;
                        result += alphabet.substr(26 - half, half);
                    }
                }
            }
        }
        
        // Return the final balanced string
        return result;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        cin >> N;
        Solution ob;
        cout << ob.BalancedString(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends