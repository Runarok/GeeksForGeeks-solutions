//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

void iter(vector<int>::iterator it1,vector<int>::iterator it2);


// } Driver Code Ends

// User function Template for C++

// Complete this function. it1 points to vector.begin(), it2 points to vector.end()
void iter(vector<int>::iterator it1, vector<int>::iterator it2) {
    // Iterate through the vector using the given iterators and print each element
    for (auto it = it1; it != it2; ++it) {
        cout << *it << " ";
    }
    cout << endl; // Print newline after printing all elements
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
	    
	    iter(v.begin(),v.end()); //passing begin and end addresses of vector to the function
	   
	
cout << "~" << "\n";
}
	return 0;
}


// } Driver Code Ends