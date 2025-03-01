//{ Driver Code Starts

// } Driver Code Ends

#include <iomanip>
#include <iostream>
using namespace std;

int main() {
    double numerator; // Variable to store the numerator input
    double denominator; // Variable to store the denominator input
    
    // Taking input for the numerator and denominator
    cin >> numerator;
    cin >> denominator;
    
    // Calculate the result of the division
    double result = numerator / denominator;
    
    // Output the result with 3 decimal places
    cout << fixed << setprecision(3) << result << endl;
    
    return 0; // Return 0 to indicate successful completion
}


//{ Driver Code Starts.
// } Driver Code Ends