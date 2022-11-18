const listInsert = (item) => {
    return {
        type: 'ADD',
        ...item
    };
}

export default listInsert;