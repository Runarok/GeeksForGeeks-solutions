//{ Driver Code Starts
/*package whatever //do not write package name here */

import java.io.*;
import java.math.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            String[] words = sc.nextLine().trim().split(" ");
            int k = Integer.parseInt(sc.nextLine());
            int n = words.length;
            Solution ob = new Solution();
            //  System.out.println(T.findOrder(words,k));
            String order = ob.findOrder(words, k);
            if (order.length() == 0) {
                System.out.println("false");
                System.out.println("~");
                continue;
            }
            if (order.length() != k) {
                System.out.println("INCOMPLETE");
                System.out.println("~");
                return;
            }
            String temp[] = new String[n];
            for (int i = 0; i < n; i++) temp[i] = words[i];

            Arrays.sort(temp, new Comparator<String>() {
                @Override
                public int compare(String a, String b) {
                    int index1 = 0;
                    int index2 = 0;
                    for (int i = 0;
                         i < Math.min(a.length(), b.length()) && index1 == index2;
                         i++) {
                        index1 = order.indexOf(a.charAt(i));
                        index2 = order.indexOf(b.charAt(i));
                    }

                    if (index1 == index2) {
                        return Integer.compare(a.length(), b.length());
                    }

                    return Integer.compare(index1, index2);
                }
            });

            int flag = 1;
            for (int i = 0; i < n; i++) {
                if (!words[i].equals(temp[i])) {
                    flag = 0;
                    break;
                }
            }
            if (flag == 1)
                System.out.println("true");
            else
                System.out.println("false");
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


class Solution {
    public String findOrder(String[] dict, int k) {
        List<List<Integer>> adjList =new ArrayList<>();
        for(int i=0;i<k;i++){
            adjList.add(new ArrayList<>());
        }
        int []indegree=new int[k];
        
        for(int i=0;i<dict.length-1;i++){
            String w1=dict[i];
            String w2=dict[i+1];
            int len=Math.min(w1.length(),w2.length());
            for(int j=0;j<len;j++){
                if(w1.charAt(j)!=w2.charAt(j)){
                    int u=w1.charAt(j)-'a';
                    int v=w2.charAt(j)-'a';
                    adjList.get(u).add(v);
                    indegree[v]++;
                    break;
                }
            }
        }
        Queue<Integer> q=new LinkedList<>();
        StringBuilder sb = new StringBuilder();
        
        for(int i=0;i<k;i++){
            if(indegree[i]==0){
                q.offer(i);
            }
        }
        while(!q.isEmpty()){
            int u=q.poll();
            sb.append((char)(u+'a'));
            for(int v : adjList.get(u)){
                indegree[v]--;
                if(indegree[v]==0){
                    q.add(v);
                }
            }
        }
        if(sb.length()!=k){
            return "";
        }
        return sb.toString();
    }
}