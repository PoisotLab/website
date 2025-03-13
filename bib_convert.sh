wget --content-disposition -N https://paperpile.com/eb/vsVctxSbFd # BiologicalMonitoring
wget --content-disposition -N https://paperpile.com/eb/USCsCkrcGe # CoEvolution
wget --content-disposition -N https://paperpile.com/eb/KqrvXPwjvi # Collaborations
wget --content-disposition -N https://paperpile.com/eb/wLfVpxbtBs # Commentaries
wget --content-disposition -N https://paperpile.com/eb/oTNHjwADxJ # CommunityEcology
wget --content-disposition -N https://paperpile.com/eb/geRcPLLhrC # EltonianShortfall
wget --content-disposition -N https://paperpile.com/eb/cbYxnZmZgG # IndependentResearch
wget --content-disposition -N https://paperpile.com/eb/vVIMtTzNJe # InteractionPrediction
wget --content-disposition -N https://paperpile.com/eb/whygWESrgK # MicrobialSystems
wget --content-disposition -N https://paperpile.com/eb/TdYVbbVKzE # NetworksInSpace
wget --content-disposition -N https://paperpile.com/eb/kOptvsZGjM # NetworkStructure
wget --content-disposition -N https://paperpile.com/eb/OwpCVSlixt # NetworkVariability
wget --content-disposition -N https://paperpile.com/eb/rrhnleKQQt # SustainableResearch
wget --content-disposition -N https://paperpile.com/eb/MJvQAPCZwR # ViromeWork

for collection in BiologicalMonitoring IndependentResearch CoEvolution EltonianShortfall NetworksInSpace InteractionPrediction ViromeWork Collaborations MicrobialSystems NetworkStructure NetworkVariability SustainableResearch CommunityEcology Commentaries
do
    mv $collection.bib references/
    pandoc references/$collection.bib -t csljson -o data/bibliographies/$collection.json
done