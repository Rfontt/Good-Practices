const { expect } = require('chai');
const { it, describe } = require('mocha');
const { productValidation } = require('../src');
const ProductMotherObject = require('./model/productMotherObject');

describe('Test MotherObject', () => {
    it('Shoudn\'t return error with valid product', () => {
        const product = ProductMotherObject.valid();
        const result = productValidation(product);

        const expected = {
            errors: [],
            result: true 
        }

        expect(result).to.be.deep.equal(expected);
    });
+
    describe('Product Validation Rules', () => {
        it('Should return an object error when creating a Product invalid id', () => {
            const product = ProductMotherObject.withInvalidId();
            const result = productValidation(product);

            const expected = {
                errors: ['id: invalid length, current [1] extepected to be between 2 and 20'],
                result: false 
            }
    
            expect(result).to.be.deep.equal(expected);
        });

        it('Should return an object error when creating a Product invalid name', () => {
            const product = ProductMotherObject.withInvalidName();
            const result = productValidation(product);

            const expected = {
                errors: ['name: invalid value, current [abc123] expected to have only words'],
                result: false 
            }
    
            expect(result).to.be.deep.equal(expected);
        });

        it('Should return an object error when creating a Product invalid price', () => {
            const product = ProductMotherObject.withInvalidPrice();
            const result = productValidation(product);

            const expected = {
                errors: ['price: invalid value, current [1200] expected to be from 0 to a thousand'],
                result: false 
            }
    
            expect(result).to.be.deep.equal(expected);
        });

        it('Should return an object error when creating a Product invalid category', () => {
            const product = ProductMotherObject.withInvalidCategory();
            const result = productValidation(product);

            const expected = {
                errors: ['category: invalid value, current [outher category] expected to be electronic or organic'],
                result: false 
            }

            expect(result).to.be.deep.equal(expected);
        });
    })
})