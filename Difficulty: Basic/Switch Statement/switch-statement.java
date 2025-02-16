//{ Driver Code Starts

// } Driver Code Ends


// Back-end complete function Template for Java
import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Create a Scanner object to take user input
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt(); // Read input number

        // Using switch-case to print the corresponding word for the number
        switch (number) {
            case 1: 
                System.out.print("One");
                break;
            case 2: 
                System.out.print("Two");
                break;
            case 3: 
                System.out.print("Three");
                break;
            case 4: 
                System.out.print("Four");
                break;
            case 5: 
                System.out.print("Five");
                break;
            case 6: 
                System.out.print("Six");
                break;
            case 7: 
                System.out.print("Seven");
                break;
            case 8: 
                System.out.print("Eight");
                break;
            case 9: 
                System.out.print("Nine");
                break;
            default: 
                System.out.print("Unknown"); // If the number is not in the range 1-9
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends