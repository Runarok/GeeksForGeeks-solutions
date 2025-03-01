//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find the next binary number
    string binaryNextNumber(string binaryString) {
        int carry = 0;  // To track if a carry is generated during the operation
        for (int i = binaryString.size() - 1; i >= 0; i--) {
            // If we find a '0', we change it to '1' and break the loop
            if (binaryString[i] == '0') {
                binaryString[i] = '1';
                carry++;
                break;
            } else {
                // If we find a '1', we change it to '0' and continue
                binaryString[i] = '0';
            }
        }

        // If no carry was generated, prepend '1' to the binary string
        if (carry == 0) {
            binaryString.insert(binaryString.begin(), '1');
        }

        // Remove leading zeros
        while (!binaryString.empty() && binaryString[0] == '0') {
            binaryString.erase(binaryString.begin());
        }

        // If the string becomes empty, return "0"
        return binaryString.empty() ? "0" : binaryString;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string s;
        cin >> s;
        Solution ob;
        cout << ob.binaryNextNumber(s);
        cout << "\n";
    
cout << "~" << "\n";
}

    return 0;
}
// } Driver Code Ends