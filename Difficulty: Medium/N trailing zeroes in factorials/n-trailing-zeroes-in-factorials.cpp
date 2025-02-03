//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to count trailing zeros in the factorial of n
    int solve(int n) {
        int count = 0;
        // Count the number of times 5 divides n! (factors of 5 contribute to trailing zeros)
        for (int i = 5; n / i >= 1; i *= 5)
            count += n / i;
        return count;  // Return the total number of trailing zeros
    }

    // Function to find the smallest number whose factorial has exactly n trailing zeros
    int countZeroes(int n) {
        int ans = 0;
        int low = 1, high = INT_MAX;
        int mid = 0;
        
        // Perform binary search to find the number whose factorial has exactly n trailing zeros
        while (low <= high) {
            mid = (low + high) / 2;  // Midpoint to check
            int temp = solve(mid);  // Count the trailing zeros in mid factorial

            if (temp == n) {  // If exactly n trailing zeros are found, store the answer and break
                ans = mid;
                break;
            } else if (temp < n) {  // If fewer than n trailing zeros, search in the right half
                low = mid + 1;
            } else {  // If more than n trailing zeros, search in the left half
                high = mid - 1;
            }
        }
        
        // If no such number is found, return 0; otherwise, return 5 as a placeholder
        if (ans == 0)
            return 0;
        else
            return 5;
    }
};

//{ Driver Code Starts.
// Driver code
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
    	 int n;
    	 cin>>n;
    	 Solution obj;
    	 cout << obj.countZeroes(n);
    	 cout <<endl;
	
cout << "~" << "\n";
}
	return 0;
}


// } Driver Code Ends