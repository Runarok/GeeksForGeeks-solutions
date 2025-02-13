//{ Driver Code Starts
import java.io.*;
import java.util.*;


class StringArray
{
    public static String[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        return s;
    }

    public static void print(String[] a)
    {
        for(String e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<String> a)
    {
        for(String e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int N;
            N = Integer.parseInt(br.readLine());
            
            
            String[] nums = StringArray.input(br, N);
            
            
            String target;
            target = br.readLine();
            
            Solution obj = new Solution();
            int res = obj.countPairs(N, nums, target);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution
{
    public static int countPairs(int N, String[] nums, String target)
    {
        int count = 0;  // Initialize the count of pairs that form the target string
        HashMap<String, Integer> freqMap = new HashMap<>();  // Map to store the frequency of each string

        // Loop through each string in the input array
        for (String num : nums)
        {
            int numLength = num.length();  // Get the length of the current string
            int targetLength = target.length();  // Get the length of the target string

            // Check if the current string is a prefix of the target string
            if (numLength < targetLength && target.startsWith(num))
            {
                // Calculate the remaining part of the target string
                String part2 = target.substring(numLength);

                // Add the frequency of the remaining part to the count
                count += freqMap.getOrDefault(part2, 0);
            }

            // Check if the current string is a suffix of the target string
            if (numLength < targetLength && target.endsWith(num))
            {
                // Calculate the remaining part of the target string
                String part1 = target.substring(0, targetLength - numLength);

                // Add the frequency of the remaining part to the count
                count += freqMap.getOrDefault(part1, 0);
            }

            // Update the frequency of the current string in the map
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        // Return the total count of pairs that form the target string
        return count;
    }
}
