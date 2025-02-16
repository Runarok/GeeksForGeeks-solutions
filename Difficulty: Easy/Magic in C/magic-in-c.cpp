//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
using namespace std;


// } Driver Code Ends

class Solution{
    public:
    // Function to swap A and B using pointers
    void swap(int *A, int *B){
        // Using a temporary variable to swap the values
        int temp = *A;
        *A = *B;
        *B = temp;
    }
};


//{ Driver Code Starts.

// Driver code
int main() {
	
	int testcase;
	cin >> testcase;
	
	while(testcase--){
	    int A, B;
	    cin >> A >> B;
	    Solution ob;
	    // Swap by pointers
	    ob.swap(&A, &B);
	    
	    cout << A << " " << B << endl;
	
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends