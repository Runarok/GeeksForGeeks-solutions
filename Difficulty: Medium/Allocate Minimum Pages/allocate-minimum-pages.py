class Solution:
    
    # Function to find minimum number of pages.
    def findPages(self, arr, k):
        n = len(arr)
        
        # If number of students is greater than the number of books, return -1
        if k > n:
            return -1
        
        # Helper function to check if we can allocate books such that no student has more than maxPages
        def isPossible(maxPages):
            students_required = 1  # At least one student is required
            pages_assigned = 0
            
            for pages in arr:
                if pages_assigned + pages > maxPages:
                    # Allocate new student if the current student can't take more pages
                    students_required += 1
                    pages_assigned = pages
                    
                    # If more students are required than available, return False
                    if students_required > k:
                        return False
                else:
                    pages_assigned += pages
                    
            return True
        
        # Binary search for the minimum possible max pages
        left = max(arr)  # At least one student has to take the largest book
        right = sum(arr)  # The sum of all books if all books are given to one student
        
        result = -1
        
        while left <= right:
            mid = (left + right) // 2
            
            if isPossible(mid):
                result = mid
                right = mid - 1
            else:
                left = mid + 1
        
        return result



#{ 
 # Driver Code Starts
#Initial Template for Python 3
import bisect
#Main
if __name__ == '__main__':
    t = int(input())
    while t:
        t -= 1
        A = [int(x) for x in input().strip().split()]
        nd = [int(x) for x in input().strip().split()]
        D = nd[0]
        ob = Solution()
        ans = ob.findPages(A, D)
        print(ans)
        print("~")

# } Driver Code Ends