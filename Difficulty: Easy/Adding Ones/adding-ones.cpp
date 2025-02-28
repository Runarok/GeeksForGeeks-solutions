//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to update the array based on the given updates
    void update(int a[], int n, int updates[], int k) {
        // Apply updates: increment the value at the index given by each update
        for (int i = 0; i < k; i++) {
            // Convert the 1-based index from updates to 0-based for array a
            a[updates[i] - 1]++;
        }

        // Compute the prefix sum to accumulate the values
        for (int i = 1; i < n; i++) {
            a[i] += a[i - 1];
        }
    }
};



//{ Driver Code Starts.
int main()
{
	int t; cin>>t;
	while(t--)
	{
		int n,k;
		cin>>n>>k;
		int a[n]={0}, updates[k]={0};
		for(int i = 0; i < k; i++)
		cin>>updates[i];
		Solution ob;
		ob.update(a, n, updates, k);
		
		for(int i = 0; i < n; i++)
		cout<<a[i]<<" ";
		
		cout<<endl;
	
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends