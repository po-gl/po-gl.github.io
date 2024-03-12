---
title: Mnemonic Generator (CoMP)
year: 2019
layout: project
source: https://github.com/po-gl/ConstrainedMarkovModel
summary: A constrained Markov process (non-hidden) written in C++ with a server that uses a thread pool architecture
summary-tags:
 - Machine Learning
 - C++
 - Constrained Model
 - Sequence Generation
summary-img: /assets/screenshots/comp/NhMMonic.png
tags:
 - Machine Learning
 - C++
 - Concurrency
 - CMake
 - Constrained Model
 - Sequence Generation
 - Constraint Satisfaction Problem
 - Markov Chain
imgs: /assets/screenshots/comp/NhMMonic.png
---

CoMP is an acronym for a Constrained Markov Process, a non-homogenous Markov model described by Pachet et al.

This model was built while I was an undergrad to supplement a paper in the context of mnemonic device generation, *“She Offered No Argument”: Constrained Probabilistic Modeling for Mnemonic Device Generation*. The paper can be read in the proceedings of ICCC 2019 ([here](http://computationalcreativity.net/iccc2019/assets/iccc_proceedings_2019.pdf#page=95)).

<!-- You can try the model out to create mnemonic devices at ISU's CCIL website [here](https://ccil.cs.isu.edu/projects/nhmmonic/). -->

The project uses the C++14 standard and has a thread pool architecture to serve mnemonic device generation data to a separate web server process over IPC.

