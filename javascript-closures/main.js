function graduate(credential) {
  return fullName => `${fullName}, ${credential}`;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const medicalSchoolAngel = medicalSchool('Angel Leung');
const lawSchoolAngel = lawSchool('Angel Leung');

console.log('medicalSchoolAngel:', medicalSchoolAngel);
console.log('lawSchoolAngel:', lawSchoolAngel);
