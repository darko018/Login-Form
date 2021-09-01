export const hidePass = (password) => {
    let hide = "";
    for (let i = 0; i < password.length; i++) {
        hide += "*";
    }
    return hide;
}
