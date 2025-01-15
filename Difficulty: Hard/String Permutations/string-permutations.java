//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
class Main {
	public static void main (String[] args) {
		Scanner sc=new Scanner(System.in);
		
		int T=sc.nextInt();
		sc.nextLine();
		while(T-->0)
		{
		    
		    Solution ob=new Solution();
		    
		    String S=sc.nextLine();
		    
		    ArrayList<String> arr = ob.permutation(S);
		    for(String s : arr){
		        System.out.print(s+" ");
		    }
		    System.out.println();
		
System.out.println("~");
}
		
	}
}

// } Driver Code Ends


//User function Template for Java

class Solution
{
    public void helper(String s, int idx, ArrayList<String>ans){
        if (idx == s.length()) {
            ans.add(s);
            return;
        }
        for(int i=idx;i<s.length();i++){
            s = swap(s, i, idx);
            helper(s, idx+1, ans);
            s = swap(s, i, idx);
        }
    }
    public String swap(String s, int i, int j){
        char[] arr = s.toCharArray();
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return new String(arr);
    }
    public ArrayList<String> permutation(String S)
    {
        //Your code here
        ArrayList<String>ans = new ArrayList<>();
        helper(S, 0, ans);
        Collections.sort(ans);
        return ans;
    }
}