#{ 
 # Driver Code Starts
#Initial Template for Python 3

class Shop:
    chocolates=[]
    countOfCalls=0
    def __init__(self):
        self.chocolates=[]
        self.countOfCalls=0
    def addChocolate(self,price):
        self.chocolates.append(price)
    def get(self,i):
        self.countOfCalls+=1
        if (self.countOfCalls>50 or i>=len(self.chocolates) or i<0):
            return -1
        return self.chocolates[i]


# } Driver Code Ends
#User function Template for python3
class Solution:
    shop = Shop()  # Object of Shop class to interact with the shop

    def __init__(self, shop):
        self.shop = shop  # Initialize with the shop object

    # Function to search for the chocolate with cost <= k
    def search(self, n, k):
        start = 0
        end = n  # Initial search range
        cost = shop.get(end)  # Get the cost of the last chocolate

        # If the last chocolate is cheaper than k, return its cost and index
        if cost < k:
            return [cost, end]

        # Binary search for the appropriate chocolate within the range
        while True:
            mid = (start + end) // 2
            cost = shop.get(mid)

            # If no chocolate is found, return False
            if cost == -1:
                return False

            # If the cost of chocolate is less than k, adjust the start pointer
            if cost < k:
                start = mid
                if end - start == 1:
                    return [cost, start]
            # If the cost of chocolate is more than k, adjust the end pointer
            elif cost > k:
                end = mid
                if end - start == 1:
                    return [shop.get(start), start]
            else:  # If the cost exactly matches k, return that chocolate
                return [cost, mid]

    # Function to find the maximum number of chocolates that can be bought with k
    def find(self, n, k):
        tasted = 0  # Counter for number of chocolates bought
        n -= 1  # Adjust the index for 0-based indexing
        
        # Continue purchasing chocolates until the budget runs out
        while k:
            # Search for the chocolate with a cost <= k
            Search = self.search(n, k)
            if Search:
                costliest = Search[0]  # Get the costliest chocolate found
                n = Search[1]  # Update the index of the found chocolate
                buy = k // costliest  # Calculate how many chocolates can be bought
                tasted += buy  # Update the total number of chocolates bought
                k -= buy * costliest  # Subtract the total spent from the budget
            else:
                return tasted  # If no suitable chocolate is found, return the number bought
        
        return tasted  # Return the total number of chocolates bought




#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        shop=Shop()
        n, k = list(map(int, input().strip().split()))
        arr = list(map(int, input().strip().split()))
        for choco in arr:
            shop.addChocolate(choco)
        ob = Solution(shop)
        ans = ob.find(n, k)
        print(ans)
        print("~")
        tc -= 1
        

        
# } Driver Code Ends