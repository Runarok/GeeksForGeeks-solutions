//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            String s;
            s = br.readLine();

            Solution obj = new Solution();
            String res = obj.oddEven(s);

            System.out.println(res);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    public static String oddEven(String s) {
        // Frequency array to count occurrences of each letter (a-z)
        int[] frequency = new int[27];  // 1-based index (a=1, ..., z=26)

        // Calculate frequency of each character in the string
        for (int i = 0; i < s.length(); i++) {
            int position = s.charAt(i) - 'a' + 1;
            frequency[position]++;
        }

        int qualifyingCount = 0;  // Counter for characters that meet the criteria

        // Check each letter position (1 to 26)
        for (int i = 1; i <= 26; i++) {
            if (frequency[i] != 0) {  // Only consider letters present in the string
                if ((i % 2 == 0 && frequency[i] % 2 == 0) || // Even position & even frequency
                    (i % 2 != 0 && frequency[i] % 2 != 0)) { // Odd position & odd frequency
                    qualifyingCount++;
                }
            }
        }

        // Check if qualifying count is even or odd
        return (qualifyingCount % 2 == 0) ? "EVEN" : "ODD";
    }
}
