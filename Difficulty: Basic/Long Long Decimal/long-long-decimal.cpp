//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    string upto_K_places(int k) {
        // If k is 0, return only the integer part of pi approximation
        if (k == 0) {
            return "3";
        }

        // Initialize string with integer part of pi approximation
        string result = "3.";

        // Compute the decimal places using the fraction 355/113
        int remainder = 355 % 113;

        for (int i = 0; i < k; i++) {
            remainder *= 10; // Multiply remainder by 10 to get the next digit
            int quotient = remainder / 113; // Extract the next decimal digit
            result += '0' + quotient; // Append digit to result
            remainder %= 113; // Update remainder
        }

        return result;
    }
};
//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int k;
		cin >> k;
		Solution ob;
		string ans = ob.upto_K_places(k);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends