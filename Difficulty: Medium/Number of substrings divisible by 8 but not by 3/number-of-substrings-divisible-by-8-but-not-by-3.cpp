//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{

	public:
	// Returns count of substrings divisible by 8
	// but not by 3.
	long long countDivisibleSubstring(string str)
	{
		int len = str.size();

	    long long cur = 0, dig = 0;
	    long long sum[len+1], dp[len+1][3];
	 
	    memset(sum, 0, sizeof(sum));
	    memset(dp, 0, sizeof(dp));
	 
	    dp[0][0] = 1;  // Base case: there is one way to have a sum of digits modulo 3 equals 0

	    // Iterating through the string to calculate prefix sums
	    for (int i = 1; i <= len; i++)
	    {
	        dig = int(str[i-1]) - 48;  // Convert character to integer digit
	        cur += dig;
	        cur %= 3;  // Store the sum modulo 3
	 
	        sum[i] = cur;
	 
	        // Prefix sum of number of substrings whose
	        // sum of digits modulo 3 is 0, 1, 2.
	        dp[i][0] = dp[i-1][0];
	        dp[i][1] = dp[i-1][1];
	        dp[i][2] = dp[i-1][2];
	 
	        dp[i][sum[i]]++;  // Update the count for current sum modulo 3
	    }
	 
	    long long ans = 0, dprev = 0, value = 0, dprev2 = 0;
	 
	    // Iterate through the string to check divisibility by 8 and not by 3
	    for (int i = 1; i <= len; i++)
	    {
	        dig = int(str[i-1]) - 48;  // Current digit (single character to integer)
	 
	        // Single digit 8 is divisible by 8 and not by 3
	        if (dig == 8)
	            ans++;
	 
	        // Check two-digit number
	        if (i-2 >= 0)
	        {
	            dprev = int(str[i-2]) - 48;  // 10th position digit
	            value = dprev * 10 + dig;    // Form 2-digit number
	 
	            if ((value % 8 == 0) && (value % 3 != 0))
	                ans++;  // Increment answer if divisible by 8 but not 3
	        }
	 
	        // Check three-digit number
	        if (i-3 >= 0)
	        {
	            dprev2 = int(str[i-3]) - 48;  // 100th position digit
	            dprev  = int(str[i-2]) - 48;  // 10th position digit
	 
	            value = dprev2 * 100 + dprev * 10 + dig;  // Form 3-digit number
	 
	            if (value % 8 != 0)
	                continue;  // Skip if not divisible by 8
	 
	            // If the number is divisible by 8, all substrings ending at this index are also divisible by 8
	            // But we remove those that are divisible by 3
	            ans += (i - 2);
	            ans -= (dp[i-3][sum[i]]);  // Subtract those divisible by 3
	        }
	    }
	 
	    return ans;  // Return the final count of valid substrings
	}
};

	 

//{ Driver Code Starts.

int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
       	string str;
       	cin >> str;

       

        Solution ob;
        cout << ob.countDivisibleSubstring(str);
	    cout << "\n";
	     
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends