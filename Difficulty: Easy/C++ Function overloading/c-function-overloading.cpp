//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
using namespace std;



// } Driver Code Ends

// User function Template for C++

#include <iostream>
using namespace std;

// Function to calculate the volume of a cube
void volume(int s) {
    // Volume of cube = s^3
    cout << (s * s * s) << endl;
}

// Function to calculate the volume of a cylinder
void volume(int r, int h) {
    // Volume of cylinder = π * r^2 * h
    cout << (3.14159 * r * r * h) << endl;
}

// Function to calculate the volume of a cuboid
void volume(int l, int b, int h) {
    // Volume of cuboid = l * b * h
    cout << (l * b * h) << endl;
}



//{ Driver Code Starts.
int main() 
{
    int t;
    cin>>t;
    while(t--)
    {
        int q;
        cin>>q;
        
        switch (q)
        {
            case 1:
            int edge;
            cin>>edge;
            volume(edge);
            break;
            
            case 2:
            int radius, heigh;
            cin>>radius>>heigh;
            volume(radius, heigh);
            break;
            
            case 3:
            int length, width, height;
            cin>>length>>width>>height;
            volume(length, width, height);
            break;
            
        }
        
        
        
    
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends