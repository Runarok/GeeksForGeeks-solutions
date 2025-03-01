//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
using namespace std;

// Function prototype
void getLineAndIgnore();


// } Driver Code Ends

// User function Template for C++

// Back-end complete function Template for C++

// Function to take input of string using getline
void getLineAndIgnore(){
    
    string a, d;
    int b;
   
    // Read the first string using getline
    getline(cin, a);
    
    // Read the integer value
    cin >> b;
    
    // Ignore the leftover newline character from the integer input
    cin.ignore();
    
    // Read the second string using getline
    getline(cin, d);
   
    // Output the values
    cout << a << endl;   // Print the first string
    cout << b << endl;   // Print the integer
    cout << d << endl;   // Print the second string
}


//{ Driver Code Starts.

// Driver Code
int main()
{
    // Number of testcase input
    int t;
    cin >> t;
    cin.ignore(); //Ignoring the newline so it isn't consumed by getline. Read about it!!
    while(t--){
        getLineAndIgnore();   
    
cout << "~" << "\n";
}
   
    return 0;
} 
// } Driver Code Ends