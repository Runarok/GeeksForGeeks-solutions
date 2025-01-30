//{ Driver Code Starts
/* Driver program to test above function */

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//Back-end complete function Template for C++

#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

class Solution{
    public:
    // Function to generate all subset sums for a given array
    vector<long long> generateSubsetSums(const vector<int>& arr) {
        int n = arr.size();
        vector<long long> subsetSums;
        
        // Iterate over all possible subsets using bitmasking
        for (int mask = 0; mask < (1 << n); ++mask) {
            long long sum = 0;
            for (int i = 0; i < n; ++i) {
                if (mask & (1 << i)) {
                    sum += arr[i];
                }
            }
            subsetSums.push_back(sum);
        }
        
        return subsetSums;
    }
    
    long long int countSubsets(vector<int>& arr, int n, int l, int r) {
        // Divide the array into two halves
        int mid = n / 2;
        vector<int> leftArr(arr.begin(), arr.begin() + mid);
        vector<int> rightArr(arr.begin() + mid, arr.end());
        
        // Generate subset sums for both halves
        vector<long long> leftSums = generateSubsetSums(leftArr);
        vector<long long> rightSums = generateSubsetSums(rightArr);
        
        // Sort the right subset sums for binary search
        sort(rightSums.begin(), rightSums.end());
        
        long long result = 0;
        
        // For each subset sum in the left array, count valid pairs from the right array
        for (long long leftSum : leftSums) {
            long long lower = l - leftSum;
            long long upper = r - leftSum;
            
            // Binary search to find the range of sums from rightSums that lie between [lower, upper]
            result += upper_bound(rightSums.begin(), rightSums.end(), upper) -
                      lower_bound(rightSums.begin(), rightSums.end(), lower);
        }
        
        return result;
    }
};

//{ Driver Code Starts.
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin >> n;
	    vector<int>arr(n);
	    for(int i = 0 ; i < n; i++){
	        cin >> arr[i];
	    }
	    int l, r;
	    cin >> l >> r;
	    Solution ob;
	    long long int ans = ob.countSubsets(arr, n, l, r);
	    cout << ans<<endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends