//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    long double convertToDecimal(std::string binaryString) {
        // Variable to store the decimal equivalent
        long double decimalValue = 0;

        // Find the position of the decimal point (if any)
        size_t decimalPointIndex = binaryString.find(".");

        // If a decimal point exists, process both integer and fractional parts
        if (decimalPointIndex != std::string::npos) {
            // Convert the integer part (before the decimal point)
            for (int i = 0; i < decimalPointIndex; i++) {
                if (binaryString[decimalPointIndex - 1 - i] == '1') {
                    decimalValue += std::pow(2, i);
                }
            }

            // Convert the fractional part (after the decimal point)
            int power = 1;
            for (size_t i = decimalPointIndex + 1; i < binaryString.length(); i++) {
                if (binaryString[i] == '1') {
                    decimalValue += (1.0 / std::pow(2, power));
                }
                power++;
            }
        } 
        // If no decimal point, process the entire string as an integer
        else {
            for (size_t i = 0; i < binaryString.length(); i++) {
                if (binaryString[binaryString.length() - 1 - i] == '1') {
                    decimalValue += std::pow(2, i);
                }
            }
        }

        return decimalValue;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string n;
        
        cin>>n;

        Solution ob;
        cout << std::setprecision(100) << ob.convertToDecimal(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends