export let SessionUsername : string = "";

const getUsername = ( email: string ) => {
    const emaillen : number = -1*(email.length);
    const username = email.slice(emaillen,-10);
    SessionUsername = username;
    return ;
}

export default getUsername;