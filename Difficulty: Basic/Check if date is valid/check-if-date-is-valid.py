# User function Template for Python3

class Solution:
    def isValidDate(self, day, month, year):
        # Helper function to check if a year is a leap year
        def is_leap_year(n):
            return (n % 4 == 0 and n % 100 != 0) or (n % 400 == 0)
        
        # Check if the year, month, and day are within valid ranges
        if year < 1800 or year > 9999 or month < 1 or month > 12 or day < 1 or day > 31:
            return 0
        
        # Special case: February (28 or 29 days in leap years)
        if month == 2:
            return 1 if (day <= 29 if is_leap_year(year) else day <= 28) else 0
        
        # Months with 31 days: January, March, May, July, August, October, December
        if month in (1, 3, 5, 7, 8, 10, 12):
            return 1 if day <= 31 else 0
        
        # Months with 30 days: April, June, September, November
        if month in (4, 6, 9, 11):
            return 1 if day <= 30 else 0
        
        return 0
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        d,m,y=map(int,input().split())
        
        ob = Solution()
        print(ob.isValidDate(d,m,y))
# } Driver Code Ends