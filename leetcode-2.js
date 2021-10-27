// Invert binary tree
// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!(root?.left && root?.right)) {
    return root;
  }

  [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
};

console.log(
  "Expected: [4,7,2,9,6,3,1]",
  "-----",
  "Returned:",
  invertTree([4, 2, 7, 1, 3, 6, 9])
);
