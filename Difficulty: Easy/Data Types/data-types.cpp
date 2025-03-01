//{ Driver Code Starts

// } Driver Code Ends

#include <iostream>
#include <typeinfo>
using namespace std;

int main() {
    int a;
    float b;
    double c;
    long long d;
    
    // declare the variables here

    // variables declaration checking
    if ((typeid(a) == typeid(int)) && (typeid(b) == typeid(float)) && 
        (typeid(c) == typeid(double)) && (typeid(d) == typeid(long long))) {
        cout << "verified\n";
    }

    return 0;
}


//{ Driver Code Starts.
// } Driver Code Ends