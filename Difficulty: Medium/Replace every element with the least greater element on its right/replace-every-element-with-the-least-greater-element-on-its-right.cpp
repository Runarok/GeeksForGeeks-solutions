//{ Driver Code Starts
/* Driver program to test above function */

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// Back-end complete function Template for C++

class Solution {
public:
    vector<int> findLeastGreater(vector<int>& arr, int n) {
        vector<int> result;
        set<int> sortedSet;
        
        // Traverse the array from right to left
        for (int i = n - 1; i >= 0; i--) {
            auto it = sortedSet.upper_bound(arr[i]); // Find the first element greater than arr[i]
            
            // If no greater element is found, store -1, otherwise store the found element
            result.push_back(it == sortedSet.end() ? -1 : *it);
            
            // Insert the current element into the set
            sortedSet.insert(arr[i]);
        }
        
        // Reverse to maintain original order
        reverse(result.begin(), result.end());
        
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
	    Solution ob;
	    vector<int> ans = ob.findLeastGreater(arr, n);
	    for(auto it : ans){
	        cout << it << " ";
	    }
	    cout <<endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends