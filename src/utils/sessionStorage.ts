const updateSessionStorage = () : void => {
    sessionStorage.setItem("isSubmitted", JSON.stringify(true));
}
const isSubmittedInSession = JSON.parse(sessionStorage.getItem("isSubmitted") || "false");

export { updateSessionStorage, isSubmittedInSession };