//{ Driver Code Starts
import java.io.*;
import java.util.*; 

// } Driver Code Ends

class Solution 
{ 
    ArrayList<Integer> solve(int N, ArrayList<Integer> A, int Q, ArrayList<Integer> Query) 
    { 
        // Initializing the answer list
        ArrayList<Integer> ans = new ArrayList<>();
        
        // If the query type is 1 (insert operation)
        if (Q == 1) 
        {
            // Extract position and value from the query list
            int position = Query.get(0);
            int value = Query.get(1);
            
            // Insert the value at the specified position in the array
            A.add(position, value);
            
            // Add all elements of the updated array to the answer list
            for (int i = 0; i <= N; i++) 
            {
                ans.add(A.get(i));
            }
        } 
        else 
        {
            // If the query type is 2 (find last occurrence)
            int value = Query.get(0);
            
            // Add the last index of the given value in the array to the answer list
            ans.add(A.lastIndexOf(value));
        }
        
        // Return the result list
        return ans;
    }
}


//{ Driver Code Starts.
class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int q=sc.nextInt();
            ArrayList<Integer> a = new ArrayList<>();
            for(int i=0;i<n;i++)
            {
                a.add(sc.nextInt());
            }
            ArrayList<Integer> query = new ArrayList<Integer>();
            if(q==1){
                query.add(sc.nextInt());
                query.add(sc.nextInt());
            }
            else{
                query.add(sc.nextInt());
            }
            Solution obj = new Solution();
            ArrayList<Integer> ans = obj.solve(n,a,q,query);
            for(int i=0;i<ans.size();i++)
            {
                System.out.print(ans.get(i));
                if(q==1)
                System.out.print(" ");
            }
            System.out.println();
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends