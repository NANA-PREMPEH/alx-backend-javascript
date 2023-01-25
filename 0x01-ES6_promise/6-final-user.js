import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export const handleProfileSignup = (firstName, lastName, fileName) => {
  // create an array to hold the promise statuses and values/errors
  const results = [];

  // call the signUpUser function and pass in the firstName and lastName as arguments
  const signUpPromise = signUpUser(firstName, lastName)
    .then((value) => {
      results.push({ status: 'resolved', value });
    })
    .catch((error) => {
      results.push({ status: 'rejected', error });
    });

  // call the uploadPhoto function and pass in the fileName as an argument
  const uploadPromise = uploadPhoto(fileName)
    .then((value) => {
      results.push({ status: 'resolved', value });
    })
    .catch((error) => {
      results.push({ status: 'rejected', error });
    });

  // wait for both promises to settle
  return Promise.all([signUpPromise, uploadPromise]).then(() => results);
};
