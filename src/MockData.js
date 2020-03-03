export interface Row {
    id: Number,
    firstName: String;
    lastName: String;
    email: String;
    rank: Number;
}

export function createRow(
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    rank: Number
): Row {
    return {id, firstName, lastName, email, rank}
}

export  const rows: Row[] = [
    createRow(1, "Robyn", "Fenty", "fenty@gmail.com", 10),
    createRow(2, "H.E.R", "", "gabriellawilson@gmail.com", 10),
    createRow(3, "Mac", "Miller", "R.I.P.Malcolm@gmail.com", 10),
    createRow(4, "Brent", "Faiyaz", "ftw@gmail.com", 10),
    createRow(5, "Sabrina", "Claudio", "fenty@gmail.com", 10),
]

