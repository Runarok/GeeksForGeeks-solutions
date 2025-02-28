//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
int minChange(string s);

int main(){
    int t;
    cin >> t;
    while(t--){
        string s;
        cin >> s;
        cout << minChange(s) << endl;
    
cout << "~" << "\n";
}
return 0;
}

// } Driver Code Ends

int minChange(string inputString) { 
    // Map to store the frequency of each character in the string.
    unordered_map<char, int> charFrequencyMap;

    int changeCount = 0;

    // Count the frequency of each character.
    for (int i = 0; i < inputString.size(); i++) {
        charFrequencyMap[inputString[i]]++;
    }

    // Calculate the number of changes needed to make all characters unique.
    for (auto entry : charFrequencyMap) {
        changeCount += entry.second - 1;
    }

    return changeCount;
} 
