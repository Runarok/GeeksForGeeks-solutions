//{ Driver Code Starts
//Initial Template for Java

import java.util.*;

// } Driver Code Ends
//User function Template for Java
// Design a class User with an instance variable and constructor
class User {
    // Instance variable to store the user's name
    String name;

    // Constructor with no parameters, initializing name to "Default"
    User() {
        name = "Default";
    }
}



//{ Driver Code Starts.



class GFG{
    public static void main(String args[]){
        Scanner ob = new Scanner(System.in);
        int t = ob.nextInt();
        while(t-- > 0){
            User user = new User();
            System.out.println(user.name);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends