let users = [
    { id: 1, name: "João Paulo", cpf: "11111111111", birth: "2010-01-01"},
    { id: 2, name: "João Gustavo", cpf: "11111111111", birth: "2010-01-02"},
    { id: 3, name: "João Cesar", cpf: "11111111111", birth: "2010-01-03"},
    { id: 4, name: "João Augusto", cpf: "11111111111", birth: "2010-01-04"},
    { id: 5, name: "Maria da Penha", cpf: "11111111111", birth: "2010-01-05"},
    { id: 6, name: "Maria de fátima", cpf: "11111111111", birth: "2010-01-06"},
];

const getUsers = () => {
    return users;
};

export default {
    getUsers
}