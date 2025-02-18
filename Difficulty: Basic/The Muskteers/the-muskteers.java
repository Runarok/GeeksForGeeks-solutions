//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args)throws IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
	    int t,i;
	    t=Integer.parseInt(br.readLine());
	    while(t-->0){
	        
	        String str = br.readLine();
	        Solution ob = new Solution();
	        
            if(ob.checkTogether(str)){
                System.out.println("YES");
            }else{
                System.out.println("NO");
            }
            
	    
System.out.println("~");
}
	}
}
// } Driver Code Ends

class Solution{
    static boolean checkTogether(String str){
        // Find the index of the first occurrence of '0'
        int idx1 = str.indexOf("0");
        // Find the index of the last occurrence of '0'
        int idx2 = str.lastIndexOf("0");
        
        // If no '0' is found, return false as there are no zeros in the string
        if (idx1 == -1) {
            return false;
        }
        
        // Check if all characters between idx1 and idx2 (inclusive) are '0'
        for (int i = idx1; i <= idx2; i++) {
            if (str.charAt(i) == '1') {
                return false;  // Return false if any '1' is found in the range
            }
        }
        
        // If all characters between idx1 and idx2 are '0', return true
        return true;
    }
}
