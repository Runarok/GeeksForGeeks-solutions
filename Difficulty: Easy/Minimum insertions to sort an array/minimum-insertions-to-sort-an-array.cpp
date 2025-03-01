//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to find the minimum number of insertions to make the array sorted
    int minInsertions(int arr[], int N) { 
        vector<int> lis; // Vector to store the longest increasing subsequence (LIS)

        // Iterate through the array to build the LIS
        for (int i = 0; i < N; ++i) {
            int low = 0, high = lis.size() - 1, pos = -1;

            // Perform binary search to find the position to insert or replace an element
            while (low <= high) {
                int mid = low + (high - low) / 2;
                if (lis[mid] > arr[i]) {
                    pos = mid;  // Track the position where we might replace the element
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }

            // If no valid position was found, add the element to LIS
            if (pos == -1) {
                lis.push_back(arr[i]);
            } else {
                lis[pos] = arr[i];  // Replace the element at the found position
            }
        }

        // Return the difference between the array size and the length of LIS
        return N - lis.size(); 
    }
};


//{ Driver Code Starts.

int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;

        int arr[n];
        for(int i = 0; i < n; i++)
        	cin >> arr[i];

	   

	    Solution ob;
	    cout << ob.minInsertions(arr, n) << "\n";
	     
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends