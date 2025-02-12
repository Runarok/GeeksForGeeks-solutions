//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to check if a number is prime
bool isPrime(int num) {
    if (num < 2) {
        return false;
    } 
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }    
    }
    return true;
}

class Solution {
  public:
    // Function to find and return a vector of elements at prime indices
    // that are also prime numbers
    vector<int> primeAtPrime(vector<int>& arr) {
        // Vector to store the result
        vector<int> res;
        
        // Iterate through the array to check for prime elements at prime indices
        for (int i = 0; i < arr.size(); i++) {
            // Check if both the index+1 and the element at the index are prime
            if (isPrime(i + 1) && isPrime(arr[i])) {
                // Add the index+1 to the result vector
                res.push_back(i + 1);   
            }
        }
        
        // Return the result vector
        return res;
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        Solution ob;
        vector<int> result = ob.primeAtPrime(arr);
        for (auto i : result) {
            cout << i << " ";
        }
        cout << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends