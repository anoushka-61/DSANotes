//sum of nodes
//count of nodes
//tree height
//tree diamete o(n)


class TreeNodes{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const buildTree =(preOrder)=>{

  const build=(bound)=>{
    if(!preOrder.length || preOrder[0]>bound) return null;

    const rootValue = preOrder.shift();
    const root = new TreeNodes(rootValue)

    root.left= build(rootValue);
    root.right = build(bound);

    return root;
  }
return build(Infinity)
}

const preorder = [8, 5, 1, 7, 10, 12,9];
const root = buildTree(preorder);

// Helper function to print inorder traversal of the tree (to verify correctness)
function preorderTraversal(node) {
  if(!node) return ;
  console.log(node.value);
  preorderTraversal(node.left);
  
  preorderTraversal(node.right)
}

const countNodes=(root)=>{
 if(root === null) return 0;
 const countLeft = countNodes(root.left)
 const countRight = countNodes(root.right)

 return countLeft+countRight+1
  
}
const countNodesValue=(root)=>{
    if(root === null) return 0;
    const countLeft = countNodesValue(root.left)
    const countRight = countNodesValue(root.right)
   
    return countLeft+countRight+root.value
  
}

const rootHeight=(root)=>{
    if(root === null) return 0;
    const leftHeight = rootHeight(root.left);
    const rightHeight = rootHeight(root.right)

    return Math.max(leftHeight, rightHeight)+1
}

const diameter =(root)=>{
    let maxDiam =0;
    const rootHeight =(node)=>{
        if(!node) return 0;
        const leftHeight = rootHeight(node.left)
        const rightHeight = rootHeight(node.right)
        const diam =leftHeight+ rightHeight
      maxDiam =Math.max(maxDiam,diam)

      return Math.max(leftHeight, rightHeight)+1
    }

  
   rootHeight(root)
  return maxDiam;
}

console.log("Inorder traversal of the constructed BST:");
preorderTraversal(root);
console.log("sum of nodes",diameter(root))
