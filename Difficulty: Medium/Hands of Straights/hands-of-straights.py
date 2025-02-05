#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends


# User function Template for python3
import heapq

class Solution:
    def isStraightHand(self, N, groupSize, hand):
        # Initialize a dictionary to count the occurrences of each card in the hand
        cnt = {}
        for i in hand:
            if i not in cnt:
                cnt[i] = 1  # If the card is not yet in the dictionary, add it with count 1
            else:
                cnt[i] += 1  # If the card is already in the dictionary, increment its count

        # Convert the keys of the dictionary (unique card values) into a list and heapify it
        l = list(cnt.keys())
        heapq.heapify(l)

        # Iterate over the sorted cards in ascending order
        while l:
            # Pop the smallest card value from the heap
            i = heapq.heappop(l)
            
            # If the current card has a non-zero count, we need to form a group
            if cnt[i] > 0:
                c = cnt[i]  # Get the count of this card
                # Attempt to form a group of consecutive cards starting from card `i`
                for j in range(i, i + groupSize):
                    # If a card in the sequence is not available or its count is less than `c`, return False
                    if j not in cnt or cnt[j] < c:
                        return False
                    # Decrease the count of the current card in the sequence
                    cnt[j] -= c

            # If any card has a negative count, it means there are leftover cards, return False
            if cnt[i] < 0:
                return False

        # If all conditions are met, return True
        return True

        
        

#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        N, groupSize = list(map(int, input().split()))
        hand = list(map(int, input().split()))
        ob = Solution()
        res = ob.isStraightHand(N, groupSize, hand);
        print(res)
        print("~")
# } Driver Code Ends