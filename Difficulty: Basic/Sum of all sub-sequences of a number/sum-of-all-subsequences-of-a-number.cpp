//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution{
public:	

    // Function to calculate the sum of all subsequences of the binary string.
    int subsequenceSum(string s) 
    {
        int sum = 0;  // Initialize sum to 0.
        int n = s.size();  // Get the size of the string.
        int p = pow(2, n - 1);  // Calculate the base multiplier for each bit.

        // Iterate through the string
        for (int i = 0; i < n; i++) {
            // Calculate the sum by adding the contribution of each digit, scaled by the power of 2
            sum += p * (s[i] - '0');
        }
        return sum;  // Return the computed sum.
    }
};


//{ Driver Code Starts.



int main() 
{
   	

   	ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   	int t;
   	cin >> t;
   	while(t--)
   	{
   		string s;
   		cin >> s;

   		Solution ob;

   		cout << ob.subsequenceSum(s) << "\n";
   	
cout << "~" << "\n";
}

    return 0;
}
// } Driver Code Ends