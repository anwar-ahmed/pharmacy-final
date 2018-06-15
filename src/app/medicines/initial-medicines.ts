export class Init {
  load() {
    if (
      localStorage.getItem("medicines") === null ||
      localStorage.getItem("medicines") == undefined
    ) {
      console.log("Creating the initial set of medicines ...");
      var medicines = [
        {
          id: 1,
          name: "Med1",
          manufacturer: "Ranbaxy",
          batchno: "1234-1234",
          type: "Capsule",
          expiry: "2021-03-02",
          price: 200
        },
        {
          id: 2,
          name: "Medicine2",
          manufacturer: "GSK",
          batchno: "CA-20",
          type: "Tablet",
          expiry: "2020-15-15",
          price: 100
        }
      ];
      localStorage.setItem("medicines", JSON.stringify(medicines));
    } else {
      console.log("Loaded the medicines from local storage ...");
    }
  }
}
