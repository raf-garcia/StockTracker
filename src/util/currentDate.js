export const getDate = () => {
    const currentDate = new Date();

    return currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
}