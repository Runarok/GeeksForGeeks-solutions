//{ Driver Code Starts

// } Driver Code Ends

#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // Read the first term (a) and number of terms (n) from user input
    int firstTerm, numTerms;
    cin >> firstTerm >> numTerms;

    // Common ratio for geometric progression
    int commonRatio = 2;

    // Calculate the nth term of the geometric progression
    int nthTerm = firstTerm * pow(commonRatio, numTerms - 1);

    // Print the result
    cout << nthTerm << endl;

    return 0;
}


//{ Driver Code Starts.

// } Driver Code Ends