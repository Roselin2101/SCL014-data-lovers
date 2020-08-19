// estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';


function ordenarA_Z(ordenar) {
    return ordenar.sort((a, b) => a.name.localeCompare(b.name));
    // Llama a la función y le envía toda la data con un sort de a a-z
}

/* Filtro Casas Hogwarts*/

export const housesHogwarts = data.filter(function(data) {
    return data.house !== '';
});

export const gryffindor = data.filter(function(data) {
    return data.house === "Gryffindor"
});

export const hufflepuf = data.filter(function(data) {
    return data.house === "Hufflepuff"
});

export const ravenclaw = data.filter(function(data) {
    return data.house === "Ravenclaw"
});