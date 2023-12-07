/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int closestValue(TreeNode* root, double target) {
        if (!root) return -1;
        int left = closestValue(root->left, target);
        int right = closestValue(root->right, target);
        int childrenClosest = closerValue(left, right, target);
        return closerValue(childrenClosest, root->val, target);
    }

    int closerValue(int firstVal, int secondVal, double target) {
        if (firstVal == -1) {
            return secondVal;
        } else if (secondVal == -1) {
            return firstVal;
        }

        if (abs(firstVal - target) < abs(secondVal - target) || secondVal == -1) {
            return firstVal;
        } else if (abs(firstVal - target) > abs(secondVal - target) || firstVal == -1) {
            return secondVal;
        } else {
            return firstVal < secondVal ? firstVal : secondVal;
        }
    }

};