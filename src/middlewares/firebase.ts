import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "fragments-6246",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0ejMQRPD9dfcj\nf6pMXS/GITAAN9DxwLKmOSvTx1LWrrdXYv4RJF4s89vt33Wmfq37soDtFPdNxtj7\nazuI+wJzv0rDjGDJu7/tNE8QJcTSFoTH8ISzwlX55W6iQlOhNKgGxNJ0ki96H836\nTGxZM+pEYvPAxZX9Tkkxb2i+05hwhqXsyfSXor1eZlS1K2dS54YxroPT4AbNrixH\niznJwrphCHTPpea8xLBNXw1T8XL87sMPHuusGcV3MxWyl5uFHeWkhP+KZqk20oBk\nMhdqhWRUYE404sETsMYg5AB1MzxgOAAAOyaRfRG5CM1D1GZmxVg4ZEAvxb3l7WP8\nmOCmE0jfAgMBAAECggEAARK07loqlfyMkqEgscGKwNfTrDyouQyXQ1ZrBKBWcBZW\nhWYo8pB6dYlMUSFsq/0W1bydovXmnodvJNeMtrzJ//GEOp4WuTxXi3aDKH/A/YAg\nG/w5yG6AX7MAhxBz5NfQ+Uappa3KKyS4mc4N2t3sfP7wShYiqoCQ/i1BEdlk5PkK\nwbC98iZyVPGGT8VgAKBazyzYBhzPqeMD5jI7I7PHO8fbFMmtbAVyUiBs+b6iGIQY\n8x4pfoEvbdZWgG1Mr63zTjt67SdSBYBYnVS5pO/gV7+OWaO7fq6+pVr1beJ8K0k/\nhHp6v8FnsWIzCKKwz0c5NFaZpOHcS1AXB6uXz9a/aQKBgQDbZwAymS0xN1ExwiR0\n7mBn5RrM0bkZvCphU+/gPQGR9uhK+B6AApbwubfc55gJcbIWt+o+P5lWC/e6vwn4\nZ0MOw/eCtqYX63uz3akQqrru0bOpVUgvKL3sJX1Aj7FHSDDCmkNfSKgXmS48Oc/2\n03V0hwMAyDhtNViDS0Ofmj2+2wKBgQDSlQJG/ft42B8K4pb49iQRP+JrtEy9TtL9\nLjX0o5Vm5cvxW4US1TNvtOMgGyRNakLv3gfR/sduhzJffFWAT5Xd+9kncUNordy+\nuOYdFtN5CrvooctRCvudQYTkkiDowwE8s7YmnCqG2vFJUZbd95aGeMon3+Ji+JiY\nJTUvBjXzTQKBgQCiehueXOsnuFRrqd8/rMw+BF8dcO5HzZ4A550LjYIdKyEJa8eC\neuh2qsIrWGKyE72Tr21L3eNa4o/5fsIOb8IsLBmedk54Bk5ce/lYu2altyv6aYqE\nSgKj33trFT5ukFpzsrPT20WH/EtOFG4a1qvzuIwTxzJqRYgf6tvQVPQG4wKBgQCP\ns/YI4jugvMN6VyS1oqr8Rn9KBpEzwr3C3q0dVCCZRooFG/JU5r8iJOu1ti/w0Gn7\nbKYjjN0ltQcQGDX0yNq50Krg+q8ImVUBpgYKpdAMUuHmn7qyhG8uYk7A+GOS07hd\nZzoPYRS4UGLGKPJuaQ4EmBtEWMkRxxnDAekoPPHGJQKBgQCoGsQCDKREBTFgCdro\nB9DCqaC+4ehPFg9AkVk1yvwSSnqw1U42+LYLrKt3VfWedKB/8dEbHZELuDyzzBLt\nSA8utxI/7jTkDc4v1nJYqm6oYfZL3ysv+iMd0fg1TGGn1p0xzG9R/8nqmlS3BRx/\njQdKb36Dp1MUf2M+N9FL/l+Dtw==\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-muitu@fragments-6246.iam.gserviceaccount.com",
}),
  storageBucket: 'fragments-6246.appspot.com'
})

const bucket = admin.storage().bucket();

const uploadFirebase = (req, res) => {
    const blob = bucket.file('song/'+ req.file.originalname)
    
    const blobWriter = blob.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    })
    
    blobWriter.on('error', (err) => {
        console.log(err)
    })

    blobWriter.on('finish', () => {
        res.status(200).send("File uploaded.")
        console.log(bucket.getFiles)
    })
    
    blobWriter.end(req.file.buffer)    
}

export default uploadFirebase;