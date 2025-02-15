//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Cuboid 
{
   // Class to represent a cuboid with length, width, and height
   public:
   int length, width, height; // Dimensions of the cuboid

   // Function to display the dimensions of the cuboid
   void display() {
       cout << length << " " << width << " " << height << endl;
   }
};

// Derived class to calculate and display the volume of the cuboid
class CuboidVol : public Cuboid
{
    public:
    // Function to initialize the dimensions of the cuboid
    void read_input(int l, int w, int h) {
        length = l;
        width = w;
        height = h;
    }
   
    // Function to display the volume of the cuboid
    void display() {
        cout << (length * width * height) << endl;
    }
};


//{ Driver Code Starts.


int main()
{
    int t;
    cin>>t;
    
    while(t--)
    {
        int l, w, h;
        cin>>l>>w>>h;
    
    // Declare a CuboidVol object
    
    CuboidVol c_vol;
    
    
    // Read length width and height
     
    c_vol.read_input(l,w,h);
    
    
    //  Print length, width and height
    
    c_vol.Cuboid::display();
    
    
    // Print the Volume
     
    c_vol.display();
    
cout << "~" << "\n";
}
    
    return 0;
}
// } Driver Code Ends