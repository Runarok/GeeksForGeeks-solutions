//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++
template <class T>
T largest(T arr[], int n) {
    // Initialize max as the first element of the array
    T max = arr[0];
    
    // Iterate through the array to find the largest element
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];  // Update max if a larger element is found
        }
    }
    
    // Return the largest element found
    return max;
}


//{ Driver Code Starts.

int main() {
    
    
    int t; cin>>t;
    while (t--) {
        int n, q, i;
	    cin>>n>>q;
	
	int intArr[n];
    float floatArr[n];
    
        switch(q)
	{
	    case 1:
	    for(i=0; i<n; i++)
	    {
	        cin>>intArr[i];
	    }
	    cout << largest(intArr, n) << endl;
    	break;
        
        case 2:
	    for(i=0; i<n; i++)
	    {
	        cin>>floatArr[i];
	    }
	    cout << largest(floatArr, n) << endl;
    	break;
	}
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends