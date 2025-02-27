//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
string isCircular(string path);

int main(){
    int t;
    cin >> t;
    while(t--){
        string path;
        cin >> path;
        cout << isCircular(path) << endl;
    
cout << "~" << "\n";
}
return 0;
}
// } Driver Code Ends

string isCircular(string path){
    // Initial direction is facing upward (positive y-axis)
    int dirx = 0;
    int diry = 1;

    // To track final position after following the path
    int sumx = 0;
    int sumy = 0;

    // Traverse each command in the path
    for(int i = 0; i < path.length(); i++){
        if(path[i] == 'G'){
            // Move forward in the current direction
            sumx += dirx;
            sumy += diry;
        }
        else if(path[i] == 'L'){
            // Turn left based on current direction
            if(dirx == 0 && diry == 1){       // Facing Up
                dirx = -1;                     // Turn left -> Facing Left
                diry = 0;
            }
            else if(dirx == -1 && diry == 0){  // Facing Left
                diry = -1;                     // Turn left -> Facing Down
                dirx = 0;
            }
            else if(dirx == 0 && diry == -1){  // Facing Down
                dirx = 1;                      // Turn left -> Facing Right
                diry = 0;
            }
            else{                              // Facing Right
                diry = 1;                      // Turn left -> Facing Up
                dirx = 0;
            }
        }
        else{ // path[i] == 'R'
            // Turn right based on current direction
            if(dirx == 0 && diry == 1){       // Facing Up
                dirx = 1;                      // Turn right -> Facing Right
                diry = 0;
            }
            else if(dirx == -1 && diry == 0){  // Facing Left
                diry = 1;                      // Turn right -> Facing Up
                dirx = 0;
            }
            else if(dirx == 0 && diry == -1){  // Facing Down
                dirx = -1;                     // Turn right -> Facing Left
                diry = 0;
            }
            else{                              // Facing Right
                diry = -1;                     // Turn right -> Facing Down
                dirx = 0;
            }
        }
    }

    // Final check to determine if circular (back to origin)
    if(sumx == 0 && sumy == 0) return "Circular";
    return "Not Circular";
}
