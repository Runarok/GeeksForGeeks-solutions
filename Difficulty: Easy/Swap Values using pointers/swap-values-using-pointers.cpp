//{ Driver Code Starts
// Initial Template for C++

#include <iostream>
using namespace std;

// Function prototype
void swap(int*, int*);
void swap(int&, int&);


// } Driver Code Ends

// User function Template for C++

// Function to swap the values of a and b using pointers
void swap(int *a, int *b) {
    // Store the value of a in a temporary variable
    int temp = *a;
    
    // Assign the value of b to a
    *a = *b;
    
    // Assign the value of temp (original value of a) to b
    *b = temp;
}



//{ Driver Code Starts.

// Driver code
int main() {

    int testcase;
    cin >> testcase;

    while (testcase--) {
        int A, B;
        cin >> A >> B;

        // Swap by pointers
        swap(&A, &B);

        cout << A << " " << B << endl;
    }

    return 0;
}
// } Driver Code Ends