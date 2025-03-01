//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

struct Rectangle
{
    int length;
    int breadth;
    Rectangle(){}
    Rectangle(int l,int b)
    {
        length=l;
        breadth=b;
    }
    
};
int area(Rectangle r);
void maxArea(Rectangle arr[],int n);


// } Driver Code Ends

// User function Template for C++

// Function to calculate area of a rectangle
int area(Rectangle r)
{
    // Return product of length and breadth
    return r.length * r.breadth;
}

// Function to find and print the maximum area among all rectangles in the array
void maxArea(Rectangle arr[], int n)
{
    int maxArea = 0;  // Variable to store maximum area found

    // Iterate over all rectangles
    for (int i = 0; i < n; i++) {
        // Calculate area of current rectangle
        int currentArea = area(arr[i]);
        // Update maxArea if current area is greater
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }
    }
    
    // Output the maximum area found
    cout << maxArea << endl;
}



//{ Driver Code Starts.

int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin>>n;//Number of rectangle objects
	    Rectangle arr[n]; //array of rectangle objects
	    for(int i=0;i<n;i++)
	    {
	        int l,b;
	        cin>>l>>b; //length and breadth of a object
	        Rectangle r(l,b); //creating a object r
	        arr[i]=r; //fill the array
	    }
	    maxArea(arr,n); //function to calculate maxArea
	
cout << "~" << "\n";
}
	return 0;
}


// } Driver Code Ends