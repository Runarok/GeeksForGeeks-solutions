//{ Driver Code Starts
//Initial Template for C++


#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to calculate the sum of all elements in the vector
int vAccu(vector<int> v, int n) {
    // Initialize sum variable
    int sum = 0;

    // Iterate through the vector and accumulate the sum
    for (int num : v) {
        sum += num;
    }

    // Return the final accumulated sum
    return sum;
}



//{ Driver Code Starts.



int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin>>n;
	   vector<int>v;
	   for(int i=0;i<n;i++)
	   {
	       int x;
	       cin>>x;
	       v.push_back(x);
	   }
	   
	   cout<<vAccu(v,n)<<endl;
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends