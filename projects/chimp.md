---
title: CHiMP (Thesis)
year: 2021
layout: project
source: https://github.com/po-gl/ConstrainedHiddenMarkovModel
summary: A constrained hidden Markov process written in Rust -- a novel model which is the basis of my master's thesis
summary-tags:
 - Machine Learning
 - Rust
 - Constrained Model
 - Sequence Generation
summary-img: /assets/screenshots/chimp/Nodes.png
tags:
 - Machine Learning
 - Constrained Model
 - Sequence Generation
 - Constraint Satisfaction Problem
 - Hidden Markov Model
 - Rust
 - Thesis
---

CHiMP is an acronym for a **C**onstrained **Hi**dden **M**arkov **P**rocess.

This novel model was implemented as part of my [Master's thesis](https://porterglines.com/assets/Glines_Porter_MS.pdf) to generate musical sequences
styled after Bach chorales (also see [https://github.com/po-gl/BachPipeline](https://github.com/po-gl/BachPipeline)). For example, the sequence below is constrained to be the beginning and end of the first five measures of Bach's *"Wer nur den lieben Gott läßt walten"*. Constraints are colored green.

<img alt="Generated Bach chorale" src="/assets/screenshots/chimp/LeibenGott.png">

The constrained hidden Markov processes is an extension of work done by Pachet et al. in their paper, *"Finite-Length Markov Processes with Constraints."* The model generates sequences and can apply user-defined constraints to the sequences. Sequences can be generated in any number of domains, such as natural language or music generation. Below is a visual representation of a trained constrained hidden Markov model.

<img alt="trained model for toy example" src="/assets/screenshots/chimp/Nodes.png">



