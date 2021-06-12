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
}

export const ghosts: Ghost[] = [
  {
    name: "Banshee",
    evidence: [Evidence.EMF, Evidence.Fingerprints, Evidence.FreezingTemps],
  },
  {
    name: "Demon",
    evidence: [
      Evidence.GhostWriting,
      Evidence.SpiritBox,
      Evidence.FreezingTemps,
    ],
  },
  {
    name: "Hantu",
    evidence: [Evidence.Fingerprints, Evidence.GhostOrb, Evidence.GhostWriting],
  },
  {
    name: "Jinn",
    evidence: [Evidence.EMF, Evidence.SpiritBox, Evidence.GhostOrb],
  },
  {
    name: "Mare",
    evidence: [Evidence.SpiritBox, Evidence.FreezingTemps, Evidence.GhostOrb],
  },
  {
    name: "Oni",
    evidence: [Evidence.EMF, Evidence.GhostWriting, Evidence.SpiritBox],
  },
  {
    name: "Phantom",
    evidence: [Evidence.EMF, Evidence.FreezingTemps, Evidence.GhostOrb],
  },
  {
    name: "Poltergeist",
    evidence: [Evidence.Fingerprints, Evidence.SpiritBox, Evidence.GhostOrb],
  },
  {
    name: "Revenant",
    evidence: [Evidence.EMF, Evidence.GhostWriting, Evidence.Fingerprints],
  },
  {
    name: "Shade",
    evidence: [Evidence.EMF, Evidence.GhostWriting, Evidence.GhostOrb],
  },
  {
    name: "Spirit",
    evidence: [
      Evidence.GhostWriting,
      Evidence.Fingerprints,
      Evidence.SpiritBox,
    ],
  },
  {
    name: "Wraith",
    evidence: [
      Evidence.Fingerprints,
      Evidence.SpiritBox,
      Evidence.FreezingTemps,
    ],
  },
  {
    name: "Yokai",
    evidence: [Evidence.SpiritBox, Evidence.GhostOrb, Evidence.GhostWriting],
  },
  {
    name: "Yurei",
    evidence: [
      Evidence.GhostWriting,
      Evidence.FreezingTemps,
      Evidence.GhostOrb,
    ],
  },
];
