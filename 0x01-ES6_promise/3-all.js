import { uploadPhoto, createUser } from './utils';

function handleProfileSignup(firstName, lastName, fileName) {
    // Use Promise.all to wait for all promises to resolve
    Promise.all([createUser(firstName, lastName), uploadPhoto(fileName)])
        .then(([user, photo]) => {
            console.log(`body: ${photo.body} firstName: ${user.firstName} lastName: ${user.lastName}`)
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;
