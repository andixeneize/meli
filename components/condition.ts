export const Condition = (condition)  => {
    if (condition === 'new') {
        return 'Nuevo'
    } 
    if (condition === 'used') {
        return 'Usado'
    }
    return condition;
 }