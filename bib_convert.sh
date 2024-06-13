for collection in BiologicalMonitoring IndependentResearch CoEvolution EltonianShortfall
do
    pandoc references/$collection.bib -t csljson -o data/bibliographies/$collection.json
done