//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Function to solve the Josephus problem
int josephus(int numPeople, int stepSize) {
    // Create a list of people numbered from 1 to numPeople
    list<int> people;
    for (int i = 1; i <= numPeople; ++i) {
        people.push_back(i);
    }

    // Iterator to track the current person in the list
    auto currentPerson = people.begin();

    // Keep eliminating people until only one remains
    while (people.size() > 1) { 
        // Move the iterator stepSize - 1 times to find the k-th person
        for (int i = 0; i < stepSize - 1; ++i) {
            ++currentPerson;
            // If we reach the end of the list, loop back to the beginning
            if (currentPerson == people.end()) {
                currentPerson = people.begin(); 
            }
        }

        // Remove the k-th person from the list
        currentPerson = people.erase(currentPerson);

        // If we reach the end of the list after deletion, reset the iterator to the beginning
        if (currentPerson == people.end()) {
            currentPerson = people.begin();
        }
    }

    // Return the last remaining person
    return people.front();
}



//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;

    while (t-- > 0) {
        int n, k;
        cin >> n >> k;

        cout << josephus(n, k) << "\n";

        cout << "~"
             << "\n";
    }

    return 0;
}
// } Driver Code Ends