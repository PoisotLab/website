for collection in BiologicalMonitoring IndependentResearch CoEvolution EltonianShortfall NetworksInSpace InteractionPrediction ViromeWork Collaborations MicrobialSystems NetworkStructure NetworkVariability SustainableResearch CommunityEcology Commentaries
do
    pandoc references/$collection.bib -t csljson -o data/bibliographies/$collection.json
done