//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Function to print the k numbers with most occurrences

class Solution {
public:
    /**
     * Function to return the sum of frequencies of the k most frequent numbers in an array.
     * 
     * @param arr - The input array of integers.
     * @param k - The number of top frequent elements to consider.
     * @returns - The sum of frequencies of the k most frequent numbers.
     */
    int kMostFrequent(vector<int>& arr, int k) {
        // Step 1: Count the frequency of each element in the array
        unordered_map<int, int> m;
        for(int i = 0; i < arr.size(); i++) {
            m[arr[i]]++; // Increment the frequency count for each element
        }
        
        // Step 2: Create a frequency array, where index i holds elements with frequency i
        int n = arr.size(); // Maximum possible frequency is the size of the array
        vector<int> freq[n + 1]; // Array to store elements based on their frequency
        for(auto a : m) {
            freq[a.second].push_back(a.first); // Group elements by frequency
        }
        
        // Step 3: Iterate from highest frequency down to lowest to find the k most frequent numbers
        int answer = 0; // To store the sum of the frequencies
        int k_count = 0; // Counter to track how many elements we've included
        for(int i = n; i >= 0; i--) {
            // Process elements with frequency i
            while(!freq[i].empty()) {
                if(k_count >= k) return answer; // If we've selected k elements, return the result
                freq[i].pop_back(); // Remove one element from this frequency bucket
                k_count++; // Increment the count of selected elements
                answer += i; // Add the frequency (i) to the answer
            }
        }
        
        return answer; // Return the sum of the frequencies of the k most frequent numbers
    }
};




//{ Driver Code Starts.
//   Driver program to test above
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string str, line;
        getline(cin, str);

        stringstream ss(str);
        vector<int> arr, arr2;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        getline(cin, line);
        stringstream ss1(line);
        while (ss1 >> num) {
            arr2.push_back(num);
        }
        int k = arr2[0];
        Solution ob;
        cout << ob.kMostFrequent(arr, k) << endl;
        cout << "~\n";
    }

    return 0;
}

// } Driver Code Ends