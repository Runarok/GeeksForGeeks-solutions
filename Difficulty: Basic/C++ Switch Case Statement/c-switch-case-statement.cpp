//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    // Function to return the corresponding string representation of the given number
    string isInRange(int number){
        // Using switch statement to match the input number and return corresponding word
        switch(number)
        {
        case 1:
            return "one";   // If the number is 1, return "one"
            break;
        case 2:
            return "two";   // If the number is 2, return "two"
            break;
        case 3:
            return "three"; // If the number is 3, return "three"
            break;
        case 4:
            return "four";  // If the number is 4, return "four"
            break;
        case 5:
            return "five";  // If the number is 5, return "five"
            break;
        case 6:
            return "six";   // If the number is 6, return "six"
            break;
        case 7:
            return "seven"; // If the number is 7, return "seven"
            break;
        case 8:
            return "eight"; // If the number is 8, return "eight"
            break;
        case 9:
            return "nine";  // If the number is 9, return "nine"
            break;
        case 10:
            return "ten";   // If the number is 10, return "ten"
            break;
        default:
            return "not in range"; // If the number is outside the range 1 to 10, return "not in range"
        }
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin >> N;
        Solution ob;
        cout << ob.isInRange(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends