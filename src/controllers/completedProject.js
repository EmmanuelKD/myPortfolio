export default class CompletedProject {
    constructor({
      projectName,
      projectPhoto,
      downloadLinks,
      downloadContributors,
      sourceCode,
      wasWrittenIn,
    }) {
      this.projectName = projectName;
      this.projectPhoto = projectPhoto;
      // this.downloadLinks = { ios: "", android: "" };
      this.downloadLinks = downloadLinks;
  
      this.downloadContributors = downloadContributors;
  
      // this.downloadContributors = [
      //   { name: "", websiteLink: "" },
      //   { name: "", websiteLink: "" },
      //   { name: "", websiteLink: "" },
      //   { name: "", websiteLink: "" },
      // ];
      this.sourceCode = sourceCode;
      this.wasWrittenIn = wasWrittenIn;
      // this.wasWrittenIn = ["javascript", "java"];
    }
    getProject() {
      return {
        projectName: this.projectName,
        projectPhoto: this.projectPhoto,
        downloadLinks: this.downloadLinks,
        downloadContributors: this.downloadContributors,
        sourceCode: this.sourceCode,
        wasWrittenIn: this.wasWrittenIn,
      };
    }
  }


 