//{ Driver Code Starts
import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        scanner.nextLine();
        Solution ob = new Solution();
        while (t-- > 0) {
            String s = scanner.nextLine();
            String line = scanner.nextLine();
            String[] parts = line.split(" ");
            List<Integer> roll = new ArrayList<>();
            for (String part : parts) {
                roll.add(Integer.parseInt(part));
            }
            String result = ob.findRollOut(s, roll);
            System.out.println(result);
        }
        scanner.close();
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the new string obtained by rolling out characters.
    public String findRollOut(String s, List<Integer> roll) {
        int length = s.length();
        
        // Convert the string to a character array for easy modification
        char[] charArray = s.toCharArray();
        
        // Apply each roll operation
        for (int rollValue : roll) {  
            for (int i = 0; i < rollValue; i++) {
                // Increment character, ensuring it wraps around within 'a' to 'z'
                charArray[i] = (char) ((charArray[i] - 'a' + 1) % 26 + 'a'); 
            }
        }
        
        // Convert character array back to a string and return
        return new String(charArray);
    }
}
