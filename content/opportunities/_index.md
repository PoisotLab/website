---
title: Join us!
---

We currently have two openings at the post-doctoral level, to work on the
coupling between biodiversity and ecosystem models in order to develop a
flexible, modular simulation toolkit to assist stakeholder-engaged design of
biodiversity monitoring networks. The work of these post-doctoral scientists
will aim at coupling models of biodiversity status and ecosystem trends, by
**developing a biomonitoring optimization program that can recommend locations
to monitor ecosystem status**, within a biological region of interest, that are
optimal now and under climate change scenarios, in order to capture relevant
changes in biodiversity.

By working closely with the [GEO BON](https://geobon.org/) secretariat, as well
as the nascent Québec-BON, will **support the development of a methodology to
provide information on the optimal Essential Biodiversity Variables (EBV) and
Ecosystem Function Indicators (EFI) to monitor in order to make sound policy
recommendations**.

Ultimately, this project will result in an **assessment of the feasibility of
multi-purpose spatial networks of locations that can inform on statuses and
trends for biodiversity**, with extensions to zoonotic diseases, showing how the
methodology of ecosystem sciences translates to ecosystem conservation and
global health.

A large part of the project will consist on expanding an ecosystem of packages,
hosted and maintained by the [EcoJulia](https://github.com/EcoJulia)
organisation; the overall flow of information is presented in this figure:

<br />
<br />

![Illustration of the anticipated pipeline (novel knowledge products, interactions, and software are in orange). Existing data (grey boxes to the left) will flow through existing codebases for ecosystem structure (EcoSISTEM.jl), community structure (Diversity.jl, Phylo.jl, EcologicalNetworks.jl), climatic data (SimpleSDMLayers.jl, SpatialDataSources.jl), and biological dynamics (BioEnergeticFoodWebs.jl), which will then be coupled to create new simulation models. This task will form the bulk of the work of post-doctoral fellow 1. The output of these simulations will serve to develop BioSurveillance.jl (led by post-doctoral fellow 2), which will be used, through interactions with stakeholders, to simulate multi-purpose monitoring networks, and validate them through case studies in biodiversity and disease dynamics at several spatial (100s to 1000s km²) and temporal (extant to 100 years horizon) scales. The case studies will be carried out by graduate students already working on spatial biodiversity monitoring and spatially explicit disease surveillance, and will serve as a unique opportunity to put these tools to use in a variety of situations, and with a variety of collaborators and stakeholders.](files/wellcome_conceptual_figure.png)

> Illustration of the anticipated pipeline (novel knowledge products, interactions, and software are in orange). Existing data (grey boxes to the left) will flow through existing codebases for ecosystem structure (EcoSISTEM.jl), community structure (Diversity.jl, Phylo.jl, EcologicalNetworks.jl), climatic data (SimpleSDMLayers.jl, SpatialDataSources.jl), and biological dynamics (BioEnergeticFoodWebs.jl), which will then be coupled to create new simulation models. This task will form the bulk of the work of post-doctoral fellow 1. The output of these simulations will serve to develop BioSurveillance.jl (led by post-doctoral fellow 2), which will be used, through interactions with stakeholders, to simulate multi-purpose monitoring networks, and validate them through case studies in biodiversity and disease dynamics at several spatial (100s to 1000s km²) and temporal (extant to 100 years horizon) scales. The case studies will be carried out by graduate students already working on spatial biodiversity monitoring and spatially explicit disease surveillance, and will serve as a unique opportunity to put these tools to use in a variety of situations, and with a variety of collaborators and stakeholders.

<br />
<br />

# Details on the positions

Both positions will be hosted at the Université de Montréal. Both positions come
with yearly travel money, and a lump sum for computer equipment (one laptop and
two monitors).

Post-doctoral researchers at Université de Montréal are part of a union, which
guarantees a yearly salary between 35k and 58k CAD (and benefits). Owing to the
strategic nature of this project, the yearly salary for both positions will
*start* at the highest allowed amount, with extensions up to approx. 63000 CAD
annually for  exceptional applicants, and as an incitative mechanism for
candidates from under-represented minorities in STEM. The salary includes a 3%
guaranteed annual increase.

Both positions share some *desired* qualifications. Desired qualifications are
exactly that -- it would be nice for the applicant to have them, but they can be
picked up rapidly by a motivated scientist. Each position has specific
*required* qualifications -- applicants who do not possess these qualifications
will not be considered.

The desired qualifications common to both positions, listed in no specific
order, are:

- development, maintenance, or significant contributions to software packages,
  showing good practices in software engineering
- experience in writing documentation and vignettes for packages or code
- contribution to a "Software Note" or "Application" article
- experience in using distributed computing systems (CPU and/or GPU)
- expertise in using a version control system (`git` in particular, knowledge of
  *GitHub actions* strongly appreciated)
- knowledge of the *Julia* programming language, or strong willingness to learn 
- work with stakeholders, notably through participation in facilitated or
  stakeholder-engaged workshops or projects
- global understanding of contemporary issues in biodiversity governance
- experience in tropical or temperate ecosystems ecology
- a commitment to open science as a practice -- because we recognize that not
  everyone can safely contribute to open science, this will be assessed both by
  looking at realizations, or by the narrative in the letter of presentation

Both post-docs will be expected to co-lead a workshop on ecosystem modeling, to
be held in the winter of 2022.

## Post-doctoral position 1

The first position is a **three years** appointment starting possibly as early
as September 2021. For this reason, preference will be given to applicants that
are Canadian citizens or permanent residents, but the starting deadline is
extendable to the winter for exceptional international applicants. Because
post-doctoral positions are limited to 5 years post-*Ph.D.*, applicants who are
less than two years post-*Ph.D.* will have an advantage.

Required qualifications:

- above average expertise in programming in ecology, biology, evolution, or
  related fields -- this will be evaluated by examining the applicant
  contribution to software
- *Ph.D.* in ecology, computational biology, or equivalent, ideally less than
  two years ago

Core project milestones:

- comparison of features between `EcoSISTEM.jl` and the `rmaddingley` packages,
  with the production of a specific development roadmap (year 1)
- development of novel modules for the `EcoSISTEM.jl` package, aiming to
  simulate additional biodiversity-related processes (years 1,2)
- develop a case study relying on the integration of empirical data and model
  simulations, with specific applications to either Québec or Colombia (years
  2,3)

## Post-doctoral position 2

The second position is a **two years** appointment, starting as early as
September 2022; the starting deadline is extendable to January 2022 for
exceptional applicants. Because post-doctoral positions are limited to 5 years
post-*Ph.D.*, applicants who are less than three years post-*Ph.D.* will have an
advantage, and we are specifically aiming to hire a *junior* post-doc
(immediately after *Ph.D.*).

Required qualifications:

- strong skills in spatial statistics, and notably Bayesian spatial statistics
- *Ph.D.* in ecology, epidemiology, or statistics applied to either fields,
  which does not have to be completed at the time of application

Core project milestones:

- development of a statistical approach to optimize the location of sampling
  sites in a monitoring network, allowing it to maintain its efficiency under
  current and projected climate scenarios (year 1)
- implementation of this approach in a new software package
  (`BioSurveillance.jl`), automating the collection of climate data and
  presenting different network proposals (year 1,2)
- production of a case study including empirical monitoring data (year 2)

# How to apply

Applications should be send by email to `timothee.poisot@umontreal.ca`, with the
subject line "Ecosystems post-doc NUMBER: NAME". Applications will be reviewed
starting immediately and continue until the positions are filled.

The application should contain a two-pages letter of presentation
(`name-letter.pdf`) containing a brief overview of past research, a description
of how you meet the required and desired qualifications, and a statement of
interest for the position and the project. The application should also contain a
*short* resume (`name-resume.pdf`; no more than three pages), focusing on
professional accomplishments (grades and funding history, as they are strongly
biased against under-represented minorities, will not be evaluated, and do not
need to be mentioned).