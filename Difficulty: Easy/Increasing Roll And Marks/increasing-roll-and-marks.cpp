//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//User function Template for C++

vector<pair<int,pair<int,int>>> increasing_List(vector<pair<int,pair<int,int>>>v)
{
    // Sort the vector of pairs in increasing order
    sort(v.begin(), v.end());
    
    // Return the sorted vector
    return v;
}



//{ Driver Code Starts.


int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    
	    int n;
	    cin>>n;
	    vector<pair<int,pair<int,int>>>v;
	    
	    for(int i=0;i<n;i++)
	    {
	        int k;
	        cin>>k;
	        v.push_back({k,{0,0}});
	    }
	    for(int i=0;i<n;i++)
	    {
	        int k;
	        cin>>k;
	        v[i].second.first=k;
	    }
	    for(int i=0;i<n;i++)
	    {
	        int k;
	        cin>>k;
	        v[i].second.second=k;
	    }
	    vector<pair<int,pair<int,int>>>result;
	    
	    result=increasing_List(v);
	    
	    for(auto i:result)
	    {
	        cout<<i.first<<" ";
	    }
	    cout<<endl;
	    for(auto i:result)
	    {
	        cout<<i.second.first<<" ";
	    }
	    cout<<endl;
	    for(auto i:result)
	    {
	        cout<<i.second.second<<" ";
	    }
	    cout<<endl;
	    
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends