const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')
let obj = {}

obj.MerkleRootGeneration = (identity) => {
    const identityValue = Object.values(identity)
    const identitykey = Object.keys(identity);
    const leaves = identityValue.map((x, index) => SHA256(identitykey[index] + ':' + x))
    const tree = new MerkleTree(leaves, SHA256)
    const root = tree.getRoot().toString('hex')
    return { root, tree }
}

obj.istamperedData = (fakeIdentity, root, tree) => {
    let count = 0;
    const fakeIdentityValue = Object.values(fakeIdentity)
    const fakeIdentitykey = Object.keys(fakeIdentity)
    fakeIdentityValue.forEach((data, index) => {
        const leaf = SHA256(fakeIdentitykey[index] + ':' + data)
        const proof = tree.getProof(leaf)
        let flag = tree.verify(proof, leaf, root);
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