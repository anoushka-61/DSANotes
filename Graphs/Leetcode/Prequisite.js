
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 


function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);

    // Build the graph and calculate in-degrees
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course); // Edge from prereq to course
        inDegree[course]++;   
        console.log(inDegree)      // Increase the in-degree for the course
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0; // To count how many courses can be taken
    while (queue.length > 0) {
        const course = queue.shift();
        count++; // One course can be completed

        for (const neighbor of graph[course]) {
            inDegree[neighbor]--; // Decrease in-degree for neighbor courses
            console.log("less",inDegree)   
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor); // Add to queue if it has no remaining prerequisites
            }
        }
    }

    return count === numCourses; // If all courses can be completed
}

// Example usage:
const numCourses1 = 2;
const prerequisites1 = [[1, 0]];
console.log(canFinish(numCourses1, prerequisites1)); // Output: true

const numCourses2 = 2;
const prerequisites2 = [[1, 0], [0, 1]];
console.log(canFinish(numCourses2, prerequisites2)); // Output: false

const numCourses3 = 4;
const prerequisites3 = [[1, 0], [2, 1], [3, 2]];
console.log(canFinish(numCourses3, prerequisites3)); // Output: true

const numCourses4 = 3;
const prerequisites4 = [[0, 1], [1, 2], [2, 0]];
console.log(canFinish(numCourses4, prerequisites4)); // Output: false
