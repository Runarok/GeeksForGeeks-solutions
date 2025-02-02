# User function Template for python3

class Solution:
    def TieBreak(self, arr):
        # Initialize a dictionary to count the votes for each candidate
        vote_counts = {}
        
        # Count the votes for each candidate
        for name in arr:
            vote_counts[name] = vote_counts.get(name, 0) + 1
        
        # Find the candidate with the maximum number of votes
        highest_votes = max(vote_counts.values())
        
        # Determine the lexicographically smallest candidate with the highest votes
        winner = min(name for name, votes in vote_counts.items() if votes == highest_votes)
        
        return winner

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        # 		n = int(input())
        arr = [x for x in input().split()]

        ob = Solution()
        ans = ob.TieBreak(arr)
        print(ans)

# } Driver Code Ends