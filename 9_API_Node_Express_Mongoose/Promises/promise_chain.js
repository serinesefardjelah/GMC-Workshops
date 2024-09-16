new Promise((resolve, reject) => {
  if (true) {
    resolve("Success");
  } else {
    reject("Failure");
  }
}).then((message) => {
  new Promise((resolve, reject) => {
    if (true) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  }).then((message) => {
    new Promise((resolve, reject) => {
      if (true) {
        resolve("Success");
      } else {
        reject("Failure");
      }
    }).then((message) => {
      new Promise((resolve, reject) => {
        if (true) {
          resolve("Success");
        } else {
          reject("Failure");
        }
      });
    });
  });
});
