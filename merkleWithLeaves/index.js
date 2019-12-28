
const identityController=require('./merkelAlgoWithLeaves');

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
let {root, leaves} =identityController.MerkleRootGeneration(originalIdentity)
// console.log('root generated is', root, 'and tree is', JSON.stringify(tree));





// console.log('==============verification process started===========')
const fakeIdentity=  {
  name:"Alice",
    age:"21",
    creditCardScore:4.1 //Tampered Credit score
  }
  console.log('\n')
  console.log('==============fake Identity ===========');
  console.log(fakeIdentity);
  console.log('\n')
  let result=identityController.istamperedData(fakeIdentity, root, leaves)
  
  console.log('==============Result of identity verification===========');
  
 result?console.log('Data is Tampered'):console.log('Data is Authentic');





