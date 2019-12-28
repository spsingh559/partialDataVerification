
const identityController=require('./merkelAlgoWithLeaves');

const originalIdentity=  {
  name:"Alice",
  emailId:"alice@gmail.com",
  salaryPerMonthInDollar:10000,
  bonus:2000,
  salaryMonth:"Dec2019"
  }
  console.log('==============Original Identity ===========');
  console.log(originalIdentity);
let {root, leaves} =identityController.MerkleRootGeneration(originalIdentity)
// console.log('root generated is', root, 'and tree is', JSON.stringify(tree));





// console.log('==============verification process started===========')
const fakeIdentity=  {
  name:"Alice",
    bonus:3000, //modifying bonus amount
  }
  console.log('\n')
  console.log('==============fake Identity ===========');
  console.log(fakeIdentity);
  console.log('\n')
  let result=identityController.istamperedData(fakeIdentity, root, leaves)
  
  console.log('==============Result of identity verification===========');
  
 result?console.log('Data is Tampered'):console.log('Data is Authentic'); //should be "Data is tampered"





