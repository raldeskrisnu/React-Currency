import Github from './apiController';

describe('#getUser() using Promises', () => {
    it('should load user data', () => {
        expect(Github.getData).toBeDefined();
    })
})