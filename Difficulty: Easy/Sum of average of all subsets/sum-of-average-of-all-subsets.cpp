//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
    public:

    // Function to calculate the binomial coefficient C(n, k)
    int binomialCoeff(int n, int k)
    {
        int res = 1;

        // Since C(n, k) = C(n, n-k), choose the smaller k for efficiency
        if (k > n - k)
            k = n - k;

        // Calculate value of [n * (n-1) * ... * (n-k+1)] / [k * (k-1) * ... * 1]
        for (int i = 0; i < k; i++)
        {
            res *= (n - i);
            res /= (i + 1);
        }

        return res;
    }

    // Function to calculate the average of all subsets' sums
    double AverageOfAllSubsets(vector<int> nums)
    {
        int N = nums.size();
        double result = 0.0;
        int sum = 0;

        // Calculate the sum of all elements in the nums array
        for (int i = 0; i < N; i++) 
        {
            sum += nums[i];
        }

        // Iterate over all possible subset sizes
        for (int n = 1; n <= N; n++) 
        {
            // Add contribution of each subset size's sum to the result
            result += (double)(sum * binomialCoeff(N - 1, n - 1)) / n;
        }

        return result;
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
		double ans = ob.AverageOfAllSubsets(nums);
		cout << fixed << setprecision(6) << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends