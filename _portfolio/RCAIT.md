---
title: "RCAIT"
excerpt: "Modular application to facilitate the process of training and using image classification models"
header:
    teaser: /assets/images/RCAIT.svg
classes: wide
---

A collaborative project that was developed by a team of 5 students at KIT for the Fraunhofer IOSB as part of the course PSE (Praxis der Software Entwicklung / Software Engineering in Practice).\
Languages: QT Framework and Python

# Description
To train Deep learning-based models, much training data is needed. Collecting and annotating this training data can consume a lot of time and resources. The goal of the Rapid-Classification AI Trainer project is to develop a desktop application that uses search terms to load images from the internet and then starts the training of a deep learning model with them. Using the search terms, the images already have a class assignment and no longer need to be annotated. A central requirement of the project is a high degree of modularity. Both the loading of the images and the AI training are to be implemented via plug-ins, so that new data sources and new training methods can be added later.

# Outcome
The outcome besides many documents and presentations was an extensible plugin-based application that supported several plugins to construct labelled data sets and an image classification plugin based on MMClassification to train, classify and validate models.  This was all tied together in a sleek UI which also included further functionality to evaluate and compare results graphically as well as saving and loading projects from persistent storage.\
\
Unfortunately, the source code is not publicly available, however there is a demo video [here](https://www.youtube.com/watch?v=EpFT-wCT7l8).
