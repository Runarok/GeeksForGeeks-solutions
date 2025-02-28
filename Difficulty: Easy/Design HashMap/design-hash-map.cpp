//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Back-end complete function Template for C++

class MyHashMap {
public:
    // Constructor to initialize the data structure
    MyHashMap() {
        A.resize(10001, -1); // Resizing the vector A and setting all values to -1
    }

    // Function to put the key-value pair in the hashmap
    void put(int key, int value) {
        A[key] = value; // Setting the value at index key to the given value
    }

    // Function to get the value associated with the given key
    int get(int key) {
        return A[key]; // Returning the value at index key
    }

    // Function to remove the key-value pair from the hashmap
    void remove(int key) {
        A[key] = -1; // Setting the value at index key to -1
    }

private:
    vector<int> A; // Vector to store the key-value pairs
};


//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        MyHashMap obj;
        int q;
        cin >> q;
        while (q--) {
            string s;
            cin >> s;
            if (s == "put") {
                int key, val;
                cin >> key >> val;
                obj.put(key, val);
            }
            else if ( s == "remove") {
                int key;
                cin >> key;
                obj.remove(key);
            }
            else {
                int key;
                cin >> key;
                cout << obj.get(key) << endl;
            }
        }

cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends