//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to perform number conversions
    static String[] convert(int decimalNum, int binaryNum, int hexNum, String hexString) {
        // Array to store conversion results
        String[] result = new String[4];

        // Convert decimal to binary
        result[0] = decimalToBinary(decimalNum);

        // Convert binary to decimal
        result[1] = binaryToDecimal(binaryNum);

        // Convert decimal to hexadecimal
        result[2] = decimalToHexadecimal(hexNum);

        // Convert hexadecimal to decimal
        result[3] = hexadecimalToDecimal(hexString);

        return result;
    }

    // Method to convert a decimal number to binary
    static String decimalToBinary(int num) {
        StringBuilder binary = new StringBuilder();

        if (num == 0) {
            return "0";  // Special case for zero
        }

        while (num > 0) {
            binary.append(num % 2); // Append remainder (0 or 1)
            num /= 2; // Divide by 2
        }

        return binary.reverse().toString(); // Reverse the result to get correct binary representation
    }

    // Method to convert a binary number to decimal
    static String binaryToDecimal(int binaryNum) {
        int decimalValue = 0, power = 0;

        while (binaryNum > 0) {
            int lastDigit = binaryNum % 10; // Extract last digit
            binaryNum /= 10; // Remove last digit
            decimalValue += lastDigit * Math.pow(2, power); // Compute decimal equivalent
            power++;
        }

        return String.valueOf(decimalValue);
    }

    // Method to convert a decimal number to hexadecimal
    static String decimalToHexadecimal(int num) {
        StringBuilder hex = new StringBuilder();

        if (num == 0) {
            return "0";  // Special case for zero
        }

        while (num > 0) {
            int remainder = num % 16;
            if (remainder < 10) {
                hex.append((char) ('0' + remainder)); // Convert to number (0-9)
            } else {
                hex.append((char) ('A' + (remainder - 10))); // Convert to letter (A-F)
            }
            num /= 16;
        }

        return hex.reverse().toString(); // Reverse for correct hex representation
    }

    // Method to convert a hexadecimal string to decimal
    static String hexadecimalToDecimal(String hexStr) {
        int decimalValue = 0;

        for (int i = 0; i < hexStr.length(); i++) {
            char ch = hexStr.charAt(i);
            int digitValue;

            if (ch >= '0' && ch <= '9') {
                digitValue = ch - '0'; // Convert '0'-'9' to numerical value
            } else if (ch >= 'A' && ch <= 'F') {
                digitValue = ch - 'A' + 10; // Convert 'A'-'F' to numerical value
            } else if (ch >= 'a' && ch <= 'f') {
                digitValue = ch - 'a' + 10; // Convert 'a'-'f' to numerical value
            } else {
                throw new IllegalArgumentException("Invalid hexadecimal character: " + ch);
            }

            decimalValue = decimalValue * 16 + digitValue; // Compute decimal equivalent
        }

        return String.valueOf(decimalValue);
    }
}


//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String S[] = read.readLine().split(" ");
            int a = Integer.parseInt(S[0]);
            int b = Integer.parseInt(S[1]);
            int c = Integer.parseInt(S[2]);
            String d = S[3];
            
            Solution ob = new Solution();
            String ans[] = ob.convert(a,b,c,d);
            
            for(int i=0;i<4;i++)
                System.out.print(ans[i]+" ");
            System.out.println();
            
        }
    }
}
// } Driver Code Ends