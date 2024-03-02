export const getMonth = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'short' });
    return month;
}

export const getYear = () => {
    const year = new Date().getFullYear();
    return year;
}