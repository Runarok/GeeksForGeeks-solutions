//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    
	public static void main (String[] args) throws Exception{
        
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out=new PrintWriter(System.out);
                
        int t=Integer.parseInt(in.readLine());
        while(t-- > 0){
            int n=Integer.parseInt(in.readLine().trim());
            String s=in.readLine().trim();
            int q=Integer.parseInt(in.readLine().trim());
            query a[]=new query[q];
            for(int i=0;i<q;i++){
                String str=in.readLine().trim();
                String st[]=str.split(" ");
                if(st[0].trim().equals("1")){
                    a[i]=new query("1",st[1],st[2],"");
                }else{
                    a[i]=new query("2",st[1],st[2],st[3]);
                }
            }
            Solution ob=new Solution();
            ArrayList<Character> ans=ob.easyTask(n,s,q,a);
            for(char ch:ans){
                out.print(ch+" ");
            }out.println();
        
out.println("~");
}
        out.close();
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int seg[][];

    // Function to handle the easy task queries
    public static ArrayList<Character> easyTask(int n, String s, int q, query queries[]) {
        seg = new int[4 * n][26];  // Segment tree to store character frequencies
        char c[] = s.toCharArray();
        buildTree(c, 0, 0, n - 1);  // Build the segment tree

        ArrayList<Character> ans = new ArrayList<>();  // To store the results of the queries
        for (int i = 0; i < q; i++) {
            // Handling the queries
            if (queries[i].type.equals("1")) {
                // Update operation
                int ind = Integer.parseInt(queries[i].a);
                char val = queries[i].b.charAt(0);
                update(0, 0, n - 1, ind, val);  // Update the segment tree
            } else {
                // Query operation
                int l = Integer.parseInt(queries[i].a);
                int r = Integer.parseInt(queries[i].b);
                int k = Integer.parseInt(queries[i].c);
                int arr[] = query(0, 0, n - 1, l, r);  // Query the segment tree

                // Find the k-th smallest character in the range
                for (int j = 25; j >= 0; j--) {
                    if (arr[j] != 0) {
                        if (arr[j] >= k) {
                            ans.add((char) (j + 'a'));
                            break;
                        } else {
                            k -= arr[j];
                        }
                    }
                }
            }
        }
        return ans;  // Return the result of all queries
    }

    // Function to build the segment tree
    public static void buildTree(char a[], int si, int ss, int se) {
        if (ss == se) {
            seg[si][a[ss] - 'a']++;  // Increment the frequency of the character
            return;
        }
        int mid = (ss + se) / 2;
        buildTree(a, 2 * si + 1, ss, mid);  // Build the left child
        buildTree(a, 2 * si + 2, mid + 1, se);  // Build the right child

        // Merge the results from the left and right children
        int a1[] = seg[2 * si + 1];
        int a2[] = seg[2 * si + 2];
        for (int i = 0; i < 26; i++) {
            seg[si][i] = a1[i] + a2[i];
        }
    }

    // Function to update the segment tree when a character changes
    public static void update(int si, int ss, int se, int pos, char val) {
        if (ss == se) {
            int in = 0;
            // Find the character that needs to be updated and decrement its frequency
            for (int i = 0; i < 26; i++) {
                if (seg[si][i] >= 1) {
                    in = i;
                    break;
                }
            }
            seg[si][in]--;  // Decrease the frequency of the old character
            seg[si][val - 'a']++;  // Increase the frequency of the new character
            return;
        }
        int mid = (ss + se) / 2;
        if (pos <= mid) {
            update(2 * si + 1, ss, mid, pos, val);  // Update the left child
        } else {
            update(2 * si + 2, mid + 1, se, pos, val);  // Update the right child
        }

        // Merge the results from the left and right children
        int a1[] = seg[2 * si + 1];
        int a2[] = seg[2 * si + 2];
        for (int i = 0; i < 26; i++) {
            seg[si][i] = a1[i] + a2[i];
        }
    }

    // Function to query the segment tree for character frequencies in a range
    public static int[] query(int si, int ss, int se, int qs, int qe) {
        if (qs > se || qe < ss) return new int[26];  // No overlap with the range
        if (ss >= qs && se <= qe) return seg[si];  // Complete overlap with the range
        int mid = (ss + se) / 2;
        int a1[] = query(2 * si + 1, ss, mid, qs, qe);  // Query the left child
        int a2[] = query(2 * si + 2, mid + 1, se, qs, qe);  // Query the right child

        // Merge the results from the left and right children
        int ans[] = new int[26];
        for (int i = 0; i < 26; i++) {
            ans[i] = a1[i] + a2[i];
        }
        return ans;
    }
}

// Query class to represent each query
class query {
    String type;
    String a;
    String b;
    String c;

    public query(String type, String a, String b, String c) {
        this.type = type;
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
