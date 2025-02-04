//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
public:
    // Function to calculate the Least Common Multiple (LCM) of two numbers
    long long int lcm(long long int a, long long int b) {
        return a * (b / __gcd(a, b));  // LCM formula: a * (b / GCD(a, b))
    }

    // Function to count how many numbers from 1 to k are divisible by at least one element in the nums array
    long long int Count(vector<int> nums, long long int k) {
        long long int ans = 0;  // Initialize the answer
        int n = nums.size();  // Get the size of the input array
        int m = (1 << n);  // Total number of subsets (2^n), using bitwise shifting

        // Iterate through all subsets of the nums array
        for (int i = 0; i < m; i++) {
            long long int x = 1;  // Variable to hold the LCM of the current subset
            int cnt = 0;  // Counter to track how many elements are in the current subset
            
            // Check each bit of i to determine which elements of nums are in the current subset
            for (int j = 0; j < n; j++) {
                // If the j-th bit of i is set, include nums[j] in the subset
                if (i & (1 << j)) {
                    cnt++;  // Increment the count of elements in the current subset
                    x = lcm(x, nums[j]);  // Update the LCM of the current subset
                }
            }

            // Skip the empty subset (no elements selected)
            if (!cnt) continue;

            // Use inclusion-exclusion principle:
            // If the subset has an odd number of elements, add k / LCM of the subset
            // If the subset has an even number of elements, subtract k / LCM of the subset
            if (cnt & 1)
                ans += (k / x);  // Add for odd-sized subsets
            else
                ans -= (k / x);  // Subtract for even-sized subsets
        }

        // Return the final answer
        return ans;
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		long long int k;
		cin >> n >> k;
		vector<int>nums(n);
		for(int i = 0; i < n;i++)
			cin >> nums[i];
		Solution obj;
		long long int ans = obj.Count(nums, k);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends