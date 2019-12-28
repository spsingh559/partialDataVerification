
const identityController=require('./merkleAlgoWithRoots');

const originalIdentity=  {
    name:"Alice",
    age:"21",
    mobileNumber:"5511xxxxx",
    emailId:"alice@gmail.com",
    salaryPerMonthInDollar:10000,
    creditCardScore:4
  }
  console.log('==============Original Identity ===========');
  console.log(originalIdentity);
let {root, tree} =identityController.MerkleRootGeneration(originalIdentity)
// console.log('root generated is', root, 'and tree is', JSON.stringify(tree));





// console.log('==============verification process started===========')
const fakeIdentity=  {
  name:"Alice",
    age:"21",
    mobileNumber:"5511xxxxx",
    emailId:"alice@gmail.com",
    salaryPerMonthInDollar:11000, //Tampered Salary Data
    creditCardScore:4
  }
  console.log('\n')
  console.log('==============fake Identity ===========');
  console.log(fakeIdentity);
  console.log('\n')
  let result=identityController.istamperedData(fakeIdentity, root, tree)
  
  console.log('==============Result of identity verification===========');
  
 result?console.log('Data is Tampered'):console.log('Data is Authentic');





