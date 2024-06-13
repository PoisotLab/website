for collection in BiologicalMonitoring IndependentResearch
do
    pandoc references/$collection.bib -t csljson -o data/bibliographies/$collection.json
done