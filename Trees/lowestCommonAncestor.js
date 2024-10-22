class Trees {
    constructor(value){
       this.value=value
       this.left=null
       this.right=null
    }

  }  

   const storeTree =(s,d)=>{
        this.ensureVertex(s);
        this.ensureVertex(d);
        this.arrayList[s].push(d);
        this.arrayList[d].push(s);

    }

   

const graph = new Graph()

const lowestCommonAncestor =(root,p,q)=>{
  if(!root)return null;

  if(p.value>root.value && q.value>root.value){
    return lowestCommonAncestor(root.right,p,q)
  }
  if(p.value<root && q.value<root.value){
    return lowestCommonAncestor(root.left,p,q)
  }
  return root
}