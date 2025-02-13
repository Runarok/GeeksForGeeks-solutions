//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int TotalPairs(std::vector<int> nums, int k) {
        std::unordered_map<int, int> isPresentMap;
        std::set<std::pair<int, int>> setOfPairs;

        // Iterate through the array to find valid pairs
        for (int i = 0; i < nums.size(); i++) {
            if (isPresentMap.find(nums[i] + k) != isPresentMap.end()) {
                setOfPairs.insert({nums[i], nums[i] + k});
            }
            if (isPresentMap.find(nums[i] - k) != isPresentMap.end()) {
                setOfPairs.insert({nums[i] - k, nums[i]});
            }
            isPresentMap[nums[i]]++; // Mark the number as seen
        }

        return setOfPairs.size();
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
		for(int i = 0; i < n; i++)
			cin >> nums[i];
		Solution ob;
		int ans = ob.TotalPairs(nums, k);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends