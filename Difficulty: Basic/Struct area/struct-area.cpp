//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

struct area {
    int sd;
    int len, wid;
};


// } Driver Code Ends

// User function Template for C++

/*struct area
{
    int sd;
    int len, wid;
}*/

void find_area(int side, int le, int wd) {
    // Computing area of square
    cout << side * side << " ";

    // Computing area of rectangle
    cout << le * wd;
}


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;

    while (t--) {
        int side, length, wide;
        cin >> side >> length >> wide;

        find_area(side, length, wide);
        cout << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends