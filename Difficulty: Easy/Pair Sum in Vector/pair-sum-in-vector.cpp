//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

void sum(vector<pair<int,int>>v);


// } Driver Code Ends

//User function Template for C++

/*the function contains vector of pairs*/
//Complete this function to print the sum
void sum(vector<pair<int,int>> v) {
    long long sum = 0;
    // Loop through each pair in the vector and add the second element of the pair to sum
    for (auto it : v) {
        sum += it.second;
    }
    // Output the total sum
    cout << sum;
    cout << endl;
}



//{ Driver Code Starts.


int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin>>n;
	    vector<pair<int,int>>v; //Making a vector that holds pairs
	    for(int i=0;i<n;i++)
	    {
	        int x,y;
	        cin>>x>>y;
	        v.push_back(make_pair(x,y)); //Pushing a pair in the vector
	    } 
	    
	   sum(v); //The sum function
	   
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends