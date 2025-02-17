//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

set<int> setInsert(int arr[],int n); //Function to insert elements of array into a set and return a set


void setDisplay(set<int>s); //function to print the elements of the set


void setErase(set<int>&s,int x); //function to erase x from set if it exists


// } Driver Code Ends

// User function Template for C++

// Function to insert elements of the array into a set
set<int> setInsert(int arr[], int n) {
    set<int> s;
    
    // Insert each element from the array into the set
    for (int i = 0; i < n; i++) {
        s.insert(arr[i]);
    }
    return s;
}

// Function to display elements of the set
void setDisplay(set<int> s) {
    // Display each element in the set
    for (auto ele : s) {
        cout << ele << " ";
    }
    cout << endl;
}

// Function to erase an element from the set
void setErase(set<int>& s, int x) {
    // Check if the element exists in the set
    if (s.find(x) != s.end()) {
        // If the element is found, erase it
        s.erase(x);
        cout << "erased " << x;
    } else {
        // If the element is not found, print a message
        cout << "not found";
    }
    
    // Print a newline after the operation
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
        int arr[n]; //array of size n
        for(int i=0;i<n;i++)
            cin>>arr[i]; //Input the array
        
        set<int>s=setInsert(arr,n); //call the insert function that returns a set
        setDisplay(s);// display the inserted set
        int x;
        cin>>x; //x element that needs to be erased from set
        
        setErase(s,x); //try to erase x from set
        setDisplay(s); //print the set after erase operation
        
        
    
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends