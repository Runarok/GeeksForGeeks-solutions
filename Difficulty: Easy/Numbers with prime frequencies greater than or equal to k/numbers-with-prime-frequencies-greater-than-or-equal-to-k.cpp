//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  private:
    // Function to check if a number is prime
    bool isPrime(int num){
        int cnt=0;
        
        // If number is less than or equal to 1, it's not prime
        if(num <= 1) return false;
        
        // If number is 2 or 3, they are prime
        else if(num <= 3) return true;
        
        // Eliminate numbers divisible by 2 or 3
        if (num % 2 == 0 || num % 3 == 0) return false;
        
        // Check divisibility from 5 to sqrt(num), skipping even numbers
        for(int i = 5; i * i <= num; i = i + 6){
            if(num % i == 0) return false;  // If divisible by i, it's not prime
        }
        
        return true;  // Number is prime
    }

  public:
    // Function to find numbers with prime occurrences
    vector<int> primeOccurences(vector<int>& arr, int k) {
        unordered_map<int, int> mpp;  // Map to store frequency of each element
        
        // Count frequency of each element in the array
        for(auto x : arr){
            mpp[x]++;
        }

        vector<int> res;  // Vector to store the result
        
        // Iterate through the frequency map
        for(auto y : mpp){
            // Check if frequency is prime and greater than or equal to 'k'
            if(isPrime(y.second) && y.second >= k){
                res.push_back(y.first);  // Add the number to result
            }
        }

        // Sort the result vector before returning
        sort(res.begin(), res.end());
        
        return res;  // Return the result
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore(); // Ignore the newline character after t
    while (t--) {
        vector<int> arr;
        int k;
        string input;

        getline(cin, input); // Read the entire line for the array elements
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }

        cin >> k;
        cin.ignore(); // Ignore the newline character after k

        Solution ob;
        vector<int> result = ob.primeOccurences(arr, k);
        for (int num : result) {
            cout << num << " ";
        }
        cout << "\n~\n";
    }
    return 0;
}

// } Driver Code Ends