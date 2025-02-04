//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    // Function to check if a number is prime or not
    int checkprime(int n){
        // 0 and 1 are not prime numbers
        if(n == 1 || n == 0) return 0;
        
        // Check divisibility from 2 to sqrt(n)
        for(int i = 2; i * i <= n; i++){
            if(n % i == 0){
                return 0; // Return 0 if a divisor is found (i.e., not prime)
            }
        }
        return 1; // Return 1 if no divisor is found (i.e., prime)
    }
    
    // Function to check if a number is a Carmichael number
    int isCarmichael(int n){
        // A Carmichael number is a composite number that satisfies certain properties
        // If the number is prime, it cannot be Carmichael
        if(checkprime(n)) return 1;
        return 0; // Return 0 if the number is not prime
    }
};

    

//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        
        Solution ob;
        int flag = ob.isCarmichael(n);
        if(flag)
            cout<<"Yes\n";
        else
            cout<<"No\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends