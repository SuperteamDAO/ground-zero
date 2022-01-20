---
title: "↔ Integrating authentication, the web3 style"
authors:
  - name: '@rajkaria'
    url: 'https://github.com/rajkaria'
  - name: '@kb24x7'
    url: 'https://github.com/kb24x7'
---

In this tutorial, let's see how we can make an authentication system with a normal back-end server and the user's wallet.

![](../.gitbook/assets/code-2.png)

Here's the entire flow-chart, we will go through each one of them:

> [https://www.figma.com/file/nxbu0x7iS9btoPIFNIdlxJ/Authentication?node-id=0%3A1](https://www.figma.com/file/nxbu0x7iS9btoPIFNIdlxJ/Authentication?node-id=0%3A1)

1. User tries to do an action that requires some proof of ownership that the public key (or wallet address) is owned by the same person.
2. Frontend sends a network request to the backend to get a one-time hash for that public key. The Backend generates the hash and stores it to the DB, then that hash is returned in the response.
3. Frontend receives the hash from the response and gets it signed from the user's wallet.
4. It sends the signature along with the other parameters required for the authentication gated action.
5. Backend gets the hash from the DB and decodes the received signature to verify if its valid.

## Decoding the signature in the Backend:

For JavaScript:

> [https://github.com/dchest/tweetnacl-js/blob/master/README.md#naclsigndetachedverifymessage-signature-publickey](https://github.com/dchest/tweetnacl-js/blob/master/README.md#naclsigndetachedverifymessage-signature-publickey)

If the signature is valid, the Backend does the requested authentication gated action and sends the success response to the Frontend and the Frontend displays a success message.

If we want to reduce friction for the user, the Backend could generate a token for the user after the signature is verified and send it to the Frontend for storing and authorizing actions until the token expires. It would prevent the need for signing a message on every action.

## FAQs

If you have any doubts related to this topic or you have a suggestion, feel free to create an issue [here](https://github.com/SuperteamDAO/ground-zero/issues).

If you want to make edits to this topic or update the topic, please click on the "Edit on Github" link you see on the top below the title, make the changes and create a pull request to the master branch. One of the moderators will look at your changes & merge your changes if all looks good.

And yes, if you update anything on this topic, don't forget to add your GitHub username to the contributors' list!

Have a happy learning! ✌️
