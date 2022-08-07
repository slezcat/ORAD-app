const generateBinary = (optLength, list) => {
  let tempArr = new Array(optLength).fill("0");
  for (let i = 0; i < list.length; i++) {
    tempArr[tempArr.length - 1 - list[i]] = "1";
  }
  return "" + parseInt(tempArr.join(""), 2);
};

export const obtainKey = (j) => {
  let key = "";

  for (let i = 0; i < j.length; i++) {
    // Kalo i lebih kecil daripada j.length (j.length itu di knownsymptom dan total di knownsymptom)
    if (Array.isArray(j[i].b)) {
      // meng select semua multiple
      key += (i === 0 ? "" : "-") + generateBinary(j[i].a.length, j[i].b);
    } else {
      key += (i === 0 ? "" : "-") + j[i].b;
    }
  }
  console.log(key)
  // get the diagnose
  const k1 = `${key[1] === "-" ? key[0] : key[0] + key[1]}-0-0-3-0-1-${
    key[1] === "-"
      ? key[6] === "1" || key[6] === "2" || key[6] === "3"
        ? key[6]
        : ""
      : key[7] === "1" || key[7] === "2" || key[7] === "3"
      ? key[7]
      : ""
  }-0-1-0-1-3-2-0-1-0-0-0-0-5-1-0-2-0-0-2-3`;

  const DIAGNOSES = {
    [k1]: "Pulpitis irreversible symptomatic with periodontitis Apicalis Symptomatic", //1

    "2-1-1-3-1-1-3-0-1-35-1-2-2-1-4-0-2-1-2-1-1-0-3-0-0-2-3": "Pulpitis irreversible symptomatic with periodontitis Apicalis Symptomatic",//2

    "1-0-0-0-0-0-2-1-1-10-1-3-1-0-1-0-0-5-0-5-2-0-2-0-0-2-3": "Nekrosis pulpa & periodontitis apikalis simptomatik", //2

    "2-0-1-4-1-0-1-0-1-13-1-2-1-1-4-0-0-5-0-5-2-0-1-0-0-2-3": "Nekrosis pulpa & periodontitis apikalis simptomatik",//1

    
  };
  return DIAGNOSES[key];
};
