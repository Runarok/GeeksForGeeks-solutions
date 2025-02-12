//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution
{
public:
    std::vector<int> cyclicPermutations(int N)
    {
        // Determine the number of digits in N
        int numDigits = floor(log10(N));
        std::vector<int> permutations(numDigits + 1);
        
        int rotatedNumber = N;
        int digit;
        int i = 0;

        // Generate cyclic permutations
        while (rotatedNumber != N || i == 0) {
            digit = rotatedNumber % 10;  // Extract the last digit
            rotatedNumber /= 10;  // Remove the last digit
            rotatedNumber += digit * pow(10, numDigits);  // Shift last digit to front
            
            permutations[i] = rotatedNumber;
            i++;
        }

        // Remove any trailing zero values
        auto it = std::remove(permutations.begin(), permutations.end(), 0);
        permutations.erase(it, permutations.end());

        // Adjust order by rotating last element to the front
        int lastElement = permutations.back();
        permutations.insert(permutations.begin(), lastElement);
        permutations.pop_back();

        return permutations;
    }
};
//{ Driver Code Starts.
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin >> N;
      
        Solution ob;
        vector<int> ans  = ob.cyclicPermutations(N);
        for(int permutation : ans){
            cout<<permutation<<" ";
        }
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends