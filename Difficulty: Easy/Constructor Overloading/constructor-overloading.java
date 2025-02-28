//{ Driver Code Starts
//Initial Template for Java

import java.io.*;

// } Driver Code Ends

// User class with two constructors: one default and one parameterized

class User{
    // Instance variable to store the name of the user
    String name;

    // Default constructor that initializes the name to "Default"
    User(){
        name = "Default"; // Setting the default name value
    }

    // Parameterized constructor that initializes the name with a given value
    User(String userName){
        name = userName; // Setting the name to the provided user name
    }
}



//{ Driver Code Starts.


class GFG{
    public static void main(String args[]) throws IOException{
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            User user = new User();
            System.out.println(user.name);
            
            String name = read.readLine();
            
            User user2 = new User(name);
            System.out.println(user2.name);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends