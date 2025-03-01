//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to fill the array elements into a hash table
    // using Linear Probing to handle collisions.
    vector<int> linearProbing(int hashSize, int arr[], int sizeOfArray) {
        // Initialize a hash table (vector) with -1 to indicate empty slots
        vector<int> hashTable(hashSize, -1);

        // Iterate over all elements in the input array
        for(int i = 0; i < sizeOfArray; i++) {
            int key = arr[i];  // Current element to insert
            int hashIndex = key % hashSize;  // Initial index based on key modulo hash size
            int startIndex = hashIndex;  // Store the initial index to detect if we circle back

            // Use linear probing to handle collisions
            while(hashTable[hashIndex] != -1) {
                // If the current spot contains the same key, we can break early (no need to insert it again)
                if(hashTable[hashIndex] == key) break;

                // Move to the next index (linear probing)
                hashIndex = (hashIndex + 1) % hashSize;

                // If we've come back to the start index, the table is full
                if(hashIndex == startIndex) return hashTable;
            }

            // Insert the key at the found empty position
            if(hashTable[hashIndex] == -1) hashTable[hashIndex] = key;
        }

        // Return the populated hash table
        return hashTable;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int hashSize;
        cin >> hashSize;

        int sizeOfArray;
        cin >> sizeOfArray;
        int arr[sizeOfArray];

        for (int i = 0; i < sizeOfArray; i++)
            cin >> arr[i];

        vector<int> hash;
        Solution obj;
        hash = obj.linearProbing(hashSize, arr, sizeOfArray);

        for (int i = 0; i < hashSize; i++)
            cout << hash[i] << " ";

        cout << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends