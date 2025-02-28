//{ Driver Code Starts
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Read number of test cases safely
        String firstLine = br.readLine().trim();
        int t = Integer.parseInt(firstLine);

        while (t-- > 0) {
            ArrayList<Character> clist = new ArrayList<>();

            // Read the whole line for commands
            String q = br.readLine().trim();
            if (q.isEmpty()) continue; // Handle empty input cases

            Geeks obj = new Geeks();
            String[] commands = q.split(" "); // Split commands by spaces

            for (int i = 0; i < commands.length; i += 2) {
                if (commands[i].equals("i") && i + 1 < commands.length) {
                    char c = commands[i + 1].charAt(0);
                    obj.insert(clist, c);
                } else if (commands[i].equals("f") && i + 1 < commands.length) {
                    char c = commands[i + 1].charAt(0);
                    obj.freq(clist, c);
                }
            }
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java

// Geeks class with functions insert and freq
// insert : to insert element into ArrayList
// freq : function to count frequency of element

class Geeks {
    // Function to insert element into the ArrayList
    public static void insert(ArrayList<Character> clist, char c) {
        // Add the character to the list
        clist.add(c);
    }

    // Function to count the frequency of an element in the ArrayList
    public static void freq(ArrayList<Character> clist, char c) {
        // Check if the character is present in the list
        if(clist.contains(c)) {
            // Print the frequency of the character in the list
            System.out.println(Collections.frequency(clist, c));
        } else {
            // If the character is not found, print "-1"
            System.out.println("-1");
        }
    }
}
