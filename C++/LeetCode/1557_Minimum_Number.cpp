// 1557. Minimum Number of Vertices to Reach All Nodes
// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
// Medium

// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
// Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.
// Notice that you can return the vertices in any order.

/* Example 1:
Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
Output: [0,3]
Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].
*/

/* Constraints:
1 <= n <= 5 * 10^4
edges.length == n - 1
edges[i].length == 2
0 <= fromi, toi <= n-1
fromi < toi
All pairs (fromi, toi) are distinct.
*/

/* Github Copilot Solution */
// Time Complexity: O(n)
// Space Complexity: O(n)
// Runtime: 419 ms, faster than 30.08% of C++ online submissions for Minimum Number of Vertices to Reach All Nodes.
// Memory Usage: 94.4 MB, less than 56.95% of C++ online submissions for Minimum Number of Vertices to Reach All Nodes.

class Solution {
public:
    vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges) {
        vector<int> res;
        vector<int> indegree(n, 0);
        for (auto& edge : edges) {
            indegree[edge[1]]++;
        }
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                res.push_back(i);
            }
        }
        return res;
    }
};