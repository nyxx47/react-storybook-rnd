module.exports = {
    apps : [
      {
        name: "staging",
        script: "npm",
        args: "run start:staging"
      },
      {
        name: "production",
        script: "npm",
        args: "run start:production"
      }
    ]
  }