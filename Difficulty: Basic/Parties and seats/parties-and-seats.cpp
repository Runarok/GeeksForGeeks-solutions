//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

/* 
Print the name of the parties along with the seats 
they received in the election and print the maximum seat
received by any party.
*/

void Election2019(vector<char>& party, vector<int>& seats) {
    // Create a map to store the seat count for each party
    std::map<char, int> result;
    int maxSeats = 0;

    // Loop through each party and seat pair
    for (size_t i = 0; i < party.size(); i++) {
        result[party[i]] = seats[i];  // Map party to seat count
        maxSeats = std::max(maxSeats, seats[i]);  // Update the maximum seat count
    }

    // Print party names and their corresponding seat counts
    for (const auto& entry : result) {
        std::cout << entry.first << " " << entry.second << "\n";
    }

    // Print the maximum seat count
    std::cout << maxSeats << "\n";
}


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line, line2;
        getline(cin, line);
        getline(cin, line2);
        stringstream ss(line);
        stringstream ss2(line2);
        vector<char> party;
        char ch;
        while (ss >> ch) {
            party.push_back(ch);
        }
        int num;
        vector<int> seats;
        while (ss2 >> num) {
            seats.push_back(num);
        }

        Election2019(party, seats);

        cout << "~"
             << "\n";
    }
}
// } Driver Code Ends