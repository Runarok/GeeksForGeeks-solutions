//{ Driver Code Starts

// } Driver Code Ends

#include <iostream>
#include <typeinfo>
using namespace std;

int main() {
    int a = 3;
    float b = 5.57;

    // Calculate type information for variables 'a' and 'b' and store them in 'id1' and 'id2'
    string id1 = typeid(a).name();
    string id2 = typeid(b).name();

    // Output the type identifiers
    cout << id1 << " " << id2 << endl;

    return 0;
}


//{ Driver Code Starts.
// } Driver Code Ends