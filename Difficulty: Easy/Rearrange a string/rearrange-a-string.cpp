//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
  public:
    string arrangeString(string inputString)
    {
        // Frequency array to count occurrences of each uppercase letter.
        vector<int> letterFrequency(26, 0);
        
        // Variable to store sum of digits.
        int digitSum = 0;
        
        // Iterate over each character in the input string.
        for (char currentChar : inputString) {
            if (isdigit(currentChar)) {
                // If it's a digit, add its value to the sum.
                digitSum += currentChar - '0';
            } 
            else {
                // If it's an uppercase letter, update its frequency.
                letterFrequency[currentChar - 'A']++;
            }
        }
        
        // String to store the final result.
        string result = "";
        
        // Append letters in sorted order based on frequency.
        for (int i = 0; i < 26; i++) {
            while (letterFrequency[i] > 0) {
                result += (i + 'A');
                letterFrequency[i]--;
            }
        }
        
        // Append the sum of digits (if any digits were found).
        if (digitSum) {
            result += to_string(digitSum);
        }
        
        return result;
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin >> t;
    while(t--){
        string s;
        cin >> s;
        Solution ob;
        cout <<ob.arrangeString(s) << endl;
    
cout << "~" << "\n";
}
return 0;
}


// } Driver Code Ends