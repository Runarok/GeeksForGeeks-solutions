//{ Driver Code Starts
import java.util.*;
import java.lang.String;
import java.lang.Math;
class Main{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
			String s=sc.next();
			GfG g=new GfG();
			System.out.println(g.missingNumber(s));
		
System.out.println("~");
}
	}
}
// } Driver Code Ends

/* Complete the function below */
class GfG {
    public int missingNumber(String s) {
        // Check if the second digit in sequence is exactly two more than the first digit
        if (Integer.parseInt(s.charAt(1) + "") == Integer.parseInt(s.charAt(0) + "") + 2) {
            return Integer.parseInt(s.charAt(0) + "") + 1; // Missing number found
        }

        char firstChar = s.charAt(0); // First digit of the sequence
        int i = 0; // Position index

        // Determine the length of the first number in the sequence
        for (i = 1; i < s.length() - 1; i++) {
            if (s.charAt(i) != firstChar && s.charAt(i + 1) == firstChar) {
                i = i + 1; // Move to the next valid position
                break;
            }
            if (s.charAt(i) == firstChar) {
                int k = i;
                while (s.charAt(k++) == firstChar); // Find the end of repeated digits
                i = k;
                break;
            }
            if (Integer.parseInt(s.charAt(i) + "") == (Integer.parseInt(firstChar + "") + 1)) {
                break;
            }
        }

        int numberLength = i; // Length of each number in sequence
        int expectedNumber = Integer.parseInt(s.substring(0, i)); // First number in sequence
        int position = 0; // Track position in the string

        for (i = 0; i < s.length(); i++) {
            boolean allNines = true;

            // Check if the number consists entirely of '9's (e.g., 999)
            for (int j = 0; j < (expectedNumber + "").length(); j++) {
                if ((expectedNumber + "").charAt(j) != '9') {
                    allNines = false;
                    break;
                }
            }

            // If the next number appears in the expected sequence, continue
            if (s.indexOf(String.valueOf(expectedNumber + 1), position) == s.indexOf(String.valueOf(expectedNumber), position) + numberLength) {
                expectedNumber++; // Move to next expected number
                if (allNines) numberLength += 1; // Adjust length if transitioning from 9s (e.g., 99 -> 100)
            }
            // If there's a missing number in the sequence, return it
            else if (s.indexOf(String.valueOf(expectedNumber + 2), position) == s.indexOf(String.valueOf(expectedNumber), position) + numberLength) {
                return expectedNumber + 1;
            }
            else {
                break; // Sequence is incorrect
            }

            position += numberLength - 1; // Move to next expected position
        }

        return -1; // No missing number found
    }
}
