//{ Driver Code Starts
// Initial Template for C++

#include <iostream>
using namespace std;

// Function prototype
void swap(int*, int*);
void swap(int&, int&);


// } Driver Code Ends

// User function Template for C++

// Function to swap A and B using reference
void swap(int &a, int &b) {
    // Store the value of a in a temporary variable
    int t = a;
    
    // Assign the value of b to a
    a = b;
    
    // Assign the value of the temporary variable (original value of a) to b
    b = t;
}



//{ Driver Code Starts.

// Driver code
int main() {

    int testcase;
    cin >> testcase;

    while (testcase--) {
        int A, B;
        cin >> A >> B;

        // Swapping by reference
        swap(A, B);
        cout << A << " " << B << endl;
        cout << "~"
             << "\n";
    }

    return 0;
}
// } Driver Code Ends