//Build
//preorderTraversal - rooot->left->right
//InorderTraversal- left-root-right
//PostOrderTraversal - ledt-right-root
//LevelOrderTraversal

class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const buildTreeFromPreorder = (preorder)=>{
    const buildTreeNodes = (bound)=>{
         if(!preorder.length || preorder[0]>bound) return null;

         const rootValue = preorder.shift();
         const root = new TreeNode(rootValue)

         root.left= buildTreeNodes(rootValue);
         root.right= buildTreeNodes(bound)

         return root;
    }

 return buildTreeNodes(Infinity)
}
const preorder = [8, 5, 1, 7, 10, 12];
const root = buildTreeFromPreorder(preorder);

// Helper function to print inorder traversal of the tree (to verify correctness)
function preorderTraversal(node) {
  if(!node) return ;
  console.log(node.value);
  preorderTraversal(node.left);
  
  preorderTraversal(node.right)
}

const  InorderTraversal =(node)=>{
   if(!node) return;
   InorderTraversal(node.left)
   console.log(node.value)
   InorderTraversal(node.right)
}

const postOrderTraversal =(node)=>{
    if(!node) return ;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value)
}

const levelOrderTraversal =(node)=>{
    const q =[];
    q.push(node);
    q.push(null)
    while(q.length){
        const current = q.shift();
        if(current===null){
            console.log()
            if(q.length){
                q.push(null)
            } else {
                break;
            }
        } else{
            process.stdout.write(current.value + " ");


            if(current.left!==null){
                q.push(current.left)
            }
            if(current.right!==null){
                q.push(current.right)
            }
        }
    }

}

// Output the inorder traversal of the constructed tree
console.log("Inorder traversal of the constructed BST:");
// preorderTraversal(root);
// InorderTraversal(root);
// postOrderTraversal(root)

levelOrderTraversal(root)