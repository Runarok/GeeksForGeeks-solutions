//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


// User function Template for C++

class Solution {
    public:
    
    // Function to calculate the number of times 'n' can be divided by 'k' before it becomes zero.
    int getPower(int n, int k) {
        int steps = 0;
        
        // Keep dividing 'n' by 'k' until it becomes zero.
        while (true) {
            steps++;
            n /= k;
            if (n == 0) {
                return steps;
            }
        }
        
        // This part of the code is unreachable, but if needed:
        int power = k;
        while (n > power) {
            steps++;
            power *= k;
        }
        
        return steps + 1;
    }

    string Play(vector<int> nums, int k) {
        // Variable to store the total sum of steps.
        int totalSteps = 0;
        
        // Iterate over each number in the array.
        for (int i = 0; i < nums.size(); i++) {
            totalSteps += getPower(nums[i], k);
        }
        
        // If the sum is odd, Akash wins; otherwise, Friend wins.
        return (totalSteps % 2) ? "Akash" : "Friend";
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, k;
		cin >> n >> k;
		vector<int>nums(n);
		for(int i = 0; i < n; i++)cin >> nums[i];
		Solution ob;
		string ans = ob.Play(nums, k);
		cout << ans << "\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends