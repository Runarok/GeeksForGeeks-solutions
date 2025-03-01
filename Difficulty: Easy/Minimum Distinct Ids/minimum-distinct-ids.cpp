//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int distinctIds(int arr[], int n, int m) {
        // Sort the input array to group identical elements together
        sort(arr, arr + n);
        
        // Vector to store pairs of (element, frequency)
        vector<pair<int, int>> a;

        // Loop through the sorted array and count the frequency of each distinct element
        for (int i = 0; i < n; ++i) {
            // If the element is not already in the list, add it with a frequency of 1
            if (a.empty() || a.back().first != arr[i])
                a.push_back({arr[i], 1});
            // If the element already exists in the list, increment its frequency
            else {
                a.back().second++;
            }
        }

        // Sort the pairs by their frequency in ascending order
        sort(a.begin(), a.end(), [&](pair<int, int> x, pair<int, int> y) -> bool {
            return x.second < y.second;
        });

        // Process the list to determine how many distinct elements can be chosen
        for (int i = 0; i < a.size(); ++i) {
            // If the frequency of the current element is greater than m, return the count of distinct elements from here
            if (a[i].second > m) {
                return a.size() - i;
            }
            m -= a[i].second;  // Reduce m by the frequency of the current element
        }

        // If no elements can be selected, return 0
        return 0;
    }
};


//{ Driver Code Starts.
// Driver code
int main()
{
    int T;
    cin>>T;
    while(T--){
        int n;
        cin>>n;
        int arr[n];
        for(int i=0; i<n; i++)
        {
          cin>>arr[i];
        }
    
    	int m ;
    	cin >> m;
        Solution ob;
    	cout << ob.distinctIds(arr, n, m) << endl;
    
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends