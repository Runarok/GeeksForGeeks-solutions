//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
using namespace std;



// } Driver Code Ends

// User function Template for C++

class complex
{
    int x, y;  // x for real part, y for imaginary part

public:
    // Default constructor
    complex() {}

    // Parameterized constructor to initialize complex number with real and imaginary parts
    complex(int real, int imag) {
        x = real;
        y = imag;
    }

    // Overloading the '+' operator to add two complex numbers
    complex operator+(complex c) {
        complex a;
        // Add real and imaginary parts separately
        a.x = x + c.x;
        a.y = y + c.y;

        return a;
    }

    // Function to display the complex number in the form "x + yi"
    void display() {
        cout << x << " + " << y << "i" << endl;
    }
};



//{ Driver Code Starts.

int main() {
    
    int t;
    cin>>t;
    while(t--)
    {
        int c11, c12, c21, c22;
        cin>>c11>>c12>>c21>>c22;
     
        
	
	complex c1, c2, c3;
	c1 = complex(c11, c12);
	c2 = complex(c21, c22);
	c3 = c1 + c2;
	
	c3.display();
    
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends