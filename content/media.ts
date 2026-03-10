/**
 * MEDIA CONFIGURATION
 * 
 * Paste image URLs here. You can use remote links or /assets/... paths from the public folder.
 * If a field is empty, the UI will fall back to its text placeholder.
 */

export const MEDIA = {
  home: {
    heroProblemVisual: "https://i.imgur.com/jHx3V7B.jpeg", // The big right-side visual on the home problem section
  },
  products: {
    smartIdentityTag: "https://i.postimg.cc/fRRs6gGx/Dizajn-bez-nazvania-(2).png",
    verificationEngine: "",
    automatedRecoveryWorkflow: "",
  },
  vision: {
    mainVisual: "https://i.imgur.com/Mdw22qZ.png",
  },
  about: {
    heroVisual: "/assets/icons/48.png",
    founders: {
      gs: "",
      rj: "",
      sp: "",
    },
  },
  future: {
    // INSERT YOUR LINKS HERE:
    consumerApp: "https://i.imgur.com/3uw1WyO.png",       // Tall phone image (9:19.5)
    holdToUseToken: "",    // Wide image (16:10)
    sevenoirL1Chain: "https://i.imgur.com/2AKclKn.png",   // Wide image (16:10)
    systemArchitecture: "",
  },
  investors: {
    investorMetrics: "",
  },
  useCases: {
    "DOCUMENTS": "/assets/icons/48.png",
    "AUTOMOTIVE": "/assets/icons/49.png",
    "TRAVEL": "/assets/icons/50.png",
    "VALUABLES": "/assets/icons/51.png",
    "EDUCATION": "/assets/icons/52.png",
    "ACCESS": "/assets/icons/53.png",
    "TRANSIT": "/assets/icons/54.png",
    "HOSPITALITY": "/assets/icons/55.png",
    "OFFICE": "/assets/icons/56.png",
    "COMPANION": "/assets/icons/57.png",
  },
} as const;