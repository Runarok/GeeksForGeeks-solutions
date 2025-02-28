//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

int sum(int a = 0, int b = 0, int c = 0, int d = 0) {
    // Return the sum of all parameters, with default values of 0
    return (a + b + c + d);   // Code here
}


//{ Driver Code Starts.
 
int main()
{
    
    int t;
    cin >> t;
    
    while(t--){
        
        int c;
        cin>>c;
        if(c==2)
        {
            int a, b;
            cin >> a >> b ;
            cout << sum(a, b) << endl;
            
        }
        else if(c==3)
        {
            int a, b, c;
            cin >> a >> b >> c;
            cout << sum(a, b, c) << endl;
                
        }
        else if(c==4)
        {
            int a, b, c, d;
            cin >> a >> b >> c >> d;
            cout << sum(a, b, c, d) << endl;
        
        }
    
cout << "~" << "\n";
}
    return 0;
} 
// } Driver Code Ends