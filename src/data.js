// estas funciones son de ejemplo
export const filterHouse = (house, data) => {
    let typeFilterHouse = data.filter(element => element.house.includes(house));
    return typeFilterHouse;
}