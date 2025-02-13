//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        while (t-- > 0) {

            int n = sc.nextInt();
            List<List<String>> adj = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                List<String> l = new ArrayList<>();

                String name = sc.next();
                l.add(name);

                int tmp = sc.nextInt();

                sc.nextLine();
                for (int j = 0; j < tmp; j++) {
                    String h = sc.next();

                    l.add(h);
                }

                adj.add(l);
            }

            Solution obj = new Solution();
            List<List<String>> ans = obj.mergeDetails(adj);
            Collections.sort(ans,
                             (x, y)->{ return x.get(0).compareTo(y.get(0)); });

            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class DisjointSet
{
    // ArrayList to store the size of each set
    ArrayList<Integer> size = new ArrayList<>();
    // ArrayList to store the parent of each node
    ArrayList<Integer> parent = new ArrayList<>();
    
    // Constructor to initialize the DisjointSet with 'n' elements
    public DisjointSet(int n) {
        for(int i = 0; i < n; i++) {
            size.add(1);  // Initially, every element is its own set with size 1
            parent.add(i);  // The parent of each element is itself
        }
    }
    
    // Find the representative parent of the set to which the node belongs
    public int findUPar(int node) {
        // Path compression optimization: update the parent of the node to its ultimate parent
        if(node != parent.get(node)) {
            parent.set(node, findUPar(parent.get(node)));
        }
        return parent.get(node);  // Return the parent of the node
    }
    
    // Union by size: Merge two sets based on their sizes
    public void unionBySize(int u, int v) {
        int ulp_u = findUPar(u);  // Find the parent of set u
        int ulp_v = findUPar(v);  // Find the parent of set v
        
        // If the two elements are already in the same set, do nothing
        if(ulp_u == ulp_v) return;
        
        // Union by size: Attach the smaller set to the larger set
        if(size.get(ulp_u) > size.get(ulp_v)) {
            parent.set(ulp_v, ulp_u);  // Make the parent of set v as the parent of set u
            size.set(ulp_u, size.get(ulp_u) + size.get(ulp_v));  // Update the size of set u
        }
        else {
            parent.set(ulp_u, ulp_v);  // Make the parent of set u as the parent of set v
            size.set(ulp_v, size.get(ulp_u) + size.get(ulp_v));  // Update the size of set v
        }
    }
}

// User function Template for Java
class Solution {

    // Function to merge email details for users
    public List<List<String>> mergeDetails(List<List<String>> details) {
        int n = details.size();  // Get the number of users (or lists)
        DisjointSet ds = new DisjointSet(n);  // Initialize a DisjointSet for n users
        HashMap<String, Integer> emailToUserMap = new HashMap<>();  // Map to track email to user index
        
        // Loop through all the details
        for(int i = 0; i < n; i++) {
            // For each user, process all their email addresses
            for(int j = 1; j < details.get(i).size(); j++) {
                String email = details.get(i).get(j);  // Get the email
                // If the email is not in the map, add it with the current user index
                if(!emailToUserMap.containsKey(email)) {
                    emailToUserMap.put(email, i);
                }
                // If the email is already in the map, union the current user with the user who already has this email
                else {
                    ds.unionBySize(i, emailToUserMap.get(email));
                }
            }   
        }
        
        // Array to store merged emails for each user (represented by the root node)
        ArrayList<String>[] mergedEmails = new ArrayList[n];
        for(int i = 0; i < n; i++) {
            mergedEmails[i] = new ArrayList<>();
        }
        
        // Loop through the email-to-user map and group emails by their root user
        for(Map.Entry<String, Integer> entry : emailToUserMap.entrySet()) {
            String email = entry.getKey();  // Get the email
            int userIndex = ds.findUPar(entry.getValue());  // Find the root user for the current email
            mergedEmails[userIndex].add(email);  // Add the email to the corresponding user's email list
        }
        
        // List to store the final result (merged details)
        List<List<String>> result = new ArrayList<>();
        
        // Loop through all the users and collect their merged email lists
        for(int i = 0; i < n; i++) {
            // If the user has any merged emails, process and add them to the result
            if(mergedEmails[i].size() > 0) {
                Collections.sort(mergedEmails[i]);  // Sort the emails in lexicographical order
                List<String> userDetails = new ArrayList<>();
                userDetails.add(details.get(i).get(0));  // Add the user's name
                userDetails.addAll(mergedEmails[i]);  // Add the sorted email addresses
                result.add(userDetails);  // Add this user's details to the result
            }
        }
        
        return result;  // Return the final merged details
    }
}
