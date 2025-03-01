//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;



// } Driver Code Ends

class Solution{
public:		

    /**
     * Function to sort a subarray of the given array between indices l and r.
     * @param arr: The array to be partially sorted.
     * @param n: The size of the array.
     * @param l: The starting index of the subarray to be sorted.
     * @param r: The ending index of the subarray to be sorted.
     */
    void partSort(vector<int> &arr, int n, int l, int r)
    {
        // Check if the indices are within bounds of the array.
        if (l < n && r < n) {
            // If l is less than r, sort the subarray from l to r.
            if (l < r) {
                sort(arr.begin() + l, arr.begin() + r + 1);
            }
            // Otherwise, sort the subarray from r to l.
            else {
                sort(arr.begin() + r, arr.begin() + l + 1);
            }
        }
    }
};


//{ Driver Code Starts.


int main() 
{
   	ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   	int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;

        vector<int> arr(n);
        for(int i = 0; i < n; i++)
        	cin >> arr[i];

        int l, r;
        cin >> l >> r;

        Solution ob;

        ob.partSort(arr, n, l, r);

        for(int i = 0; i < n; i++)
        	cout << arr[i] << " ";

        cout << "\n";
    
cout << "~" << "\n";
}

    return 0;
}
// } Driver Code Ends