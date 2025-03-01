//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
  public:
    // Function to count the number of valid strings based on the given conditions
    int countStrings(int n, int k)
    {   
        // Define the modulus value to prevent overflow
        int e = pow(10, 9) + 7;
        
        // Create a 3D array to store intermediate results
        int a[n + 1][k + 1][2];
        
        // Initialize the array with 0
        memset(a, 0, sizeof(a));
        
        // Base case: for a string of length 1, we can have both 0 and 1 as valid
        a[1][0][0] = 1;
        a[1][0][1] = 1;
        
        // Loop through the lengths of the strings (2 to n)
        for (int i = 2; i <= n; i++) {
            // Loop through possible counts of 1s (0 to k)
            for (int j = 0; j <= k; j++) {
                // If the last character is 0, the number of valid strings is the same as the previous string length with j 1s
                a[i][j][1] = a[i - 1][j][0];
                
                // If we can subtract 1 from the count of 1s, add the value for strings with j-1 1s where the last character is 1
                if (j - 1 >= 0) {
                    a[i][j][1] += a[i - 1][j - 1][1];
                }
                
                // Take the result modulo e to avoid overflow
                a[i][j][1] %= e;
                
                // If the last character is 0, consider all previous strings (both with 0 and 1 at the end)
                a[i][j][0] = (a[i - 1][j][0] + a[i - 1][j][1]) % e;
            }
        }
        
        // Return the total number of valid strings with n length and k 1s, modulo e
        return (a[n][k][0] + a[n][k][1]) % e;
    }
};



//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,k;
        cin>>n>>k;
        Solution ob;
        cout<<ob.countStrings(n,k)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends