//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {

    // Function to check if the given value of k is feasible or not.
    bool fun(vector<int>&a, int k){
        
        double x = 1, one = 1;
        
        // Iterating through the array to calculate 'x' using the given formula.
        for(int z : a){
            x = (x * k) / z;
        }
        
        // Checking if x is greater than or equal to 1, and returning the result.
        return x >= one;
    }
    
public:

    // Function to find the value of k such that the given condition is satisfied.
    int Find(vector<int>&nums){
        
        // Initializing the left (l) and right (r) pointers as the first element in the vector.
        int l = nums[0], r = nums[0];
        
        // Iterating through the vector to find the minimum and maximum element.
        for(int num : nums){
            l = min(l, num);
            r = max(r, num);
        }
        
        // Initializing the answer variable as the maximum element in the vector.
        int ans = r;
        
        // Binary search on the possible values of k.
        while(l <= r){
            int m = l + (r - l) / 2;
            
            // If the given value of k is feasible, updating the answer and searching for smaller values of k.
            if(fun(nums, m)){
                ans = m;
                r = m - 1;
            }
            // If the given value of k is not feasible, searching for larger values of k.
            else l = m + 1;
        }
        
        // Returning the answer.
        return ans;
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
		Solution obj;
		int ans = obj.Find(nums);
		cout  << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends