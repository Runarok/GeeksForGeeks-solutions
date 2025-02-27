//{ Driver Code Starts
import java.util.*;
import java.lang.*;

class Rearrange
{
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int t  =sc.nextInt();
        
        while(t-- > 0)
        {
            String str = "";
            str = sc.next();
            
            int old = str.length();
            int chs[] = new int[26];
            Arrays.fill(chs, 0);
            
            for(int i=0;i<str.length();i++){
                int idx = str.charAt(i)-'a';
                if(idx>=0&&idx<26)
                chs[idx]++;
            }
            Solution gfg = new Solution();     
            str = gfg.rearrangeString(str);
            int flag=1,ff=0;
            int chs2[] = new int[26];
            Arrays.fill(chs2, 0);
	        
	        for(int i=0;i<str.length();i++){
	            int idx = str.charAt(i)-'a';
                if(idx>=0&&idx<26)
	            chs2[idx]++;
	        }
	             
	        if(str.length() != old)
	         System.out.println(0);
	        else
	        {
	            
    	        for(int i=0;i<26;i++)
                    if(chs[i] != chs2[i])
                        ff=1;
                
                if(ff==1){
                        System.out.println(0);
                }
                else{
        	        if(str != "-1"){
                    	for(int i=1;i<str.length();i++)
                    	{
                    		if(str.charAt(i-1) == str.charAt(i))
                    			flag=0;
                    	}
                    	if(flag == 1)
                    		System.out.println(1);
                    	else
                    	System.out.println(0 );
                    }
    	            else
    	            	System.out.println(0);
                }
            }
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    public String rearrangeString(String S) {
        // Step 1: Count the frequency of each character in the string
        Map<Character, Integer> frequencyMap = new HashMap<>();
        for (char ch : S.toCharArray()) {
            frequencyMap.put(ch, frequencyMap.getOrDefault(ch, 0) + 1);
        }

        // Step 2: Create a max heap (priority queue) to store characters sorted by frequency
        PriorityQueue<Map.Entry<Character, Integer>> maxHeap =
            new PriorityQueue<>((entry1, entry2) -> entry2.getValue() - entry1.getValue());
        maxHeap.addAll(frequencyMap.entrySet());

        // Step 3: Build the rearranged string using the most frequent characters first
        StringBuilder rearrangedString = new StringBuilder();
        Map.Entry<Character, Integer> previousEntry = null;

        while (!maxHeap.isEmpty()) {
            // Extract character with the highest frequency
            Map.Entry<Character, Integer> currentEntry = maxHeap.poll();
            rearrangedString.append(currentEntry.getKey());

            // If there was a character used in the previous step that still has a remaining count,
            // push it back into the heap to be used later.
            if (previousEntry != null && previousEntry.getValue() > 0) {
                maxHeap.add(previousEntry);
            }

            // Reduce frequency count of the current character (since it's used now)
            currentEntry.setValue(currentEntry.getValue() - 1);
            previousEntry = currentEntry;
        }

        // Step 4: Validate the final rearranged string.
        // If its length doesn't match the original string, it's not possible to rearrange.
        return rearrangedString.length() == S.length() ? rearrangedString.toString() : "0";
    }
}