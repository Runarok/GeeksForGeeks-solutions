//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution{
	public:
	// Function to calculate the minimum number of transactions
	int MinimumTransaction(vector<int>nums) {
	    int n = nums.size();  // Get the number of elements in the array
	    int sum = 0, val = 0;
	    
	    // Calculate the total sum of the array elements
	    for(int i = 0; i < n; i++) {
	        sum += nums[i];
	    }
	    
	    // If the total sum is divisible by n, proceed to check the conditions
	    if(sum % n == 0) {
	        sum /= n;  // Find the average value each element should have
	        
	        // Check if the difference from the average is divisible by 3
	        for(int i = 0; i < n; i++) {
	            if(abs(sum - nums[i]) % 3 != 0) {
	                return -1;  // If not divisible by 3, return -1
	            } else {
	                // Calculate how many transactions are needed to balance this element
	                val += abs(sum - nums[i]) / 3;
	            }
	        }
	        
	        // Return half of the total number of transactions
	        return val / 2;
	    }
	    
	    // If the total sum is not divisible by n, return -1
	    return -1;
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
		int ans = ob.MinimumTransaction(nums);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends