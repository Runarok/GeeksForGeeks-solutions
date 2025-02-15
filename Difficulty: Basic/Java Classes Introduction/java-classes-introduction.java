//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.Scanner;


class GFG {
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0)
        {
         int l,w,h;
         l=sc.nextInt();
         w=sc.nextInt();
         h=sc.nextInt();
         task obj=new task();
         obj.set_length(l);
         obj.set_width(w);
         obj.set_height(h);
         obj.volume();
        
System.out.println("~");
}
    }
}


// } Driver Code Ends
//User function Template for Java

class task {
    // Member variables to store the dimensions of the object
    int length, width, height;

    // Method to set the length of the object
    public void set_length(int l) {
        length = l; // Assign the value of 'l' to the 'length' member variable
    }

    // Method to set the width of the object
    public void set_width(int w) {
        width = w; // Assign the value of 'w' to the 'width' member variable
    }

    // Method to set the height of the object
    public void set_height(int h) {
        height = h; // Assign the value of 'h' to the 'height' member variable
    }

    // Method to compute and print the volume of the object
    public void volume() {
        // Calculate the volume using the formula length * width * height and print it
        System.out.println(length * width * height);
    }
}


//{ Driver Code Starts.

// } Driver Code Ends