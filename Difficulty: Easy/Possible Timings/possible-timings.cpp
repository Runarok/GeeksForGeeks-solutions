//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {   
public:
    // Function to calculate the number of possible configurations for a digit
    int calculateNums(int num) {
        // Predefined 2D array representing the possible segment patterns for each digit (0-9)
        int nums[10][7] = {
            {1, 1, 1, 1, 1, 1, 0}, // 0
            {0, 1, 1, 0, 0, 0, 0}, // 1
            {1, 1, 0, 1, 1, 0, 1}, // 2
            {1, 1, 1, 1, 0, 0, 1}, // 3
            {0, 1, 1, 0, 0, 1, 1}, // 4
            {1, 0, 1, 1, 0, 1, 1}, // 5
            {1, 0, 1, 1, 1, 1, 1}, // 6
            {1, 1, 1, 0, 0, 0, 0}, // 7
            {1, 1, 1, 1, 1, 1, 1}, // 8
            {1, 1, 1, 1, 0, 1, 1}  // 9
        };
        
        int count = 0;
        
        // Loop through all possible digits (0-9)
        for(int i = 0; i < 10; i++) {
            int j;
            // Compare the current number's segment configuration with others
            for (j = 0; j < 7; j++) {
                // If the current segment of the number differs, break out of the loop
                if (nums[num][j] == 1 && nums[i][j] == 0)
                    break;
            }
            // If all segments match, increment the count
            if (j == 7)
                count++;
        }
        return count;
    }

    // Function to calculate the number of possible timings based on the input string
    int numberOfPossibleTimings(string S) {
        // The result is the product of the possible configurations for the first two digits
        return calculateNums(S[0] - 48) * calculateNums(S[1] - 48);
    }
};



//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        string S;
        cin >> S ;
        Solution ob;
        cout << ob.numberOfPossibleTimings(S) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends