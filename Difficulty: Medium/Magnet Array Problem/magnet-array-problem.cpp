//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
        // Helper function to perform binary search and find the point where the net force is zero
        double searchBinary(double low, double high, double* LeftForce, int lefts, double* RightForce, int rights)
        {
            double epsilon = 0.0000000000001;  // Small value for precision tolerance
        
            // Calculating the midpoint between the low and high values
            double mid = (low + high) / 2;
            
            double netForce = 0;  // Variable to accumulate the net force
            
            // Calculate the net force exerted by the magnets on the left side
            for (int i = 0; i < lefts; i++)
                netForce += 1.0 / (mid - LeftForce[i]);  // The force from each magnet on the left
            
            // Calculate the net force exerted by the magnets on the right side
            for (int i = 0; i < rights; i++)
                netForce -= 1.0 / (RightForce[i] - mid);  // The force from each magnet on the right
            
            // If the net force is close to zero, return the midpoint as the null point
            if ((-epsilon) < netForce && netForce < epsilon)
                return mid;
            // If the net force is positive, continue the search in the right half
            else if (netForce > 0)
                return searchBinary(mid, high, LeftForce, lefts, RightForce, rights);
            // If the net force is negative, continue the search in the left half
            else 
                return searchBinary(low, mid, LeftForce, lefts, RightForce, rights);
        }
        
        // Function to find the null points between each pair of magnets
        void nullPoints(int n, double magnets[], double getAnswer[])
        {
            // Iterate over each pair of adjacent magnets to find the null point between them
            for (int i = 0; i < n - 1; i++) {
                // For each pair, find the null point between magnets[i] and magnets[i+1]
                getAnswer[i] = searchBinary(magnets[i], magnets[i + 1], magnets, i + 1, magnets + i + 1, n - 1 - i);
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
        int n;
        cin>>n;
        double magnets[n], getAnswer[n];
        for(int i=0;i<n;i++)
        cin>>magnets[i];
        Solution ob;
        ob.nullPoints(n, magnets, getAnswer);
        
        for(int i=0; i<n-1; i++)
            printf("%0.2lf ",getAnswer[i]);
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends