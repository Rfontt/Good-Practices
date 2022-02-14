/*
ProductId: Should be between 2 and 20 characteres
Name: should be only words
Price: should be from zero to a thousand
Category: should be electronic or organic
*/

function productValidation(product) {
    const errors = [];

    if (!(product.id.length >= 2) && product.id <= 20) {
        console.log('true')
        errors.push(`id: invalid length, current [${product.id}] extepected to be between 2 and 20`);
    }

    if (/(\W|\d)/.test(product.name)) {
        errors.push(`name: invalid value, current [${product.name}] expected to have only words`);
    }

    if (!(product.price >= 0 && product.price <= 1000)) {
        errors.push(`price: invalid value, current [${product.price}] expected to be from 0 to a thousand`);
    }

    if (!(['electronic', 'organic']).includes(product.category)) {
        errors.push(`category: invalid value, current [${product.category}] expected to be electronic or organic`);
    }

    return {
        result: errors.length === 0,
        errors,
    }
}

module.exports = {
    productValidation
};