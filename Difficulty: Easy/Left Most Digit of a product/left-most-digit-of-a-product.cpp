//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    int LeftMostDigit(vector<int> nums) {
        double log_val = 0;
        
        // Loop through all numbers in the array
        for (auto x : nums) {
            // If there's a zero in the list, return 0 immediately
            if (x == 0) return 0;
            
            // Add the logarithm of each number to get the total logarithmic value
            log_val += log10(x);
        }
        
        // Calculate the fractional part of the logarithmic value (log_val - floor(log_val))
        double log_floor = log_val - floor(log_val);
        
        // Find the first digit by taking 10 raised to the fractional part of the log value
        double ans = pow(10, log_floor);
        
        // Return the first digit (as an integer)
        return (int)ans;
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		vector<int>nums(n);
		for(int i = 0; i < n; i++)cin >> nums[i];
		Solution ob;
		int ans = ob.LeftMostDigit(nums);
		cout << ans << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends