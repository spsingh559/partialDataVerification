const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')
let obj = {}

obj.MerkleRootGeneration = (claim) => {
    const claimValue = Object.values(claim)
    const claimkey = Object.keys(claim)

    let leaves = claimValue.map((x, index) => SHA256(claimkey[index] + ':' + x)) //converting data into key and value pair like 'creditCardScore:4' and then taking sha256 of this value
    let tree = new MerkleTree(leaves, SHA256)
    const root = tree.getRoot().toString('hex')
    leaves = leaves.toString(); //store leaves into blockchain ledger which point to particular identity
    console.log(leaves);
    return { root, leaves }
}

obj.istamperedData = (fakeClaim, root, leaves) => {
    leaves = leaves.split(',')
    let tree = new MerkleTree(leaves, SHA256) // re creating tree
    let count = 0;
    const fakeClaimValue = Object.values(fakeClaim)
    const fakeClaimkey = Object.keys(fakeClaim)
    fakeClaimValue.forEach((data, index) => {
        const leaf = SHA256(fakeClaimkey[index] + ':' + data) //converting data into key and value pair like 'creditCardScore:4' because original leaves were like that
        const proof = tree.getProof(leaf) // re create entire leaves
        let flag = tree.verify(proof, leaf, root); // compare root genrated by new leaf to old root
        if (flag == false) {
            count++;
        }
    })

    if (count > 0) {
        return true
    }
    return false;
}

module.exports = obj;