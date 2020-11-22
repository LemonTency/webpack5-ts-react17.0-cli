import kabel2parcel from '@utils/kabel2parcel'

describe('转驼峰',()=>{
    test('test-desc->testDesc',()=>{
        expect(kabel2parcel('test-desc')).toBe('TestDesc');
    })
    test('test-2esc->testDesc',()=>{
        expect(kabel2parcel('test-2esc')).toBe('Test2esc');
    })
    test('tesururururruru->testDesc',()=>{
        expect(kabel2parcel('testdjsjdsjsjdjs2esc')).toBe('Testdjsjdsjsjdjs2esc');
    })
})