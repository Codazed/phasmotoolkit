interface Ghost {
  name: string;
  evidence: Evidence[] | string;
}

export enum Evidence {
  EMF = "EMF Level 5",
  GhostWriting = "Ghost Writing",
  Fingerprints = "Fingerprints",
  SpiritBox = "Spirit Box",
  FreezingTemps = "Freezing Temperatures",
  GhostOrb = "Ghost Orb",
  DotsProj = "D.O.T.S Projector",
}

export const ghosts: Ghost[] = [
  {
    name: "Banshee",
    evidence: [Evidence.GhostOrb, Evidence.Fingerprints, Evidence.DotsProj],
  },
  {
    name: "Demon",
    evidence: [
      Evidence.GhostWriting,
      Evidence.Fingerprints,
      Evidence.FreezingTemps,
    ],
  },
  {
    name: "Goryo",
    evidence: [Evidence.EMF, Evidence.Fingerprints, Evidence.DotsProj],
  },
  {
    name: "Hantu",
    evidence: [
      Evidence.Fingerprints,
      Evidence.GhostOrb,
      Evidence.FreezingTemps,
    ],
  },
  {
    name: "Jinn",
    evidence: [Evidence.EMF, Evidence.Fingerprints, Evidence.FreezingTemps],
  },
  {
    name: "Mare",
    evidence: [Evidence.SpiritBox, Evidence.GhostWriting, Evidence.GhostOrb],
  },
  {
    name: "Myling",
    evidence: [Evidence.EMF, Evidence.Fingerprints, Evidence.GhostWriting],
  },
  {
    name: "Obake",
    evidence: [Evidence.EMF, Evidence.Fingerprints, Evidence.GhostOrb],
  },
  {
    name: "Oni",
    evidence: [Evidence.EMF, Evidence.FreezingTemps, Evidence.DotsProj],
  },
  {
    name: "Onryo",
    evidence: [Evidence.SpiritBox, Evidence.GhostOrb, Evidence.FreezingTemps],
  },
  {
    name: "Phantom",
    evidence: [Evidence.SpiritBox, Evidence.Fingerprints, Evidence.DotsProj],
  },
  {
    name: "Poltergeist",
    evidence: [
      Evidence.Fingerprints,
      Evidence.SpiritBox,
      Evidence.GhostWriting,
    ],
  },
  {
    name: "Raiju",
    evidence: [Evidence.EMF, Evidence.GhostOrb, Evidence.DotsProj],
  },
  {
    name: "Revenant",
    evidence: [
      Evidence.GhostOrb,
      Evidence.GhostWriting,
      Evidence.FreezingTemps,
    ],
  },
  {
    name: "Shade",
    evidence: [Evidence.EMF, Evidence.GhostWriting, Evidence.FreezingTemps],
  },
  {
    name: "Spirit",
    evidence: [Evidence.GhostWriting, Evidence.EMF, Evidence.SpiritBox],
  },
  {
    name: "The Twins",
    evidence: [Evidence.EMF, Evidence.SpiritBox, Evidence.FreezingTemps],
  },
  {
    name: "Wraith",
    evidence: [Evidence.EMF, Evidence.SpiritBox, Evidence.DotsProj],
  },
  {
    name: "Yokai",
    evidence: [Evidence.SpiritBox, Evidence.GhostOrb, Evidence.DotsProj],
  },
  {
    name: "Yurei",
    evidence: [Evidence.DotsProj, Evidence.FreezingTemps, Evidence.GhostOrb],
  },
];
