// User function Template for JavaScript
class Solution {
    kClosest(points, k) {
        // Function to calculate the Euclidean distance from the origin (0, 0)
        function calcDistance(x, y) {
            return Math.round(Math.sqrt(x * x + y * y) * 100) / 100; // rounding to 2 decimal places
        }

        // Object to store points grouped by their distance from the origin
        const distancePairs = {};

        // Loop through each point, calculate its distance and store it in distancePairs
        for (let [x, y] of points) {
            let distance = calcDistance(x, y);
            if (distancePairs[distance]) {
                distancePairs[distance].push([x, y]);
            } else {
                distancePairs[distance] = [[x, y]];
            }
        }

        // Sort the distances in ascending order
        const sortedDistances = Object.entries(distancePairs).sort((a, b) => a[0] - b[0]);

        let result = [];
        
        // Collect the k closest points based on the sorted distances
        for (let [distance, pairs] of sortedDistances) {
            for (let pair of pairs) {
                result.push(pair);
                k--; // Decrease k each time we add a point
                if (k === 0) {
                    return result; // Return the result once we have added k points
                }
            }
        }
        
        return result; // Return result in case we didn't hit k points exactly
    }
}
