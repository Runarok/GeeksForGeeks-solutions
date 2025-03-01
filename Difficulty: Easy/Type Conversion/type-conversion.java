//{ Driver Code Starts
//Initial Template for Java



import java.io.*;

class GFG{
    
    
// } Driver Code Ends

// User function Template for Java

// Function to typecast a double to an integer and return the result
public static int typeCast(double d) {
    return (int) d;
}



//{ Driver Code Starts.

    
    public static void main(String args[]) throws IOException{
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            double d = Double.parseDouble(read.readLine());
            
            int answer = typeCast(d);
            
            System.out.println(answer);
        
System.out.println("~");
}
        
    }
}
// } Driver Code Ends