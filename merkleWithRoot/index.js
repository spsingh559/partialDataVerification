
const identityController=require('./merkleAlgoWithRoots');

const originalIdentity=  {
    name:"Alice",
    emailId:"alice@gmail.com",
    salaryPerMonthInDollar:10000,
    bonus:2000,
    salaryMonth:"Dec2019"
  }
  console.log('==============Original Identity ===========');
  console.log(originalIdentity);
let {root, tree} =identityController.MerkleRootGeneration(originalIdentity)
// console.log('root generated is', root, 'and tree is', JSON.stringify(tree));





// console.log('==============verification process started===========')
const fakeIdentity=  {
  name:"Alice",
  emailId:"alice@gmail.com",
  salaryPerMonthInDollar:11000, //tampered salary data
  bonus:2000,
  salaryMonth:"Dec2019"
  }
  console.log('\n')
  console.log('==============fake Identity ===========');
  console.log(fakeIdentity);
  console.log('\n')
  let result=identityController.istamperedData(fakeIdentity, root, tree)
  
  console.log('==============Result of identity verification===========');
  
 result?console.log('Data is Tampered'):console.log('Data is Authentic');





