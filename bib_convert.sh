for collection in BiologicalMonitoring IndependentResearch CoEvolution EltonianShortfall NetworksInSpace InteractionPrediction
do
    pandoc references/$collection.bib -t csljson -o data/bibliographies/$collection.json
done