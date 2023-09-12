---
title: "Thesis"
excerpt: "Implementation and formal verification of Solidity Data Structures"
header:
    teaser: /assets/images/Thesis.svg
classes: wide
---
My Bachelor's thesis focused on the implementation of novel data structures in Solidity and then using formal verification to prove their correctness.

# Motivation
Solidity is a domain Specific programming language used to author smart contracts for the Ethereum blockchain. It is imperative for published smart contracts to be secure and to behave precisely as expected. Flaws in logic can be exploited by malicious actors and cause massive damage of financial nature.  One possibility to ensure behavioural constraints is to use formal verification. 
\
\
Furthermore, since Solidity is a relatively young language, many useful data structures are not (yet) natively available.
\
\
The goal was to address both aspects by supplying basic Solidity constructs that can be used in future Smart contracts. This not only adds functionality to the Solidity ecosystem but also contributes to the overall security as developers need not implement such structures themselves and can fall back on existing trustworthy implementations.

The implementations can be found [here](https://github.com/Joensw/solidity-formal-specification).
\
The Pdf can be found [here](https://jonas-wille.github.io/assets/files/Thesis.pdf).
