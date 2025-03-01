//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int MinimumChocolate(vector<int>& nums) {
        int n = nums.size();  // Size of the nums array
        
        int taken = nums[0];  // Initialize the taken value with the first element
        int takeIndex = 0;    // Index of the taken element

        // Loop through the array to find the minimum chocolate to take
        for (int i = 1; i < n; ++i) {
            int el = nums[i];

            // Check if the current element is greater than the taken value
            // and if we can take it based on the condition
            if (el > taken && taken < n - i) {
                taken = el;
                takeIndex = i;
            }
        }

        // The answer is the index of the chosen chocolate, adjusted by any extra chocolates taken
        int ans = takeIndex;

        // If there are remaining chocolates, add them to the answer
        if (n - takeIndex - taken > 0) {
            ans += n - takeIndex - taken;
        }

        return ans;  // Return the final answer
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
		for(int i = 0; i < n; i++)
			cin >> nums[i];
		Solution ob;
		int ans = ob.MinimumChocolate(nums);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends